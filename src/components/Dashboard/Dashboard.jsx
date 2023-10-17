import React from 'react';
import {
  Button, Search, Tag
} from '@carbon/react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='dashboard-container'>
        <Search size="lg" placeholder="Find your items" labelText="Search" closeButtonLabelText="Clear search input" id="search-1" onChange={() => { }} onKeyDown={() => { }} />
        <div className='filter-container'>
          <div className='filter-inner-container'>
            <Tag className="some-class" type="outline" title="Clear Filter">
              {'All'}
            </Tag>
            <Tag className="some-class" type="high-contrast" title="Clear Filter">
              {'Fruits'}
            </Tag>
            <Tag className="some-class" type="outline" title="Clear Filter">
              {'Vegetables'}
            </Tag><Tag className="some-class" type="outline" title="Clear Filter">
              {'Dairy'}
            </Tag>
          </div>
        </div>
        <div className='product-list'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

      </div>
      <div className='add-product'><Button onClick={e => { navigate("/form/new") }}>Add product</Button></div>
    </>
  )
}


export default Dashboard;