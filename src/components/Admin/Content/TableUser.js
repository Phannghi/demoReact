import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiService'
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
const TableUser = (props) => {
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetchListUsers();
    }, [])

    const fetchListUsers = async () => {
        let resp = await getAllUsers();
        console.log('check resp fetch', resp);
        if (resp.EC === 0) {
            setListUsers(resp.DT);
        }
    }
    return (
        <>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <div className="d-flex align-items-center gap-1">
                                            <button className="btn-action"><FaEye /></button>
                                            <button className="btn-action"><MdEdit /></button>
                                            <button className="btn-action"><MdDelete /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    {listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={4}>Not found data</td>
                        </tr>}
                </tbody>
            </table>
        </>
    )
}
export default TableUser;