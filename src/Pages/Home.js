import React from 'react';
import { useState, useEffect } from "react";
import Products from '../Component/Products';
import { Button, Space, Divider } from "antd";

const Home = () => {
    
    
    return (
      <div>
        <div className="">
          <Divider>
            <h1>React Redux Toolkit Practice</h1>
          </Divider>
        </div>

        <Products />
      </div>
    );
};

export default Home;
