import React, { Component, Fragment } from 'react'
import { View, Image, FlatList, TouchableOpacity } from 'react-native'
import { Text, Button } from 'native-base';
import { connect } from "react-redux"
import NewsHOC from "../../components/News/News"
import { setTopHeadlines, stopLoadNews } from "../../store/actions"
class News extends Component {
    state = {
        topheadliners: []
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

    componentDidUpdate() {
        console.log(this.state)
    }
    onPressFn = index => { }
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
        this.listRef.getScrollResponder().scrollTo(0)
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
                                <Button style={{ margin: 2, backgroundColor: "#2979ff" }} rounded onPress={() => this.setStateForTopNews()}>
                                    <Text primary>Load More</Text>
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
                                        <Text style={{ color: "white" }}> Click to start reading </Text>
                                    </Button>
                                </View>
                            </View>

                        )

                }

            </View>
        )
    }
}
const mapStateToProps = ({ topHeadlineReducer }) => ({
    topHeadlineReducer
})

const mapDispatchToProps = dispatch => {
    return {
        loadTopNews: () => dispatch(setTopHeadlines()),
        stopLoadNews: () => dispatch(stopLoadNews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)