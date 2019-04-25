import React, { Fragment, Component } from 'react'
import { Container, Text, Title } from "native-base"
import {
    View,
    TouchableOpacity,
    Image,
    BackHandler,
} from "react-native"
import { withNavigation, StackActions } from 'react-navigation'

import { connect } from "react-redux"
import { quest, query, setTopHeadlines } from "../../store/actions"

import readingImage from "../../assets/readingImage.png"

import searchJSON from "../../api/countryJSON/searchData.json"

import DefaultSelectionAndSearchCommon from "../../components/DefaultSelectionAndSearchCommon/DefaultSelectionAndSearchCommon"
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
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }


    handleBackButton = () => {
        const pushAction = StackActions.push({
            routeName: 'DefaultSelections',
        });

        this.props.navigation.dispatch(pushAction);
    }
    skip = () => {
        let queryObj = {
            category: undefined,
            country: undefined,
            queryParameter: "trump"
        }
        const { setQuest, loadNews, setDefaultQuery, navigation } = this.props
        setQuest("everything")
        setDefaultQuery(queryObj)
        loadNews()
        navigation.navigate("NewsContainer")
    }

    handleClose = () => this.setState({ categoryModalOpen: false, countryCodeModalOpen: false })

    sendToRedux = (index, choice) => {
        const { setQuest, setDefaultQuery, questReducer } = this.props
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
        setDefaultQuery(queryObj)
        this.handleClose()
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


    render() {
        return (
            <Fragment>
                <Container>
                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center",
                    }} />
                    <View
                        style={{
                            flex: 2
                        }}>
                        <Image source={readingImage} style={{ height: 50, width: null, flex: 1 }} />
                    </View>
                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center"
                    }}>
                        <DefaultSelectionAndSearchCommon handleButtons={this.handleButtons}>
                            <Title style={{ color: "#f50057" }}>OR</Title>
                        </DefaultSelectionAndSearchCommon>
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
                        {
                            this.props.queryReducer.category || this.props.queryReducer.country
                                ? (
                                    <Text style={{
                                        color: "#f50057",
                                        padding: 10,
                                    }}>
                                        Your News are waiting...
                                    </Text>
                                )
                                : (
                                    <Text style={{
                                        color: "#3d5afe",
                                        padding: 10,
                                    }}>
                                        Skip
                                    </Text>
                                )
                        }
                    </TouchableOpacity>
                </View>
                <ModalHOC visible={this.state.countryCodeModalOpen} handleClose={this.handleClose}>
                    <View style={{ flexGrow: 1 }}>
                        <CountryCodePicker country={this.state.country} sendToRedux={this.sendToRedux} />
                    </View>
                    <ModalCloser handleClose={this.handleClose} />
                </ModalHOC>
                <ModalHOC visible={this.state.categoryModalOpen} handleClose={this.handleClose}>
                    <View style={{ flexGrow: 1 }}>
                        <CategoryPicker category={this.state.category} sendToRedux={this.sendToRedux} />
                    </View>
                    <ModalCloser handleClose={this.handleClose} />
                </ModalHOC>
            </Fragment>
        );
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
export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(DefaultSelections))