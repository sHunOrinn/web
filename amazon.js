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

let currentPage = 1; // Khởi tạo trang hiện tại
const totalPages = 6; // Tổng số trang

function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        updatePagination();
    }
}

function changePage(direction) {
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next' && currentPage < totalPages) {
        currentPage++;
    }
    updatePagination();
}

function updatePagination() {
    const pageNumbers = document.querySelectorAll('.page-number');
    pageNumbers.forEach((num, index) => {
        if (index + 1 === currentPage) {
            num.classList.add('active');
        } else {
            num.classList.remove('active');
        }
    });

    document.querySelector('.prev').disabled = currentPage === 1;
    document.querySelector('.next').disabled = currentPage === totalPages;
}

// Gọi hàm để khởi tạo giao diện phân trang ban đầu
updatePagination();


