import React, { Fragment } from "react"
import { View, Text } from "native-base"
import { TouchableOpacity } from "react-native"
export default props => (
    <View style={{
        // flex: 1,
        flexDirection: "row",
        // justifyContent: props.justifyModalContentSpaceAround ? "space-between" : "center",
        justifyContent: "space-around",
        alignContent: "center",
        marginTop: 2.5,
        marginBottom: 2.5,
        backgroundColor: "#FAFAFA",
        paddingLeft: 5,
        paddingRight: 5,
    }}>
        <Fragment>
            {props.children}
        </Fragment>
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
            {/* arrow-back */}
            <Text style={{ color: "white", fontSize: 20 }}>X</Text>
        </TouchableOpacity>
    </View>
)