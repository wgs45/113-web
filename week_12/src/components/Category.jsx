import React from 'react';

const Category = () => {
  return (
    <div className='btn-container'>
      <button type='button' className='filter-btn' data-id='all'>
        All
      </button>
      <button type='button' className='filter-btn' data-id='breakfast'>
        Breakfast
      </button>
      <button type='button' className='filter-btn' data-id='lunch'>
        Lunch
      </button>
      <button type='button' className='filter-btn' data-id='shakes'>
        Shakes
      </button>
      <button type='button' className='filter-btn' data-id='dinner'>
        Dinner
      </button>
    </div>
  );
};

export default Category;
