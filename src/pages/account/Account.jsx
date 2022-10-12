import React from 'react'
import image from './input.png'
import './account.css'


const Account = () => {
  return (
    <>
    <section className="accountInfo">
        <div className="container boxItems">

        <h1>Accound information</h1>
        <div className="content">
            <div className="left">
                <div className="img flexCenter">
                    <input type="file" src={image} alt='img'/>
                    <img src={image} alt="img" />
                </div>

            </div>
              <div className="right">
                    <label htmlFor="">Username</label>
                    <input type="text" />

                    <label htmlFor="">Email</label>
                    <input type="email" />

                    <label htmlFor="">Password</label>
                    <input type="password" />

                    <button className="button">Update</button>
                </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Account