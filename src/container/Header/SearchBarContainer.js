import React, { Component } from "react"
import {
    View, Text, Left, Container, Header,
    Body, Title, Label, Content, Item, Input,
    Button,
    Form
} from "native-base";
import { Modal, TouchableOpacity } from "react-native"
import searchJSON from "../../api/countryJSON/searchData.json"

import CountryCodePicker from "../../components/CountryCodePicker/CountryCodePicker"
import CategoryPicker from "../../components/CategoryPicker/CategoryPicker"


const ModalHOc = props => (
    <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}
    >
        {props.children}
    </Modal>
)

class SearchBarContainer extends Component {

    state = {
        country: [],
        countryCodeModalOpen: false,
        categoryModalOpen: false,
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
    handleButtons = res => alert(res)

    render() {
        return (
            <Container>
                <Header androidStatusBarColor="#1868A8" style={{ backgroundColor: "#2196F3" }}>
                    <Body>
                        <Title style={{ paddingLeft: 5 }}>
                            Search
                        </Title>
                    </Body>
                </Header>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {
                        [
                            "Top Headlines", "All Stories"
                        ].map((res, index) => (
                            <View key={res}>
                                <Button
                                    style={{ marginBottom: 5, backgroundColor: "#3d5afe", borderColor: "#3d5afe" }}
                                    rounded onPress={() => this.handleQuest(index)}>
                                    <TouchableOpacity>
                                        <Text style={{ color: "white" }}>  {res} </Text>
                                    </TouchableOpacity>
                                </Button>
                            </View>
                        ))
                    }

                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    margin: 30
                }}>
                    <Item rounded>
                        <Input placeholder='Rounded Textbox' />
                    </Item>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {
                        [
                            "Country", "Category"
                        ].map(res => (
                            <View key={res}>
                                <Button
                                    style={{ marginBottom: 5, backgroundColor: "#3d5afe", borderColor: "#3d5afe" }}
                                    rounded onPress={() => this.handleButtons(res)}>
                                    <TouchableOpacity>
                                        <Text style={{ color: "white" }}> Select {res} </Text>
                                    </>
                                </Button>
                            </View>
                        ))
                    }

                </View>
                <ModalHOc visible={this.state.countryCodeModalOpen}>
                    <CountryCodePicker country={this.state.country} />
                </ModalHOc>
                <ModalHOc visible={this.state.categoryModalOpen}>
                    <CategoryPicker category={this.state.category} />
                </ModalHOc>
            </Container>
        )
    }
}
export default SearchBarContainer
