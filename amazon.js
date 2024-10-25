$(document).ready(function() {
    $('#see-more-btn').click(function() {
        $('#hiddenContent').show(); // Hiển thị nội dung khi nhấn nút
        $('#see-more-btn').hide(); // Ẩn nút hiện thêm để hiện nội dung
        $('#see-less-btn').show(); // Hiện nút ẩn bớt để quay lại nút See More
    });

    $('#see-less-btn').click(function() {
        $('#hiddenContent').hide(); // Hiển thị nội dung khi nhấn nút
        $('#see-more-btn').show(); // Ẩn nút hiện thêm để hiện nội dung
        $('#see-less-btn').hide();
    });
});

