import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home'
import Header from './Components/Header'
import HuntingList from './Components/Hunting-Componets/HuntingList'
import CampingList from './Components/Camping-Componets/CampingList'
import HikingList from './Components/Hiking-Componets/HikingList'
import FishingList from './Components/Fishing-Componets/FishingList'
import NewHuntingList from './Components/Hunting-Componets/HuntingNewList'
import CampingNewlist from './Components/Camping-Componets/CampingNewList'
import HikingNewList from './Components/Hiking-Componets/HikingNewList'
import FishingNewList from './Components/Fishing-Componets/FishingNewList'
import ProductSearch from './Components/Hunting-Componets/ProductSearch'
import CampingProductSearch from './Components/Camping-Componets/CampingProductSearch'
import HikingProductSearch from './Components/Hiking-Componets/HikingProductSearch'
import FishingProductSearch from './Components/Fishing-Componets/FishingProductSearch'
import EditProductSearch from './Components/Hunting-Componets/EditProductSearch'
import CampingEditProductSearch from './Components/Camping-Componets/CampingEditProductSearch'
import HikingEditProductSearch from './Components/Hiking-Componets/HikingEditProductSearch'
import fishingEditProductSearch from './Components/Fishing-Componets/FishingEditProductSearch'
import notFound from './Components/404'
import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/huntinglist' component={HuntingList} />
          <Route path='/campinglist' component={CampingList} />
          <Route path='/hikinglist' component={HikingList} />
          <Route path='/fishinglist' component={FishingList} />
          <Route path='/newhuntinglist' component={NewHuntingList} />
          <Route path='/newcampinglist' component={CampingNewlist} />
          <Route path='/newhikinglist' component={HikingNewList} />
          <Route path='/newfishinglist' component={FishingNewList} />
          <Route path='/productsearch' component={ProductSearch} />
          <Route path='/campingproductsearch' component={CampingProductSearch} />
          <Route path='/fishingproductsearch' component={FishingProductSearch} />
          <Route path='/hikingproductsearch' component={HikingProductSearch} />
          <Route path='/editproductsearch' component={EditProductSearch} />
          <Route path='/editcampingproductsearch' component={CampingEditProductSearch} />
          <Route path='/edithikingproductsearch' component={HikingEditProductSearch} />
          <Route path='/editfishingproductsearch' component={fishingEditProductSearch} />
          <Route component={notFound} />
        </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
