import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChannelGroup from '../ChannelGroup';
import { Helmet } from 'react-helmet';

function ChannelsPrintable() {
    React.useEffect(() => {
        window.print();
    }, []);

    return (
        <>
            <Helmet>
                <title>TV Channel Listings</title>
            </Helmet>
            <Container fluid>
                <Row
                    style={{
                        minHeight: "100%"
                    }}
                >
                    <Col
                        xs={6}
                        style={{
                            padding: 0
                        }}
                    >
                        <p className={"text-center text-muted fst-italic mb-0"}>
                            (Unofficial)
                        </p>
                        <h3 className={"text-center text-primary mb-0"}>
                            UW-Stout TV Channel Listings
                        </h3>
                        <p className={"text-center mb-1"}>
                            https://tv.uwstout.wtf/
                        </p>
                        <ChannelGroup
                            borderColor="rgb(11, 128, 7)"
                            bgColor="rgb(181, 255, 181)"
                            title="Entertainment 🎥"
                            channelQueries={[
                                "Entertainment",
                            ]}
                        />
                        <ChannelGroup
                            borderColor="rgb(205, 112, 29)"
                            bgColor="rgb(255, 231, 181)"
                            title="Kids 👩‍👶‍👦"
                            channelQueries={[
                                "Kids",
                            ]}
                        />
                        <ChannelGroup
                            borderColor="rgb(190, 196, 5)"
                            bgColor="rgb(255, 255, 181)"
                            title="Public 📢"
                            channelQueries={[
                                "Public",
                                "Local",
                            ]}
                        />
                    </Col>
                    <Col xs={6} style={{
                        padding: 0
                    }}>
                        <ChannelGroup
                            borderColor="rgb(0, 60, 119)"
                            bgColor="rgb(181, 231, 255)"
                            title="Sports 🏈"
                            channelQueries={[
                                "Sports",
                            ]}
                        />
                        <ChannelGroup
                            borderColor="rgb(145, 13, 125)"
                            bgColor="rgb(255, 181, 255)"
                            title="Music 🎶"
                            channelQueries={[
                                "Music",
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ChannelsPrintable;
