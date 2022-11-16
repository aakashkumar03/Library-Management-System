import { Link,useNavigate } from "react-router-dom";
import "../style/adminLogin.css";
import { useState } from "react";
const AdminLogin = (probs) => {
  let[email,setEmail]= useState('')
  let [password,setPassword]= useState('');
  let navigate =useNavigate()
  let handleSubmit=(e)=> {
    e.preventDefault();
    if(email===probs.data && password==="admin"){
      navigate('/admin-portal')
    }else{
      alert("Invalid credentials")
    }
  }
  return (
    <section className="adminlogin">
      <div className="adminContainer">
      <h1>Welcome to Admin page</h1>
      <img src="https://cdn-icons-png.flaticon.com/128/1071/1071942.png" alt=""/>
        <div className="form">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Admin ID</label>
            <br />
            <input type="text" placeholder="Enter your AdminID" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br />
            <button>LogIn</button>
            <button>
              <Link to="/">Home page</Link>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
