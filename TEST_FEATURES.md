# ✅ KIỂM TRA TÍNH NĂNG

## Hướng dẫn test các tính năng đã fix

### 1. ✅ Màu sắc theo % thay đổi

**Cách test:**
1. Mở app tại `http://localhost:3000`
2. Xem cột "24h Change" trong bảng
3. Kiểm tra:
   - Số **DƯƠNG** (có dấu +) → Màu **XANH LÁ** (#10b981)
   - Số **ÂM** (có dấu -) → Màu **ĐỎ** (#ef4444)

**Ví dụ:**
- Solana: +0.90% → Màu xanh ✅
- Ethereum: -0.58% → Màu đỏ ✅
- Bitcoin: -0.01% → Màu đỏ ✅

**Test trên Mobile:**
1. Thu nhỏ cửa sổ browser (< 768px)
2. Xem card view
3. Phần "24h Change" cũng phải có màu đúng

---

### 2. ✅ Sort (Sắp xếp)

**Cách test Sort theo Giá:**
1. Click vào header "Price ⇅"
2. Lần 1: Sắp xếp tăng dần (↑) - Giá thấp nhất lên đầu
3. Lần 2: Sắp xếp giảm dần (↓) - Giá cao nhất lên đầu
4. Icon thay đổi: ⇅ → ↑ → ↓

**Cách test Sort theo % thay đổi:**
1. Click vào header "24h Change ⇅"
2. Lần 1: Sắp xếp tăng dần (↑) - Số âm nhiều nhất lên đầu
3. Lần 2: Sắp xếp giảm dần (↓) - Số dương nhiều nhất lên đầu

**Cách test Sort theo Market Cap:**
1. Click vào header "Market Cap ⇅"
2. Lần 1: Sắp xếp tăng dần (↑) - Vốn hóa thấp nhất lên đầu
3. Lần 2: Sắp xếp giảm dần (↓) - Vốn hóa cao nhất lên đầu

**Test Sort + Search kết hợp:**
1. Gõ "bit" vào ô search → Hiện Bitcoin, Bitcoin Cash, WhiteBIT
2. Click sort theo Price
3. Kiểm tra: Danh sách đã lọc vẫn được sort đúng ✅
4. Xóa search → Sort vẫn giữ nguyên ✅

---

## 🐛 Các lỗi đã fix

### Lỗi 1: Màu sắc không hiển thị
**Nguyên nhân:** CSS có thể bị override bởi các style khác
**Giải pháp:** Thêm `!important` vào CSS cho `.positive` và `.negative`

### Lỗi 2: Sort bị mất khi search
**Nguyên nhân:** Logic sort chỉ chạy khi click, không chạy lại khi search
**Giải pháp:** 
- Chuyển sort logic vào `useEffect`
- Thêm `sortConfig` vào dependencies
- Sort tự động apply sau khi filter

---

## 📋 Checklist đầy đủ

### Màu sắc
- [ ] Desktop: Cột "24h Change" có màu xanh/đỏ đúng
- [ ] Mobile: Card "24h Change" có màu xanh/đỏ đúng
- [ ] Dark mode: Màu vẫn hiển thị rõ ràng

### Sort
- [ ] Sort theo Price: Tăng/Giảm hoạt động
- [ ] Sort theo 24h Change: Tăng/Giảm hoạt động
- [ ] Sort theo Market Cap: Tăng/Giảm hoạt động
- [ ] Icon thay đổi đúng: ⇅ → ↑ → ↓
- [ ] Sort + Search: Kết hợp hoạt động tốt
- [ ] Sort giữ nguyên khi xóa search

### Tính năng khác
- [ ] Search real-time hoạt động
- [ ] Refresh cập nhật dữ liệu mới
- [ ] Dark mode toggle
- [ ] Loading state hiển thị
- [ ] Error handling hoạt động
- [ ] Responsive: Desktop ↔ Mobile

---

## 🎯 Kết quả mong đợi

Sau khi fix:
1. ✅ Tất cả số dương hiển thị màu xanh
2. ✅ Tất cả số âm hiển thị màu đỏ
3. ✅ Sort hoạt động mượt mà với cả 3 cột
4. ✅ Sort + Search kết hợp hoàn hảo
5. ✅ Icon sort thay đổi đúng

**Nếu vẫn có vấn đề, hãy:**
1. Hard refresh browser: Ctrl + Shift + R (Windows) / Cmd + Shift + R (Mac)
2. Clear cache
3. Restart dev server: Ctrl + C → npm start
