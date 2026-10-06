function getFormvalue(event) {
    // Ngăn chặn sự kiện mặc định của form để không bị tải lại trang
    if (event) {
        event.preventDefault();
    }

    var form = document.getElementById("form1");
    var fname = form.elements["fname"].value;
    var lname = form.elements["lname"].value;

    alert("Họ và tên: " + fname + " " + lname);
    return false;
}