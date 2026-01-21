# 🚀 Crypto Dashboard

Dashboard theo dõi giá cryptocurrency theo thời gian thực với giao diện hiện đại và responsive.

## ✨ Tính năng

### Core Features (Bắt buộc)
- ✅ Hiển thị 20 đồng coin hàng đầu theo vốn hóa thị trường
- ✅ Thông tin đầy đủ: Tên, Logo, Symbol, Giá hiện tại, % thay đổi 24h
- ✅ Format số tiền chuẩn với dấu phân cách hàng nghìn ($65,000.00)
- ✅ Màu sắc trực quan: Xanh (tăng giá), Đỏ (giảm giá)
- ✅ Tìm kiếm real-time theo tên hoặc ký hiệu
- ✅ Nút Refresh để cập nhật dữ liệu mới nhất
- ✅ Responsive Design: Desktop (Table) + Mobile (Card)

### Advanced Features (Bonus)
- ⭐ Sắp xếp (Sort) theo Giá, % thay đổi, Market Cap
- ⭐ Loading state với spinner animation
- ⭐ Error handling với nút retry
- ⭐ Dark Mode / Light Mode
- ⭐ Smooth transitions và hover effects

## 🛠️ Công nghệ sử dụng

- **Framework**: ReactJS (Hooks: useState, useEffect)
- **Styling**: CSS thuần (không dùng framework)
- **API**: CoinGecko Public API (không cần API key)
- **State Management**: React Hooks

## 📦 Cài đặt và Chạy Project

### Yêu cầu
- Node.js (v14 trở lên)
- npm hoặc yarn

### Các bước thực hiện

1. **Clone hoặc tải project**
```bash
cd crypto-dashboard
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy development server**
```bash
npm start
```

4. **Mở trình duyệt**
```
http://localhost:3000
```

5. **Build cho production**
```bash
npm run build
```

## 📁 Cấu trúc Project

```
crypto-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header với nút Refresh và Dark Mode
│   │   ├── SearchBar.jsx       # Ô tìm kiếm
│   │   ├── CoinList.jsx        # Danh sách coins (Table + Card)
│   │   ├── CoinCard.jsx        # Card hiển thị coin (Mobile)
│   │   ├── Loading.jsx         # Loading spinner
│   │   └── ErrorMessage.jsx    # Hiển thị lỗi
│   ├── utils/
│   │   └── formatters.js       # Format giá và phần trăm
│   ├── styles/
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── SearchBar.css
│   │   ├── CoinList.css
│   │   ├── CoinCard.css
│   │   ├── Loading.css
│   │   └── ErrorMessage.css
│   ├── App.js                  # Main component
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Các tính năng chi tiết

### 1. Hiển thị danh sách Coins
- Fetch data từ CoinGecko API
- Hiển thị 20 coins theo market cap
- Desktop: Table layout với sort
- Mobile: Card layout responsive

### 2. Tìm kiếm
- Real-time search
- Tìm theo tên hoặc symbol
- Nút clear để xóa nhanh

### 3. Sắp xếp (Sort)
- Click vào header để sort
- Sort theo: Giá, % thay đổi, Market Cap
- Icon hiển thị hướng sort (↑↓)

### 4. Refresh Data
- Nút Refresh ở header
- Gọi lại API để cập nhật giá mới
- Loading state khi đang fetch

### 5. Dark Mode
- Toggle giữa Light/Dark mode
- Smooth transition
- Icon thay đổi theo theme

### 6. Error Handling
- Hiển thị thông báo lỗi rõ ràng
- Nút "Try Again" để retry
- Không crash app khi API lỗi

## 🎨 Responsive Design

### Desktop (> 768px)
- Table layout chuyên nghiệp
- Hover effects
- Sortable columns

### Mobile (≤ 768px)
- Card layout dễ đọc
- Touch-friendly
- Optimized spacing

## 📊 API Endpoint

```
https://api.coingecko.com/api/v3/coins/markets
?vs_currency=usd
&order=market_cap_desc
&per_page=20
&page=1
&sparkline=false
```

## 💡 Code Quality

- ✅ Component nhỏ, tái sử dụng
- ✅ Custom utils cho format data
- ✅ CSS module hóa theo component
- ✅ Naming convention rõ ràng
- ✅ Comments ở logic phức tạp
- ✅ Error boundary
- ✅ Loading states

## 🚀 Deploy

Project có thể deploy lên:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop folder `build`
- **GitHub Pages**: `npm run deploy`

## 📝 Ghi chú

- API CoinGecko miễn phí, không cần đăng ký
- Rate limit: ~50 requests/minute
- Data cập nhật real-time từ exchanges

## 👨‍💻 Tác giả

Được phát triển như một bài test kỹ năng Frontend Developer

---

**Happy Coding! 🎉**
