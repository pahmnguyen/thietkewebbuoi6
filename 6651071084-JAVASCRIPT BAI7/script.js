$(document).ready(function() {
    $('#linkForm').on('submit', function(e) {
        e.preventDefault();
        var url = $('#linkInput').val().trim();

        if (url === "") {
            alert("Vui lòng nhập đường link!");
            return;
        }

        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        var confirmRedirect = confirm("Bạn có muốn chuyển đến trang: " + url + " ?");
        if (confirmRedirect) {
            window.location.href = url;
        }
    });
});