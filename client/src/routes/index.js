import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SigninScreen from '../Screens/SigninScreen/index';
import SignupScreen from '../Screens/SignupScreen/index';
import ForgotScreen from '../Screens/ForgotScreen/index';
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
          <Route path='/signup' element={<SignupScreen />}/>
          <Route path='/signin' element={<SigninScreen />}/>
          <Route path='/forgot' element={<ForgotScreen />}/>
      </Routes>
    </main>
  )
} 

export default Main;