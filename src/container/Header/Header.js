import React, { Component, Fragment } from "react"
import { Modal, View } from 'react-native'
import { Right, Button, Icon } from 'native-base';
import SearchBarContainer from "./SearchBarContainer"
import HeaderComponent from "../../components/Header/Header"
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
                <HeaderComponent title={"News"}>
                    <Right>
                        <Button transparent onPress={this.search}>
                            <Icon name='search' />
                        </Button>
                        <Button transparent onPress={this.saveToBookmark}>
                            <Icon name='heart' />
                        </Button>
                    </Right>
                </HeaderComponent>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
                        <View style={{ flexGrow: 1 }}>
                            <SearchBarContainer handleClose={this.handleClose} />
                        </View>
                    </View>
                </Modal>
            </Fragment>
        )
    }
}

export default HeaderNav