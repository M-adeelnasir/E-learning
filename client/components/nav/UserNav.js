import React from 'react'
import Link from 'next/link'
const UserNav = () => {
    return (
        <>

            <ul class="nav nav-pills d-flex flex-column hr-hieght" style={{ borderRight: '0.5px solid #d3d3d3', hight: "99vh" }}>
                <li class="nav-item text-bold" style={{ marginTop: "3px", textAlign: 'center' }}>
                    <Link href='/' ><a class="nav-link h3 " >E-Buy</a></Link>
                    <hr className='m-0 mb-3' />
                </li>
                <li class="nav-item hover-link">
                    <Link href='/' ><a class="nav-link" >E-Buy</a></Link>
                </li>
                <li class="nav-item hover-link">
                    <Link href='/' ><a class="nav-link" >E-Buy</a></Link>
                </li>
                <li class="nav-item hover-link">
                    <Link href='/' ><a class="nav-link" >E-Buy</a></Link>
                </li>
                <li class="nav-item hover-link">
                    <Link href='/' ><a class="nav-link" >E-Buy</a></Link>
                </li>
            </ul>

        </>
    )
}

export default UserNav