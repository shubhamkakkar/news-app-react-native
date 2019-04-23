import React from "react"
import { View, Text } from "native-base"
import { TouchableOpacity } from "react-native"
export default props => (
    <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center", margin: 5 }}>
        <TouchableOpacity
            style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#f50057",
                borderColor: "#f50057"
            }}
            onPress={props.handleClose}
        >
            <Text style={{ color: "white" }}>X</Text>
        </TouchableOpacity>
    </View>
)