import React, { Component, Fragment } from "react"
import {
    View, Text, Container, Item, Input,
} from "native-base";
import { Modal, TouchableOpacity, ToastAndroid, Keyboard, TextInput } from "react-native"
import searchJSON from "../../api/countryJSON/searchData.json"
import CountryCodePicker from "../../components/CountryCodePicker/CountryCodePicker"
import CategoryPicker from "../../components/CategoryPicker/CategoryPicker"
import ModalCloser from "../../components/ModalCloser/ModalCloser";
import HeaderComponent from "../../components/Header/Header"
import DefaultSelectionAndSearchCommon from "../../components/DefaultSelectionAndSearchCommon/DefaultSelectionAndSearchCommon"
import ModalHOC from "../../components/ModalHOC/ModalHOC"
import { connect } from "react-redux"
import { quest, query, setTopHeadlines } from "../../store/actions"
class SearchBarContainer extends Component {

    state = {
        country: [],
        category: [],
        countryCodeModalOpen: false,
        categoryModalOpen: false,
        hideWithKeyboard: false
    }

    componentWillMount() {
        this.setState({
            country: searchJSON.countryCodeAndName,
            category: searchJSON.category
        })
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardDidShow = () => {
        this.setState({ hideWithKeyboard: true })
    }

    _keyboardDidHide = () => {
        this.setState({ hideWithKeyboard: false })

    }

    handleButtons = res => {
        const { setQuest, questReducer } = this.props
        switch (res) {
            case "Country": {
                this.setState({ countryCodeModalOpen: true })
                break;
            }
            case "Category": {
                this.setState({ categoryModalOpen: true })
                break;
            }
            case "Top Headlines": {
                if (questReducer !== "top-headlines") {
                    setQuest("top-headlines")
                }
                ToastAndroid.show("top headlines will be shown")
                break;
            }
            case "All Stories": {
                if (questReducer !== "everything") {
                    setQuest("everything")
                }
                ToastAndroid.show("all stories will be shown")
                break;
            }
        }
    }

    sendToRedux = (index, choice) => {
        this.props.setQuest("top-headlines")
        let queryP = []
        switch (choice) {
            case "country": {
                queryP = [...queryP, this.state.country[index].code]
                break;
            }
            case "category": {
                queryP = [...queryP, this.state.category[index].label]
                break;
            }
            default: {
                return 0
            }
        }
        this.handleClose()
        this.props.setDefaultQuery(queryP)
    }

    handleClose = () => this.setState({ categoryModalOpen: false, countryCodeModalOpen: false })


    render() {
        return (
            <Container>
                <HeaderComponent title={"Search"} />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    margin: 30
                }}>
                    {/* <Item rounded> */}
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder=" Search: bitcoin, shahrukh khan, trump.."
                        placeholderTextColor="#3d5afe"
                        autoCapitalize="none"
                        style={{
                            margin: 15,
                            height: 40,
                            borderColor: "#3d5afe",
                            borderWidth: 1,
                            borderRadius: 20,
                            padding: 5
                        }}
                        onSubmitEditing={Keyboard.dismiss} />
                    {/* </Item> */}
                </View>
                {
                    this.state.hideWithKeyboard
                        ? null
                        : (
                            <Fragment>
                                <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    {
                                        [
                                            "Top Headlines", "All Stories"
                                        ].map(res => (
                                            <View key={res}>
                                                <TouchableOpacity
                                                    style={{
                                                        marginBottom: 10,
                                                        backgroundColor: "#3d5afe",
                                                        borderColor: "#3d5afe",
                                                        borderRadius: 25,
                                                        alignItems: 'center',
                                                        justifyContent: "center"
                                                    }}
                                                    onPress={() => this.handleButtons(res)}
                                                >
                                                    <Text style={{
                                                        color: "white",
                                                        padding: 10,
                                                    }}> {res} </Text>
                                                </TouchableOpacity>
                                            </View>
                                        ))
                                    }

                                </View>
                                <DefaultSelectionAndSearchCommon handleButtons={this.handleButtons} />
                                <ModalCloser handleClose={this.props.handleClose} />
                            </Fragment>
                        )
                }
                <ModalHOC visible={this.state.countryCodeModalOpen} handleClose={this.handleClose}>
                    <View style={{ flexGrow: 1 }}>
                        <CountryCodePicker sendToRedux={this.sendToRedux} country={this.state.country} />
                    </View>
                    <ModalCloser handleClose={this.handleClose} />
                </ModalHOC>
                <ModalHOC visible={this.state.categoryModalOpen} handleClose={this.handleClose}>
                    <View style={{ flexGrow: 1 }}>
                        <CategoryPicker sendToRedux={this.sendToRedux} category={this.state.category} />
                    </View>
                    <ModalCloser handleClose={this.handleClose} />
                </ModalHOC>
            </Container>
        )
    }
}

const mapStateToProps = ({ queryReducer, questReducer }) => ({
    queryReducer, questReducer
})
const mapDispatchToProps = dispatch => ({
    setQuest: everything_topheadlins => dispatch(quest(everything_topheadlins)),
    setDefaultQuery: query_parameter => dispatch(query(query_parameter)),
    loadNews: () => dispatch(setTopHeadlines())
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer)