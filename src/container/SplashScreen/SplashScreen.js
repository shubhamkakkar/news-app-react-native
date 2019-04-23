import React, { Component } from "react"
import { ActivityIndicator } from "react-native"
import { Container, Content } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';
class SplashScreen extends Component {
    constructor() {
        super()
        this._bootstrapAsync()
    }
    _bootstrapAsync = async () => {
        const defaultSelections = await AsyncStorage.getItem('defaultSelections');

        this.props.navigation.navigate(defaultSelections ? 'NewsContainer' : 'DefaultSelections');
    }
    render() {
        return (
            <Container>
                <Content padder>
                    <ActivityIndicator />
                </Content>
            </Container>
        )
    }
}
export default SplashScreen
