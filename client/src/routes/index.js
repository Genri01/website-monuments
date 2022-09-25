import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShopScreen from '../Screens/ShopScreen/index';
import WorkScreen from '../Screens/WorkScreen/index';
import CartScreen from '../Screens/CartScreen/index';
import MainScreen from '../Screens/MainScreen/index';
import CatalogScreen from '../Screens/CatalogScreen/index'; 

const Main = (props) => {
 
  const { mobile } = props; 

  return (
    <main>
      <Routes>
        <Route exact path='/' element={<MainScreen mobile={mobile} />}/>
        <Route path='/catalog/:category' element={<CatalogScreen mobile={mobile} />}/> 
        <Route path='/works' element={<WorkScreen mobile={mobile} />}/> 
        <Route path='/feedback' element={<CartScreen mobile={mobile} />}/> 
        <Route path='/shop/:category/:id' element={<ShopScreen mobile={mobile} />}/> 
        <Route path='/cart' element={<CartScreen mobile={mobile} />}/> 
      </Routes>
    </main>
  )
} 

export default Main;