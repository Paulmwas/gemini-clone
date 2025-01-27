import './Main.css'
import {assets} from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Paul Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest great places I need to see in my upcoming roadtrip.</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm  team bonding activities for our work retreat</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm  team bonding activities for our work retreat</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of this code.</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main