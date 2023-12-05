import React from 'react'
import css from './Hero.module.css'
import heroImage from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'

const Hero = () => {
    const transition = {duration: 3,type: "spring"}
  return (
    <div className={css.container}>

        {/*Left sides*/}
        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>

            <div className={css.text2}>
                <span>Trendy Collections</span>
                <span>Seedily say has suitable disposable and boy. Exercise joy man children rejoiced</span>
            </div>
        </div>

        {/*middle side*/}
        <div className={css.wrapper}>
            {/*Blue Circle*/}
            <motion.div 
                initial={{bottom: "2rem"}}
                whileInView={{bottom: "0rem"}}
                transition={transition}
                className={css.bluecircle}>
            </motion.div>

            <motion.img 
            initial={{bottom: "-2rem"}}
            whileInView={{bottom: "0rem"}}
            transition={transition}
            src={heroImage} alt="" />

            <motion.div 
            initial={{right: "2rem"}}
            whileInView={{right: "0rem"}}
            transition={transition}
            className={css.cart2}>
                <RiShoppingBagFill />
            
                <div className={css.signup}>
                    <span>best signup offers</span>
                    <div>
                        <BsArrowRight />
                    </div>
                </div>
            </motion.div>
        </div>

        {/*Right sides*/}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5M</span>
                <span>monthly traffic</span>
            </div>
            <div className={css.customers}>
                <span>100K</span>
                <span>happy customers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero