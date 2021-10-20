import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Modal, Button } from 'antd';
import { observer } from "mobx-react-lite"

const Window = ({store}) => {
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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Удалить заметку?</p>
      </Modal>
    </>
  );
};

export default observer(Window)