import React from "react"
import { Container, Content, List, Text } from 'native-base';
import PickerCommon from "../PickerCommon/PickerCommon"
import HeaderComponent from "../Header/Header"
export default props => (
    <Container>
        <HeaderComponent title={"Countries"} />
        <Content>
            <List>
                {
                    props.country.map((country, index) => (
                        <PickerCommon key={index} label={country.label}>
                            <Text style={{ textTransform: "capitalize" }}>
                                {country.code}
                            </Text>
                        </PickerCommon>
                    ))
                }
            </List>
        </Content>
    </Container>
)
