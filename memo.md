# Lưu ý

## `Function as props`:

Khi truyền function từ cha sang con thì _không_ thêm dấu () để tránh gọi luôn hàm trước khi truyền sang con.
Ex: <DisplayInfo listUser={this.state.listUser} handleAddNewUser={this.handleAddNewUser} />

## Variable với JSX

không thể dùng cú pháp `{}` của JSX để in ra 1 object (_{id: 1, name: 'nghi}_)
