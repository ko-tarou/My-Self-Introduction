import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Toppage from "./pages/Toppage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Toppage/>}/>
      </Routes>
    </Router>
  );
}

export default App;