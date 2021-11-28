import { useState,useEffect } from "react";
import {getRemainingTimeUntilMsTimestamp} from'./Utils/CountdownTimerUtils';

const defaultRemainingTime ={
seconds: '10',
minutes: '00',
hours: '00',
days : '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime,setRemainingTime] = useState(defaultRemainingTime);
    useEffect(() =>{
const intervalId = setInterval(() => {
    updateRemainingTime(countdownTimestampMs);
},1000);
return() => clearInterval(intervalId)
    },[countdownTimestampMs])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
       <div className='countdown-timer'>
<span>{remainingTime.days}</span>
<span>Days</span>
<span>{remainingTime.hours}</span>
<span>Hours</span>
<span>{remainingTime.minutes}</span>
<span>Minutes</span>
<span>{remainingTime.seconds}</span>
<span>Second</span>


       </div>
    );

}
export default CountdownTimer;