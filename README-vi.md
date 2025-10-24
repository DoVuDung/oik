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

## Hướng dẫn triển khai

### Thêm trang mới
1. Tạo tệp HTML mới dựa trên cấu trúc hiện có
2. Đảm bảo nội dung header và footer nhất quán
3. Liên kết đến tệp CSS chính (`assets/css/main.css`)
4. Thêm liên kết điều hướng trong cả menu desktop và mobile

### Sửa đổi kiểu dáng
1. Tất cả CSS nên được thêm vào `assets/css/main.css`
2. Sử dụng các lớp hiện có làm ví dụ để đảm bảo tính nhất quán
3. Tuân theo cách tiếp cận mobile-first với các truy vấn phương tiện thích hợp

### Thêm tính năng mới
1. Thêm cấu trúc HTML trong phần thích hợp
2. Triển khai CSS trong `assets/css/main.css`
3. Thêm chức năng JavaScript trong `script.js` nếu cần
4. Kiểm tra trên các kích thước thiết bị khác nhau

### Làm việc với Chatbox
1. Chatbox sử dụng ghép nối mẫu đơn giản cho các phản hồi
2. Thêm các mẫu phản hồi mới trong hàm `getAIResponse`
3. Đảm bảo các phản hồi bằng tiếng Việt để duy trì tính nhất quán

### Cập nhật thư viện hình ảnh
1. Thêm hình ảnh mới vào thư mục `img/`
2. Cập nhật HTML carousel Swiper với các thẻ hình ảnh mới
3. Đảm bảo hình ảnh được tối ưu hóa đúng cách cho web

## Đóng góp

1. Fork repository
2. Tạo nhánh tính năng
3. Commit các thay đổi của bạn
4. Push lên nhánh
5. Tạo pull request

### Tiêu chuẩn mã
- Tuân theo định dạng mã và cấu trúc hiện có
- Sử dụng các phần tử HTML ngữ nghĩa
- Duy trì cách đặt tên lớp CSS nhất quán
- Bình luận chức năng JavaScript phức tạp
- Kiểm tra các thay đổi trên các trình duyệt khác nhau

### Báo cáo vấn đề
- Sử dụng trình theo dõi Vấn đề GitHub
- Cung cấp mô tả chi tiết về vấn đề
- Bao gồm các bước để tái tạo vấn đề
- Chỉ định thông tin trình duyệt và thiết bị

## Tác giả

Dung Do - https://www.dungdo.site

## Giấy phép

Dự án này dành cho mục đích giáo dục và không được cấp phép cho sử dụng thương mại.