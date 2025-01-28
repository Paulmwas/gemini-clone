import './Main.css'
import {assets} from '../../assets/assets'
import { useContext } from 'react'
import { ContextProvider } from '../../context/context.jsx'
const Main = () => {
  const  {
    onSent, 
    recentPrompt,
    input,
    setInput,
    showResult,
    resultData,
    loading,} = useContext(ContextProvider);
  return (
    <div className='main'>
      <div className="nav">
        <p>Paul Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult
        ? 
        <>
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
            <p>Brainstorm  team bonding activities for our work retreat.</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarise this concept: Reverse engineering in electronics.</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of this code.</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>
        :
        <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? 
            <div className="loader">
              <hr />
              <hr />
              <hr />
            </div>:
            <p dangerouslySetInnerHTML={{__html: resultData}}></p>            
          }

          </div>
        </div>
        
        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here' />
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            <img src="" alt="" />
          </div>
          <p className="bottom-info">Gemini may display false information, including about people, so double check its responses.</p>
        </div>
      </div>
    </div>
  )
}

export default Main