
import { AiFillMail, AiFillTwitterSquare, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import Photos from "./items/Photos";
import './Main.css'

function Main({ change }) {
  return (
    <div className="mainContainer">
      <div className="navSet">
        <div>
            <p className='brand'>Janice</p>
            <p className='brand'>Thibodeaux</p>
        </div>
        <ul className="navItems">
          <li onClick={() => change('entrance')}>Welcome</li>
          <li>Photos</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <Photos />

      <div>
        <div className="navA">
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