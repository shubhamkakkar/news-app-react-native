import React, { Component, Fragment } from 'react'
import { View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import { Text, Button } from 'native-base';
import { connect } from "react-redux"
import NewsHOC from "../../components/News/News"
import { setTopHeadlines, stopLoadNews, querySaga, query } from "../../store/actions"
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
        this.props.loadQueryParameter("bitcoin")
        this.props.loadTopNews()
    }

    componentDidUpdate() {
        console.log(this.state)
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

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.topheadliners.length ? (
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
                    ) : (
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <View>
                                    <Button style={{ margin: 2, backgroundColor: "#f50057", borderColor: "#f50057" }} bordered rounded onPress={() => this.setStateForTopNews()}>
                                        <TouchableOpacity>
                                            <Text style={{ color: "white" }}> Click to start reading </Text>
                                        </TouchableOpacity>
                                    </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(News)