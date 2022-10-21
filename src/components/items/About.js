import JT from '../../assets/jt.jpg'
import './About.css'

function About() {
  return (
    <div className='aboutContainer'>
      <div className='aboutCen'>
        <div className='aboutLeft'>
          <div>
            <img src={JT} alt="flowerimage" />
          </div>
        </div>
        <div className='aboutRight'>
          <p className='aboutHeader'>Janice Thibodeaux is a Houston based Photographer</p>

          <p className='aboutPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perspiciatis harum doloribus nisi impedit quidem dolore in tempore quod. Tempore cumque eum libero beatae natus quidem dolorum sapiente quos modi.</p>

          <p className='aboutPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem neque ea! Nobis recusandae corporis dolorem excepturi cumque? Quasi neque vero deleniti accusamus saepe ipsam recusandae minima quis dolore assumenda.</p>

          <p className='aboutPara'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque beatae enim tenetur, molestias excepturi aperiam harum porro in nam perspiciatis aliquid consequuntur inventore voluptates illum provident temporibus odit! Deserunt?</p>
        </div>
      </div>
    </div>
  )
}

export default About