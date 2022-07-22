import React, { useEffect, useState } from 'react'
import { Elements, useStripe, useElements, CardElement, } from '@stripe/react-stripe-js';
import { Card } from 'antd';
import Link from 'next/link';
import { DollarOutlined, CheckOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'



const StripCheckout = ({ onReadyId }) => {


    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)

    const [amount, setAmount] = useState(0)
    const [currentUser, setCurrentUser] = useState({})

    const stripe = useStripe();
    const elements = useElements();

    const router = useRouter()

    const userOrder = async (id) => {
        console.log(id)
        try {
            const { data: user } = await axios.get(`/api/v1/course/buying/${id}`)
            console.log(user.data)
            setCurrentUser(user.data)
            console.log(user.data.stripPaymentIntent.paymentIntents.amount)
            setAmount(user.data.stripPaymentIntent.paymentIntents.amount)
            setClientSecret(user.data.stripPaymentIntent.paymentIntents.client_secret)


        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (onReadyId) {
            userOrder(onReadyId)
        }
    }, [onReadyId])






    const handleChange = (e) => {

        //listen for changing in elementCard
        setDisabled(e.empty) //disable pay button if error
        //and display the error if the customer give invalid card
        setError(e.error ? e.error.message : "") //show the error message

    }


    const handleSubmite = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: e.target.name.value,

                }

            }
        })

        if (payload.error) {
            // console.log(payload.error);
            console.log(payload.error)
            setProcessing(false)
            setError(`Pyament Faild ${payload.error.message}`)
        } else {
            console.log(JSON.stringify(payload, null, 4));

            try {
                const { data } = await axios.put(`/api/v1/course/payment/${currentUser.stripeSession}/${currentUser._id}`)
                toast.success("Welcome You Successfully Purchased The Course")
                router.back()
                setProcessing(false)
            } catch (err) {
                console.log(err)
            }

        }


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
                                <DollarOutlined className='text-info mt-5' />
                                <br /> Total: $
                                {(amount / 100).toFixed(2)}
                            </>,
                            <>
                                <CheckOutlined className='text-info mt-5' />
                                <br /> Payable: $
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

        </>


    )
}

export default StripCheckout