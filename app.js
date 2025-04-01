import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  // القيم الصحيحة لاسم المستخدم وكلمة المرور للمستخدم العادي والمطور
  const correctUsernameUser = "user123";  // اسم المستخدم العادي
  const correctPasswordUser = "password123";  // كلمة مرور المستخدم العادي
  
  const correctUsernameAdmin = "admin123";  // اسم المستخدم للمطور
  const correctPasswordAdmin = "adminpassword123";  // كلمة مرور المطور

  // دالة التحقق عند إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();

    // إزالة المسافات الزائدة والتأكد من تطابق البيانات المدخلة
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    // التحقق من البيانات المدخلة
    if (trimmedUsername === correctUsernameUser && trimmedPassword === correctPasswordUser) {
      // التوجيه إلى صفحة المستخدم العادي
      history.push("/user-dashboard");
    } else if (trimmedUsername === correctUsernameAdmin && trimmedPassword === correctPasswordAdmin) {
      // التوجيه إلى صفحة المطور
      history.push("/admin-dashboard");
    } else {
      // إظهار رسالة الخطأ في حال كانت البيانات غير صحيحة
      setError("اسم المستخدم أو كلمة المرور غير صحيحة. حاول مرة أخرى.");
    }
  };

  return (
    <div className="App">
      <h1>تسجيل الدخول إلى Biolovo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">اسم المستخدم:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">كلمة المرور:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">تسجيل الدخول</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
