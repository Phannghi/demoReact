import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiService'
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
const ManageUser = (props) => {
    const [showCreateUser, setShowCreateUser] = useState(false);
    const [showUpdateUser, setShowUpdateUser] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);
    const [showViewUser, setShowViewUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});

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

    const handleClickBtnUpdate = (user) => {
        setShowUpdateUser(true);
        setDataUpdate(user);
        //console.log(user);
    }

    const handleClickBtnView = (user) => {
        setShowViewUser(true);
        setDataUpdate(user);
        //console.log('View user: ',user);
    }

    const handleClickBtnDelete = (user) => {
        setShowDeleteUser(true);
        setDataDelete(user);
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
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete} />
                </div>
                <ModalCreateUser
                    show={showCreateUser}
                    setShow={setShowCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showUpdateUser}
                    setShow={setShowUpdateUser}
                    dataUpdate={dataUpdate}
                    setDataUpdate={setDataUpdate}
                    fetchListUsers={fetchListUsers}
                />
                <ModalViewUser
                    show={showViewUser}
                    setShow={setShowViewUser}
                    dataUpdate={dataUpdate}
                    setDataUpdate={setDataUpdate}
                />
                <ModalDeleteUser
                    show={showDeleteUser}
                    setShow={setShowDeleteUser}
                    dataDelete={dataDelete}
                    setDataDelete={setDataDelete}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}
export default ManageUser;