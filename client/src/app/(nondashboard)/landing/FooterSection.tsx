import Link from 'next/link'
import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className='border-t border-gray-200 py-20'>
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4">
                    <Link href="/" className='text-xl font-bold' scroll={false}>RENTAWAY</Link>
                </div>
                <nav className="mb-4">
                    <ul className="flex space-x-6">
                        <li className='hover:underline'>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className='hover:underline'>
                            <Link href="/contact">Contact Us</Link>
                        </li>
                        <li className='hover:underline'>
                            <Link href="/faq">FAQ</Link>
                        </li>
                        <li className='hover:underline'>
                            <Link href="/terms">Terms</Link>
                        </li>
                        <li className='hover:underline'>
                            <Link href="/privacy">Privacy</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex space-x-4 mb-4">
                    <a href="#"
                        aria-label='Facebook'
                        className='hover:text-[#57575f]'
                    >
                        <FontAwesomeIcon icon={faFacebook} className='h-6 w-6' />
                    </a>
                    <a href="#"
                        aria-label='Instagram'
                        className='hover:text-[#57575f]'
                    >
                        <FontAwesomeIcon icon={faInstagram} className='h-6 w-6' />
                    </a>
                    <a href="#"
                        aria-label='Twitter'
                        className='hover:text-[#57575f]'
                    >
                        <FontAwesomeIcon icon={faTwitter} className='h-6 w-6' />
                    </a>
                    <a href="#"
                        aria-label='LinkedIn'
                        className='hover:text-[#57575f]'
                    >
                        <FontAwesomeIcon icon={faLinkedin} className='h-6 w-6' />
                    </a>
                    <a href="#"
                        aria-label='Youtube'
                        className='hover:text-[#57575f]'
                    >
                        <FontAwesomeIcon icon={faYoutube} className='h-6 w-6' />
                    </a>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500 flex justify-center space-x-2">
                <span>©RENTAWAY. All rights reserved</span>
                <span>|</span>
                <Link href="/privacy" className='hover:text-black hover:underline'>Privacy Policy</Link>
                <span>|</span>
                <Link href="/terms" className='hover:text-black hover:underline'>Terms of Service</Link>
                <span>|</span>
                <Link href="/cookies" className='hover:text-black hover:underline'>Cookie Policy</Link>    
            </div>
        </div>
      
    </footer>
  )
}

export default FooterSection
