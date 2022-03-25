import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShopScreen from '../Screens/ShopScreen/index';
import WorkScreen from '../Screens/WorkScreen/index';
import CartScreen from '../Screens/CartScreen/index';
import MainScreen from '../Screens/MainScreen/index';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<MainScreen />}/>
          <Route path='/work' element={<WorkScreen />}/> 
          <Route path='/shop' element={<ShopScreen />}/> 
          <Route path='/cart' element={<CartScreen />}/> 
      </Routes>
    </main>
  )
} 

export default Main;