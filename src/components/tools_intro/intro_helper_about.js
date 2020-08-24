import React, { Component } from 'react'
import { Link } from "gatsby";

export default class IntroHelper extends Component {
  render() {
    return (
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.sub_title}</h6>
          <p className="card-text">
            {this.props.description}
          </p>
          <br/>
          <Link className="btn btn-primary btn-lg" to={this.props.url}>
            {this.props.sub_title}
          </Link>
        </div>
      </div>
    )
  }
}
