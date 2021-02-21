import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const Feedback = () => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeMessage = (event) => {
        setMessage(event.target.value)
    }

    //submit using axios
    const onSubmit = (event) => {
        event.preventDefault()

        const feedback = {
            name: name,
            message: message
        }

        axios.post('http://localhost:4000/app', feedback)
            .then(response => console.log(response.data))

        // window.location = '/'   setting the next page
        setName("")
        setMessage("")
    }


    return (
        <>
            <div className='container'>
                <div className='form-div'>
                    <form onSubmit={onSubmit}>
                        <input type='text'
                            placeholder='name'
                            onChange={changeName}
                            value={name}
                            className='form-control form-group'
                        />
                        <input type='text'
                            placeholder='message'
                            onChange={changeMessage}
                            value={message}
                            className='form-control form-group'
                        />

                        <input type='submit' className='btn btn-danger btn-block' value='submit' />

                    </form>
                </div>
            </div>
            <Link to="/feedbackList">FeedbackList</Link>
            <br />
            <Link to="/">Back to Home</Link>
        </>

    );
}

export default Feedback;
