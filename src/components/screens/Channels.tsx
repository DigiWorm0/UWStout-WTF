import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChannelList from '../ChannelList';
import Header from '../Header';
import SideButton from '../SideButton';
import { Helmet } from "react-helmet";

function Channels() {
    const [searchQuery, setSearchQuery] = React.useState("");

    return (
        <>
            <Helmet>
                <title>TV Channel Listings</title>
            </Helmet>
            <Header
                title={"Unofficial UW-Stout\nTV Channel Listings"}
                subtitle={"Sorts and displays the current TV channel for UW-Stout dorm buildings.\nChannel listings are subject to change."}
                searchPlaceholder={"Search for channels..."}
                timeout={0}
                setSearchQuery={setSearchQuery}
            />
            <Container>
                <Row
                    style={{
                        minHeight: "100%",
                    }}
                >
                    <Col
                        lg={8}
                        style={{
                            paddingTop: 30
                        }}
                    >
                        <ChannelList
                            searchQuery={searchQuery}
                        />
                    </Col>
                    <Col lg={4} className="noprint">
                        <div
                            style={{
                                backgroundColor: "#f0f3f5",
                                borderRadius: 5,
                                height: "100%",
                                margin: 20,
                                textAlign: "center",
                                padding: 30,
                            }}
                        >
                            <SideButton
                                text="Printable Version"
                                href={"/#/tvprint"}
                            />
                            <SideButton
                                text="CONNECT Leaderboard"
                                href={"/"}
                            />
                            <SideButton
                                text="UW-Stout Housing"
                                newTab
                                href="https://www.uwstout.edu/life-stout/housing"
                            />
                            <SideButton
                                text="UWStout.edu"
                                newTab
                                href="https://www.uwstout.edu/"
                            />
                            <hr />
                            <p>
                                The Unofficial UW-Stout TV Channel Listings is not affiliated with UW-Stout or UW-Stout Housing.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Channels;
