import "../style/bookList.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const BookList = (probs) => {
  let location = useLocation();
  let [lib, setLib] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch(" http://localhost:5000/books")).json();
      setLib(res);
    };
    fetchData();
  }, []);
  let handleDelete = (id) => {
    fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lib),
    });
    window.location.reload();
    //we can use the above line to reloadthe page or we can remove the dependency from useEffect
  };
  let handleDelete2=(id)=>{
    setLib(lib.filter((item) => item.id !== id));
  }
  let pending = false;
    if (location.pathname === "/admin-portal/book-list") {
      pending = true;
    }
  return (
    <div className="booklist">
      <div className="total">
        <h1>Total Books: {lib.length}</h1>
      </div>
      <div className="home">
        <div className="BList">
          {lib.map((item) => {
            return (
              <div className="card">
                <div className="id">
                  Book-Id:{item.id} <br />
                </div>
                <div className="book-name">
                  Name: {item.name} <br />
                </div>
                <div className="genre">
                  Genre: {item.genre} <br />
                </div>
                <div className="author">
                  Author: {item.author} <br />
                </div>
                <div className="edition">
                  Edition: {item.edition} <br />
                </div>
                <div className="rating">Ratings: {item.rating}</div>
                <div className="language">Language: {item.language}</div>
                <div className="price">
                  Price: {item.price} <br />
                </div>
                {pending && 
                  <div className="buttonDel">
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                }
                {location.pathname === "/user-portal/book-list" && 
                  <div className="buttonDel">
                    <button onClick={() => handleDelete2(item.id)}>
                      Not Intrested
                    </button>
                  </div>
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookList;
