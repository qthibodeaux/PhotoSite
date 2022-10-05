import { AiFillMail, AiFillTwitterSquare, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import './Entrance.css'

function Entrance({ change }) {
    
  return (
    <div className='entranceContainer'>
        <nav className='navLinks'>
            <div>
                <p className='brand'>Janice</p>
                <p className='brand'>Thibodeaux</p>
            </div>
            <div className="navDiv">
                <div className="navA">
                    <a className="navIcons" href="mail"><AiFillMail /></a>
                    <a className="navIcons" href="twitter"><AiFillTwitterSquare /></a>
                    <a className="navIcons" href="facebook"><AiFillFacebook /></a>
                    <a className="navIcons" href="instagram"><AiOutlineInstagram /></a>
                </div>
                <button type="button" className="enterButton" onClick={() => change('main')}>Enter</button>
            </div>
        </nav>
    </div>
  )
}

export default Entrance