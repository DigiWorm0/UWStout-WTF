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
                    boxDecorationBreak: "clone",
                }}
                className="mt-0 border-0">

                <Card.Body style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 0,
                }}>

                    <h3 style={{
                        marginRight: 20,
                        textAlign: "center",
                    }}>
                        {channel.number}
                    </h3>
                    <div>
                        <h6
                            style={{
                                overflowWrap: "anywhere",
                                marginBottom: 5
                            }}>
                            {channel.name}
                        </h6>
                    </div>
                    <img
                        src={`/channels/${channel.logo || channel.number}.png`}
                        alt=''
                        height={40}
                        style={{
                            height: 40,
                            maxWidth: 50,
                            objectFit: "contain",
                            marginLeft: "auto",
                            marginRight: 20,
                            marginTop: 2
                        }} />
                </Card.Body>
            </Card>
        </>
    )
}