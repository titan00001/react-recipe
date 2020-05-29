import React, {useState} from 'react';
// import user from '../userInfo';
import user from '../user2'; 

function ProfileTemplate() {

  const [input, ] = useState({"name":user.loginName, "date":user.date, "gender":user.gender, "description":user.description, "image":user.image});

  const handleClick = () => {
    
    console.log(input)

  }

  const handleChange = (name, value) => {
    input[name] = value;
  }

  // useEffect(() => {
  //   if(count === 2){
  //     console.log(input);
  //   }
  // },[count, input]);


  return (
    <div>

      <div><label>Login Id:</label><span>{user.loginName}</span></div>
      <div><label>Name</label>
      <input type="text" placeholder="Enter Your Name" onChange={(e) => {handleChange("name", e.target.value)}}/></div>
      <div><label>Date Of Birth</label>
      <input type="date" onChange={(e) => {handleChange("date", e.target.value)}}/></div>

      <div><label>Gender</label>
      <input type="text" onChange={(e) => {handleChange("gender", e.target.value)}}/></div>


      <div>
        <input type="image" src={user.image || "profile_default.jpg"}  alt="Submit"  width="100" height="100" onChange={(e) => {handleChange("image", e.target.value)}}/> 
      </div>

      <label>Upload Image</label>

      <div>
        
        <textarea cols="30" rows="10" placeholder="About You" onChange={(e) => {handleChange("description", e.target.value)}}></textarea>
      </div>
      <label>Description</label>
      
      <div><button onClick = {handleClick}>Confirm</button></div>
      
    </div>
  );
}

export default ProfileTemplate;