import React, { Component } from 'react'
import { Helmet } from "react-helmet"
import DefaultSiteData from '../../data/site_constants'

export default class MetaTags extends Component {
  render() {
    const title = this.props.title;
    const href = `${DefaultSiteData.siteUrl}${this.props.pathname}`
    
    //relative path of image
    const ogImage = `${DefaultSiteData.siteUrl}${this.props.ogImage}`;
    // const ogImageAlt = this.props.ogImageAlt ? this.props.ogImageAlt : title;

    return (
      <Helmet defer={false}>
        <title>{title} | {DefaultSiteData.websiteName}</title>
        <meta name="description" content={this.props.description} />
        <meta name="image" content={ogImage} />

        <html lang="en" />
        <link rel="canonical" href={href} />
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />

        <meta property="og:url" content={href} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={this.props.description} />
        {/* <meta property="og:site_name" content={title} /> */}
        <meta property="og:image" content={ogImage} />
        {/* <meta property="og:image:alt" content={ogImageAlt} /> */}
        {/* <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" /> */}

        {/* <meta name="twitter:card" content="summary" /> */}
        {/* <meta name="twitter:site" content={this.props.twitter} /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.social.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} /> */}
      </Helmet>
    )
  }
}
