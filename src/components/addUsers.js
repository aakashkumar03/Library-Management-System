import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/addUser.css'
const AddUsers = () => {
    let [firstname, setFirstName] = useState("");
    let [lastname, setLastName] = useState("");
    let [email, setEmail] =useState("");
    let [gender, setGender] = useState("");
    let [DOB, setDOB] = useState("");
    let [contact, setContact] = useState("");
    let [userID, setUserID] = useState("");
    let navi = useNavigate()
    let handeleSubmit = (e) => {
      e.preventDefault();
      let data = { firstname,lastname,email,gender,DOB,contact,userID };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      alert("Data saved Successfully");
      navi("/admin-portal/user-list")
    };
    return (
      <div className="adduser">
          <div className="give">
            <div className="layout">
              <div className="FormDetail">
                <h2>
                  <i>Add User Details to DB</i>
                </h2>
                <form action="" onSubmit={handeleSubmit}>
                  <div className="div1">
                    <label htmlFor="">First Name</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter First name"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <br />
                  </div>
                  <div className="div2">
                    <label htmlFor="">Last name</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Last name"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <br />
                  </div>
                  <div className="div3">
                    <label htmlFor="">Email</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                  </div>
                  <div className="div4">
                    <label htmlFor="">Gender</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter Gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <br />
                  </div>
                  <div className="div5">
                    <label htmlFor="">Date of birth</label>
                    <br />
                    <input
                      type="date"
                      placeholder="Enter Date of Birth"
                      value={DOB}
                      onChange={(e) => setDOB(e.target.value)}
                    />
                    <br />
                  </div>
                  <div className="div6">
                    <label htmlFor="">Contact</label>
                    <br />
                    <input
                      type="number"
                      placeholder="Enter Contact Number"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                    <br />
                  </div>
                  <div className="div7">
                    <label htmlFor="">User Id</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter User ID"
                      value={userID}
                      onChange={(e) => setUserID(e.target.value)}
                    />
                    <br />
                  </div>
  
                  <button>Add User detials</button>
                </form>
              </div>
            </div>
          </div>
      </div>
    );
  };
 
export default AddUsers;