import React from 'react';
import user from '../userInfo';
// import user from '../user2'; 

function ProfileTemplate() {

  return (
    <div>

      <div><label>Login Id:</label><span>{user.nickname}</span></div>
      <div><label>Name</label>
      <input type="text" id="name" value={user.name} placeholder="Enter Your Name"/></div>
      <div><label>Date Of Birth</label>
      <input type="date" id="date" value={user.date}/></div>

      <div>
        <input type="image" src={user.images || "profile_default.jpg"}  alt="Submit"  width="100" height="100"/> 
      </div>

      <label>Upload Image</label>

      <div>
        
        <textarea name="tips" cols="30" rows="10" placeholder="About You" value={user.description}></textarea>
      </div>
      <label>Description</label>
      
      <div><button>Confirm</button></div>
      
    </div>
  );
}

export default ProfileTemplate;