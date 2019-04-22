import React from "react"

import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default () => (
    <Header androidStatusBarColor="#1868A8" style={{ backgroundColor: "#2196F3" }}>
        <Left>
            <Button transparent>
                <Icon name='arrow-back' />
            </Button>
        </Left>
        <Body>
            <Title>News</Title>
        </Body>
        <Right>
            {
                [
                    "search", "heart"
                ].map(res => (
                    <Button key={res} transparent>
                        <Icon name={res} />
                    </Button>
                ))
            }

        </Right>
    </Header>
)