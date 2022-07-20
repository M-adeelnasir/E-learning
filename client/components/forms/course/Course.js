import React from 'react'
import { Card } from 'antd'

const Course = ({ course }) => {
    const { name, image, description, price, instructor } = course
    return (
        <div>{name}</div>
    )
}

export default Course