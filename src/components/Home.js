import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <>
                <div className=' bg-black  h-screen justify-center items-center flex flex-col'>
                    <p className=' text-white text-3xl'>welcome to the world the WEB3 games</p>
                    <br />
                    <br />
                    <br />
                    <form action="/cars" method="get" className='flex flex-col justify-around align-middle w-96 h-96 hover:border-2 hover:border-white p-4 items-center rounded-lg'>
                        <label className=' text-white text-xl' htmlFor="name">Name</label>
                        <input className=' animate-pulse hover:border-2 hover:border-white text-transparent bg-clip-text text-3xl bg-gradient-to-br from-blue-34 to-blue-35 w-fit ' type="text" name="name" id="Name" required />
                        <label className=' text-white text-xl' htmlFor="mail">Email</label>
                        <input className=' animate-pulse  hover:border-2 hover:border-white text-transparent bg-clip-text text-3xl bg-gradient-to-br from-blue-34 to-blue-35  w-fit ' type="email" name="mail" id="Email" required />

                        <button className=' rounded-xl text-white  text-3xl font-bold  bg-gradient-to-br from-blue-34 to-blue-35 h-fit w-48 p-5'>
                            <Link to="/cars" >
                                Let's GO
                            </Link>
                        </button>
                    </form>
                </div>
            </>
        )
    }
}