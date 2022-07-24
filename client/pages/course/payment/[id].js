import React, { useState, useEffect, useContext } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js';
import StripCheckout from '../../../components/strip/StripCheckout';

// import '../../../public/css/stripe.css'



const Payment = () => {
    const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIP_PUBLISHABLE_KEY}`);



    const router = useRouter()


    const [onReadyId, setOnReadyId] = useState('')


    useEffect(() => {
        if (router.isReady) {
            setOnReadyId(router.query.id)
        }
    }, [router.isReady])




    return (
        <>

            <div className='container p-5 text-center'>
                <h4>Complete Your Purchase</h4>

                <Elements stripe={stripePromise}>
                    <div className="col-md-8 offset-md-2">
                        <StripCheckout onReadyId={onReadyId} />
                    </div>
                </Elements>
            </div>
        </>
    )
}

export default Payment