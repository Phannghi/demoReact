import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <h3 classNameName="title">Manage Users</h3>
            <div classNameName="user-content">
                <div>
                    <button classNameName="btn btn-dark">Add new user</button>
                </div>
                <div classNameName="">
                    table
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    )
}
export default ManageUser;