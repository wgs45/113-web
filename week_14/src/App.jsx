import { useEffect, useState } from 'react';
import FavoriteColor from './components/FavoriteColor';
import Car from './components/Car';
import TotalColor from './components/TotalColor';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    if (color) setColorArray((colorArray) => [...colorArray, color]);
  }, [color]);

  // console.log(colorArray);

  return (
    <>
      <FavoriteColor color={color} setColor={setColor} />
      <Car />
      <TotalColor array={colorArray} />
    </>
  );
}

export default App;
