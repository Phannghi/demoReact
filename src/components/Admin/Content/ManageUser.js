import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState } from "react";
import TableUser from "./TableUser";
const ManageUser = (props) => {
    const [showCreateUser, setShowCreateUser] = useState(false);
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
                    <TableUser />
                    <ModalCreateUser show={showCreateUser} setShow={setShowCreateUser} />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;