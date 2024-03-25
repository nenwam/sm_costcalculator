export function getIndicatorSize(size: any): "16px" | "20px";
export function customTheme(theme: any): any;
declare function _default(data: any): {
    container: (provided: any, { isDisabled, selectProps }: {
        isDisabled: any;
        selectProps: any;
    }) => any;
    control: (provided: any, { isDisabled, selectProps }: {
        isDisabled: any;
        selectProps: any;
    }) => any;
    placeholder: (provided: any, { isDisabled }: {
        isDisabled: any;
    }) => any;
    indicatorsContainer: (provided: any, { isDisabled }: {
        isDisabled: any;
    }) => any;
    dropdownIndicator: (provided: any, { selectProps, isDisabled }: {
        selectProps: any;
        isDisabled: any;
    }) => any;
    clearIndicator: () => {
        ":hover": {
            backgroundColor: string;
        };
        height: string;
        width: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        color: string;
        backgroundColor: string;
        borderRadius: string;
    };
    singleValue: (provided: any, { isDisabled, selectProps }: {
        isDisabled: any;
        selectProps: any;
    }) => any;
    input: (provided: any) => any;
    valueContainer: (provided: any, { isDisabled }: {
        isDisabled: any;
    }) => any;
    menu: (provided: any) => any;
    option: (provided: any, state: any) => any;
    indicatorSeparator: () => {
        display: string;
    };
    group: () => {
        paddingBottom: number;
        marginTop: string;
    };
    groupHeading: () => {
        height: string;
        fontSize: string;
        lineHeight: string;
        display: string;
        alignItems: string;
        marginLeft: string;
        color: string;
    };
};
export default _default;
