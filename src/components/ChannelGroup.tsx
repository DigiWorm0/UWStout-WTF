import { Card } from "react-bootstrap";
import ChannelList from "./ChannelList";

interface ChannelGroupProps {
    headerColor: string;
    bgColor: string;
    title: string;
    channelQueries: string[];
}

export default function ChannelGroup(props: ChannelGroupProps) {
    return (
        <Card style={{
            margin: 5
        }}>
            <Card.Header style={{
                backgroundColor: props.headerColor,
                color: "white",
            }}>
                {props.title}
            </Card.Header>
            <Card.Body style={{
                backgroundColor: props.bgColor,
            }}>
                {props.channelQueries.map((query, index) => (
                    <ChannelList
                        searchQuery={query}
                        small
                    />
                ))}
            </Card.Body>
        </Card>
    );
}