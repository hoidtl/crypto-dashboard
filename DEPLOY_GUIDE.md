# 🚀 HƯỚNG DẪN DEPLOY & NỘP BÀI

## 🎯 Mục tiêu

1. ✅ Deploy app lên hosting → Có link demo
2. ✅ Quay video demo → Có link video
3. ✅ Gửi email với đầy đủ thông tin

---

## BƯỚC 1: DEPLOY LÊN VERCEL (5 phút)

### 1.1. Chuẩn bị GitHub

```bash
# Di chuyển vào folder project
cd crypto-dashboard

# Khởi tạo Git (nếu chưa có)
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit: Crypto Dashboard"

# Tạo branch main
git branch -M main
```

### 1.2. Push lên GitHub

**Cách 1: Tạo repo trên GitHub trước**
```
1. Vào: https://github.com
2. Click "New repository"
3. Tên: crypto-dashboard
4. Public (không private!)
5. Không tích "Initialize with README"
6. Click "Create repository"
7. Copy URL: https://github.com/YOUR_USERNAME/crypto-dashboard.git
```

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/crypto-dashboard.git

# Push
git push -u origin main
```

**Cách 2: GitHub CLI (nếu đã cài gh)**
```bash
gh repo create crypto-dashboard --public --source=. --push
```

### 1.3. Deploy lên Vercel

**Bước 1: Đăng ký Vercel**
```
1. Vào: https://vercel.com
2. Click "Sign Up"
3. Chọn "Continue with GitHub"
4. Authorize Vercel
```

**Bước 2: Import Project**
```
1. Click "Add New..." → "Project"
2. Chọn "Import Git Repository"
3. Tìm repo "crypto-dashboard"
4. Click "Import"
```

**Bước 3: Configure**
```
Framework Preset: Create React App (tự động detect)
Root Directory: ./
Build Command: npm run build (tự động)
Output Directory: build (tự động)

→ Click "Deploy"
```

**Bước 4: Đợi deploy**
```
⏳ Building... (1-2 phút)
✅ Deployed!

→ Nhận link: https://crypto-dashboard-abc123.vercel.app
```

**Bước 5: Test link**
```
1. Click vào link
2. Kiểm tra app hoạt động
3. Test trên mobile
4. Test tất cả tính năng
```

### 1.4. Custom Domain (Optional)

```
Settings → Domains → Add
→ Có thể dùng domain riêng nếu muốn
```

---

## BƯỚC 2: QUAY VIDEO DEMO (5 phút)

### 2.1. Chuẩn bị

```
✅ Đóng tất cả tabs không cần thiết
✅ Đóng notifications
✅ Mở app ở tab mới
✅ Chuẩn bị script (xem bên dưới)
✅ Test mic (nếu có voice over)
```

### 2.2. Script quay video (2-3 phút)

```
[0:00-0:10] Intro
"Xin chào, đây là bài test Crypto Dashboard của em"
→ Hiện trang chủ, loading spinner

[0:10-0:30] Desktop View
"Giao diện desktop hiển thị dạng table với 20 coins"
→ Scroll xuống, zoom vào các cột
"Giá được format chuẩn, màu xanh là tăng, đỏ là giảm"

[0:30-0:45] Search
"Tính năng search real-time"
→ Gõ "bit", hiện Bitcoin, Bitcoin Cash
→ Xóa search

[0:45-1:00] Sort
"Sort theo giá tăng dần"
→ Click Price, icon đổi thành ↑
"Sort theo % thay đổi giảm dần"
→ Click 24h Change 2 lần, icon ↓

[1:00-1:10] Refresh
"Nút Refresh cập nhật data mới"
→ Click Refresh, loading spinner

[1:10-1:20] Dark Mode
"Toggle Dark/Light mode"
→ Click 🌙, chuyển dark
→ Click ☀️, chuyển light

[1:20-1:40] Responsive
"Giao diện responsive"
→ F12, Ctrl+Shift+M
→ Chọn iPhone 12 Pro
"Mobile hiển thị dạng card"
→ Scroll xem cards

[1:40-2:00] Error Handling
"Error handling khi mất mạng"
→ DevTools → Offline
→ Click Refresh
→ Error message xuất hiện
→ Bỏ Offline
→ Click "Try Again"
→ Load lại thành công

[2:00-2:10] Outro
"Cảm ơn đã xem!"
→ Zoom out toàn bộ
```

### 2.3. Tools quay màn hình

#### Windows - OBS Studio (Khuyến nghị)
```
1. Download: https://obsproject.com
2. Cài đặt
3. Sources → + → Display Capture
4. Settings → Output → Recording Quality: High
5. Start Recording
6. Làm theo script
7. Stop Recording
8. File lưu ở: Videos/
```

#### Windows - Xbox Game Bar (Nhanh)
```
1. Win + G
2. Click nút Record (hoặc Win + Alt + R)
3. Làm theo script
4. Win + Alt + R để stop
5. File lưu ở: Videos/Captures/
```

#### Mac - QuickTime
```
1. Cmd + Space → QuickTime
2. File → New Screen Recording
3. Click Record
4. Làm theo script
5. Stop
6. File → Save
```

#### Online - Loom (Dễ nhất)
```
1. Vào: https://www.loom.com
2. Sign up free
3. Cài Chrome extension
4. Click icon Loom
5. Chọn "Screen + Camera" hoặc "Screen Only"
6. Start Recording
7. Làm theo script
8. Stop
9. → Nhận link ngay, không cần upload!
```

### 2.4. Edit video (Optional)

```
- Cắt phần đầu/cuối thừa
- Thêm text overlay (tên, tính năng)
- Tăng tốc độ phần chậm (1.5x)
- Tools: DaVinci Resolve (free), iMovie (Mac)
```

---

## BƯỚC 3: UPLOAD VIDEO

### Option 1: Google Drive (Khuyến nghị)

```
1. Vào: https://drive.google.com
2. Click "New" → "File upload"
3. Chọn video
4. Đợi upload xong
5. Right click video → "Share"
6. "Anyone with the link" → "Viewer"
7. Copy link
8. Paste vào email
```

### Option 2: YouTube (Unlisted)

```
1. Vào: https://studio.youtube.com
2. Click "Create" → "Upload videos"
3. Chọn video
4. Title: "Crypto Dashboard - [Họ tên]"
5. Visibility: "Unlisted" (không public!)
6. Click "Save"
7. Copy link
8. Paste vào email
```

### Option 3: Loom (Tự động)

```
Nếu dùng Loom → Link tự động có sẵn
Copy link → Paste vào email
```

---

## BƯỚC 4: CHỤP SCREENSHOTS

### Desktop View
```
1. Mở app full screen
2. Win + Shift + S (Windows) hoặc Cmd + Shift + 4 (Mac)
3. Chụp toàn bộ table
4. Lưu: desktop-view.png
```

### Mobile View
```
1. F12 → Device Mode (Ctrl+Shift+M)
2. Chọn iPhone 12 Pro
3. Chụp màn hình
4. Lưu: mobile-view.png
```

### Dark Mode
```
1. Click 🌙
2. Chụp màn hình
3. Lưu: dark-mode.png
```

### Upload screenshots
```
1. Upload lên Google Drive
2. Hoặc đính kèm trực tiếp vào email
3. Hoặc để trong GitHub repo (folder /screenshots)
```

---

## BƯỚC 5: GỬI EMAIL

### 5.1. Checklist trước khi gửi

```
✅ Link demo hoạt động (test incognito)
✅ Link GitHub public
✅ Link video hoạt động
✅ Screenshots đẹp
✅ README.md đầy đủ trong repo
✅ Không có lỗi console
✅ Test trên mobile
✅ Kiểm tra chính tả
```

### 5.2. Compose email

```
To: tuyendung@genesis-escape.vn
Subject: [Họ tên] - Bài test Frontend Developer - Crypto Dashboard

[Xem file EMAIL_TEMPLATE.md để có template đầy đủ]
```

### 5.3. Đính kèm

```
Option 1: Links trong email body
- Link demo
- Link GitHub
- Link video
- Link screenshots (Google Drive)

Option 2: Attachments
- Screenshots (nếu nhẹ < 5MB)
- Không attach video (quá nặng)
```

### 5.4. Gửi

```
1. Đọc lại email 2-3 lần
2. Test tất cả links
3. Click "Send"
4. Gửi vào giờ hành chính (9h-17h, T2-T6)
```

---

## BƯỚC 6: FOLLOW UP (Optional)

### Sau 3-5 ngày không có phản hồi:

```
Subject: Follow up - [Họ tên] - Bài test Crypto Dashboard

Kính gửi team tuyển dụng,

Em là [Họ tên], em đã gửi bài test Crypto Dashboard vào ngày [ngày/tháng].

Em muốn follow up xem team đã nhận được bài test của em chưa ạ?

Link demo: [link]
Email gốc: [ngày gửi]

Em cảm ơn và mong nhận được phản hồi!

Trân trọng,
[Họ tên]
```

---

## 🎯 CHECKLIST TỔNG HỢP

### Deploy
- [ ] Code push lên GitHub
- [ ] Repo public (không private)
- [ ] Deploy lên Vercel thành công
- [ ] Link demo hoạt động
- [ ] Test tất cả tính năng trên link demo
- [ ] Test trên mobile

### Video
- [ ] Quay video 2-3 phút
- [ ] Rõ ràng, không bị mờ
- [ ] Demo đầy đủ tính năng
- [ ] Upload lên Drive/YouTube
- [ ] Link video hoạt động

### Screenshots
- [ ] Desktop view
- [ ] Mobile view
- [ ] Dark mode
- [ ] Upload hoặc đính kèm

### Email
- [ ] Subject đúng format
- [ ] Link demo ở đầu
- [ ] Link GitHub
- [ ] Link video
- [ ] Liệt kê tính năng
- [ ] Thông tin liên hệ đầy đủ
- [ ] Kiểm tra chính tả
- [ ] Test tất cả links

### Repo
- [ ] README.md đầy đủ
- [ ] Code sạch, có comments
- [ ] Không có node_modules
- [ ] .gitignore đúng
- [ ] Package.json đầy đủ

---

## 💡 TIPS QUAN TRỌNG

1. **Test link demo trước khi gửi** (incognito mode)
2. **Video ngắn gọn** (2-3 phút), không dài dòng
3. **Email professional**, không casual
4. **Gửi vào giờ hành chính** để dễ được đọc
5. **Subject rõ ràng** để dễ tìm
6. **Link demo ở đầu email** để dễ thấy
7. **Backup video** (lưu nhiều nơi)
8. **Screenshot đẹp** (full screen, không bị cắt)

---

## ⚠️ LƯU Ý

### Không nên:
- ❌ Gửi file ZIP qua email (quá nặng)
- ❌ Video quá dài (> 5 phút)
- ❌ Link private (GitHub, Drive)
- ❌ Quên test link trước khi gửi
- ❌ Gửi vào cuối tuần/ngoài giờ

### Nên:
- ✅ Deploy lên hosting (Vercel/Netlify)
- ✅ Video 2-3 phút, súc tích
- ✅ Link public, ai cũng xem được
- ✅ Test kỹ trước khi gửi
- ✅ Gửi T2-T6, 9h-17h

---

## 🎬 TIMELINE DỰ KIẾN

```
Deploy:        15 phút
Quay video:    10 phút
Upload:        5 phút
Screenshots:   5 phút
Viết email:    10 phút
Review:        5 phút
─────────────────────
TỔNG:          50 phút
```

---

**Chúc bạn thành công! 🚀**
