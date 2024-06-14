import ReactPaginate from "react-paginate";
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

const TableUserPaginate = (props) => {
    const { listUsers, pageCount, fetchListUsersWithPaginate } = props;

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        //console.log(`User requested page number ${event.selected + 1}`);
        props.setCurrentPage(+event.selected + 1);
        fetchListUsersWithPaginate(+event.selected + 1);
    };
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
                            <td colSpan={5}>Not found data</td>
                        </tr>}
                </tbody>
            </table>
            <ReactPaginate
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< Prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination justify-content-end pt-2"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={props.currentPage - 1}
            />
        </>
    )
}
export default TableUserPaginate;