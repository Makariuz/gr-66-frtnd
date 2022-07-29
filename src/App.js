import { Outlet } from "react-router-dom";
import "./App.scss";
import { Navbar, FileUpload } from "components";
import {useState} from 'react'

function App() {
  // variable to store file url
  const [file, setFile] = useState()

  return (
    <div className="app-container">
      <Navbar />
{/*       <FileUpload setFile={setFile}/>
      <img src={file} /> */}

      <div className="section-app">
      <Outlet />
      </div>

      <footer>
      footer
      </footer>

    </div>
  );
}

export default App;
