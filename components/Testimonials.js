import Image from 'next/image'
import React from 'react'

export const Testimonials = () => {
  return (
    <section >
      <h2 className='testimonials'>Client Testimonials</h2>
<div className='testimonials-Main'>
      <div className='test1'>
        <Image className='testImg' src='/images/image-emily.jpg' alt='Marketing Director' width={50} height={50}></Image>
        <p className='bold'>We put our trust in Sunnyside and they deliver, making sure our needs were met and deadlines were always hit.</p>
        <p className='bolder'>Emily R.</p>
        <p className='muted'>Marketing Director</p>
      </div>

      <div className='test2'>
      <Image className='testImg' src='/images/image-thomas.jpg' alt='Marketing Director' width={50} height={50}></Image>
        <p className='bold'>Sunnyside&apos;s enthusiasm coupled with their keen in our brand&apos;s success made it a satisfying and enjoyable experience.</p>
        <p className='bolder'>Thomas S.</p>
        <p className='muted'>chief operating officer!</p>
      </div>

      <div className='test3'>
      <Image className='testImg' src='/images/image-jennie.jpg' alt='Marketing Director' width={50} height={50}></Image>
        <p className='bold'>incredible end result! Our sales increased over 400% when we worled with Sunyside.Highly recommended</p>
        <p className='bolder'>Jennie F.</p>
        <p className='muted'>Business Ower</p>
      </div>
      </div>
    </section>
  )
}
