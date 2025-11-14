// --- BƯỚC 1: "CHỌN" CÁC THẺ HTML CẦN DÙNG ---
// JS cần biết chúng ta sẽ "nghịch" vào những thẻ nào.
// Cách "chọn" này y hệt như cách bạn "chọn" bên CSS!

// 1.1. Tạo một "cái hộp" (biến) tên là 'anhAvatar'
//      để lưu trữ cái ảnh đại diện của bạn.
// 'const' là từ khóa nói "Tôi muốn tạo một cái hộp không thể thay đổi".
const anhAvatar = document.querySelector('.avatar');
// 1.2. Tạo một "cái hộp" tên là 'tieuDe'
//      để lưu trữ cái thẻ <h1> của bạn.
const tieuDe = document.querySelector('h1');



// --- BƯỚC 2: "LẮNG NGHE" SỰ KIỆN CLICK ---
// Ra lệnh cho cái 'anhAvatar' phải "nghe ngóng"
// khi nào người dùng click vào nó.
anhAvatar.addEventListener('click', function() {

    // Toàn bộ code bên trong cặp dấu { ... } này
  // sẽ CHỈ CHẠY khi 'anhAvatar' BỊ CLICK

  // --- BƯỚC 3: "HÀNH ĐỘNG" (Thay đổi nội dung) ---

  // Lấy cái 'tieuDe' (thẻ <h1>)
  // và thay đổi nội dung CHỮ (innerText) bên trong nó
  // thành một giá trị mới.
  tieuDe.innerText = "Cảm ơn đã ghé thăm!";
});

// --- BƯỚC 1: "CHỌN" CÁC ĐỐI TƯỢNG CẦN DÙNG ---

// 1.1. Chọn cái nút bấm của chúng ta
//      (Lần này dùng ID '#', giống CSS selector!)
const nutBamDark = document.querySelector('#dark-mode-toggle');

// 1.2. Chọn cái hộp CV chính (vì chúng ta muốn đổi nền nó)
const hopCV = document.querySelector('.cv-container');

// 1.3. Chọn CẢ CÁI THÂN TRANG (body) (để đổi nền xám bên ngoài)
const thanTrang = document.querySelector('body');


// --- BƯỚC 2: "LẮNG NGHE" SỰ KIỆN CLICK (PHIÊN BẢN NÂNG CẤP) ---
nutBamDark.addEventListener('click', function() {

  // --- BƯỚC 3.1: "HÀNH ĐỘNG" (Vẫn lật công tắc như cũ) ---
  hopCV.classList.toggle('dark-mode');
  thanTrang.classList.toggle('dark-mode');


  // --- BƯỚC 3.2: "BỘ NÃO" SUY NGHĨ (Code mới) ---

  // Tạo một "cái hộp" (biến) để KIỂM TRA
  // xem 'thanTrang' (body) CÓ CHỨA class 'dark-mode' hay không.
  // .contains() sẽ trả về 'true' (đúng) hoặc 'false' (sai)
  const dangBatCheDoToi = thanTrang.classList.contains('dark-mode');


  // Bắt đầu "ra quyết định"
  if (dangBatCheDoToi === true) {

    // NẾU (IF) đang BẬT chế độ tối (dangBatCheDoToi là 'true')
    // THÌ -> Đổi toàn bộ nội dung (innerHTML) của nút bấm

    nutBamDark.innerHTML = '<i class="fas fa-sun"></i> Tắt Chế Độ Tối';

  } else {

    // NGƯỢC LẠI (ELSE) (tức là đang TẮT chế độ tối)
    // THÌ -> Đổi nội dung của nút bấm VỀ ban đầu

    nutBamDark.innerHTML = '<i class="fas fa-moon"></i> Bật Chế Độ Tối';
  }

});