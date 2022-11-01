import React from "react";
import { Col, Container, Form, Row } from 'react-bootstrap';

const SEARCH_DELAY = 500;

interface HeaderProps {
    title: string;
    subtitle: string;
    searchPlaceholder?: string;
    timeout?: number;
    setSearchQuery: (query: string) => void,
}

export default function Header(props: HeaderProps) {
    const [searchQuery, setSearchQuery] = React.useState("");

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            props.setSearchQuery(searchQuery);
        }, props.timeout ?? SEARCH_DELAY);

        return () => clearTimeout(timeout);
    })

    return (
        <>
            <Container fluid style={{
                boxShadow: "0 0 10px rgba(0,0,0,.8)",
                background: "linear-gradient(135deg, #003c77, #004990)",
                color: "white",
            }}>
                <Container>
                    <Row style={{ padding: 50 }}>
                        <Col lg={6}>
                            <h2 className="text-hero">
                                {props.title.split("\n").map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </h2>
                            <p className="text-muted noprint">
                                {props.subtitle.split("\n").map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </p>
                        </Col>
                        <Col
                            lg={6}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                            }}>

                            <Form.Control
                                className={"noprint"}
                                as="input"
                                size="lg"
                                placeholder={props.searchPlaceholder ?? "Search"}
                                onInput={(e) => setSearchQuery(e.currentTarget.value)}
                            />

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}