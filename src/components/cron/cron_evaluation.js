import React, { Component } from 'react'

export default class CronEvaluation extends Component {
  render() {
    return (
      <div className="card mb-3">
        <h5 className="card-header">Evaluation</h5>
        <div className="card-body">
          {this.props.cron_title && 
            <h5 className="card-title">{this.props.cron_title}</h5>
          }

          <h2 className="card-text text-center">
            {this.props.cron_evaluation}
          </h2>
        </div>
      </div>
    )
  }
}
