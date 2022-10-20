import AccountType from "./AccountType";

const SYSTEM_IDS = [
    688289,
    718120,
    718122,
    709152,
    718117,
    718118,
    718119,
    718121,
    717651,
    762185,
    777826,
    777827,
    777839,
    777839,
    2290487,
];
const ROLE_COLORS = {
    [AccountType.Student]: "rgb(0, 60, 119)",
    [AccountType.Staff]: "rgb(0, 119, 60)",
    [AccountType.Alumni]: "rgb(119, 0, 0)",
    [AccountType.System]: "grey",
    [AccountType.Other]: "black",
};
const ROLE_NAMES: Record<AccountType, string> = {
    [AccountType.Student]: "Student",
    [AccountType.Staff]: "Staff/Faculty",
    [AccountType.Alumni]: "Alumni",
    [AccountType.System]: "System",
    [AccountType.Other]: "Other"
}

export { SYSTEM_IDS, ROLE_COLORS, ROLE_NAMES };