import React from 'react';
import Navbar from './NavBarComp';
import ProductComp from './ProductComp';

const HomeComp: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="banner">
        <h1 className='ms-4 mt-4'>Welcome to MyShop</h1>
      </div>
      <div className="product-list container">
     <ProductComp/>
      </div>
    </>
  );
};

export default HomeComp;
