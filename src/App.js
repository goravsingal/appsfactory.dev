import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import YoutubeThumbnail from './components/tools/youtube_thumb/YoutubeThumbnail';
import About from './pages/About';
import Error from './pages/Error';
import Contact from './pages/Contact';

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/youtube-thumbnail/" component={YoutubeThumbnail} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/contact/" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
