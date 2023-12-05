import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import { 
    InboxIcon, 
    PhoneIcon, 
    LocationMarkerIcon, 
    LoginIcon, 
    UsersIcon, 
    LinkIcon } from '@heroicons/react/outline'

const Footer = () => {
    const today = new Date();
  return (
    <div className={css.footerwrapper}>
        <hr />
        <div className={css.footer}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>Khaadi</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngline}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>No.82, 8th Avenue St Cuddalore, Cud - 607004</span>
                    </span>

                    <span className={css.pngline}>
                        <PhoneIcon className={css.icon} />
                        <a href="tel:352-386-4415">352-386-4415</a>
                    </span>

                    <span className={css.pngline}>
                        <InboxIcon className={css.icon} />
                        <a href="mailto:support@khaadi.com">support@khaadi.com</a>
                    </span>
                </div>
            </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngline}>
                            <LoginIcon className={css.icon} />
                            <a href="/about">Sign In</a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngline}>
                            <UsersIcon className={css.icon} />
                            <a href="/about">About Us</a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngline}>
                            <LinkIcon className={css.icon} />
                            <span>Safety Privacy & Terms</span>
                        </span>
                    </div>
                </div>
            
        </div>
        <div className={css.copyright}>
            <span>Copyright &copy; {today.getFullYear()} by Khaadi, Inc</span>
            <span>All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer