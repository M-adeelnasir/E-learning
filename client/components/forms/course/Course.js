import React from 'react'
import { Card } from 'antd'
import Link from 'next/link';
const { Meta } = Card;
import { currencyFormate } from '../../../utils/helpers';


const Course = ({ course }) => {
    const { name, image, description, price, instructor, slug, paid } = course
    return (
        <Link href={`/course/view/${slug}`}>
            <a>
                <Card
                    hoverable
                    style={{ width: 320, marginTop: "15px" }}
                    cover={<img alt="example" src={image.Location} className="m-0 d-flex" style={{ height: "200px", objectFit: 'cover' }} />}
                >
                    <h6 className='mb-0'>{name.substr(0, 80)}</h6>
                    <p className="text-secondary mb-0">{instructor.name}</p>
                    <h6>{paid ? currencyFormate({ amount: price, currency: 'usd' }) : "Free"}</h6>
                </Card>
            </a>
        </Link>
    )
}

export default Course