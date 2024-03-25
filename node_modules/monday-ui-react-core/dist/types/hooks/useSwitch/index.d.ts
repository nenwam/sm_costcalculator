declare enum SwitchRole {
    CHECKBOX = "checkbox",
    BUTTON = "button"
}
declare function useSwitch({ isChecked, defaultChecked, onChange, isDisabled }: {
    isChecked?: boolean;
    defaultChecked?: boolean;
    onChange?: (value: boolean) => void;
    isDisabled?: boolean;
}): {
    isChecked: boolean;
    onChange: () => void;
};
declare namespace useSwitch {
    var switchRole: typeof SwitchRole;
}
export default useSwitch;
