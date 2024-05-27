import React, { useState } from 'react'
import './profile.scss'
import Image from 'next/image'

// const Profile = () => {
//   return (

//     <section>
//       <div className='profile-navbar'>
//       <h1 className='profile'>Profile</h1>
//         <div className='navbar-btn'>
//             <button 
//             className='profile-navbar-btn' 
//             type='button'>
//               Edit
//               <Image
//               className='profile-edit'
//               src='/images/profile/profile-edit.svg'
//               alt="profile-edit-logo"
//               width={20}
//               height={20}
//               />
//             </button>
            
//             <button className='password-btn' type='button'>
//               Change Password
//             </button>
//         </div>
//       </div>

//       <Image src='/images/profile/Avatar.svg'
//       className='profile-img'
//       alt="profile-img"
//       width={100}
//       height={100}
//       quality={100}
//       />

//       <div className="profile-intro">
//         <form className='profile-form'>
//           <div className='profile-box'>
//             <label htmlFor="name">First Name</label>
//             <input type="text" placeholder="First Name" required />
//           </div>           
//           <div className='profile-box'>
//             <label htmlFor="username">Last Name</label>
//             <input type="text" placeholder="Last Name" required />
//           </div>
//           <div className='profile-box email'>
//             <label htmlFor="email">Email</label>
//             <input type="email"  placeholder="Email" required />
//           </div>
//           <div className='profile-box'>
//             <label htmlFor="name" className=''>Phone number</label>
//             <input type="text" placeholder="Phone Number" required />
//           </div>

//           <div className='profile-box '>
//             <label htmlFor="name">Password</label>
//             <div className='pass-img'>
//               <input type="password" placeholder="Password" required />
//               <button>
//               <Image
//               className='passimage'
//               alt='pass-img'
//               src='/images/profile/mdi_eye-off-outline.svg'
//               width={20}
//               height={20}
//               quality={100} 
//               /> 
//               </button>
//             </div>
//           </div>
//         </form>

//         <form>
//           <div className='profile-two'>
//             <div className='about'>
//               <p>About</p>
//               <button className='link'>Add</button>
//             </div>
//             <div className='about'>
//               <p>Government ID</p>
//               <button className='link'>Add</button>
//             </div>
//             <div className='about'>
//               <p>Address</p>
//               <button className='link'>Add</button>
//             </div>
//             <div className='about'>
//               <p>Government ID</p>
//               <button className='link'>Add</button>
//             </div>

//           </div>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default Profile



// const Edit = () => {
//   return (
//     <section>
//       <div className='edit'>
//         <h1>Edit Profile</h1>
//         <div className='editImg'>
//           <Image
//           className='edit-img'
//           src='/images/profile/avatar.svg' 
//           alt="edit-img"
//           width={100}
//           height={100}
//           />
//           <Image 
//           className='edit-img-two'
//           src='/images/profile/add_a_photo.svg' 
//           alt="edit-img"
//           width={30}
//           height={30}
//         />
//         </div>

//         <form className='editProfile'> 
//           <div className='edit-profile-box'>
//             <label htmlFor="username">First-name</label>
//             <input type="text" placeholder="First Name" required />
//           </div>
//           <div className='edit-profile-box'>
//             <label htmlFor="username">Last-name</label>
//             <input type="text" placeholder="Last Name" required />
//           </div>
          
//           <div className='edit-profile-box'>
//             <label htmlFor="username">Email</label>
//             <input type="Email" placeholder="Email" required />
//           </div>
//           <div className='edit-profile-box'>
//             <label htmlFor="username">Phone Number</label>
//             <input type="text" placeholder="Phone Number" required />
//           </div>
//         </form>

//         <div className='edit-btn'>
//           <button className='edit-btn'>Save</button>
//         </div>
//       </div>
      
//     </section>
//   )
// }

// export default Edit



const ChangePassword = () => {
  return (
    <section>
      <h1>Change Password</h1>
      <div className='password'>
        <div className='password-profile-box'>
          <label htmlFor="name">Password</label>            
          <div className='password-img'>
            <input type="password" placeholder="Password" required />              
            <button>              
              <Image
              className='passwordimage'
              alt='pass-img'
              src='/images/profile/mdi_eye-off-outline.svg'
              width={20}
              height={20}
              quality={100} 
              /> 
            </button>            
          </div>
        </div>
        <div className='password-profile-box'>
          <label htmlFor="name">Password</label>            
          <div className='password-img'>
            <input type="password" placeholder="Password" required />              
            <button>              
              <Image
              className='passwordimage'
              alt='pass-img'
              src='/images/profile/mdi_eye-off-outline.svg'
              width={20}
              height={20}
              quality={100} 
              /> 
            </button>            
          </div>
        </div>

        <div>
          <button className='password-btn'>Contiune</button>
        </div>
      </div>
    </section>
  )
}

export default ChangePassword



// const GovernmentID = () => {
//   const[isActive, setIsActive]= useState (false);
  
//   return (
//     <section className='government-id'>
//       <h1 className='govt-id'>Government ID</h1>
//       <div className='id'>
//         <div className='id-profile-box'>
//           <label htmlFor="name">Issuring Country</label>            
//           <div className='password-img'>
//             <div className='id-dropdown'>
//               <div className="id-dropdown-btn" onClick ={
//                 e=> setIsActive (!isActive)
//               }>
//                 Nigeria
//                 <span>
//                   <Image src='/images/profile/chevron-down.svg'
//                   alt="profile-img"
//                   width={20}
//                   height={20}
//                   quality={100}
//                   />
//                 </span>
//               </div>
//               {isActive && (
//                 <div className="id-dropdown-content">
//                   <div className="id-dropdown-items">1</div> 
//                   <div className="id-dropdown-items">2</div> 
//                   <div className="id-dropdown-items">3</div> 
//                   <div className="id-dropdown-items">4</div>
//                   </div> 
//               )}
                
              
//             </div>                    
//           </div>
//         </div>
//         <div className='id-profile-box two'>
//           <label htmlFor="name">ID Type</label>            
//           <div className='password-img'>
//             <div className='id-dropdown'>
//               <div className="id-dropdown-btn" onClick ={
//                 e=> setIsActive (!isActive)
//               }>
//                 Identity Card
//                 <span>
//                   <Image src='/images/profile/chevron-down.svg'
//                   alt="id-dropdown-img"
//                   width={20}
//                   height={20}
//                   quality={100}
//                   />
//                 </span>
//               </div>
//               {isActive && (
//                 <div className="id-dropdown-content">
//                   <div className="id-dropdown-items">1</div> 
//                   <div className="id-dropdown-items">2</div> 
//                   <div className="id-dropdown-items">3</div> 
//                   <div className="id-dropdown-items">4</div>
//                   </div> 
//               )}
                
              
//             </div>                    
//           </div>
//         </div>

//         <div>
//           <button className='password-btn'>Save</button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default GovernmentID


// const IdentityCard = () => {
//   return (
//     <section className='identity-card'>
//       <h1>Government ID</h1>
//       <div className='id-box'>
//         <p className='id-p'>Upload Image of Your Identity Card</p>
//         <Image
//         src='/images/profile/frame.svg'
//         className='id-card-img'
//         alt="id-card-img"
//         width={200}
//         height={100}
//         quality={100}
//         />
//       </div>

//       <div>
//         <button className='password-btn'>Save</button>
//      </div>
//     </section>
//   )
// }

// export default IdentityCard