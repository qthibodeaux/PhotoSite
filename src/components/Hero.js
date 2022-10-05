import './Hero.css'

function Hero() {
  return (
    <div className='herodiv'>
        <nav className='navlinks'>
            <p className='brand'>Photos | Janice Thibodeaux</p>
            <a href="photos" className='anchor'>Photos</a>
            <a href="photos" className='anchor'>Services</a>
            <a href="photos" className='anchor'>About</a>
        </nav>
    </div>
  )
}

export default Hero