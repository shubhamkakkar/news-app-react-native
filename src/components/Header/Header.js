import React from "react"
import { Header, Title, Body } from "native-base"

export default props => (

    <Header androidStatusBarColor="#1868A8" style={{ backgroundColor: "#2196F3" }}>
        <Body style={{ marginLeft: 10 }}>
            <Title> {props.title} </Title>
        </Body>
        {props.children}

    </Header>
)