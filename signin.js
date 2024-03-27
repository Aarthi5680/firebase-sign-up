import React from 'react'

function signin() {
  return (
    <div className='signin'>
        <label>Email</label>
        <input type="email" placeholder='email'/>
        <label>Password</label>
        <input type="passwprd" placeholder='password'/>
        <button>sign in</button>
        
    </div>

  )
}

export default signin