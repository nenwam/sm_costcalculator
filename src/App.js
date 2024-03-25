import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js";
import { TextField, Button, Label, Dropdown, Loader, Divider, ExpandCollapse } from "monday-ui-react-core"
import axios from "axios";

// Usage of mondaySDK example, for more information visit here: https://developer.monday.com/apps/docs/introduction-to-the-sdk/
const monday = mondaySdk();
const storageInstance = monday.storage.instance;

const App = () => {
  const [context, setContext] = useState();
  const [vinyls, setVinyls] = useState([]);
  const [jobCost, setJobCost] = useState(null);
  const [colOptions, setColOptions] = useState([]);
  const [apiParams, setApiParams] = useState({vinylType: '', width: 0.0, height: 0.0, count: 0, includeColor: false, colorPercent: 0.0, 
                                            colorPasses: 0, includeWhite: false, whitePercent: 0.0, whitePasses: 0, includeGloss: false, 
                                            glossPercent: 0.0, glossPasses: 0, targetCostPerPrint: 0.0, bSalesTax: false, bSalesCommission: false})
  const [selectedVinyl, setSelectedVinyl] = useState('')
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';

  // Conversions
  /*
    Input:
    vinylType: CUSTOM
    width: Dimensions
    height: Dimensions
    count: Count
    includeColor: Print Settings
    colorPercent: Color Percent (NEW)
    colorPasses: Color Passes (NEW)
    includeWhite: Print Settings
    whitePercent: White Percent (NEW)
    whitePasses: White Passes (NEW)
    includeGloss: Print Settings
    glossPercent: Gloss Percent (NEW)
    glossPasses: Gloss Passes (NEW)
    targetCostPerPrint: Target Cost (NEW) 
    bSalesTax: Sales Tax
    bSalesCommission: Sales Commission (NEW)

    Output:
    COGS: costOfGoodsPerPrintJob
    Per Item Sale: perPrintTotal
    Total Sale: jobTotal
  */

  useEffect(() => {
      const fetchData = async () => {
          try {

            const headers = {
              // Uncomment or edit according to the header you need to set
              // 'Origin': 'http://your-origin.com',
              'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json'
              // Add other headers as needed
            };

              // First API call to list vinyls
              const vinylUrl = `${corsProxy}https://api.stickermania818.com/listvinyls`;
              const vinylResponse = await fetch(vinylUrl, {headers});
              if (!vinylResponse.ok) {
                  throw new Error(`Error: ${vinylResponse.statusText}`);
              }
              const vinylsData = await vinylResponse.json();
              const filteredVinylData = vinylsData
                .map(item => {
                    return {label: item, value: item}
                })
              console.log("Vinyls Data: ", filteredVinylData)
              setVinyls(filteredVinylData);

              // Second API call to get job cost
              // const jobCostUrl = `${corsProxy}https://api.stickermania818.com/jobcost?vinylType=MATTE-6MIL&width=4&height=5&count=100&includeColor=true&colorPercent=100&colorPasses=1&includeWhite=true&whitePercent=100&whitePasses=1&includeGloss=true&glossPercent=100&glossPasses=1&targetCostPerPrint=1.50&bSalesTax=true&bSalesCommission=true`;
              // const jobCostResponse = await fetch(jobCostUrl, {headers});
              // if (!jobCostResponse.ok) {
              //     throw new Error(`Error: ${jobCostResponse.statusText}`);
              // }
              // const jobCostData = await jobCostResponse.json();
              // console.log("Job Cost Data: ", jobCostData)
              // setJobCost(jobCostData);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);


  


  useEffect(() => {
    // Notice this method notifies the monday platform that user gains a first value in an app.
    // Read more about it here: https://developer.monday.com/apps/docs/mondayexecute#value-created-for-user/
    monday.execute("valueCreatedForUser");

    // TODO: set up event listeners, Here`s an example, read more here: https://developer.monday.com/apps/docs/mondaylisten/
    monday.listen("context", (res) => {
      setContext(res.data);

      storageInstance.getItem('selectedVinyl_' + res.data.itemId).then(result1 => {
        setSelectedVinyl(JSON.parse(result1.data.value) || []);  
      }).catch(error => {
        console.log("Error fetching database: ", error)
      })
    });

    
  }, []);

  const obtainInputParams = (extractedParams) => {
    const dimensions = extractedParams.filter(param => param.label === 'text')[0].value
    const regex = /\d+/g;
    const dimAsNums = dimensions.match(regex).map(Number);

    const width = dimAsNums[0]
    const height = dimAsNums[1]
    const count = parseInt(extractedParams.filter(param => param.label === 'numbers')[0].value, 10)

    const printSettings = (extractedParams.filter(param => param.label === 'dropdown0')[0].value).split('-')
    const includesWhite = printSettings.includes('WHITE') ? true : false
    const includesGloss = printSettings.includes('GLOSS') ? true : false
    const includesColor = printSettings.includes('CMYK') ? true : false

    const colorPercent = parseFloat(extractedParams.filter(param => param.label === 'numbers7')[0].value)
    const colorPasses = parseInt(extractedParams.filter(param => param.label === 'numbers5')[0].value)
    const whitePercent = parseFloat(extractedParams.filter(param => param.label === 'numbers1')[0].value)
    const whitePasses = parseInt(extractedParams.filter(param => param.label === 'numbers14')[0].value)
    const glossPercent = parseFloat(extractedParams.filter(param => param.label === 'numbers4')[0].value)
    const glossPasses = parseInt(extractedParams.filter(param => param.label === 'numbers72')[0].value)

    const targetCost = parseFloat(extractedParams.filter(param => param.label === 'numbers2')[0].value)
    const tax = extractedParams.filter(param => param.label === 'status_11')[0].value === 'Yes' ? true : false
    const commission = extractedParams.filter(param => param.label === 'status_1')[0].value === 'Yes' ? true : false

    console.log("Print Settings: ", printSettings)
    // const includeColor = extractedParams.filter(param => param.label === 'dropdown0')[0].value

    

    const params = {
      vinylType: selectedVinyl.value,
      width: width,
      height: height,
      count: count,
      includeColor: includesColor,
      colorPercent: colorPercent,
      colorPasses: colorPasses,
      includeWhite: includesWhite,
      whitePercent: whitePercent,
      whitePasses: whitePasses,
      includeGloss: includesGloss,
      glossPercent: glossPercent,
      glossPasses: glossPasses,
      targetCostPerPrint: targetCost,
      bSalesTax: tax,
      bSalesCommission: commission
    }
    
    return params
  }

  const getJobCost = async (params) => {
    const jobCostData = null
    try {

      const headers = {
        // Uncomment or edit according to the header you need to set
        // 'Origin': 'http://your-origin.com',
        'X-Requested-With': 'XMLHttpRequest',
        // Add other headers as needed
      };

        // Second API call to get job cost
        const jobCostUrl = `${corsProxy}https://api.stickermania818.com/jobcost?vinylType=${params.vinylType}&width=${params.width}&height=${params.height}&count=${params.count}&includeColor=${params.includeColor}&colorPercent=${params.colorPercent}&colorPasses=${params.colorPasses}&includeWhite=${params.includeWhite}&whitePercent=${params.whitePercent}&whitePasses=${params.whitePasses}&includeGloss=${params.includeGloss}&glossPercent=${params.glossPercent}&glossPasses=${params.glossPasses}&targetCostPerPrint=${params.targetCostPerPrint}&bSalesTax=${params.bSalesTax}&bSalesCommission=${params.bSalesCommission}`;
        const jobCostResponse = await fetch(jobCostUrl, {headers});
        if (!jobCostResponse.ok) {
            throw new Error(`Error: ${jobCostResponse.statusText}`);
        }
        const jobCostData = await jobCostResponse.json();
        console.log("Job Cost Data: ", jobCostData)
        setJobCost(jobCostData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return jobCostData
  }

  // Sales commission is double
  // 

  const calculate = () => {
    if (context) {
      console.log("Parent Context 2", context)

      console.log("Context: ", context)
      const boardId = context.boardId;
      const itemId = context.itemId;
      console.log("using boardID: ", context.boardId)
      
      const query = `query {
        items(ids: ${itemId}) {
          name
          column_values {
            id
            text
            value
          }
        }
      }`;
      monday.api(query).then((res) => {
          console.log("ListInput res: ", res);
          const columns = res.data.items[0].column_values;
          console.log("Columns: ", columns);
          const filter = ['text', ]
          const cols = columns.map(column => {                      
              return {label: column.id, value: column.text}
          })
          console.log("Cols: ", cols)
          const apiParams = obtainInputParams(cols)
          getJobCost(apiParams)
          console.log("API Params: ", apiParams)
      }).catch((err) => {
          console.log("Error fetching columns: ", err);
      }).finally(() => {
          // setShouldLoad(false)
      });
    }
  }

  const handleVinylSelection = (evt) => {
    setSelectedVinyl(evt) 
  }

  useEffect(() => {
    if (context) {
      const query = `
        mutation {
          change_multiple_column_values(item_id: ${context.itemId}, board_id: ${context.boardId}, column_values: "{\\"numbers34\\": \\"${jobCost.costOfGoodsPerPrintJob}\\", \\"numbers3\\": \\"${jobCost.perPrintTotal}\\", \\"numbers38\\": \\"${jobCost.jobTotal}\\"}") {
            id
            column_values {
              id
              value
            }
          }
        }`
        
      monday.api(query).then((res) => {
        console.log("Update res: ", res)
      }).catch((err) => {
        console.log("Error updating columns: ", err);
      })
    }
    console.log("Job Cost: ", jobCost)
  }, [jobCost])

  // Update selectedVinyl in the board storage when it changes
  useEffect(() => {
    if (context) {
      console.log("Context: ", context)
      storageInstance.setItem('selectedVinyl_' + context.itemId, JSON.stringify(selectedVinyl)
      ).catch(error => { 
        console.log(error)
      });
      console.log("Vinyl: ", selectedVinyl.value)
    }
    
    
  }, [selectedVinyl]);

  // useEffect(() => {
    
  // }, [context])

  //Some example what you can do with context, read more here: https://developer.monday.com/apps/docs/mondayget#requesting-context-and-settings-data
  const attentionBoxText = `Hello, your user_id is: ${
    context ? context.user.id : "still loading"
  }.
  Let's start building your amazing app, which will change the world!`;

  return (
    <div className="App">
      <div className="container h-50">
        <div className="row mx-auto align-items-center">
          <div className="col-6">
            <Dropdown
              placeholder="Select Vinyl"
              options={vinyls}
              onChange={evt => handleVinylSelection(evt)}
              value={selectedVinyl}
            >
            </Dropdown>
          </div>
          <div className="col-6">
            <Button onClick={calculate}>Calculate</Button>
          </div>
        </div>
        <div className="row pt-3 mx-auto align-items-center">
          <div className="col">
            <div className="row">
              <div className="col">
                <Label text="Cost of Goods Sold:" />
              </div>
              <div className="col">
                <TextField value={jobCost ? jobCost.costOfGoodsPerPrintJob : ''} />
              </div>
            </div>
            <div className="row pt-1">
              <div className="col">
                <Label text="Per Item Sale:" />
              </div>
              <div className="col">
                <TextField value={jobCost ? jobCost.perPrintTotal : ''} />
              </div>
            </div>
            <div className="row pt-1">
              <div className="col">
                <Label text="Total Sale:" />
              </div>
              <div className="col">
                <TextField value={jobCost ? jobCost.jobTotal : ''} />
              </div>
            </div>
          </div>
          <div className="col">
            
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;
