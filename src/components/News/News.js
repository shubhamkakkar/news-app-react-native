import React from "react"
import { Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { ScrollView, Image, View, TouchableOpacity, Linking } from 'react-native';
export default props => (
    <ScrollView style={{ flexGrow: 1 }} nestedScrollEnabled={true}>
        <Content padder>
            <TouchableOpacity onPress={() => Linking.openURL(props.url)}>
                <Card style={{ flex: 0, borderRadius: 8 }}>
                    <CardItem bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                        <Left>
                            <Body>
                                <Text style={{ color: '#01579b' }}>{
                                    props.title.length ? props.title : "tite"
                                }</Text>
                                <Text note>{props.publishedAt}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem bordered>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <View style={{
                                backgroundColor: "#FAFAFA",
                                margin: "auto",
                                justifyContent: "center",
                                alignContent: "center"
                            }}>
                                <Image
                                    resizeMode={"contain"} source={{ uri: props.urlToImage }}
                                    style={{ height: 200, width: 200 }} />
                            </View>
                            <Text>
                                {props.content}
                            </Text>
                        </View>
                    </CardItem>
                    <Left>
                        <Button transparent >
                            <Text style={{ color: '#0277bd' }}>{props.sourceName}</Text>
                        </Button>
                    </Left>
                </Card>
            </TouchableOpacity>
        </Content>
    </ScrollView>

)