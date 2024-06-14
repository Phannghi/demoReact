import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteUsers } from '../../../services/apiService';
const ModalDeleteUser = (props) => {
    const { show, setShow, dataDelete } = props;

    const handleClose = () => setShow(false);
    const handleSubmitDelete = async () => {
        let data = await deleteUsers(dataDelete.id);
        //console.log('>>>component delete respone:', data);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            // Sau khi đóng modal thì gọi lại hàm fetch từ props để set lại ListUsers
            // await props.fetchListUsers();
            props.setCurrentPage(1);
            await props.fetchListUsersWithPaginate(1);
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete this user:
                    <p className='d-block mb-0'>Username:
                        <span className='ms-1 fw-bold'>
                            {dataDelete && dataDelete.username ? dataDelete.username : ""}
                        </span>
                    </p>
                    <p className='d-block mb-0'>Email:
                        <span className='ms-1 fw-bold'>
                            {dataDelete && dataDelete.email ? dataDelete.email : ""}
                        </span>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;