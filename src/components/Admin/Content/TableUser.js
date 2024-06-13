import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
const TableUser = (props) => {
    const { listUsers } = props;

    return (
        <>
            <table className="table table-success table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
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
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
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