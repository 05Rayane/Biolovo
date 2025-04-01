import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  // القيم الصحيحة للتسجيل:
  const correctUsernameUser = "user123";
  const correctPasswordUser = "password123";
  
  const correctUsernameAdmin = "admin123";
  const correctPasswordAdmin = "adminpassword123";

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername === correctUsernameUser && trimmedPassword === correctPasswordUser) {
      alert("تم التوجيه إلى لوحة المستخدم!");
      history.push("/user-dashboard");
    } else if (trimmedUsername === correctUsernameAdmin && trimmedPassword === correctPasswordAdmin) {
      alert("تم التوجيه إلى لوحة المطور!");
      history.push("/admin-dashboard");
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة. حاول مرة أخرى.");
      alert("البيانات غير صحيحة");
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
