import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import images
import image1 from '../assets/files/image1.jpg'
import image2 from '../assets/files/image2.PNG'
// import components
import Footer from '../components/Footer'

const HomePage = () => {

    return (
        <>
            <div className="bg-info">
                <div className='container h-100'>
                    <div className="row h-100 justify-content-center align-items-center">
                        <h1 className="align-items-center">Home page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3 ">
                        <div className="card" styles="width: 18rem;">
                            <img className="card-img-top img-thumbnail img-responsive" src={image1} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Feedback App</h5>
                                <p className="card-text">A MERN stack feedback app: Name, rating and message required
                                    to send to the database and display all messages on the following list page</p>
                                <Link to="/feedback">Check it out</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card" styles="width: 18rem;">
                            <img className="card-img-top img-thumbnail img-responsive" src={image2} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Second</h5>
                                <p className="card-text">Sample Text</p>
                                <Link to="#">Check it out</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default HomePage;
