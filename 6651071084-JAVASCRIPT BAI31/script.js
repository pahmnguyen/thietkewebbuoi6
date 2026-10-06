function removecolor() {
    var selectBox = document.getElementById("colorSelect");
    var selectedIndex = selectBox.selectedIndex;

    // Kiểm tra nếu có mục đang được chọn thì mới xóa
    if (selectedIndex !== -1) {
        selectBox.remove(selectedIndex);
    }
}