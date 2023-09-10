import React from 'react';
import { Card } from 'react-bootstrap';
import Channel from '../types/Channel';

export default function ChannelBannerSmall(props: { channel: Channel }) {
    const channel = props.channel;

    return (
        <>
            <Card
                style={{
                    backgroundColor: "transparent",
                    breakInside: "avoid",
                }}
                className="mt-0 border-0"
            >
                <Card.Body
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 0,
                    }}
                >
                    <h6
                        style={{
                            marginRight: 20,
                            minWidth: 40,
                            marginBottom: 0,
                        }}
                    >
                        {channel.number}
                    </h6>
                    <div>
                        <p
                            style={{
                                overflowWrap: "anywhere",
                                margin: 1
                            }}
                        >
                            {channel.name.includes("*") ? (
                                <i>
                                    {channel.name}
                                </i>
                            ) : (
                                channel.name
                            )}
                        </p>
                    </div>
                    <img
                        src={`/channels/${channel.logo || channel.number}.png`}
                        alt=''
                        height={40}
                        style={{
                            height: 20,
                            maxWidth: 40,
                            objectFit: "contain",
                            marginLeft: "auto",
                            marginRight: 10,
                            marginBottom: 1
                        }}
                    />
                </Card.Body>
            </Card>
        </>
    )
}