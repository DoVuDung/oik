# Trang Web Trường THPT Ông Ích Khiêm

Đây là trang web chính thức của Trường THPT Ông Ích Khiêm được xây dựng bằng HTML, CSS và JavaScript.

## Tính năng

- Thiết kế responsive hoạt động trên tất cả các thiết bị
- Phần câu hỏi thường gặp theo kiểu accordion
- Thư viện ảnh carousel sử dụng Swiper.js
- Trợ lý AI chatbox
- Hệ thống xác thực người dùng (đăng nhập/đăng ký)
- Phần tin tức và sự kiện
- Thông tin trường học và chương trình đào tạo

## Bắt đầu

### Điều kiện tiên quyết

- Trình duyệt web hiện đại
- Python 3 (cho máy chủ phát triển cục bộ)

### Chạy dự án cục bộ

1. Clone hoặc tải xuống repository này
2. Điều hướng đến thư mục dự án
3. Khởi động máy chủ cục bộ bằng Python:

```bash
python3 -m http.server 8000
```

4. Mở trình duyệt và truy cập `http://localhost:8000`

### Phương pháp thay thế (nếu không có Python)

1. Clone hoặc tải xuống repository này
2. Mở tệp `index.html` trực tiếp trong trình duyệt

## Cấu trúc dự án

```
.
├── index.html          # Tệp HTML chính
├── script.js           # Chức năng JavaScript
├── styles.css          # Các kiểu CSS bổ sung
├── assets/
│   └── css/
│       └── main.css    # Các kiểu CSS tổng hợp
├── img/                # Tài nguyên hình ảnh
└── README.md           # Tệp này
```

## Các thành phần chính

### Phần Câu hỏi thường gặp
- Giao diện theo kiểu accordion cho câu hỏi và câu trả lời
- Phân tách rõ ràng giữa tiêu đề và nội dung
- Hiệu ứng mở/rút gọn mượt mà

### Thư viện hình ảnh
- Sử dụng Swiper.js cho carousel responsive
- Chức năng tự động phát
- Điều khiển điều hướng

### Chatbox
- Trợ lý AI hỗ trợ các câu hỏi liên quan đến trường
- Lịch sử trò chuyện liên tục
- Thiết kế responsive

## Tùy chỉnh

### Màu sắc
- Chính: #4e54c8 (xanh lam)
- Phụ: Các màu xám và trắng khác nhau
- Điểm nhấn: Gradient xanh lam

### Phông chữ
- Chính: 'Segoe UI' với các phông chữ dự phòng

## Phụ thuộc

Tất cả các phụ thuộc được tải qua CDN:
- Tailwind CSS
- Font Awesome
- Swiper.js
- Accordion.js

## Đóng góp

1. Fork repository
2. Tạo nhánh tính năng
3. Commit các thay đổi của bạn
4. Push lên nhánh
5. Tạo pull request

## Tác giả

Dung Do - https://www.dungdo.site

## Giấy phép

Dự án này dành cho mục đích giáo dục và không được cấp phép cho sử dụng thương mại.