import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Header from './components/Header';
import SideButton from './components/SideButton';
import UserList from './components/UserList';
import useTop, { useSearch } from './hooks/useAPI';
import AccountType from './types/AccountType';
import { ROLE_COLORS, ROLE_NAMES } from './types/Constants';


function App() {
    const [hiddenAccountTypes, setHiddenAccountTypes] = React.useState<AccountType[]>([]);
    const [searchQuery, setSearchQuery] = React.useState("");
    const topUsers = useTop();
    const searchedUsers = useSearch(searchQuery);

    const users = searchQuery.length > 0 ? searchedUsers : topUsers;

    return (
        <>
            <Header
                setSearchQuery={setSearchQuery}
                setHiddenAccountTypes={setHiddenAccountTypes} />

            <Container>
                <Row style={{
                    minHeight: "100%",
                }}>
                    <Col lg={8}>
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            margin: 10
                        }}>
                            {Object.values(ROLE_NAMES).map((key, value) => (
                                <Form.Check
                                    type="checkbox"
                                    id={key}
                                    label={<b>{key}</b>}
                                    className="ms-4 mt-1 mb-1"
                                    checked={!hiddenAccountTypes.includes(value)}
                                    style={{
                                        color: ROLE_COLORS[value as AccountType],
                                    }}
                                    onChange={(e) => {
                                        if (e.currentTarget.checked) {
                                            setHiddenAccountTypes(hiddenAccountTypes.filter((accountType) => accountType !== value));
                                        } else {
                                            setHiddenAccountTypes([...hiddenAccountTypes, value]);
                                        }
                                    }}
                                />
                            ))}
                        </div>

                        <UserList
                            users={users}
                            hiddenAccountTypes={hiddenAccountTypes} />
                    </Col>
                    <Col lg={4}>
                        <div style={{
                            backgroundColor: "#f0f3f5",
                            borderRadius: 5,
                            height: "100%",
                            margin: 20,
                            textAlign: "center",
                            padding: 30,
                        }}>
                            <SideButton
                                text="UW-Stout Connect"
                                href="https://connect.uwstout.edu" />
                            <SideButton
                                text="UWStout.edu"
                                href="https://www.uwstout.edu/" />
                            <hr />
                            <p>
                                The Unofficial UW-Stout Points Leaderboard is not affiliated with UW-Stout or the UW-Stout Connect App.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
