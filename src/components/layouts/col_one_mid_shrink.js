import React from 'react'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

/**
 * One col layout, with shrinked column size
 */
export default function ColOneMidShrink({children}) {
  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-sm-8">
          {children}
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
