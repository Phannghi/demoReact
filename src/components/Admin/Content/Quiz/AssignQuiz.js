import Select from 'react-select';
import { useEffect, useState } from 'react';
import { getAllQuizAdmin, getAllUsers } from '../../../../services/apiService';
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
                    label: `${item.id} - ${item.description}`
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
                <button className='btn btn-primary'>Assign</button>
            </div>
        </div>
    )
}
export default AssignQuiz;