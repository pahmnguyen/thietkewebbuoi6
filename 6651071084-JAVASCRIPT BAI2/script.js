function getFormvalue(event) {
    if (event) event.preventDefault();

    var fname = $('input[name="fname"]').val();
    var lname = $('input[name="lname"]').val();

    alert('Họ và tên: ' + fname + ' ' + lname);
    return false;
}