'use client'
import Link from 'next/link'
import React from 'react'

const WhatsappButton = () => {
  return (
    <div className='fixed bottom-6 left-6 z-50'>
      <Link 
        href="https://wa.me/919429277139" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          className='w-12 h-12 object-contain' 
          src='/images/icons/whatapp.png' 
          alt="WhatsApp" 
        />
      </Link>
    </div>
  )
}

export default WhatsappButton
