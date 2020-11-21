import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import user from '../userInfo';
// import user from '../user2'; 

function ProfileTemplate() {

  const user = useSelector(state => state.userInfoReducer);
  const dispatch = useDispatch();


  const [input, setState] = useState({"name":user.name, 
                                        "date":user.date, 
                                        "gender":user.gender, 
                                        "description":user.description, 
                                        
                                        "_id": user._id,
                                        "userName": user.userName
                                      });

  const handleClick = () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json' },

      body: JSON.stringify(input)
    };

    fetch('http://localhost:9000/user/' + input["_id"], requestOptions)
        .then(response => response.json())
        .then(data => {  setState({"name":data.name, 
                                    "date":data.date, 
                                    "gender":data.gender, 
                                    "description":data.description, 
                                    
                                    "_id": data._id,
                                    "userName": data.userName
                                  })}, (err) => {console.error('err', err)});

    //     props.sendData(input);

    dispatch({type : "Post", payload: input});

  }


  const handleChange = (name, value) => {
    input[name] = value;
  }


  return (
    <div>
      <div><label>User ID:</label><label>{input['_id']}</label></div>
      <div><label>Username:</label><label>{input['userName']}</label></div>
      <div><label>Name</label>
      <input type="text" placeholder={input['name']} onChange={(e) => {handleChange("name", e.target.value)}}/></div>
      <div><label>Date Of Birth</label>
      <input type="date" onChange={(e) => {handleChange("date", e.target.value)}} placeholder = {input['date']}/></div>

      <div><label>Gender</label>
      <input type="text" placeholder={input['gender']} onChange={(e) => {handleChange("gender", e.target.value)}}/></div>


      <div>
        <input type="image" src={input['image'] || "profile_default.jpg"}  alt="Submit"  width="100" height="100" onChange={(e) => {handleChange("image", e.target.value)}}/> 
      </div>

      <label>Upload Image</label>

      <div>
        
      <textarea cols="30" rows="10" placeholder={input['description']} 
        onChange={(e) => {handleChange("description", e.target.value)}} ></textarea>

      </div>

      <label>Description</label>
      
      <div><button onClick = {handleClick}>Confirm</button></div>
      
    </div>
  );
}

export default ProfileTemplate;