import React from "react";
import { Col, Container, Form, Row } from 'react-bootstrap';
import AccountType from "../types/AccountType";

const SEARCH_DELAY = 500;

export default function Header(props: { setSearchQuery: (query: string) => void, setHiddenAccountTypes: (accountType: AccountType[]) => void }) {
    const [searchQuery, setSearchQuery] = React.useState("");

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            props.setSearchQuery(searchQuery);
        }, SEARCH_DELAY);

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
                                Unofficial UW-Stout CONNECT<br />Points Leaderboard
                            </h2>
                            <p className="text-muted">
                                Tracks and sorts students by points gathered from the UW-Stout CONNECT.
                                Check in to events using the UW-Stout CONNECT App to earn points and climb the leaderboard!
                            </p>
                        </Col>
                        <Col lg={6} style={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                        }}>

                            <Form.Control
                                as="input"
                                size="lg"
                                placeholder="Search students..."
                                onInput={(e) => setSearchQuery(e.currentTarget.value)}
                            />

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}