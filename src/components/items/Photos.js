import { list1, list2, list3 } from '../../assets/photoList'
import './Photo.css'

function Photos() {
  
  return (
    <div className='photoContainer'>
      <div className='bigDiv'>
        <div className="centerDiv">
          <div className='imgColumn'>
            {
              list1.map((item, index) => {
                return (
                  <div key={index} className='imgDiv'>
                    <img src={item} alt="photoimages" className='imageItem'/>
                  </div>
                )
              })
            }
          </div>
          <div className="imgColumn">
            {
              list2.map((item, index) => {
                return (
                  <div key={index} className='imgDiv'>
                    <img src={item} alt="photoimages" className='imageItem'/>
                  </div>
                )
              })
            }
          </div>
          <div className="imgColumn">
            {
              list3.map((item, index) => {
                return (
                  <div key={index} className='imgDiv'>
                    <img src={item} alt="photoimages" className='imageItem'/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos

//<img src={item} alt="photoimages" className='imageItem'/>