import React, { Component } from 'react'
import { Link } from "gatsby";
import { FaCode } from 'react-icons/fa'

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
      <div className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <FaCode className="mb-2" /> AppsFactory
            <small className="d-block mb-3 text-muted">&copy; 2020-2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Apps</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-muted" to="/youtube-thumbnail/">Youtube Video Thumbnail Downloader</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="https://www.gyanblog.com" target="_blank" rel="noopener noreferrer">
                  GyanBlog.com
                </Link>
              </li>
              <li>
                <Link className="text-muted" to="/contact/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link className="text-muted" to="/">
                  Home
                </Link>
              </li>
              <li>
              <Link className="text-muted" to="/about/">About</Link>
              </li>
              <li>
                <Link className="text-muted" to="/terms/">Terms</Link>
              </li>
              <li>
              <Link className="text-muted" to="/privacy_policy/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
