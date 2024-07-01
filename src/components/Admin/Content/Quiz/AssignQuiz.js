import Select from 'react-select';
import { useEffect, useState } from 'react';
import {
    getAllQuizAdmin,
    getAllUsers,
    postAssignQuizToUser,
} from '../../../../services/apiService';
import { toast } from 'react-toastify';
const AssignQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState({});

    const [listUser, setListUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        fetchAllQuiz();
        fetchAllUser();
    }, []);

    const fetchAllQuiz = async () => {
        let res = await getAllQuizAdmin();
        if (res && res.EC === 0) {
            let newQuiz = res.DT.map(item => {
                return {
                    value: item.id,
                    label: `${item.id} - ${item.name}`
                }
            })
            setListQuiz(newQuiz);
        }
    }

    const fetchAllUser = async () => {
        let res = await getAllUsers();
        if (res && res.EC === 0) {
            let newUser = res.DT.map(item => {
                return {
                    value: item.id,
                    label: `${item.id} - ${item.username} - ${item.email}`
                }
            })
            setListUser(newUser);
        }
    }

    const handleAssign = async () => {
        let res = await postAssignQuizToUser(selectedQuiz.value, selectedUser.value);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            setSelectedQuiz({});
            setSelectedUser({});
        } else {
            toast.error(res.EM);
        }
    }

    return (
        <div className='assign-quiz-container row'>
            <div className="col-6 select-quiz">
                <label className='form-label fs-6 fw-normal'>Select quiz:</label>
                <Select
                    defaultValue={selectedQuiz}
                    onChange={setSelectedQuiz}
                    value={selectedQuiz}
                    options={listQuiz}
                />
            </div>
            <div className="col-6 select-quiz">
                <label className='form-label fs-6 fw-normal'>Select user:</label>
                <Select
                    defaultValue={selectedUser}
                    onChange={setSelectedUser}
                    value={selectedUser}
                    options={listUser}
                />
            </div>
            <div className='mt-3'>
                <button
                    className='btn btn-primary'
                    onClick={() => handleAssign()}>Assign</button>
            </div>
        </div>
    )
}
export default AssignQuiz;