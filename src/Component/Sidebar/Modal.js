import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { observer } from "mobx-react-lite"
import { DeleteOutlined } from '@ant-design/icons';
import '../Note.css'

const Window = ({ store }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  }; //вызов модального окна для подтверждения удаления заметки

  const handleOk = (e) => {
    e.stopPropagation()
    store.removeItem()
    setIsModalVisible(false);
  }; //подтверждение удаления кнопкой "ОК"

  const handleCancel = () => {
    setIsModalVisible(false);
  }; //Отмена. Закрытие модального окна

  return (
    <>
      <Button type="primary" size='small' onClick={showModal}> <DeleteOutlined /> </Button> {/*кнопка удалить заметку "+*/}
      <Modal title="Удаление" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>  {/*подтверждение удаления или отмена*/}
        <p>Удалить?</p>
      </Modal>
    </>
  );
};

export default observer(Window)