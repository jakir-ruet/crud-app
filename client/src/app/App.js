import logo from './logo.svg';
import './App.css';
import Index from "../components/indexComponent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreatePage from "../components/createPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path={"/"} element={<Index/>}/>
            <Route path={"/create"} element={<CreatePage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
