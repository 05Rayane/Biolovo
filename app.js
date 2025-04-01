// وظيفة تسجيل الدخول كمستخدم
function loginUser() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // تحقق من البيانات
  if (username === "user" && password === "password123") {
    alert("تم تسجيل الدخول كمستخدم بنجاح!");
    window.location.href = "user.html"; // تحويل للمستخدم
  } else {
    alert("بيانات غير صحيحة. حاول مرة أخرى.");
  }
}

// وظيفة تسجيل الدخول كمطور
function loginAdmin() {
  let adminUsername = document.getElementById("adminUsername").value;
  let adminPassword = document.getElementById("adminPassword").value;

  // تحقق من بيانات المدير
  if (adminUsername === "admin" && adminPassword === "admin123") {
    alert("تم تسجيل الدخول كـ مطور بنجاح!");
    window.location.href = "admin.html"; // تحويل للمطور
  } else {
    alert("بيانات غير صحيحة. حاول مرة أخرى.");
  }
}