import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import UserInfo from './UserInfo';

const UserModal = ({datosUsuario}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Detalles
      </Button>
      <Modal title={datosUsuario.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <UserInfo datosUsuario={datosUsuario} ></UserInfo>
      </Modal>
    </>
  );
};
export default UserModal;