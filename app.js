import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  // القيم الصحيحة لاسم المستخدم وكلمة المرور
  const correctUsername = "user123";
  const correctPassword = "password123";

  // دالة التحقق عند إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === correctUsername && password.trim() === correctPassword) {
      // التوجيه إلى صفحة الداشبورد في حال كانت البيانات صحيحة
      history.push("/dashboard");
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
