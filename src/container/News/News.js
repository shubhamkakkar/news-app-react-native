import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'native-base';
import { connect } from "react-redux"

import { setTopHeadlines, stopLoadNews } from "../../store/actions"
// import console = require('console');
class News extends Component {
    state = {
        newsValue: 20
    }
    componentDidUpdate() {
        if (this.props.topHeadlineReducer.length > this.state.newsValue) {
            this.props.stopLoadNews()
        }
    }
    render() {
        return (
            <View>
                <Text> textInCsdsomponent </Text>
                <Button onPress={this.props.loadTopNews}>
                    <Text>Shubham</Text>
                </Button>
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