import React, { useState } from 'react';
import Category from '../components/category';
import data from '../data/data';
import Menu from '../components/Menu';

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);

  const categoryFilters = (choose) => {
    if (choose === 'all') {
      setMenuItems(data);
    } else {
      setMenuItems(data.filter((value) => value.category === choose));
    }
  };

  return (
    <section className='menu'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Category categoryFilter={categoryFilters} />
      <Menu items={menuItems} />
    </section>
  );
};

export default Home;
