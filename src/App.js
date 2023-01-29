import { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Cars from './components/Cars'
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cars" element={<Cars />} />
          </Routes>
        </Router>

      </>
    );
  }
}