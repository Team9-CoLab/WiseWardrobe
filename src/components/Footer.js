// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <footer className='my-8'>
      

      <hr className='border-1 border-black'/>
      {/* <h1>SSSS</h1>
       */}


       <section  className='flex gap-10'>
          <a href=""><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/hanger.png" alt="hanger"/>closet</a>
      <a href=""><img width="30" height="30" src="https://img.icons8.com/ios/50/clothes.png" alt="clothes"/> outfits </a>
      <a href=""><img width="30" height="30" src="https://img.icons8.com/ios/50/plus--v1.png" alt="plus--v1"/>additem</a>
      <a href=""><img width="30" height="30" src="https://img.icons8.com/material-outlined/24/output.png" alt="output"/>statistics</a>
      <a href=""><img width="30" height="30" src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1"/>account</a>
       </section>
    </footer>
  )
}

export default Footer
