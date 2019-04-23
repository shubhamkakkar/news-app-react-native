import React from "react"
import { View, TouchableOpacity } from "react-native"
import { Text } from "native-base"
export default props => (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        {
            [
                "Country", "Category"
            ].map(res => (
                <View key={res}>
                    <TouchableOpacity
                        style={{
                            marginBottom: 10,
                            backgroundColor: "#3d5afe",
                            borderColor: "#3d5afe",
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: "center"
                        }}
                        onPress={() => props.handleButtons(res)}
                    >
                        <Text style={{
                            color: "white",
                            padding: 10,
                        }}> Select {res} </Text>
                    </TouchableOpacity>
                </View>
            ))
        }
    </View>
)