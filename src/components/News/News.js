import React from "react"
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Image } from 'react-native';
export default props => (
    <Content>
        <Card style={{ flex: 0 }}>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: 'Image URL' }} />
                    <Body>
                        <Text>{
                            props.title.length ? props.title : "tite"
                        }</Text>
                        <Text note>{props.publishedAt}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />

                    <Text>
                        {props.content}
                    </Text>
                </Body>
            </CardItem>
            <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                    <Text>{props.sourceName}</Text>
                </Button>
            </Left>
        </Card>
    </Content>
)