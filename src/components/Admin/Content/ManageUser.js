import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiService'
import TableUser from "./TableUser";
const ManageUser = (props) => {
    const [showCreateUser, setShowCreateUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetchListUsers();
    }, [])

    const fetchListUsers = async () => {
        let resp = await getAllUsers();
        // console.log('check resp fetch', resp);
        if (resp.EC === 0) {
            setListUsers(resp.DT);
        }
    }

    return (
        <div className="manage-user-container">
            <h3 className="title">Manage Users</h3>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="d-flex align-items-center gap-1 btn btn-primary"
                        onClick={() => setShowCreateUser(true)}>
                        <FcPlus /> Add new user
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUser listUsers={listUsers} />
                </div>
                <ModalCreateUser
                    show={showCreateUser}
                    setShow={setShowCreateUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}
export default ManageUser;