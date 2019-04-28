import React, { Component } from "react"
import { ActivityIndicator } from "react-native"
import { Container, View } from 'native-base'

import AsyncStorage from '@react-native-community/async-storage';

import { connect } from "react-redux";
import { quest, query } from "../../store/actions"

class SplashScreen extends Component {

    _bootstrapAsync = async () => {
        const { setDefaultQuery, setQuest, navigation } = this.props
        AsyncStorage.getItem('defaultSelections')
            .then(res => {
                if (res) {
                    const defaultSelections = JSON.parse(res)

                    let queryObj = {
                        category: defaultSelections.category,
                        country: defaultSelections.country,
                        queryParameter: undefined
                    }
                    setQuest("top-headlines")
                    setDefaultQuery(queryObj)
                    navigation.navigate('NewsContainer');
                } else {
                    navigation.navigate('DefaultSelections');

                }
            }).catch(er => {
                alert("Error, close and re open")
                navigation.navigate('DefaultSelections');
            })
    }

    componentDidMount() {
        this._bootstrapAsync()
    }

    render() {
        return (
            <Container>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator color="#f50057" size="large" />
                </View>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setQuest: everything_topheadlins => dispatch(quest(everything_topheadlins)),
    setDefaultQuery: query_parameter => dispatch(query(query_parameter))
})

export default connect(null, mapDispatchToProps)(SplashScreen)
