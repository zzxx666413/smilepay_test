// 當 DOM 載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 產品價格對照表
    const productPrices = {
        '經典咖啡杯': 150,
        '無線滑鼠': 500,
        '藍芽耳機': 1200,
        '雙肩背包': 850,
        '環保保溫杯': 300,
        '便攜式充電寶': 600
    };

    // 獲取產品價格的函數
    function getProductPrice(productName) {
        return productPrices[productName] || 0;
    }

    // 檢查當前頁面是否有購買按鈕 (index.html)
    const buyButtons = document.querySelectorAll('.button');
    if (buyButtons.length > 0) {
        // 首頁的按鈕點擊邏輯
        buyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productName = this.getAttribute('data-product');
                window.location.href = `order.html?product=${encodeURIComponent(productName)}`;
            });
        });
    }

    // 檢查當前頁面是否有訂購表單 (order.html)
    const orderForm = document.getElementById('order');
    if (orderForm) {
        // 訂購頁面的表單邏輯
        const urlParams = new URLSearchParams(window.location.search);
        const productName = urlParams.get('product');
        
        if (productName) {
            document.getElementById('product').value = productName;
        }

        // 在訂購表單提交時的處理
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                // 收集表單資料
                const formData = {
                    name: document.getElementById('name').value,
                    phone: document.getElementById('phone').value,
                    address: document.getElementById('address').value,
                    product: document.getElementById('product').value,
                    quantity: document.getElementById('quantity').value,
                    price: getProductPrice(document.getElementById('product').value)
                };
                
                // 將資料存入 localStorage
                localStorage.setItem('orderData', JSON.stringify(formData));
                
                // 跳轉到確認頁面
                window.location.href = 'confirm.html';
            }
        });
    }

    // 確認頁面的邏輯
    const confirmPage = document.querySelector('.confirm-container');
    if (confirmPage) {
        // 從 localStorage 獲取訂單資料
        const orderData = JSON.parse(localStorage.getItem('orderData') || '{}');
        
        // 填充訂單資訊
        document.getElementById('confirm-name').textContent = orderData.name || '';
        document.getElementById('confirm-phone').textContent = orderData.phone || '';
        document.getElementById('confirm-address').textContent = orderData.address || '';
        document.getElementById('confirm-product').textContent = orderData.product || '';
        document.getElementById('confirm-quantity').textContent = orderData.quantity || '';
        
        // 計算並顯示總金額
        const total = orderData.price * orderData.quantity;
        document.getElementById('confirm-total').textContent = `NT$ ${total}`;

        // 確認訂購按鈕點擊事件
        document.getElementById('confirm-order').addEventListener('click', function() {
            alert('感謝您的訂購！即將返回首頁。');
            // 清除 localStorage 中的訂單資料
            localStorage.removeItem('orderData');
            // 跳轉回首頁
            window.location.href = 'index.html';
        });
    }
});

// 表單驗證函數
function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    
    if (!name.trim()) {
        alert('請輸入姓名');
        return false;
    }
    
    // 手機號碼驗證
    const phonePattern = /^09\d{8}$/;
    if (!phonePattern.test(phone)) {
        alert('請輸入有效的手機號碼');
        return false;
    }
    
    if (!address.trim()) {
        alert('請輸入地址');
        return false;
    }
    
    return true;
}