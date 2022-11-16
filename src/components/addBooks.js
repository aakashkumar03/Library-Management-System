
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/addBooks.css'
const AddBooks = (probs) => {
  let [name, setName] = useState("");
  let [genre, setGenre] = useState("");
  let [author, setAuthor] = useState("");
  let [edition, setEdition] = useState("");
  let [language, setLanguage] = useState("");
  let [rating, setRating] = useState("");
  let [price, setPrice] = useState("");
  let navi =useNavigate()
  let handeleSubmit = (e) => {
    // e.preventDefault();
    let data = { name, genre, author, edition, language, price };
    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Data saved Successfully");
    navi("/admin-portal/book-list")
  };
  return (
    <div className="addbook">
      <div className="home">
        <div className="enter">
          <div className="Sheet">
            <div className="FormDetail">
              <h2>
                <i>Add BookDetails to DB</i>
              </h2>
              <form action="" onSubmit={handeleSubmit}>
                <div className="div1">
                  <label htmlFor="">Book Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter book name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br />
                </div>
                <div className="div2">
                  <label htmlFor="">Genre</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter book genre type"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                  <br />
                </div>
                <div className="div3">
                  <label htmlFor="">Author</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter author name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <br />
                </div>
                <div className="div4">
                  <label htmlFor="">Edition</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Edition"
                    value={edition}
                    onChange={(e) => setEdition(e.target.value)}
                  />
                  <br />
                </div>
                <div className="div5">
                  <label htmlFor="">Language</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                  <br />
                </div>
                <div className="div6">
                  <label htmlFor="">Rating</label>
                  <br />
                  <input
                    type="number"
                    placeholder="Enter Book Price"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <br />
                </div>
                <div className="div7">
                  <label htmlFor="">Price</label>
                  <br />
                  <input
                    type="number"
                    placeholder="Enter Book Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <br />
                </div>

                <button>Add Book detials</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
