import React from 'react'
import styles from 'ProductInfoTimer.module.scss'
import Countdown from 'react-countdown';
 
export default function ProductInfoTimer({timeEnd,onTimeEnd }) {
  return (
    <div className={styles['product-info-timer']}>
        <div className={styles['timer']}>
            <label className={styles['title']} >Ends in</label>
            {timeEnd &&<Countdown onComplete={onTimeEnd} date={timeEnd} />}
        </div>
    </div>
  )
}
