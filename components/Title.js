import React, { Component } from 'react'
import '../assets/titlestyle.css'
import {Link} from 'react-router-dom'
export default class title extends Component { 
  render() {
    return (
      <div>
        <div className='header'>
            <nav>
              <ul className='nav-links'>
                <li><a href='https://github.com/Jeffkw213'>Jeff</a></li>
                <li><a href='https://www.linkedin.com/in/jeff-kwan-881a41203/'>Jeff</a></li>
                <li><a href=''>Jeff</a></li>
                <li><a href=''>Jeff</a></li>
              </ul>
            <button id="WTF">WTF</button>
          </nav>
        </div>
        <div className='beginning'>
            <h1 className='Start'>Data Structure Illustrations</h1>
            <p className='creator'>By: Jeff Kwan</p>
            <ul className='buttonList'> 
              <li>
                <Link to="/LinkedList">
                  <button >
                  Linked-Lists
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/Trees">
                  <button>
                    Trees
                  </button>
                </Link>
              </li>
              <li><button>Hash</button></li>
              <li><button>Graphs</button></li>
            </ul>
        </div>
      </div>
    )
  }
}

