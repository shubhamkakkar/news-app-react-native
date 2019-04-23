import React from "react"
import { TouchableOpacity } from "react-native"
import { Container, Content, List, Text } from 'native-base';
import PickerCommon from "../PickerCommon/PickerCommon"
import HeaderComponent from "../Header/Header"
export default props => (
    <Container>
        <HeaderComponent title={"Categories"} />
        <Content>
            <List>
                {
                    props.category.map((category, index) => (
                        <PickerCommon
                            key={index}
                            label={category.label}
                            index={index}
                            sendToRedux={props.sendToRedux}
                            choice={"category"}>
                            <Text style={{ textTransform: "capitalize" }}>
                                {category.label[0]}
                                {category.label[1]}
                            </Text>
                        </PickerCommon>
                    ))
                }
            </List>
        </Content>
    </Container>
)
