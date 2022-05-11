import React, { useEffect } from 'react';
import './App.css';
import Main from './routes/index';
import { isMobile } from 'react-device-detect';
import { useDispatch } from 'react-redux';
import { setMobileMod } from './redux/actions/app';

function App() {
  const dispatch = useDispatch();  
  useEffect(() => {
    dispatch(setMobileMod(isMobile))
  },[]);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
