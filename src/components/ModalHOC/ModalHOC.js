import React from "react"
import { Modal } from "react-native"
export default props => (
    <Modal
        animationType="slide"
        transparent={false}
        visible={props.visible}
        onRequestClose={props.handleClose}
    >
        {props.children}
    </Modal>
)
