import React from 'react';
import { Card } from 'react-bootstrap';
import getAccountType from '../hooks/getAccountType';
import AccountType from '../types/AccountType';
import { ROLE_COLORS, ROLE_NAMES } from '../types/Constants';
import User from "../types/User";

const IMG_PREFIX = "https://static1.campusgroups.com/";
const URL_PREFIX = "https://connect.uwstout.edu/student_profile?uid=";

export default function UserBanner(props: { user: User }) {
    const [isDev, setIsDev] = React.useState(false);

    React.useEffect(() => {
        setIsDev(new URLSearchParams(window.location.search).get("dev") === "true");
    }, []);

    const user = props.user;
    const rank = user.pointPosition;
    const accountType = getAccountType(user);

    return (
        <>
            <Card
                className="mt-0 border-0">
                <Card.Body style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 0,
                }}>

                    <h3 style={{
                        marginRight: 20,
                        textAlign: "center",
                    }}>
                        #{rank}
                    </h3>
                    <img
                        src={IMG_PREFIX + user.profileURL}
                        alt={user.accountType}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            objectFit: "cover",
                            float: "left",
                            marginRight: 20,
                            borderWidth: 2,
                            borderStyle: "solid",
                            borderColor: ROLE_COLORS[accountType],
                        }}
                    />
                    <div>
                        <h4 style={{
                            overflowWrap: "anywhere",
                            marginBottom: 5
                        }}>
                            <a
                                href={URL_PREFIX + user.uid}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    textDecoration: "none",
                                    paddingRight: 10,
                                }}>
                                {user.firstName} {user.lastName}
                            </a>
                        </h4>

                        <h6 className="text-muted">
                            {ROLE_NAMES[accountType]}
                            {isDev && `#${user.id}`}
                        </h6>
                    </div>
                    <h4 style={{
                        marginLeft: "auto",
                        marginRight: 20,
                        textAlign: "right"
                    }}>
                        {user.pointCount.toLocaleString()} <br /><span className="fs-6">points</span>
                    </h4>
                </Card.Body>
            </Card>
            <hr style={{
                marginTop: 7,
                marginBottom: 13,
            }} />
        </>
    )
}