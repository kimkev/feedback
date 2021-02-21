import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import feedbackImage from '../assets/files/image1.jpg'
import Footer from '../components/Footer'

const HomePage = () => {

    return (
        <>
            <div className='container h-100'>
                <div className="row h-100 justify-content-center align-items-center">
                    <h1 className="align-items-center">Home page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">

                    <div className="card" styles="width: 18rem;">
                        <img className="card-img-top img-thumbnail img-responsive" src={feedbackImage} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Feedback App</h5>
                            <p className="card-text">A MERN stack feedback app: username and message required to send to the database and display all messages on the list page</p>
                            <Link to="/feedback">Check it out</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" styles="width: 18rem;">
                        <img className="card-img-top img-thumbnail img-responsive" src={feedbackImage} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#">Check it out</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
