import React, { Component } from "react"
import {
    View, Text, Left, Container, Header,
    Body, Title, Right, Content, Item, Input
} from "native-base";
import { Modal } from "react-native"
import searchJSON from "../../api/countryJSON/searchData.json"

import CountryCodePicker from "../../components"
import CategoryPicker from "../../components"

class SearchBarContainer extends Component {

    state = {
        country: [],
        countryCodeModalOpen: false
    }

    componentWillMount() {
        this.setState({ 
            country: searchJSON.countryCodeAndName, 
            category: searchJSON.category
        })
    }

    componentDidMount() {
        console.log(this.state)
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>
                            Search
                        </Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.countryCodeModalOpen}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}
                    >
                        <CountryCodePicker country={this.state.country} />
                        <CategoryPicker category={this.state.category} />
                        <Item rounded>
                            <Input placeholder='Rounded Textbox' />
                        </Item>
                    </Modal>
                </Content>
            </Container>
        )
    }
}
export default SearchBarContainer
