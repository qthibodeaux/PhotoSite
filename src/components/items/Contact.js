import Flower from '../../assets/flower.jpg'
import './Contact.css'

function Contact() {
  return (
    <div className='contactContainer'>
      <div className='flowerDiv'>
        <img src={Flower} alt="flowerimage" className='flowerImg'/>
      </div>
      <div>
        <form>
          <label for='name'>Name: *</label>
          <input type='text' id='name' placeholder='Name' />
          <input type='submit' />
        </form>
      </div>
    </div>
  )
}

export default Contact