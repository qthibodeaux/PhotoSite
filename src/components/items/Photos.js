import { list } from '../../assets/photoList'
import './Photo.css'

function Photos() {
  
  return (
    <div className='photoContainer'>
      <div className='bigDiv'>
        {
          list.map((item, index) => {
            return (
              <div key={index} className='imgDiv'>
                <img src={item} alt="photoimages" className='imageItem'/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Photos