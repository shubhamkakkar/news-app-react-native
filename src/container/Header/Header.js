import React, { Component, Fragment } from "react"
import { Modal, Alert, View, ScrollView, TouchableOpacity } from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import SearchBarContainer from "./SearchBarContainer"
class HeaderNav extends Component {

    state = {
        open: false
    }
    search = () => {
        this.setState({ open: true })
    }
    saveToBookmark = () => {
        alert("saveToBookmark")
    }

    render() {
        return (
            <Fragment>
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
                        <Button transparent onPress={this.search}>
                            <Icon name='search' />
                        </Button>
                        <Button transparent onPress={this.saveToBookmark}>
                            <Icon name='heart' />
                        </Button>
                    </Right>
                </Header>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.open}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
                        <ScrollView style={{ flexGrow: 1 }}>
                            <SearchBarContainer />
                        </ScrollView>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ open: false })
                                }}>
                                <Text>Show Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </Fragment>
        )
    }
}

export default HeaderNav