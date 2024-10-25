// Hàm dùng để cuộn lên đầu trang
function scrollTop(){
    document.body.scrollTop=0; // Đối với Safari
    document.documentElement.scrollTop=0; // Đối với Chrome FireFox IE và Opera
}