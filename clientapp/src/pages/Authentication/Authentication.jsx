import backgroundImage from '../../assets/images/deerandlake.png' 
import './Authentication.css'

function Authentication({ Component }) {
    return (
      <div className='auth-page-container' style={{ backgroundImage: `url(${backgroundImage})`}}>
          <div className='auth-page-content-container'>
            <Component />
          </div>
      </div>
    )
  }
  
  export default Authentication;
  