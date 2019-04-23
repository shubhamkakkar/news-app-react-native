import React from "react"
import { ListItem, Left, Text } from 'native-base'
import { View, TouchableOpacity } from "react-native"
export default props => (
    <TouchableOpacity>
        <ListItem>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.2)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            backgroundColor: '#fff',
                            borderRadius: 50,
                        }}
                    >
                        {props.children}
                    </View>
                </View>
                <Left style={{ flex: 4 }}>
                    <Text style={{ textTransform: "capitalize" }}>{props.label}</Text>
                </Left>
            </View>
        </ListItem>
    </TouchableOpacity>
)