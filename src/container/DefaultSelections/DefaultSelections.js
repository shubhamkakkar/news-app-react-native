import React, { Fragment, Component } from 'react'
import { Container, Text } from "native-base"
import { View, TouchableOpacity, Image } from "react-native"
import { connect } from "react-redux"
import { quest, query } from "../../store/actions"
import readingImage from "../../assets/readingImage.png"
import DefaultSelectionAndSearchCommon from "../../components/DefaultSelectionAndSearchCommon/DefaultSelectionAndSearchCommon"
import searchJSON from "../../api/countryJSON/searchData.json"
import ModalHOC from "../../components/ModalHOC/ModalHOC"
import CountryCodePicker from "../../components/CountryCodePicker/CountryCodePicker"
import CategoryPicker from "../../components/CategoryPicker/CategoryPicker"
import ModalCloser from "../../components/ModalCloser/ModalCloser";

class DefaultSelections extends Component {
    state = {
        country: [],
        category: [],
        countryCodeModalOpen: false,
        categoryModalOpen: false,
    }
    componentWillMount() {
        this.setState({
            country: searchJSON.countryCodeAndName,
            category: searchJSON.category
        })
    }
    skip = () => {
        this.props.setQuest("everything")
        this.props.setDefaultQuery("trump")
        this.props.navigation.navigate("NewsContainer")
    }

    handleButtons = button => {
        switch (button) {
            case "Country": {
                this.setState({ countryCodeModalOpen: true })
                break;
            }
            case "Category": {
                this.setState({ categoryModalOpen: true })
                break;
            }
            default: {
                break;
            }
        }
    }

    handleClose = () => this.setState({ categoryModalOpen: false, countryCodeModalOpen: false })

    render() {
        return (
            <Fragment>
                <Container style={{ backgroundColor: "#F9F8FD", }}>
                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center",
                    }} />
                    <View
                        style={{
                            flex: 2,
                            backgroundColor: "#F9F8FD",
                        }}>
                        <Image source={readingImage} style={{ height: 50, width: null, flex: 1 }} />
                    </View>
                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center"
                    }}>
                        <DefaultSelectionAndSearchCommon handleButtons={this.handleButtons} />
                    </View>
                </Container>
                <View style={{
                    backgroundColor: "#F9F8FD",
                    justifyContent: "center", alignItems: "center"
                }}>
                    <TouchableOpacity
                        style={{
                            marginBottom: 10,
                            borderColor: "#3d5afe",
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: "center"
                        }}
                        onPress={this.skip}
                    >
                        <Text style={{
                            color: "#3d5afe",
                            padding: 10,
                        }}>
                            Skip
                    </Text>
                    </TouchableOpacity>
                </View>
                <ModalHOC visible={this.state.countryCodeModalOpen} handleClose={this.handleClose}>
                    <View style={{ flexGrow: 1 }}>
                        <CountryCodePicker country={this.state.country} />
                    </View>
                    <ModalCloser handleClose={this.handleClose} />
                </ModalHOC>
                <ModalHOC visible={this.state.categoryModalOpen} handleClose={this.handleClose}>
                    <View style={{ flexGrow: 1 }}>
                        <CategoryPicker category={this.state.category} />
                    </View>
                    <ModalCloser handleClose={this.handleClose} />
                </ModalHOC>
            </Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    setQuest: everything => dispatch(quest(everything)),
    setDefaultQuery: query_parameter => dispatch(query(query_parameter))
})
export default connect(null, mapDispatchToProps)(DefaultSelections)