import {Link} from 'react-router-dom';
import '../style/homePage.css'
const HomePage = () => {
    return ( <section className="homepage">
        <div className="container">
        <h1>Welcome to Library</h1>
        <div className="admin">
            <img src="https://cdn-icons-png.flaticon.com/128/1071/1071942.png" alt=""/>
        <button><Link to="/admin-login">Admin Login</Link></button>
        </div>
        <div className="user">
            <img src="https://cdn-icons-png.flaticon.com/128/921/921347.png" alt="" />
        <button><Link to="/user-login">User Login</Link></button>
        </div>
        </div>
    </section> );
}
 
export default HomePage;