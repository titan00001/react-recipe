import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function App1() {

    const dispatch = useDispatch();
    const counter = useSelector(state => {return state.counterReducer});
    const [isLoggedIn, setLogin] = useState(false);
    const [userId, setId] = useState("/");

    const handleClick = () => {
        setId("12334");

        setLogin(true);
    }


      // Runs when user is logged in / has valid userId
    useEffect(() => {

        // fetch('http://localhost:9000/user/' + userId)
        //     .then(response => response.json())
        //     .then(data => {setUserInfo(data)}).catch(err => console.error(err));

        console.log(userId);
        let id = userId;
        dispatch({type: "Logged", payload: id});

    }, [isLoggedIn, userId, dispatch]);

    return  (
        <div>
            <h1>LoginId : {String(counter)}</h1>
            {!isLoggedIn  && <button onClick = {handleClick}>LOGIN</button> }
        </div>
    );

    
}


export default App1;