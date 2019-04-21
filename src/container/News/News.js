import React, { Component } from 'react'
import { View, ScrollView, FlatList } from 'react-native'
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
            conten={item.content}
            sourceName={item.source.name}
            onPressFn={this.onPressFn}
        />
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    {
                        this.state.topheadliners.length ? (
                            <FlatList
                                data={this.state.topheadliners}
                                extraData={this.state}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem}
                            />
                        ) : (
                                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                    <Button style={{ marginBottom: 2 }} primary bordered onPress={() => this.setStateForTopNews()}>
                                        <Text>Error, Click Here</Text>
                                    </Button>
                                </View>
                            )

                    }
                </ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Button style={{ marginBottom: 2 }} primary bordered onPress={() => this.setStateForTopNews()}>
                        <Text>Load More</Text>
                    </Button>
                </View>
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