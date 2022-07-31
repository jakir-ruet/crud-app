import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Index from "../crud/Index";
import Create from "../crud/components/Create";
import Read from "../crud/components/Read";

const App = () => {
  return (
    <div className="container">
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/read" element={<Read/>}/>
            <Route path="/edit" element={<Create/>}/>
            <Route path="/delete" element={<Index/>}/>
        </Routes>
    </div>
  );
}

export default App;
