# Lưu ý

## Function as props:

Khi truyền function từ cha sang con thì _không_ thêm dấu () để tránh gọi luôn hàm trước khi truyền sang con.
Ex: <DisplayInfo listUser={this.state.listUser} handleAddNewUser={this.handleAddNewUser} />

## Variable với JSX

không thể dùng cú pháp `{}` của JSX để in ra 1 object (_{id: 1, name: 'nghi}_)

## React lifecycle

- hàm `componentDidMount()` là một phương thức vòng đời trong các class component của React. Nó được gọi ngay sau khi một component đã được thêm vào cây DOM. Đây là nơi lý tưởng để thực hiện các hoạt động yêu cầu component phải được render hoàn toàn, chẳng hạn như:
  _Fetch dữ liệu từ API_: Thực hiện các yêu cầu HTTP để lấy dữ liệu từ server.
  _Thiết lập subscriptions_: Đăng ký các subscriptions hoặc mở kết nối WebSocket.
  _Khởi tạo thư viện bên ngoài_: Khởi tạo các thư viện bên ngoài yêu cầu DOM đã được render, chẳng hạn như thư viện đồ họa hoặc thư viện giao diện người dùng.
- hàm `componentDidUpdate()` được dùng khi component được update, ví dụ khi component được update đến 1 thời điểm nhất định thì ta muốn làm một điều gì đó.
  > Cú pháp: **componentDidUpdate(prevProps, prevState, snapshot) {**
          // Thực hiện các hành động cần thiết sau khi component cập nhật
  **}**

## Function component

Function component không có `state` (`stateless`), không có hàm `setState`, react `Hook` ra đời để giải quyết vấn đề này
Function component không tồn tại keyword _this_, chỉ có class component mới có keyword _this_
Function component có đối số là _props_, component con tự động lấy được _props_ từ component cha truyền xuống, không cần thông qua hàm _constructor_

## useState

useState trả ra 2 tham số, 1 là tên của state , 2 là tên công cụ muốn cập nhật cho state, tên tham số thứ 2 nên bắt đầu bằng `set`

Nên dùng `const` để khai báo 1 useState, bởi vì useState nên để cho react quản lý chứ không được tự tiện gán hay cập nhật lại.
Ex: `const [isShowListUsers, setShowListUser] = useState(true);`

## useEffect

Cú pháp: `useEffect(setup, dependencies?)`
Nếu dependencies là 1 mảng rỗng [] thì useEffect chỉ chạy 1 lần, còn không thì mỗi một lần giá trị của dependencies thay đổi thì useEffect sẽ được gọi
`useEffect` được gọi sau khi render xong
Có thể viết nhiều hàm useEffect trong 1 function component

## export default function

Khi dùng export default function thì chỉ có 1 biến được export nên khi ta muốn sử dụng biến này ở file khác ta có thể đặt tên khác cho biến, miễn là ta để đúng đường dẫn import là được
Vd: file src/apis
`export default instance`
file src/services
`import abc from './src/apis'`
Trong ví dụ trên thì `abc` chính là biến `instance` đã export

# Redux

1. Khai báo dispatch+ actions
2. Khai báo reducer + logic
3. Sử dụng state của Redux
