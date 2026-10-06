function display_random_image() {
    // Danh sách ảnh kèm kích thước tương ứng
    var imageList = [
        {
            src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
            width: "240",
            height: "160"
        },
        {
            src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
            width: "320",
            height: "195"
        },
        {
            src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
            width: "500",
            height: "343"
        }
    ];

    // Chọn ngẫu nhiên 1 chỉ số từ 0 đến 2
    var randomIndex = Math.floor(Math.random() * imageList.length);
    var selectedImg = imageList[randomIndex];

    var container = document.getElementById("imageArea");

    // Xóa ảnh cũ trước đó (nếu có)
    container.innerHTML = "";

    // Tạo phần tử <img> mới bằng DOM
    var imgElement = document.createElement("img");
    imgElement.src = selectedImg.src;
    imgElement.width = selectedImg.width;
    imgElement.height = selectedImg.height;

    // Chèn thẻ img vào div container
    container.appendChild(imgElement);
}