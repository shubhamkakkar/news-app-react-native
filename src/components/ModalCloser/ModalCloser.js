import React from "react"
import { View, Icon } from "native-base"
import { TouchableOpacity } from "react-native"
export default props => (
    <View style={{ flexDirection: "row", justifyContent: "center", alignContent: "center", marginTop: 2.5, marginBottom: 2.5, backgroundColor: "#FAFAFA" }}>
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
            <Icon name='arrow-back' style={{ color: "white", fontSize: 20 }} />
        </TouchableOpacity>
    </View>
)