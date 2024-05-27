import React from 'react'
import Image from 'next/image'
import './about.scss'

const About = () => {
  return (
    <div className="about">
      <p className="section-title">AI Powered Perfect Stay For Your Perfect Vacation</p>
      <p className="section-desc">Experience comfort at the next level and have fun staying at our property. Luxury, minimalist approach and downtown location.</p>
      <div className="box">
        <div className="pics">
          <div className="pic">
            <Image src="/images/about/pics1.png" alt="img" width={400} height={500}/>
            <p>Over 40 million plush Accommodations</p>
          </div>
          <div className="pic">
            <Image src="/images/about/pics2.png" alt="img" width={400} height={500}/>
            <p>Visit over 30,000 Island around the world</p>
          </div>
          <div className="pic">
            <Image src="/images/about/pics3.png" alt="img" width={400} height={500}/>
            <p>Discover 11 million+ Workspaces</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About