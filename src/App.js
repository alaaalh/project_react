import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
// import { Login } from './components/Login';
import { FunctionalNavbar } from "./components/Navbar";
// import { Todolist } from "./components/Todolist";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Two from './padges/two/Two';
import {Three} from './padges/Three/Three';
import One from './padges/one/One';
import card from './padges/card/Card'

function App() {
  return (
    <>
      <Router>
          <FunctionalNavbar />
        <Routes>
          <Route path="/"  element={< One />}/>
          <Route path="/two/:id" element={< Two />}/>
          <Route path="/three" element={<Three/>}/>
          <Route path="/card" element={<card/>}/>
        </Routes>
      </Router>
      {/* <Todolist /> */}
      {/* <Login/> */}
    </>
  );
}


export default App;
