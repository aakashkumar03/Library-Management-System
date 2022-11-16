import "../src/style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPortal from "./components/adminPortal";
import AdminLogin from "./components/adminLogin";
import UserLogin from "./components/userLogin";
import HomePage from "./components/homePage";
import UserPortal from "./components/userPortal";

function App() {
  let email="admin@gmail.com";
  let user="user@gmail.com";
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-login" element={<AdminLogin data={email}/>} />
          <Route path="/user-login" element={<UserLogin data={user}/>} />
          <Route path="/admin-portal/*" element={<AdminPortal data={email}/>}/>
          <Route path="/user-portal/*" element={<UserPortal data={user} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
