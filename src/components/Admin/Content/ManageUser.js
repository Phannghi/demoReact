import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <h3 className="title">Manage Users</h3>
            <div className="user-content">
                <div>
                    <button className="btn btn-dark">Add new user</button>
                </div>
                <div className="">
                    table
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;