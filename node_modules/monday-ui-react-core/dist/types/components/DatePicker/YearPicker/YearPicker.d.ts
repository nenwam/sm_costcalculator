import { Moment } from "../types";
interface YearPickerProps {
    selectedDate?: Moment;
    isYearBlocked?: (year: number) => boolean;
    changeCurrentDate: (date: Moment) => void;
    "data-testid"?: string;
}
declare const YearPicker: ({ selectedDate, isYearBlocked, changeCurrentDate, "data-testid": dateTestId }: YearPickerProps) => JSX.Element;
export default YearPicker;
