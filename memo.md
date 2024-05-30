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
- hàm `componentDidUpdate()` được dùng khi component được update đến 1 thời điểm nhất định thì ta muốn làm một điều gì đó.
  > Cú pháp: **componentDidUpdate(prevProps, prevState, snapshot) {**
          // Thực hiện các hành động cần thiết sau khi component cập nhật
  **}**
