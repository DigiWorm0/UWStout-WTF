import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../Header';
import SideButton from '../SideButton';
import UserList from '../UserList';
import useTop, { useSearch } from '../../hooks/useAPI';
import AccountType from '../../types/AccountType';
import { ROLE_COLORS, ROLE_NAMES } from '../../types/Constants';


function Home() {
    const [hiddenAccountTypes, setHiddenAccountTypes] = React.useState<AccountType[]>([]);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [page, setPage] = React.useState(0);
    const topUsers = useTop(page);
    const searchedUsers = useSearch(searchQuery);

    const users = searchQuery.length > 0 ? searchedUsers : topUsers;

    React.useEffect(() => {
        const onScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight)
                setPage(p => p + 1);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Header
                title={"Unofficial UW-Stout\nCONNECT Points Leaderboard"}
                subtitle={"Tracks and sorts students by points gathered from UW-Stout CONNECT. Check in to events using the UW-Stout CONNECT App to earn points and climb the leaderboard!"}
                searchPlaceholder={"Search for students..."}
                setSearchQuery={setSearchQuery} />

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
                                    key={key}
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
                    <Col lg={4} className="noprint">
                        <div style={{
                            backgroundColor: "#f0f3f5",
                            borderRadius: 5,
                            height: "100%",
                            margin: 20,
                            textAlign: "center",
                            padding: 30,
                        }}>
                            <SideButton
                                text="TV Channel Listings"
                                href={"/#/tv"} />
                            <SideButton
                                text="UW-Stout Connect"
                                newTab
                                href="https://connect.uwstout.edu" />
                            <SideButton
                                text="UWStout.edu"
                                newTab
                                href="https://www.uwstout.edu/" />
                            <hr />
                            <p>
                                The Unofficial UW-Stout Points Leaderboard is not affiliated with UW-Stout or the UW-Stout CONNECT App.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
