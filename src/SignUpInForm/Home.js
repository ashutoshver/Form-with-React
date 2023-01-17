import React from "react";
import './SignUpInForm.css';
function Home() {
  const logout = () => {
    localStorage.removeItem("signUp")
    window.location.reload()
  }
  const deleteAccount = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="home">
      <div><h1>Wellcome {localStorage.getItem('name')}</h1></div>
      <div>
        <button onClick={logout} className="logout">LogOut</button>
        <button onClick={deleteAccount} className="delete">Delete</button>
      </div>
    </div>
  );
}
export default Home;