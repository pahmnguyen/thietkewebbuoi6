function getOptions() {
    var options = $('#mySelect option');
    var count = options.length;
    var result = "Số lượng các mục: " + count + "\nDanh sách gồm:\n";

    options.each(function(index, item) {
        result += (index + 1) + ". " + $(item).text() + "\n";
    });

    alert(result);
}