import React from "react"
import { Header, Title, Body } from "native-base"

export default props => (

    <Header androidStatusBarColor="#2a3eb1" style={{ backgroundColor: "#3d5afe" }}>
        <Body style={{ marginLeft: 10 }}>
            <Title> {props.title} </Title>
        </Body>
        {props.children}

    </Header>
)