# ⚡ TEST NHANH 30 GIÂY

## 🎯 Test Loading State

### Cách nhanh nhất:
```
1. Mở app: http://localhost:3000
2. Nhấn F12 (mở DevTools)
3. Tab "Network" → Chọn "Slow 3G"
4. Click nút "🔄 Refresh" trong app
5. ✅ Thấy spinner xoay!
```

---

## 🎯 Test Error Handling

### Cách nhanh nhất:
```
1. Tắt WiFi
2. Click nút "🔄 Refresh"
3. ✅ Thấy error message + nút "Try Again"
4. Bật WiFi lại
5. Click "Try Again"
6. ✅ Data load lại thành công!
```

---

## 🎯 Test bằng Component (Không cần tắt mạng)

### Bước 1: Sửa src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import TestStates from './TestStates';  // Thay App bằng TestStates
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestStates />
  </React.StrictMode>
);

reportWebVitals();
```

### Bước 2: Mở app
```
http://localhost:3000
```

### Bước 3: Click các nút
```
- "Show Loading" → Thấy spinner
- "Show Error" → Thấy error message
- "Hide All" → Ẩn hết
```

### Bước 4: Đổi lại (Quan trọng!)
```javascript
// Đổi lại TestStates thành App
import App from './App';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 📸 Chụp màn hình để nộp

1. **Loading**: Spinner đang xoay
2. **Error**: Message + nút Try Again
3. **Success**: Data hiển thị đầy đủ

---

**Xong! Chỉ mất 30 giây! 🚀**
