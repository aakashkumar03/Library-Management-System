import { useState, useEffect } from "react";
import '../style/userList.css'
const UserList = () => {
  let [cust, setCust] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch(" http://localhost:5000/users")).json();
      setCust(res);
    };
    fetchData();
  }, []);
  let handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cust),
    });
    window.location.reload();
    //we can use the above line to reloadthe page or we can remove the dependency from useEffect
  };
  return (
    <div className="userlist">
      <div className="sum">
        <h1>Total Users : {cust.length}</h1>
      </div>
      <div className="main">
        <div className="Ulist">
          {cust.map((user) => {
            return (
              <div className="sheet">
                <div className="first">
                  First Name:{user.firstname} <br />
                  Last Name: {user.lastname} <br />
                  Email: {user.email}
                </div>
                <div className="gender">
                  Gender: {user.gender} <br />
                  Date of Birth: {user.DOB}
                </div>
                <div className="contact">
                  Contact: {user.contact} <br />
                  User ID: {user.userID}</div>
                  <div className="buttonDel">
                    <button onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </div>
              </div>
              
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default UserList;
