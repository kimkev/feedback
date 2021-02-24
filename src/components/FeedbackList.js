import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import 'moment-timezone';
import Footer from './Footer'
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// hostname
const localHostName = "http://localhost:4000"
const hostName = "http://3.138.195.122:4000"


const FeedbackList = () => {

    const [feedBackList, setFeedBackList] = useState([])
    // counter used to control useEffect
    const [counter] = useState(0)

    useEffect(() => {
        getAllFeedback()
    }, [counter])

    // fetch feedbacks
    const getAllFeedback = async () => {
        await axios.get(`${hostName}/app/feedback`)
            .then((response) => {
                const data = response.data
                setFeedBackList({ users: data })
                console.log(feedBackList)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const displayAllFeedback = (feedBackList) => {
        if (feedBackList.users) {
            if (feedBackList.users.length > 0) {
                return (
                    <div className="card-columns">
                        {feedBackList.users.map((feedback, index) => (
                            <div key={index} className="bg-secondary">
                                <div className="card">
                                    <h3 className="card-title text-center">{feedback.name}</h3>
                                    <h5><Moment date={feedback.date} /></h5>
                                    <h4 className="text-center">Rating: {feedback.rating} <FontAwesomeIcon icon={faStar} /></h4>
                                    <div className="card-body">
                                        <p className="card-text">{feedback.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        }
        return null
    }

    return (
        <>
            <div className="bg-info container-fluid vh-100">
                <div className=''>
                    <div className="row h-100 justify-content-center align-items-center">
                        <h1 className="align-items-center">Feedback List Page</h1>
                    </div>
                </div>
                <div className="container">
                    <div>{displayAllFeedback(feedBackList)}</div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FeedbackList;
