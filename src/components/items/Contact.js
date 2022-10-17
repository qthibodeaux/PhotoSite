import Flower from '../../assets/flower.jpg'
import './Contact.css'

function Contact() {
  return (
    <div className='contactContainer'>
      <div className='contactLeft'>
        <div className='flowerDiv'>
          <img src={Flower} alt="flowerimage" className='flowerImg'/>
        </div>
      </div>
      <div className='contactRight'>
        <form className='formDiv'>
          <label for='name'>Name:</label>
          <input type='text' id='name' placeholder='Name' required/>
          
          <label for='name'>Email:</label>
          <input type='text' id='name' placeholder='Email' required/>
          
          <label for='name'>Message:</label>
          <textarea name='message' rows='7' required></textarea>
          
          <div>
            <button type='submit'>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact