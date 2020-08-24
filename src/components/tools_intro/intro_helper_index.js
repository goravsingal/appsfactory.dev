import React, { Component } from 'react'
import { Link } from "gatsby";

export default class IntroHelperIndex extends Component {
  render() {
    return (
      <div className="media mb-4">
        <img className="mr-3" src={this.props.image} alt={this.props.title}></img>
        <div className="media-body">
          <h3 className="mt-0">{this.props.title}</h3>
          <p className="lead">
            {this.props.description}
          </p>
          <Link className="btn btn-primary btn-lg" to={this.props.link}>
            {this.props.title}
          </Link>
        </div>
      </div>
    )
  }
}
