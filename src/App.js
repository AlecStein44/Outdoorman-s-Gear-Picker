import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home'
import Header from './Components/Header'
import HuntingList from './Components/Hunting-Componets/HuntingList'
import CampingList from './Components/Camping-Componets/CampingList'
import FishingList from './Components/Fishing-Componets/FishingList'
import NewHuntingList from './Components/Hunting-Componets/HuntingNewList'
import CampingNewList from './Components/Camping-Componets/CampingNewList'
import FishingNewList from './Components/Fishing-Componets/FishingNewList'
import ProductSearch from './Components/Hunting-Componets/ProductSearch'
import CampingProductSearch from './Components/Camping-Componets/CampingProductSearch'
import FishingProductSearch from './Components/Fishing-Componets/FishingProductSearch'
import EditProductSearch from './Components/Hunting-Componets/EditProductSearch'
import CampingEditProductSearch from './Components/Camping-Componets/CampingEditProductSearch'
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
          <Route path='/fishinglist' component={FishingList} />
          <Route path='/newhuntinglist' component={NewHuntingList} />
          <Route path='/newcampinglist' component={CampingNewList} />
          <Route path='/newfishinglist' component={FishingNewList} />
          <Route path='/productsearch' component={ProductSearch} />
          <Route path='/fishingproductsearch' component={FishingProductSearch} />
          <Route path='/campingproductsearch' component={CampingProductSearch} />
          <Route path='/editproductsearch' component={EditProductSearch} />
          <Route path='/editcampingproductsearch' component={CampingEditProductSearch} />
          <Route path='/editfishingproductsearch' component={fishingEditProductSearch} />
          <Route component={notFound} />
        </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
