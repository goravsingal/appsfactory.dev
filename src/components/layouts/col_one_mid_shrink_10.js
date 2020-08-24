import React from 'react'

import Navbar from '../navbar'
import Footer from '../footer'

/**
 * One col layout, with shrinked column size
 */
export default function ColOneMidShrink10(props) {
  return (
    <>
    { !props.noHeader && <Navbar /> }
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-sm-10">
          {props.children}
        </div>
      </div>
    </div>
    { !props.noHeader && <Footer /> }
    </>
  )
}
