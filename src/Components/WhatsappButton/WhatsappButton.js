'use client'
import React from 'react'

const WhatsappButton = () => {
  return (
    <div className='fixed bottom-6 left-6 z-50'>
      <a 
        href="https://wa.me/919099720262" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          className='w-12 h-12 object-contain' 
          src='/images/icons/whatapp.png' 
          alt="WhatsApp" 
        />
      </a>
    </div>
  )
}

export default WhatsappButton
