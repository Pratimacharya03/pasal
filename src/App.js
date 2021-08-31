import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Aboutus from './pages/aboutus';
import Project from './pages/project';
import Contactus from './pages/Contactus';
import Gallery from './pages/gallery';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Services from './pages/services';
import Header from './pages/header';
import Cards from './pages/cards';


export default function App() {
  return (
    <>
        <Header/> 

    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutus' component={Aboutus} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/contactus' component={Contactus} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/services' component={Services} />
       <Route exact path='/cards' component={Cards}/>
      </Switch>
      </BrowserRouter>
    </>
  )
}