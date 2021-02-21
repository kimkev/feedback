import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import 'moment-timezone';
import Footer from './Footer'

const FeedbackList = () => {

    const [feedBackList, setFeedBackList] = useState([])
    // counter used to control useEffect
    const [counter] = useState(0)

    useEffect(() => {
        getAllFeedback()
    }, [counter])

    // fetch feedbacks
    const getAllFeedback = async () => {
        await axios.get('http://localhost:4000/app/feedback')
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
                    <ul class="list-unstyled card-columns">
                        {feedBackList.users.map((feedback, index) => (
                            <li key={index} >
                                <h3>{feedback.name}</h3>
                                <p>{feedback.message}</p>
                                <h5><Moment date={feedback.date} /></h5>
                            </li>
                        ))}
                    </ul>
                )
            }
        }
        return null
    }

    return (
        <>
            <div className='container h-100'>
                <div className="row h-100 justify-content-center align-items-center">
                    <h1 className="align-items-center">Feedback List Page</h1>
                </div>
            </div>
            <div class="container">
                <div>{displayAllFeedback(feedBackList)}</div>
            </div>

            <Footer />
        </>
    );
}

export default FeedbackList;
