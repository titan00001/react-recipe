import React from 'react';

// Would display ony current month
// Incomplete

function Calendar(props) {

    const currentMonth = new Intl.DateTimeFormat("en-us", {month: 'long'}).formatToParts()[0].value;

    const date = new Date();
    const numOfDays = new Date((date.getMonth() + 1) % 12, date.getFullYear(), 0).getDate();
    const days = [...Array(numOfDays).keys()].map(x => x+1);

    const monthContainer = {
        width: "min-content",
        display: "grid",
        gridTemplateColumns : "repeat(7, 50px)",
        justifyContent: "space-around",
        border: "1px solid black",
        padding: "3%",
        margin: "2% auto"
    }

    const dayContainer = {
        height: "50px",
        border: "1px solid gray",
        textAlign: "center"
    }

    return (
        <div >
            <h2>{currentMonth}</h2>
            <div style = {monthContainer}>
                {
                    days.map((v,i) => <div key = {i} style={dayContainer}>{v}</div>)
                }
            </div>
            
        
        </div>
    );
}

export default Calendar;