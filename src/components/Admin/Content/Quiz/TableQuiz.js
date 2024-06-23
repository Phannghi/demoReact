import { useEffect, useState } from "react";
import { getAllQuizAdmin } from "../../../../services/apiService";
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);

    useEffect(() => {
        fetchAllQuiz();
    }, [])

    const fetchAllQuiz = async () => {
        let res = await getAllQuizAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT);
        }
    }

    return (
        <table className="table table-bordered table-primary table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {listQuiz && listQuiz.map((item, index) => {
                    return (
                        <tr key={`table-quiz-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.difficulty}</td>
                            <td>
                                <div className="d-flex align-items-center gap-1">
                                    <button
                                        className="btn-action"
                                        onClick={() => props.handleClickBtnView(item)} >
                                        <FaEye />
                                    </button>
                                    <button
                                        className="btn-action"
                                        onClick={() => props.handleClickBtnUpdate(item)}>
                                        <MdEdit />
                                    </button>
                                    <button className="btn-action"
                                        onClick={() => props.handleClickBtnDelete(item)}>
                                        <MdDelete color="red" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default TableQuiz;