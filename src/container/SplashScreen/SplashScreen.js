import React, { Component } from "react"
import { ActivityIndicator } from "react-native"
import { Container, View } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';
class SplashScreen extends Component {

    _bootstrapAsync = async () => {
        const defaultSelections = await AsyncStorage.getItem('defaultSelections');
        this.props.navigation.navigate(defaultSelections ? 'NewsContainer' : 'DefaultSelections');
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
export default SplashScreen
