import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChannelGroup from '../ChannelGroup';

function ChannelsPrintable() {
    React.useEffect(() => {
        window.print();
    }, []);

    return (
        <>

            <Container fluid>
                <Row style={{
                    minHeight: "100%"
                }}>
                    <Col xs={6} style={{
                        padding: 0
                    }}>
                        <ChannelGroup
                            headerColor="rgb(0, 60, 119)"
                            bgColor="rgb(181, 231, 255)"
                            title="Sports"
                            channelQueries={[
                                "Sports",
                            ]}
                        />
                        <ChannelGroup
                            headerColor="rgb(145, 13, 125)"
                            bgColor="rgb(255, 181, 255)"
                            title="Music"
                            channelQueries={[
                                "Music",
                            ]}
                        />
                    </Col>
                    <Col xs={6} style={{
                        padding: 0
                    }}>

                        <ChannelGroup
                            headerColor="rgb(11, 128, 7)"
                            bgColor="rgb(181, 255, 181)"
                            title="Entertainment"
                            channelQueries={[
                                "Entertainment",
                            ]}
                        />

                        <ChannelGroup
                            headerColor="rgb(173, 38, 38)"
                            bgColor="rgb(255, 181, 181)"
                            title="Home & Garden"
                            channelQueries={[
                                "Home & Garden",
                            ]}
                        />

                        <ChannelGroup
                            headerColor="rgb(190, 196, 5)"
                            bgColor="rgb(255, 255, 181)"
                            title="Public"
                            channelQueries={[
                                "Public",
                                "Local",
                            ]}
                        />

                        <ChannelGroup
                            headerColor="rgb(205, 112, 29)"
                            bgColor="rgb(255, 231, 181)"
                            title="Kids"
                            channelQueries={[
                                "Kids",
                            ]}
                        />

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ChannelsPrintable;
