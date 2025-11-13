# 🚀 Portfolio Website - Hướng dẫn sử dụng

Website portfolio cá nhân hiện đại với nhiều hiệu ứng 3D và animations đẹp mắt.

## 📋 Mục lục
- [Tính năng](#tính-năng)
- [Cài đặt](#cài-đặt)
- [Tùy chỉnh](#tùy-chỉnh)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)

## ✨ Tính năng

### 🎨 Hiệu ứng Visual
- ✅ Particle background động
- ✅ Hiệu ứng 3D khi hover
- ✅ Gradient animations
- ✅ Parallax scrolling
- ✅ Smooth scroll navigation
- ✅ Typing effect tự động
- ✅ Dark/Light mode toggle
- ✅ Loading screen đẹp mắt
- ✅ Custom cursor follower

### 📱 Sections
- ✅ Hero section với giới thiệu
- ✅ About - Thông tin cá nhân
- ✅ Skills - Kỹ năng chuyên môn
- ✅ Projects - Dự án đã làm
- ✅ Experience - Kinh nghiệm làm việc
- ✅ Achievements - Thành tựu & chứng chỉ
- ✅ Services - Dịch vụ cung cấp
- ✅ Testimonials - Đánh giá từ khách hàng
- ✅ Blog - Bài viết gần đây
- ✅ Contact - Liên hệ

### 🔧 Tính năng bổ sung
- ✅ Mobile responsive 100%
- ✅ Project filtering
- ✅ Form validation
- ✅ Back to top button
- ✅ Social media links
- ✅ Download CV/Resume
- ✅ Easter egg (Konami Code)

## 🚀 Cài đặt

### Bước 1: Clone hoặc tải về
```bash
# Clone repository
git clone [your-repo-url]

# Hoặc tải file ZIP và giải nén
```

### Bước 2: Mở file
```bash
# Mở index.html bằng trình duyệt
# Hoặc sử dụng Live Server trong VS Code
```

### Bước 3: Tùy chỉnh
Chỉnh sửa file `config.js` để thay đổi thông tin cá nhân của bạn.

## 🎨 Tùy chỉnh

### 1. Thông tin cá nhân (config.js)
```javascript
const CONFIG = {
    name: "Tên của bạn",
    roles: ["Web Developer", "Designer"],
    email: "your.email@example.com",
    phone: "+84 xxx xxx xxx",
    // ... thêm thông tin khác
};
```

### 2. Màu sắc (style.css)
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* Thay đổi các màu này theo sở thích */
}
```

### 3. Thêm dự án mới (index.html)
```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="đường-dẫn-ảnh.jpg" alt="Tên dự án">
        <!-- ... -->
    </div>
    <div class="project-info">
        <h3>Tên dự án</h3>
        <p>Mô tả dự án...</p>
        <!-- ... -->
    </div>
</div>
```

### 4. Thay đổi ảnh
- Avatar: Tìm `https://via.placeholder.com/300` và thay bằng link ảnh của bạn
- Project images: Thay các placeholder trong phần projects
- About image: Thay ảnh trong about section

### 5. Cập nhật social media
Tìm các thẻ `<a href="#">` trong phần social links và thay `#` bằng link của bạn:
```html
<a href="https://github.com/your-username" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

## 📁 Cấu trúc thư mục

```
portfolio/
├── index.html          # File HTML chính
├── style.css           # CSS và animations
├── script.js           # JavaScript chính
├── config.js           # File cấu hình (tùy chỉnh dễ dàng)
├── animations.css      # CSS animations nâng cao
├── theme.css           # Dark/Light theme styles
├── README.md           # File này
└── assets/            # Thư mục chứa ảnh, icons
    ├── images/
    ├── icons/
    └── cv/            # File CV/Resume
```

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc trang
- **CSS3** - Styling và animations
- **JavaScript (ES6+)** - Tương tác và logic
- **Particles.js** - Hiệu ứng particle background
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📝 Các section cần cập nhật

### Hero Section
- [ ] Thay tên của bạn
- [ ] Cập nhật các role/title
- [ ] Thêm ảnh avatar
- [ ] Cập nhật description

### About Section
- [ ] Thêm thông tin cá nhân
- [ ] Cập nhật ngày sinh, địa chỉ
- [ ] Thêm email, số điện thoại
- [ ] Upload file CV

### Skills Section
- [ ] Thêm/xóa kỹ năng
- [ ] Cập nhật % cho mỗi skill
- [ ] Thêm công nghệ mới

### Projects Section
- [ ] Thêm ảnh dự án
- [ ] Viết mô tả chi tiết
- [ ] Thêm link demo và source code
- [ ] Cập nhật tags/technologies

### Experience Section
- [ ] Thêm kinh nghiệm làm việc
- [ ] Cập nhật học vấn
- [ ] Thêm thành tựu

### Contact Section
- [ ] Cập nhật thông tin liên hệ
- [ ] Kết nối form với backend (nếu cần)
- [ ] Thêm Google Maps (tùy chọn)

## 🎯 Tips & Tricks

### Performance
- Tối ưu hóa ảnh trước khi upload (nên dùng WebP)
- Minify CSS và JS khi deploy
- Sử dụng lazy loading cho ảnh

### SEO
- Thêm meta tags trong `<head>`
- Cập nhật title và description
- Thêm Open Graph tags cho social media

### Deployment
- **GitHub Pages**: Miễn phí, dễ dàng
- **Netlify**: Deploy tự động từ Git
- **Vercel**: Tốc độ cao, CDN global

## 🐛 Troubleshooting

### Particles không hiển thị?
- Kiểm tra xem đã load particles.js chưa
- Xem console log để debug

### Animations không chạy?
- Kiểm tra IntersectionObserver có được support không
- Thử scroll lại section đó

### Form không gửi được?
- Cần kết nối với backend hoặc service (FormSpree, EmailJS)
- Hiện tại chỉ là demo validation

## 📞 Hỗ trợ

Nếu bạn gặp vấn đề hoặc có câu hỏi:
1. Kiểm tra console log trong browser (F12)
2. Đọc kỹ hướng dẫn trong README
3. Google search error message

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa cho dự án cá nhân hoặc thương mại.

## 🎉 Easter Eggs

- Thử nhấn Konami Code: ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA
- Xem console log để tìm thêm surprises!

---

**Made with ❤️ by Your Name**

Happy coding! 🚀