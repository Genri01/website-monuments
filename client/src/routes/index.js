import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShopScreen from '../Screens/ShopScreen/index';
import WorkScreen from '../Screens/WorkScreen/index';
import CartScreen from '../Screens/CartScreen/index';
import MainScreen from '../Screens/MainScreen/index';
import CatalogScreen from '../Screens/CatalogScreen/index';
import { useSelector } from 'react-redux';
import { app } from '../redux/selectors';

const Main = () => {
  const mobile = useSelector(app.mobile); 
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<MainScreen />}/>
          <Route path='/works' element={<WorkScreen mobile={mobile} />}/> 
          <Route path='/catalog/:category' element={<CatalogScreen mobile={mobile} />}/> 
          <Route path='/shop/:category/:id' element={<ShopScreen mobile={mobile} />}/> 
          <Route path='/cart' element={<CartScreen mobile={mobile} />}/> 
          <Route path='/feedback' element={<CartScreen mobile={mobile} />}/> 
      </Routes>
    </main>
  )
} 

export default Main;