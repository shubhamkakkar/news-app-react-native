import React from "react"
import { ListItem, Left, Text, Right, Icon } from 'native-base'
import { View, TouchableOpacity } from "react-native"
export default props => (
    <ListItem>
        <TouchableOpacity
            onPress={() => props.sendToRedux(props.index, props.choice)}
            style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
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
            {/* <TouchableOpacity> */}
            <Left style={{ flex: 4 }}>
                <Text style={{ textTransform: "capitalize" }}>{props.label}</Text>
            </Left>
            {/* </TouchableOpacity> */}
            <Right>
                {/* <TouchableOpacity
                    style={{
                        width: 25,
                        height: 25,
                        borderRadius: 25,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#e91e63",
                        borderColor: "#e91e63"
                    }}
                >
                    <Icon name="arrow-forward" style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }} />
                </TouchableOpacity> */}
            </Right>
        </TouchableOpacity>
    </ListItem>
)
