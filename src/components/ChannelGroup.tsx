import { Card } from "react-bootstrap";
import ChannelList from "./ChannelList";

interface ChannelGroupProps {
    borderColor: string;
    bgColor: string;
    title: string;
    channelQueries: string[];
}

export default function ChannelGroup(props: ChannelGroupProps) {
    return (
        <div
            style={{
                borderRadius: 10,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: props.borderColor,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 8,
                paddingBottom: 8,
                marginTop: 8,
                marginLeft: 8,
                backgroundColor: props.bgColor,
                //breakInside: "avoid",
            }}
        >
            <h5 className={"fw-bold text-center"}>
                {props.title}
            </h5>
            {props.channelQueries.map((query, index) => (
                <ChannelList
                    key={index}
                    searchQuery={query}
                    small
                />
            ))}
        </div>
    );
}