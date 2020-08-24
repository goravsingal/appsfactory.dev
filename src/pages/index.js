import React from "react"
import { FaRegFutbol } from 'react-icons/fa';
// import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/app.css'
// import 'bootstrap/dist/js/bootstrap.min.js';

import ColOneMidShrink from '../components/layouts/col_one_mid_shrink'
import Metatags from '../components/seo/meta_tags'
import IntroHelperIndex from '../components/tools_intro/intro_helper_index'

export default function Home() {
  return (
    <>
      <ColOneMidShrink>
        <Metatags 
          title="Collection of utility Apps, Useful apps for free."
          pathname="/"
          ogImage="/youtube_logo.png"
          description="A collection of useful utility apps for free. You can use them for your work for free"
          />

        <div className="jumbotron text-center">
          <h1 className="display-4">A Factory of Apps <FaRegFutbol /></h1>
          <p className="lead">
            A collection of useful apps. Made by developers, made for developers...
          </p>
          <hr className="my-4"/>
          <p className="lead">
            Browse our Apps
          </p>
        </div>

        <IntroHelperIndex 
          title="Youtube Thumbnail Extractor"
          image="/youtube_logo.png"
          link="/youtube-thumbnail/"
          description="Download youtube thumbnail images from Youtube video. Just put the URL of any youtube video, and see various resolution of images."
          />
        <IntroHelperIndex 
          title="Cron Expression Evaluator tool"
          image="/cron_tool.png"
          link="/cron-expression-evaluator/"
          description="Evaluate your cron expressions. Also helps you in understanding meaning of an expression. Generate expressions."
          />
      </ColOneMidShrink>
    </>
  )
}
