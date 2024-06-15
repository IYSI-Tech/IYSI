import React from 'react'
import { PiChalkboardTeacher } from "react-icons/pi";
import { feedsData } from './Data';
import { IoIosTrendingUp } from "react-icons/io"
import { IoBriefcaseOutline } from "react-icons/io5";
import Counter from './Counter';
import './feeds.css'

const icons = {IoIosTrendingUp, IoBriefcaseOutline, PiChalkboardTeacher};

const Feeds = () => {

  return (
    <div className='feeds container'>
        <div className='center'>
            {feedsData.map(({icon, p, className, h1, sign}, index) => {
              const Iconss = icons[icon];

              return (
                <div key={index}>
                    <div >
                    <Iconss size="35"/>
                    </div>
                    <div >
                        <Counter className={className} h1={h1} sign={sign}/>
                        <p>{p}</p>
                    </div>
                </div>
              )

            })}
            
        </div>
        
    </div>
  )
}

export default Feeds;