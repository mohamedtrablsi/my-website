// بيانات السلة
let cart = [];
let currentProductName = '';

// إظهار مواصفات المنتج
function showSpecs(productName) {
  currentProductName = productName;
  document.getElementById('spec-title').textContent = `مواصفات ${productName}`;
  document.getElementById('spec-desc').textContent = `هذه هي المواصفات التفصيلية لـ ${productName}. يمكنك إضافة المنتج إلى السلة أو إلغاء العرض.`;
  document.getElementById('spec-popup').classList.add('active');
}

// إغلاق نافذة المواصفات
function closeSpecs() {
  document.getElementById('spec-popup').classList.remove('active');
}

// إضافة المنتج إلى السلة
function addToCart() {
  cart.push(currentProductName);
  updateCartCount();
  closeSpecs();
  alert(`تم إضافة ${currentProductName} إلى السلة!`);
}

// تحديث عداد السلة
function updateCartCount() {
  const count = cart.length;
  document.getElementById('cart-count').textContent = count;
}

// فتح نافذة السلة
function openCart() {
  if (cart.length === 0) {
    alert('السلة فارغة، يرجى إضافة منتجات أولاً.');
    return;
  }
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.textContent = `${index + 1}. ${item}`;
    cartItemsDiv.appendChild(div);
  });
  document.getElementById('cart-popup').classList.add('active');
}

// إغلاق نافذة السلة
function closeCart() {
  document.getElementById('cart-popup').classList.remove('active');
}

// معالجة إرسال نموذج الطلب
function submitOrder(e) {
  e.preventDefault();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!phone || !email) {
    alert('يرجى ملء جميع الحقول المطلوبة.');
    return;
  }

  cart = [];
  updateCartCount();
  closeCart();
  document.getElementById('checkout-form').reset();

  // عرض نافذة الشكر
  document.getElementById('thankyou-popup').classList.add('active');
}

// إغلاق نافذة الشكر
function closeThankYou() {
  document.getElementById('thankyou-popup').classList.remove('active');
}

// البحث عن منتج بالاسم
function searchProduct() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const products = document.querySelectorAll('.product-card');

  products.forEach(card => {
    const alt = card.querySelector('img').alt.toLowerCase();
    if (alt.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.product-card').forEach(card => observer.observe(card));

// تبديل الوضع الليلي / الفاتح
function toggleTheme() {
  document.body.classList.toggle('light-mode');
}
// عندما يتم التمرير يظهر الزر
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// عند الضغط على الزر يرجع لأعلى الصفحة بسلاسة
document.getElementById("scrollTopBtn").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
// عندما يتم التمرير يظهر الزر
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// عند الضغط على الزر يرجع لأعلى الصفحة بسلاسة
document.getElementById("scrollTopBtn").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
