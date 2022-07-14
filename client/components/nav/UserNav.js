import React from 'react'
import Link from 'next/link'
const UserNav = () => {
    return (
        <>

            <ul className="nav nav-pills d-flex flex-column hr-hieght" style={{ borderRight: '0.5px solid #d3d3d3', hight: "99vh" }}>
                <li className="nav-item text-bold" style={{ marginTop: "3px", textAlign: 'center' }}>
                    <Link href='/' ><a className="nav-link h3 " >E-Buy</a></Link>
                    <hr className='m-0 mb-3' />
                </li>
                <li className="nav-item hover-link">
                    <Link href='/instructor' ><a className="nav-link h6" >Dashboard</a></Link>
                </li>
                <li className="nav-item hover-link">
                    <Link href='/' ><a className="nav-link h6" >Ceate Course</a></Link>
                </li>
            </ul>

        </>
    )
}

export default UserNav