import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Payment = () => {

    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            console.log(router.query)
        }
    }, [router.isReady])


    useEffect(() => {
        //   const   
    }, [])

    return (
        <div>hello</div>
    )
}

export default Payment