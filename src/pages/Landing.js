import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>Job <span> Tracking</span> App</h1>
          <p>
          I'm baby freegan tbh tumblr, art party mlkshk af gochujang actually. Retro cold-pressed squid gluten-free shaman street art hell of small batch hoodie. Put a bird on it banjo trust fund master cleanse asymmetrical jianbing.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing