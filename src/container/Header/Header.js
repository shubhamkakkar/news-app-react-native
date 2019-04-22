import React, { Component, Fragment } from "react"
import { Modal, Alert, View, ScrollView, TouchableOpacity } from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import SearchBarContainer from "./SearchBarContainer"
class HeaderNav extends Component {

    state = {
        open: false
    }

    search = () => this.setState({ open: true })

    saveToBookmark = () => {
        alert("saveToBookmark")
    }

    handleClose = () => this.setState({ open: false })
    render() {
        return (
            <Fragment>
                <Header androidStatusBarColor="#1868A8" style={{ backgroundColor: "#2196F3" }}>
                    <Body style={{ marginLeft: 10 }}>
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
                    onRequestClose={this.handleClose}
                >
                    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
                        <View style={{ flexGrow: 1 }}>
                            <SearchBarContainer />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center", margin: 5 }}>
                            <Button
                                style={{ backgroundColor: "#f50057", borderColor: "#f50057" }}
                                rounded onPress={this.handleClose}>
                                <TouchableOpacity>
                                    <Text danger>X</Text>
                                </TouchableOpacity>
                            </Button>
                        </View>
                    </View>
                </Modal>
            </Fragment>
        )
    }
}

export default HeaderNav