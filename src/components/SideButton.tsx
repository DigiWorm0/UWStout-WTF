import React from "react";

export default function SideButton(props: { text: string, href: string, newTab?: boolean }) {
    const [isHovering, setIsHovering] = React.useState(false);

    return (
        <a
            href={props.href}
            target={props.newTab ? "_blank" : "_self"}
            rel="noreferrer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
                backgroundColor: isHovering ? "#0056aa" : "#004990",
                borderRadius: 3,
                color: "#fff",
                display: "inline-block",
                position: "relative",
                margin: ".45em 0",
                padding: ".75em 1.5em",
                border: 0,
                textDecoration: "none",
                width: "100%",
                transition: "all .3s ease",
                textTransform: "uppercase",
                fontFamily: "Franklin Gothic,Helvetica,Arial,Nimbus Sans L,sans-serif",
                fontSize: ".7em",
                fontWeight: 600,
                lineHeight: "2.14286em",
                textAlign: "center",
                verticalAlign: "middle",
                letterSpacing: ".1em"
            }}
        >
            {props.text}
        </a>
    );
}