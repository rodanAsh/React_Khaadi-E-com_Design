import React from 'react'
import css from './Virtual.module.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import before from '../../assets/before.png'
import after from '../../assets/after.png'


const Virtual = () => {
  return (
    <div className={css.virtual}>
        <div className={css.left}>
            <span>virtual try-on</span>
            <span>never buy the wrong shade again!</span>
            <span>try now!</span>
            <img src={Shade} alt="" />
        </div>

        <div className={css.right}>
            <div className={css.wrapper}>
                <ReactCompareImage leftImage={before} rightImage={after} />
            </div>
        </div>
    </div>
  )
}

export default Virtual