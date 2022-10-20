import AccountType from "../types/AccountType";
import { SYSTEM_IDS } from "../types/Constants";
import User from "../types/User";

export default function getAccountType(user: User): AccountType {
    if (SYSTEM_IDS.includes(user.id))
        return AccountType.System;

    switch (user.accountType) {
        case "Student":
            return AccountType.Student;
        case "Staff/Faculty":
            return AccountType.Staff;
        case "Alumni":
            return AccountType.Alumni;
        default:
            return AccountType.Other;
    }
}