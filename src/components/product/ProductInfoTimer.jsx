import React from 'react'
import styles from './ProductInfoTimer.module.scss'
import Countdown from 'react-countdown';
 
export default function ProductInfoTimer({timeEnd,onTimeEnd }) {
  return (
    <div className={styles['product-info-timer']}>
        <label className={styles['title']} >Ends in</label>
        <div className={styles['timer']}>
            
            {timeEnd &&<Countdown onComplete={onTimeEnd} date={timeEnd} />}
        </div>
    </div>
  )
}
