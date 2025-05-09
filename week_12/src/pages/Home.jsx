import React, { useState } from 'react';
import Category from '../components/category';
import data from '../data/data';
import Menu from '../components/Menu';

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);

  return (
    <section className='menu'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <div className='btn-container'>
        <Category />
      </div>
      <div className='section-center'>
        <Menu items={data} />
      </div>
    </section>
  );
};

export default Home;
