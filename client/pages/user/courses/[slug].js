import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const MyCourse = () => {


    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            console.log(router.query.slug)
        }
    }, [router.isReady])

    return (
        <div>MyCourse</div>
    )
}

export default MyCourse