import React from 'react';

const Category = ({ categoryFilter }) => {
  return (
    <div className='btn-container'>
      <button
        type='button'
        className='filter-btn'
        data-id='all'
        onClick={() => categoryFilter('all')}
      >
        All
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='breakfast'
        onClick={() => categoryFilter('breakfast')}
      >
        Breakfast
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='lunch'
        onClick={() => categoryFilter('lunch')}
      >
        Lunch
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='shakes'
        onClick={() => categoryFilter('shakes')}
      >
        Shakes
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='dinner'
        onClick={() => categoryFilter('dinner')}
      >
        Dinner
      </button>
    </div>
  );
};

export default Category;
