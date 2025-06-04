import "./App.css";
import Header from "./Header";
import Main from "./mainContent";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* <div className="container">
        <div className="header">
          <img src="src/assets/react.svg" width={40} />
          <h1>Fun facts about React</h1>
        </div>
        <ul>
          <li>Was first release in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div> */}
    </>
  );
}

export const Page = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
