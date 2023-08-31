import React, { useState } from 'react';
import { Button, Modal } from 'antd';

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
        <p>{datosUsuario.username}</p>
        <p>{datosUsuario.address.street}</p>
        <p>{datosUsuario.phone}</p>
        <button onClick={()=>{handleCancel()}}></button>
      </Modal>
    </>
  );
};
export default UserModal;