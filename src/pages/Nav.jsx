import React from 'react'
import './All.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar navbar-default'>
        <div class="container">
      <div class="navbar-header">
        <img class="logo"src="https://logoimagesv2.id-visitors.com/7/2/4/e/7/6/724e7669aeff497a95e747d77186cfda.png" alt="logo"/>
      </div>
        <ul class="navul">
          <li id="home"><a href="/">HOME</a></li>
          <Link to = '/customers'>
          <li id="customer"><a >CUSTOMERS</a></li>
          </Link>
          <Link to = '/transaction'>
          <li id="transaction"><a href="/transaction">TRANSACTION</a></li>
          </Link>
        </ul>
    </div>
    </div>
  )
}

export default Navbar   