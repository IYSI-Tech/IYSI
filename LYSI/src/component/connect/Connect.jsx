
import './connect.css'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { GoArrowRight } from 'react-icons/go'
import Lazyloading from '../../template/Lazyloading'
import a from '../../asset/images/connect.webp'
import { Link } from 'react-router-dom'

const Connect = () => {
  return (
    <div className='container connect'>
      <div className='center'>
      <div className="connect-txt">
      <h1>Join Nexted Events: Connect, Learn, and Inspire </h1>
      <p>At NextEd, we believe in the power of community and continuous learning. Our events are designed to bring together architects, enthusiasts, industry experts, and students for a, knowledge sharing, and inspiration. Explore our upcoming events and join us in shaping the future of architecture</p>
      <ul>
        <li><IoIosCheckmarkCircle className="icon" size="20"/><span>Networking Opportunities</span></li>
        <li><IoIosCheckmarkCircle className="icon" size="20"/><span>Knowledge Sharing</span></li>
        <li><IoIosCheckmarkCircle className="icon" size="20"/><span>Inspiration and Innovation</span></li>
      </ul>
      <Link to="CommunityRouteOne">
              register now <GoArrowRight size="20" />
            </Link>
      </div>
      <div className="connectImg">
        <Lazyloading src={a} alt="connect"/>
      </div>
      </div>
    </div>
  )
}

export default Connect