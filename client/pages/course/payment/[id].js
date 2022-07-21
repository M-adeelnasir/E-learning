import React, { useState, useEffect, useContext } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Context } from '../../../context';
import { Card } from 'antd';
import Link from 'next/link';
import { DollarOutlined, CheckOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// import '../../../public/css/stripe.css'


const stripePromise = loadStripe(`${process.env.REACT_APP_STRIP_PUBLISHABLE_KEY}`);


const Payment = () => {


    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)

    const [amount, setAmount] = useState(0)
    const router = useRouter();

    const [currentUser, setCurrentUser] = useState({})

    const userOrder = async (id) => {
        try {
            const { data: user } = await axios.get(`/api/v1/course/buying/${id}`)
            console.log(user.data)
            setCurrentUser(user.data)
            console.log(user.data.stripPaymentIntent.paymentIntents.amount)
            setAmount(user.data.stripPaymentIntent.paymentIntents.amount)
            setClientSecret(user.data.stripPaymentIntent.paymentIntents.clientSecret)
            console.log(clientSecret)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (router.isReady) {
            userOrder(router.query.id)
        }
    }, [router.isReady])


    const handleChange = (e) => {

        //listen for changing in elementCard
        setDisabled(e.empty) //disable pay button if error
        //and display the error if the customer give invalid card
        setError(e.error ? e.error.message : "") //show the error message

    }


    const handleSubmite = async (e) => {

    }


    const cartStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: "Arial, sans-serif",
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d",
                },
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
            },

        },
    };

    return (
        <>
            <div className='container p-5 text-center'>
                <h4>Complete Your Purchase</h4>

                <Elements stripe={stripePromise}>
                    <div className="col-md-8 offset-md-2">
                        <p className={succeeded ? "result-message" : "result-message hidden"}>Payment Successful.<Link href='/user/history'><a>See in your purchase history</a></Link></p>

                        <form id='payment-form' className='stripe-form' onSubmit={handleSubmite}>
                            <div className="text-center pb-5">
                                <Card
                                    cover={
                                        <img
                                            src='https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF5bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                                            alt="laptop"
                                            style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                                marginBottom: '-50px',
                                            }}
                                        />
                                    }
                                    actions={[
                                        <>
                                            <DollarOutlined className='text-info' />
                                            <br /> Total: $
                                            {amount}
                                        </>,
                                        <>
                                            <CheckOutlined className='text-info' />
                                            <br /> Total after Discount: $
                                            {(amount / 100).toFixed(2)}
                                        </>

                                    ]}
                                >

                                </Card>
                            </div>
                            <CardElement
                                id='card-element'
                                options={cartStyle}
                                onChange={handleChange}
                            />
                            <button className='stripe-button'
                                disabled={processing || disabled || succeeded}
                            >
                                <span id='button-text'>
                                    {processing ? <div className='spinner' id='spinner'></div> : "Pay"}
                                </span>
                            </button>
                            {error && <div className='card-error pt-2'> {error}</div>}
                        </form>
                    </div>
                </Elements>


            </div>
        </>
    )
}

export default Payment