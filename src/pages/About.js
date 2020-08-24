import React, { Component } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import ColOneMidShrink from '../components/layouts/col_one_mid_shrink'
import IntroHelper from '../components/tools_intro/intro_helper_about'
import Metatags from '../components/seo/meta_tags'

export default class About extends Component {
  render() {
    return (
      <>
        <ColOneMidShrink>
          <Metatags 
            title="About AppsFactory"
            pathname="/about/"
            ogImage="/youtube_logo.png"
            description="About AppsFactory"
            />

          <div className="jumbotron">
            <h1><FaInfoCircle /> About Apps-Factory</h1>
            <p className="lead">
              Apps Factory is determined to produce useful Apps. 
            </p>
            <hr className="my-4"/>
            
            <p>Apps-Factory is run by developers. The aim is to provide lot of useful apps.</p>
            <p>On this page, we list down the apps developed by us.</p>
          </div>

          <IntroHelper 
            title="Youtube Thumbnail Downloader"
            sub_title="Youtube Tool"
            description="This tool is used to download youtube video's image or thumbnails. User provideds youtube url, and this tool gives you 4-5 different size image, which you can use in your portal or app."
            url="/youtube-thumbnail/"
            />
          <IntroHelper 
            title="Cron Expression Evaluator and Generator"
            sub_title="Cron Generator Tool"
            description="This is used to generate cron expressions, and evaluate cron expressions."
            url="/cron-expression-evaluator/"
            />
        </ColOneMidShrink>
      </>
    )
  }
}
