# 簡易產品訂購系統

這是一個使用純前端技術開發的簡易產品訂購系統，提供產品展示和訂購功能。

## 專案功能展示

- 產品展示頁面(index.html、mainstyles.css)
  - 響應式商品卡片展示(Grid布局)
  - 動態價格顯示
  - 商品懸停動畫效果
  - 直觀的購買按鈕

- 訂購表單頁面(order.html、order_styles.css)
  - 自動帶入商品資訊
  - 表單驗證功能
  - 手機號碼格式檢查
  - 必填欄位檢查

- 訂單確認頁面(confirm.html、confirm_styles.css)
  - 訂單資訊總覽
  - 自動計算總金額
  - 訂單確認功能

## 使用技術

### 前端技術
- **HTML**
  - 標籤結構
  - 表單元素
  - 響應式設計

- **CSS**
  - Flexbox 布局
  - Grid 系統
  - 動畫效果
  - 漸變效果

- **JavaScript**
  - DOM 操作
  - 事件處理
  - 表單驗證
  - LocalStorage 資料存取

### 特色實現
- 使用 CSS Grid 響應式商品展示
- 使用 Flexbox 實現頁面布局
- 使用 LocalStorage 實現訂單資料暫存
- 實作表單驗證確保資料完整性
- 傳遞商品訊息

## 系統部署說明

### 本機部署
1. 將專案文件下載到本地
2. 使用瀏覽器(如Chrome, Firefox)直接打開 index.html
3. 確保所有文件在相同目錄結構下：
```
smilepay_test/
  ├── index.html
  ├── order.html
  ├── confirm.html
  ├── styles/
  │   ├── mainstyles.css
  │   ├── order_styles.css
  │   └── confirm_styles.css
  ├── scripts/
  │   └── main.js
  └── images/
      └── [產品圖片]
```

### Microsoft Azure 雲端部署步驟
1. Google搜尋 Microsoft Azure 並登入
2. 創建新的 Web App 服務
3. 設定部署選項
4. 配置自定義網域(可選)
5. 啟用網站>概觀>下載發行設定檔(開啟檔案，搜尋ftp，把帳號密碼切出來)
6. 登入帳號密碼、ftp(推薦軟體:FileZilla Portable)
7. 上傳網站

### 部署注意事項
- 確保所有文件使用相對路徑
- 檢查圖片資源是否正確引用
- 確認 JavaScript 文件引用路徑正確
- 測試所有功能在部署環境中是否正常運作

## 操作步驟

1. 首頁瀏覽
   - 瀏覽商品列表
   - 點擊商品查看詳情
   - 選擇想購買的商品

2. 訂購流程
   - 點擊「購買」按鈕進入訂購頁面
   - 填寫個人資訊（姓名、電話、地址）
   - 確認商品名稱和數量
   - 提交訂單

3. 確認訂單
   - 檢查訂單資訊
   - 確認總金額
   - 完成訂購

## 開發者資訊
- 開發時間：2024年10月
- 專案目的：速買配前端工程師面試測驗
- 版本：1.0.0

## 注意事項
- 本系統為前端展示用途
- 不包含後端資料處理
- 雲端部屬平台為Microsoft Azure

## 展示連結
- https://youtu.be/FxCm9wY9FCw
