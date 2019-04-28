import React, { Component, Fragment } from "react"
import { TouchableOpacity, ToastAndroid, Keyboard, TextInput } from "react-native"
import {
    View, Text, Container
} from "native-base";


import { connect } from "react-redux"
import { quest, query, setTopHeadlines, resetTopHeadliners } from "../../store/actions"

import searchJSON from "../../api/countryJSON/searchData.json"

import CountryCodePicker from "../../components/CountryCodePicker/CountryCodePicker"
import CategoryPicker from "../../components/CategoryPicker/CategoryPicker"
import ModalCloser from "../../components/ModalCloser/ModalCloser";
import HeaderComponent from "../../components/Header/Header"
import DefaultSelectionAndSearchCommon from "../../components/DefaultSelectionAndSearchCommon/DefaultSelectionAndSearchCommon"
import ModalHOC from "../../components/ModalHOC/ModalHOC"

class SearchBarContainer extends Component {

    state = {
        country: [],
        category: [],
        countryCodeModalOpen: false,
        categoryModalOpen: false,
        hideWithKeyboard: false,
        queryObj: {
            category: undefined,
            country: undefined,
            queryParameter: undefined
        }
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
        const { setQuest, questReducer } = this.props
        let { queryObj, country, category } = this.state
        switch (choice) {
            case "country": {
                queryObj = {
                    ...queryObj,
                    country: country[index].code
                }
                this.setState({ queryObj })
                break;
            }
            case "category": {
                queryObj = {
                    ...queryObj,
                    category: category[index].label
                }
                this.setState({ queryObj })
                break;
            }
            default: {
                return 0
            }
        }
        if (!questReducer.length) {
            setQuest("everything")
        }
        this.handleClose()
    }

    handleClose = () => this.setState({ categoryModalOpen: false, countryCodeModalOpen: false })

    handleQueryInput = text => {
        let { queryObj } = this.state
        if (text.trim().length) {
            queryObj = {
                ...queryObj,
                queryParameter: text
            }
            this.setState({ queryObj })
        } else {
            queryObj = {
                ...queryObj,
                queryParameter: ""
            }
            this.setState({ queryObj })
        }
    }

    loadCustomNews = () => {
        const { resetTopHeadliners, setDefaultQuery, handleClose } = this.props
        const { queryObj } = this.state
        resetTopHeadliners()
        setDefaultQuery(queryObj)
        handleClose()
    }

    render() {
        const {
            category, categoryModalOpen,
            country, countryCodeModalOpen,
            hideWithKeyboard,
            queryObj
        } = this.state

        return (
            <Container>
                <HeaderComponent title={"Search"} />
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    margin: 30
                }}>
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
                        onChangeText={text => this.handleQueryInput(text)}
                        onSubmitEditing={Keyboard.dismiss} />
                </View>
                {
                    hideWithKeyboard
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
                                <ModalCloser
                                    handleClose={this.props.handleClose}
                                    justifyModalContentSpaceAround={false} >
                                    {
                                        queryObj.category || queryObj.country || queryObj.queryParameter
                                            ? (
                                                <TouchableOpacity
                                                    style={{
                                                        marginBottom: 5,
                                                        marginTop: 5,
                                                        backgroundColor: "#f50057",
                                                        borderColor: "#f50057",
                                                        borderRadius: 25,
                                                        justifyContent: 'center',
                                                        alignItems: "center"
                                                    }}
                                                    onPress={this.loadCustomNews}
                                                >
                                                    <Text style={{
                                                        color: "white",
                                                        padding: 10,
                                                    }}> Submit </Text>
                                                </TouchableOpacity>
                                            )
                                            : null
                                    }
                                </ModalCloser>
                            </Fragment>
                        )
                }
                <ModalHOC visible={countryCodeModalOpen} handleClose={this.handleClose}>
                    <View style={{ flexGrow: 1 }}>
                        <CountryCodePicker sendToRedux={this.sendToRedux} country={country} />
                    </View>
                    <ModalCloser handleClose={this.handleClose} />
                </ModalHOC>
                <ModalHOC visible={categoryModalOpen} handleClose={this.handleClose}>
                    <View style={{ flexGrow: 1 }}>
                        <CategoryPicker sendToRedux={this.sendToRedux} category={category} />
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
    loadNews: news => dispatch(setTopHeadlines(news)),
    resetTopHeadliners: () => dispatch(resetTopHeadliners())
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer)