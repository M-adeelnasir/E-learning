import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import TopNav from '../../../components/TopNav'

const MyCourse = () => {


    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            console.log(router.query.slug)
        }
    }, [router.isReady])



    return (
        <>
            <TopNav />
            <div>MyCourse</div>
        </>
    )
}

export default MyCourse