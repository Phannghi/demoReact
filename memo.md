# Lưu ý

## `Function as props`:

Khi truyền function từ cha sang con thì _không_ thêm dấu () để tránh gọi luôn hàm trước khi truyền sang con.
Ex: <DisplayInfo listUser={this.state.listUser} handleAddNewUser={this.handleAddNewUser} />
