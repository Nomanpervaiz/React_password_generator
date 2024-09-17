import React from 'react';
import { message, Space } from 'antd';
const AppMessage = ({ onClickAction }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Your Password is copied !',
        });
        if (onClickAction) {
            onClickAction()
          }
    };

    return (
        <>
            {contextHolder}
            <Space>
                <button  onClick={success} className="custonRadius outline-none border-none bg-blue-600 h-12 px-10 text-white rounded-e-lg ml-0">
                    Copy
                </button>
            </Space>
        </>
    );
};
export default AppMessage;