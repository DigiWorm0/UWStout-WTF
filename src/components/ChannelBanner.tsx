import React from 'react';
import { Card } from 'react-bootstrap';
import Channel from '../types/Channel';

export default function ChannelBanner(props: { channel: Channel }) {
    const channel = props.channel;

    return (
        <>
            <Card
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
                    <h3
                        style={{
                            marginRight: 20,
                            minWidth: 65,
                        }}
                    >
                        {channel.number}
                    </h3>
                    <div>
                        <h4
                            style={{
                                overflowWrap: "anywhere",
                                marginBottom: 5
                            }}
                        >
                            {channel.url ? (
                                <a
                                    href={channel.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        textDecoration: "none",
                                        paddingRight: 10,
                                    }}
                                >
                                    {channel.name}
                                </a>
                            ) : (
                                channel.name
                            )}
                            {channel.name.includes("*") && (
                                <span className={'text-muted fs-5'}>
                                    (May be unavailable)
                                </span>
                            )}
                        </h4>

                        <h6 className="text-muted">
                            {channel.category}
                        </h6>
                    </div>
                    <img
                        src={`/channels/${channel.logo || channel.number}.png`}
                        alt=''
                        height={40}
                        style={{
                            height: 40,
                            maxWidth: 100,
                            objectFit: "contain",
                            marginLeft: "auto",
                            marginRight: 20,
                        }}
                    />
                </Card.Body>
            </Card>
            <hr style={{
                marginTop: 7,
                marginBottom: 13,
            }} />
        </>
    )
}