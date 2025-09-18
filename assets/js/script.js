window.onload = function() {
  // الحصول على زر فتح الشريط الجانبي باستخدام ID
  openSidebarBtn = document.getElementById("openSidebarBtn");
  // إضافة حدث 'click' لزر فتح الشريط الجانبي
  openSidebarBtn.addEventListener('click', function () {
    sidebar = document.getElementById("sidebar");
    // إظهار الشريط الجانبي
    sidebar.classList.remove('sidebar__hide');
  });

  // الحصول على زر إغلاق الشريط الجانبي باستخدام ID
  closeSidebarBtn = document.getElementById("closeSidebarBtn");
  // إضافة حدث 'click' لزر إغلاق الشريط الجانبي
  closeSidebarBtn.addEventListener('click', function () {
    sidebar = document.getElementById("sidebar");
    // إخفاء الشريط الجانبي
    sidebar.classList.add('sidebar__hide');
  });

  // This if statment will be true if I am in the contact.html page
  if (window.location.pathname.includes('contact.html')) {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      // منع الإرسال الافتراضي للنموذج
      event.preventDefault();
      
      // الحصول على القيم المدخلة
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // التحقق من صحة المدخلات
      if (name && email && message) {
          alert(`شكراً لك، ${name}!\nتم إرسال رسالتك بنجاح.`);
          document.getElementById('contactForm').reset();
      } else {
          alert('يرجى ملء جميع الحقول.');
      }
    });
  }
};

