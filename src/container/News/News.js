import React, { Component, Fragment } from 'react'
import {
    View, ActivityIndicator, FlatList,
    BackHandler, TouchableOpacity
} from 'react-native'
import { Text, Button } from 'native-base';
import { connect } from "react-redux"
import NewsHOC from "../../components/News/News"
import { setTopHeadlines, stopLoadNews, querySaga, query } from "../../store/actions"
import { withNavigation, StackActions } from 'react-navigation'
class News extends Component {
    state = {
        topheadliners: [],
        showActivityIndicator: false
    }

    setStateForTopNews = () => {
        this.props.loadTopNews()
        const combinedTopHeadlinersSubArrays = []
        this.props.topHeadlineReducer.map(parentAr => parentAr.map(ar => combinedTopHeadlinersSubArrays.push(ar)))
        this.setState({
            topheadliners: [
                ...this.state.topheadliners,
                ...combinedTopHeadlinersSubArrays
            ]
        })
    }

    componentWillMount() {
        this.setStateForTopNews()
    }

    componentDidMount() {
        this.setStateForTopNews()
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
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
                                    extraData={this.state}
                                    keyExtractor={this._keyExtractor}
                                    renderItem={this._renderItem}
                                    ref={(ref) => { this.listRef = ref; }}
                                    onEndReached={this.onEndReached}
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
const mapStateToProps = ({ topHeadlineReducer, queryNewsReducer }) => ({
    topHeadlineReducer, queryNewsReducer
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