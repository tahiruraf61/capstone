import React from 'react'

const Logo = () => {
    return (
        <div className='logo-container'>
     <img
          height={200}
           src={require("./images/logo.png")}
           alt="logo"
      />
        </div>
    )
}
export default Logo;