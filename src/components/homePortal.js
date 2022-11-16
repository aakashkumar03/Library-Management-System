import "../style/homePortal.css";
const HomePortal = () => {
  return (
    <section className="userportal">
      <div className="home">
        <div className="library">
          <div className="e-book">
            <div className="card1">
              <h5>EXPLORE</h5>
              <h1>E~Books</h1>
              <h3>OverDrive</h3>
              <p>
                Download thousands of eBooks directly to your device, including
                the hard-to-get ebook Express Collection. Check out up to 20
                items and hold up to 15 items. Explore OverDrive
              </p>
              <h3>Hoopla Comics</h3>
              <p>
                Download comics from Marvel, DC, Fantagraphics, Image, and more
                via Hoopla. Take out each comic for up to 21 days. Explore
                Hoopla Comics
              </p>
            </div>
          </div>
          <div className="digital">
            <div className="card2">
              <h5>EXPLORE</h5>
              <h1>Digital Learning</h1>
              <p>
                LinkedIn Learning (formerly Lynda) is an online educational site
                that features thousands of courses and video tutorials where you
                can discover, complete, and track courses related to your field
                and interests.
              </p>
            </div>
          </div>
          <div className="magazines">
            <div className="card3">
              <h5>EXPLORE</h5>
              <h1>Magazines</h1>
              <p>
                For your convenience, thousands of magazines are available now
                to borrow through OverDrive and Libby. This includes hot titles
                like The Economist and Bon Appetit. (Formerly available through
                RBdigital.)
              </p>
            </div>
          </div>
          <div className="newspaper">
            <div className="card4">
              <h5>EXPLORE</h5>
              <h1>Newspapers</h1>
              <p>
                Enjoy complimentary digital access to The New York Times online
                when you are at the Library. Access the New York Times
                <br />
                <br />
                <div className="point">
                  # In Library access only Enjoy complimentary digital access to
                  The Wall Street Journal online when you are at the Main
                  Library. Access the Wall Street <br /> <br /># Main Library
                  computer access only Enjoy complimentary digital access to
                  PressReader with over 3,500 newspapers in over 60 languages.
                  Download the Apple app or Android app. Access PressReader{" "}
                  <br />
                  <br /># Library Card and PIN required
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortal;
