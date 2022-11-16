import BookList from "./bookList";
import UserList from "./userList";
import AddUsers from "./addUsers";
import AddBooks from "./addBooks";
import SideBar from "./sideBar";
import HomePortal from "./homePortal";
import { Routes, Route } from "react-router-dom";

const AdminPortal = (probs) => {
  return (
    <div className="fullPage">
      <SideBar data={probs.data} />
      <Routes>
        <Route path="/" element={<HomePortal />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/add-book" element={<AddBooks />} />
        <Route path="/add-user" element={<AddUsers />} />
      </Routes>
    </div>
  );
};

export default AdminPortal;
