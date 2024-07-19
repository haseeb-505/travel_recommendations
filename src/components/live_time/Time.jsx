import React, {useState, useEffect} from 'react'
import Styles from './Time.module.css'

const Time = () => {
    const [islamabadTime, setIslamabadTime] = useState('');

    useEffect(()=>{
        const options = {
            timeZone: 'Asia/Karachi',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        const updateTime = () =>{
            const currentTime = new Date().toLocaleTimeString('en-US', options);
            setIslamabadTime(currentTime);
        };
        updateTime(); 
        const intervalId = setInterval(updateTime, 1000); // update time everey second

        return () => clearInterval(intervalId);
    }, []);
  return (
    <div className={`${Styles.live_time}`}>
      <h4>Islamabad, Pakistan Live Time</h4>
      <span>{islamabadTime}</span>
    </div>
  )
}

export default Time
