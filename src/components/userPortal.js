import UserSideBar from "./userSideBar";
import {Routes, Route} from "react-router-dom"
import HomePortal from "./homePortal";
import BookList from "./bookList";
import UserList from "./userList";

const UserPortal = (probs) => {
    return ( <section className="userportal">
        <UserSideBar data={probs.data} />
        <Routes>
        <Route path="/" element={<HomePortal />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/user-list" element={<UserList />} />
        </Routes>
    </section> );
}
 
export default UserPortal;