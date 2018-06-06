import React from "react";
import { Modal } from "antd";

const ModalDialog = (props, children) => {
    return (
        <div>
            <Modal
                title={props.title}
                visible={props.visible}
                onOk={props.handleOk}
                confirmLoading={props.confirmLoading}
                onCancel={props.handleCancel}
                width={props.width}
                style={{ top: 20 }}
                maskClosable={false}
                closable={false}
            >
                {props.children}
            </Modal>
        </div>
    );
};

export default ModalDialog;
