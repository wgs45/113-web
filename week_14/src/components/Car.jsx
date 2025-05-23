import { useState } from 'react';

const Car = () => {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
  });

  function changeColor(newColor) {
    setCar({ ...car, color: newColor });
  }

  function changeYear(newYear) {
    setCar({ ...car, year: newYear });
  }

  const handleYearChange = (e) => {
    setCar({ ...car, year: e.target.value });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color}, {car.model} from {car.year}.
      </p>
      <button onClick={() => changeColor('green')}>Change color</button>
      <button onClick={() => changeColor('blue')}>Change color</button>
      <button onClick={() => changeYear(1000)}>Change year</button>
      <input
        type='text'
        placeholder='Change year'
        onChange={handleYearChange}
      />
    </>
  );
};

export default Car;
