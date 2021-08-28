import { Link } from 'react-router-dom'
import img1 from '../../images/truckpic1.jpg'


const Jumbotron = () => {
  return (
    <div className="jumbotron p-5 d-flex">
      <div>
      <h1 className="display-4">Find your truck!</h1>
      <p className="lead">Find and keep track of all your favorite local trucks!</p>
      <p>Share and meet up with your friends and discover new foods!</p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/" role="button">Learn more</Link>
      </p>
      </div>
      <div className="truckPic">
        <img className="truckImg"src={img1} alt=""/>
      </div>
    </div>
  )
}

export default Jumbotron;