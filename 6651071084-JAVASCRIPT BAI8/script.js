$(document).ready(function() {
    $('.btn-op').click(function() {
        var n1 = parseFloat($('#num1').val());
        var n2 = parseFloat($('#num2').val());
        var op = $(this).data('op');
        var res = 0;

        if (isNaN(n1) || isNaN(n2)) {
            $('#result').val("Lỗi");
            return;
        }

        switch (op) {
            case '+': res = n1 + n2; break;
            case '-': res = n1 - n2; break;
            case '*': res = n1 * n2; break;
            case '/': 
                res = n2 !== 0 ? (n1 / n2) : "Chia 0";
                break;
        }

        $('#result').val(res);
    });
});