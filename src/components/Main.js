import { useState } from "react";
import { AiFillMail, AiFillTwitterSquare, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import Photos from "./items/Photos";
import Services from './items/Services'
import About from './items/About'
import Contact from './items/Contact'
import './Main.css'

function Main({ change }) {
  const [expand, setExpand] = useState(false)
  const [activeTab, setActiveTab] = useState('photos')

  let context = <p style={{ backgroundColor: 'red', fontSize: '5rem', padding: '3rem', textAlign: 'center'}}>Dev Error</p>

  if (activeTab === 'photos') context = <Photos />
  else if (activeTab === 'services') context = <Services />
  else if (activeTab === 'about') context = <About />
  else if (activeTab === 'contact') context = <Contact />

  return (
    <div className="mainContainer">
      <div className="navSet">
        <div className="brandDiv">
            <p className='brand'>Photography</p>
        </div>
        <ul className="navItems">
          <li onClick={() => change('entrance')}>Welcome</li>
          <li onClick={() => setActiveTab('photos')}>Photos</li>
          <li onClick={() => setActiveTab('services')}>Services</li>
          <li onClick={() => setActiveTab('about')}>About</li>
          <li onClick={() => setActiveTab('contact')}>Contact</li>
        </ul>
      </div>

      {expand &&
        (
          <div className='expanded'>
            <button className="expandBtn" onClick={() => change('entrance')}>Welcome</button>
            <button className="expandBtn" onClick={() => 
              {setActiveTab('photos')
              setExpand(!expand)}}>Photos</button>
            <button className="expandBtn" onClick={() => 
              {setActiveTab('services')
              setExpand(!expand)}}>Services</button>
            <button className="expandBtn" onClick={() => 
              {setActiveTab('about')
              setExpand(!expand)}}>About</button>
            <button className="expandBtn" onClick={() => 
              {setActiveTab('contact')
              setExpand(!expand)}}>Contact</button>
          </div>
        )
      }
      <div className='smallNav'>
        <button className="navBtn" onClick={() => setExpand(!expand)}>Menu</button>
      </div>

      {context}

      <div>
        <div className="foot">
          <a className="navIcons" href="mail"><AiFillMail /></a>
          <a className="navIcons" href="twitter"><AiFillTwitterSquare /></a>
          <a className="navIcons" href="facebook"><AiFillFacebook /></a>
          <a className="navIcons" href="instagram"><AiOutlineInstagram /></a>
        </div>
      </div>
    </div>
  )
}

export default Main