import { Link } from "react-router-dom";
import '../style/userSideBar.css';
const UserSideBar = (probs) => {
    return ( <section className="usersidebar">
        <div className="head">
            <img src="https://cdn-icons-png.flaticon.com/128/1071/1071942.png" alt="" />
            <div className="ad-detail">
            <h2>User</h2>
            <p>{probs.data}</p>
            </div>
        </div>
      <div className="links">
      <ul>
        <li>
          <Link to="/user-portal/">User Page </Link>
        </li>
        <li>
          <Link to="/user-portal/book-list">Book List</Link>
        </li>
        <li>
            <Link to="/user-login">LogOut</Link>
          </li>
      </ul>
      </div>
    </section> );
}
 
export default UserSideBar;