import React, { Component, Fragment } from 'react'
import {
    View, ActivityIndicator, FlatList,
    BackHandler, TouchableOpacity
} from 'react-native'
import { Text, Button } from 'native-base';
import { withNavigation, StackActions } from 'react-navigation'

import { connect } from "react-redux"
import { setTopHeadlines, stopLoadNews, query } from "../../store/actions"

import NewsHOC from "../../components/News/News"
class News extends Component {
    state = {
        topheadliners: [],
        showActivityIndicator: false,
        queryReducer: {}
    }

    setStateForTopNews = () => {
        this.props.loadTopNews()
        const combinedTopHeadlinersSubArrays = []
        this.props.topHeadlineReducer.map(parentAr => parentAr.map(ar => combinedTopHeadlinersSubArrays.push(ar)))
        this.setState({
            topheadliners: [
                ...this.state.topheadliners,
                ...combinedTopHeadlinersSubArrays
            ],
            queryReducer: this.props.queryReducer
        })
    }

    componentWillMount() {
        this.setStateForTopNews()
    }

    componentDidMount() {
        this.setStateForTopNews()
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentDidUpdate() {
        if (
            this.state.topheadliners.length === 0
            &&
            this.props.topHeadlineReducer.length
        ) {
            this.setStateForTopNews()
        }
        console.log(this.state)
    }

    handleBackButton = () => {
        const pushAction = StackActions.push({
            routeName: 'NewsContainer'
        });
        this.props.navigation.dispatch(pushAction);
    }

    componentWillReceiveProps() {
        if (!this.state.topheadliners.length) {
            this.setStateForTopNews()
        }
        if (
            this.state.queryReducer.category !== this.props.queryReducer.category
            ||
            this.state.queryReducer.country !== this.props.queryReducer.country
            ||
            this.state.queryReducer.queryParameter !== this.props.queryReducer.queryParameter
        ) {
            this.setState({ topheadliners: [], queryReducer: this.props.queryReducer }, () =>
                this.setStateForTopNews()
            )
        }
    }
    _KeyExtractor = (item, index) => index.toString()

    _renderItem = ({ item, index }) => (
        <NewsHOC
            key={index}
            id={index}
            author={item.author}
            title={item.title}
            publishedAt={item.publishedAt}
            content={item.description}
            url={item.url}
            sourceName={item.source.name}
            onPressFn={this.onPressFn}
        />
    )

    onEndReached = () => {
        this.listRef.getScrollResponder().scrollTo({ y: 0, animated: true });
    }

    render() {
        return (
            <View style={{
                flex: 1, backgroundColor: "#F9F8FD"
            }}>
                {
                    this.state.topheadliners.length
                        ? (
                            <Fragment>
                                <FlatList
                                    data={this.state.topheadliners}
                                    keyExtractor={this._keyExtractor}
                                    renderItem={this._renderItem}
                                    ref={(ref) => { this.listRef = ref; }}
                                    onEndReached={this.onEndReached}
                                    extraData={this.state.topheadliners}
                                />
                                <View style={{
                                    flexDirection: "row", justifyContent: "center", backgroundColor: "#FAFAFA"
                                }}>
                                    <Button style={{ margin: 2, backgroundColor: "#3d5afe" }} rounded onPress={() => this.setStateForTopNews()}>
                                        <TouchableOpacity>
                                            <Text primary>Load More</Text>
                                        </TouchableOpacity>
                                    </Button>
                                </View>
                            </Fragment>
                        )
                        : (
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                    <ActivityIndicator size="large" color="#f50057" />
                                </View>
                            </View>
                        )
                }
            </View>
        )
    }
}
const mapStateToProps = ({ topHeadlineReducer, queryReducer }) => ({
    topHeadlineReducer, queryReducer
})

const mapDispatchToProps = dispatch => {
    return {
        loadTopNews: () => dispatch(setTopHeadlines()),
        stopLoadNews: () => dispatch(stopLoadNews()),
        loadQueryNews: () => dispatch(querySaga()),
        loadQueryParameter: (q) => dispatch(query(q))
    }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(News))