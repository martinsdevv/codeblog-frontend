import "./App.css";
import logo from "../yellow_face.png";
import Header from "./Header";
import AppContent from "./AppContent";

function App() {
  return (
    <div>
      <Header pageTitle="CodeBlog - Login Auth" logoSrc={logo}></Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <AppContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
