import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteQuiz } from '../../../../services/apiService';
const ModalDeleteQuiz = (props) => {
    const { show, setShow, dataDelete } = props;
    const handleClose = () => setShow(false);

    const handleSubmitDelete = async () => {
        let data = await deleteQuiz(dataDelete.id);
        //console.log('>>>component delete respone:', data);

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            // Sau khi đóng modal thì gọi lại hàm fetch từ props để set lại ListUsers
            await props.fetchAllQuiz();
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
                    <Modal.Title>Delete Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete this quiz:
                    <p className='d-block mb-0'>Id:
                        <span className='ms-1 fw-bold'>
                            {dataDelete && dataDelete.id ? dataDelete.id : ""}
                        </span>
                    </p>
                    <p className='d-block mb-0'>Name:
                        <span className='ms-1 fw-bold'>
                            {dataDelete && dataDelete.name ? dataDelete.name : ""}
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
    )
}
export default ModalDeleteQuiz;