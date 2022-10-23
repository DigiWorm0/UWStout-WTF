import { Spinner } from 'react-bootstrap';
import getAccountType from '../hooks/getAccountType';
import AccountType from '../types/AccountType';
import User from "../types/User";
import UserBanner from './UserBanner';

export default function UserList(props: { users: User[] | undefined, hiddenAccountTypes: AccountType[] }) {
    return (
        <>
            {props.users === undefined && (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}>
                    <Spinner
                        animation="border"
                        role="status"
                        variant="secondary"
                    />
                </div>
            )}
            {props.users?.length === 0 && (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}>
                    <h2>No users found.</h2>
                </div>
            )}
            {props.users?.map((user) => {
                if (props.hiddenAccountTypes.includes(getAccountType(user)))
                    return null;
                return (
                    <UserBanner
                        key={user.id}
                        user={user}
                    />
                );
            })}
        </>
    )
}