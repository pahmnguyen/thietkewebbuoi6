$(document).ready(function() {
    // Xử lý nút Clear
    $('#btnClear').click(function() {
        $('#regForm')[0].reset();
    });

    // Xử lý nút Finish & Kiểm tra (Validate)
    $('#btnFinish').click(function() {
        var fullname = $('#fullname').val().trim();
        var sex = $('input[name="sex"]:checked').val();
        var email = $('#email').val().trim();
        var birthday = $('#birthday').val().trim();
        var address = $('#address').val().trim();
        var city = $('#city').val().trim();
        var region = $('#region').val();
        var zipcode = $('#zipcode').val().trim();

        // 1. Kiểm tra các trường có dấu *
        if (!fullname || !sex || !email || !birthday || !address || !city || !region || !zipcode) {
            alert("Vui lòng điền đầy đủ các trường có dấu * !");
            return;
        }

        // 2. Kiểm tra Email
        var emailParts = email.split('@');
        if (emailParts.length !== 2) {
            alert("Email phải chứa đúng 1 ký tự '@'!");
            return;
        }
        var account = emailParts[0];
        var domain = emailParts[1];

        if (!account || (account.split('.').length - 1) > 1) {
            alert("Tên tài khoản email (trước @) chỉ được có tối đa 1 dấu chấm '.'!");
            return;
        }

        if (!domain || !domain.includes('.') || domain.startsWith('.') || domain.endsWith('.')) {
            alert("Tên miền email (sau @) phải có ít nhất 1 dấu chấm '.' hợp lệ!");
            return;
        }

        // 3. Kiểm tra Ngày tháng năm sinh (MM/DD/YYYY hoặc MM-DD-YYYY)
        var dateRegex = /^(\d{1,2})[/ -](\d{1,2})[/ -](\d{4})$/;
        var match = birthday.match(dateRegex);

        if (!match) {
            alert("Ngày sinh phải có dạng MM/DD/YYYY hoặc MM-DD-YYYY!");
            return;
        }

        var month = parseInt(match[1], 10);
        var year = parseInt(match[3], 10);
        var currentYear = new Date().getFullYear();

        if (month < 1 || month > 12) {
            alert("Tháng sinh phải từ 1 đến 12!");
            return;
        }

        if (year >= currentYear) {
            alert("Năm sinh phải nhỏ hơn năm hiện tại (" + currentYear + ")!");
            return;
        }

        // 4. Kiểm tra Zip code (đúng 5 số)
        var zipRegex = /^\d{5}$/;
        if (!zipRegex.test(zipcode)) {
            alert("Zip code phải có đúng 5 chữ số!");
            return;
        }

        alert("Đăng ký thành công!");
    });
});