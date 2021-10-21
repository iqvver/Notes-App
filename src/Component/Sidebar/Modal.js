import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { observer } from "mobx-react-lite"
import { DeleteOutlined } from '@ant-design/icons';
import '../Note.css'

const Window = ({ store }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (e) => {
    e.stopPropagation()
    store.removeItem()
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" size='small' onClick={showModal}>
        <DeleteOutlined />
      </Button>
      <Modal title="Удаление" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Удалить?</p>
      </Modal>
    </>
  );
};

export default observer(Window)