# 🧪 HƯỚNG DẪN TEST LOADING & ERROR HANDLING

## 🎯 Mục tiêu
Test 2 tính năng:
1. **Loading State** - Spinner khi đang fetch data
2. **Error Handling** - Thông báo lỗi + nút Retry

---

## 📱 CÁCH 1: Test nhanh với Component Test (Khuyến nghị)

### Bước 1: Sửa App.js tạm thời
```javascript
// src/App.js
import TestStates from './TestStates';  // Thêm dòng này

function App() {
  // Comment toàn bộ code cũ, return TestStates
  return <TestStates />;
}
```

### Bước 2: Chạy app
```bash
npm start
```

### Bước 3: Test
- Click "Show Loading" → Thấy spinner xoay
- Click "Show Error" → Thấy thông báo lỗi + nút "Try Again"
- Click nút "Try Again" → Alert xuất hiện

### Bước 4: Xong thì đổi lại
```javascript
// Uncomment code cũ, xóa dòng return <TestStates />
```

---

## 🌐 CÁCH 2: Test Loading với Chrome DevTools (Thực tế)

### Bước 1: Mở DevTools
```
Nhấn F12 hoặc Ctrl+Shift+I (Windows)
```

### Bước 2: Chọn tab Network
```
DevTools → Tab "Network"
```

### Bước 3: Throttle mạng
```
1. Tìm dropdown "No throttling" (ở trên cùng)
2. Chọn "Slow 3G" hoặc "Fast 3G"
```

### Bước 4: Test
```
1. Click nút "🔄 Refresh" trong app
2. → Thấy spinner loading xuất hiện!
3. Đợi vài giây → Data load xong
```

### Bước 5: Đổi lại
```
Chọn "No throttling" để về bình thường
```

---

## ❌ CÁCH 3: Test Error bằng cách tắt mạng (Đơn giản nhất)

### Bước 1: Tắt WiFi/Mạng
```
Tắt WiFi hoặc rút dây mạng
```

### Bước 2: Refresh app
```
Click nút "🔄 Refresh" trong app
```

### Bước 3: Kiểm tra
```
✅ Thấy icon ⚠️
✅ Thấy text "Oops! Something went wrong"
✅ Thấy message lỗi
✅ Thấy nút "Try Again"
```

### Bước 4: Test Retry
```
1. Bật lại WiFi/Mạng
2. Click nút "Try Again"
3. → Data load lại thành công!
```

---

## 🚫 CÁCH 4: Test Error bằng DevTools Offline Mode

### Bước 1: Mở DevTools
```
F12 → Tab "Network"
```

### Bước 2: Enable Offline
```
Tích vào checkbox "Offline" (ở trên cùng)
```

### Bước 3: Test
```
1. Click "🔄 Refresh"
2. → Error xuất hiện!
```

### Bước 4: Test Retry
```
1. Bỏ tích "Offline"
2. Click "Try Again"
3. → Data load lại!
```

---

## 🔧 CÁCH 5: Test Error bằng cách sửa code (Cho dev)

### Bước 1: Sửa API URL
```javascript
// src/App.js
const API_URL = 'https://api.coingecko.com/WRONG_PATH'; // URL sai
```

### Bước 2: Save và xem
```
→ Error xuất hiện ngay!
```

### Bước 3: Đổi lại
```javascript
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';
```

---

## 🎬 CÁCH 6: Test Loading lâu hơn (Thêm delay)

### Bước 1: Thêm delay vào fetchCoins
```javascript
// src/App.js
const fetchCoins = async () => {
  setLoading(true);
  setError(null);
  
  // THÊM DÒNG NÀY
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3 giây
  
  try {
    const response = await fetch(API_URL);
    // ... rest of code
  }
};
```

### Bước 2: Test
```
Click Refresh → Thấy loading 3 giây!
```

### Bước 3: Xóa dòng delay khi xong
```javascript
// Xóa dòng setTimeout
```

---

## 📸 Screenshots để nộp bài

Chụp màn hình các trường hợp:

### 1. Loading State
```
- Spinner đang xoay
- Text "Loading crypto data..."
- Background gradient đẹp
```

### 2. Error State
```
- Icon ⚠️
- Text "Oops! Something went wrong"
- Message lỗi rõ ràng
- Nút "Try Again" màu xanh
```

### 3. Success State (sau khi retry)
```
- Data hiển thị đầy đủ
- Không còn error
```

---

## ✅ Checklist Test

### Loading State
- [ ] Spinner xuất hiện khi click Refresh
- [ ] Text "Loading crypto data..." hiển thị
- [ ] Spinner xoay mượt mà
- [ ] Background gradient đẹp
- [ ] Không có lỗi console

### Error State
- [ ] Icon ⚠️ hiển thị
- [ ] Tiêu đề "Oops! Something went wrong"
- [ ] Message lỗi rõ ràng
- [ ] Nút "Try Again" hiển thị
- [ ] Nút "Try Again" có hover effect
- [ ] Click "Try Again" gọi lại API
- [ ] Không crash app

### Dark Mode
- [ ] Loading state hiển thị tốt trong dark mode
- [ ] Error state hiển thị tốt trong dark mode

---

## 🎯 Kết quả mong đợi

Sau khi test xong, bạn có thể tự tin nói:

✅ "Em đã implement Loading state với spinner animation"
✅ "Em đã xử lý Error với try-catch và hiển thị message rõ ràng"
✅ "Em có nút Retry để user thử lại khi lỗi"
✅ "Em test bằng cách throttle mạng và offline mode"
✅ "Loading và Error đều hoạt động tốt trên cả Desktop và Mobile"

---

## 💡 Tips khi demo cho interviewer

1. **Mở DevTools trước** để show professional
2. **Throttle mạng** để demo Loading
3. **Enable Offline** để demo Error
4. **Click Retry** để show error recovery
5. **Giải thích code** trong khi demo:
   - "Em dùng try-catch để bắt lỗi"
   - "Em có state loading để track trạng thái"
   - "Em có state error để lưu message"
   - "Em có function retry để gọi lại API"

---

**Good luck! 🚀**
