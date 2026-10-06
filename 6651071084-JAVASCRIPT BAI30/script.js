function insert_Row() {
    var table = document.getElementById("sampleTable");

    // Chèn một hàng mới ở cuối bảng (-1)
    var newRow = table.insertRow(-1);

    // Chèn 2 ô mới vào hàng vừa tạo
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Gán giá trị hiển thị cho các ô
    cell1.innerHTML = "New cell1";
    cell2.innerHTML = "New cell2";
}