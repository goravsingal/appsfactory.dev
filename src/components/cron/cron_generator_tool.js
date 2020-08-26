import React, { Component } from 'react'
import EveryMinHour from '../cron/every_min_hour'
import EveryWeekYearMonth from '../cron/every_week_year_month'

export default class CronGeneratorTool extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mb-3">
            <h5 className="card-header h3">Cron Generator Tool</h5>
            <div className="card-body">
                <div className="card-title small">
                  Generate your cron expression with given options
                </div>
                <hr/>
                <EveryMinHour setItem={this.props.setItem} type='Minute' />
                <hr />
                <EveryMinHour setItem={this.props.setItem} type='Hour' />
                <hr />
                <EveryMinHour setItem={this.props.setItem} type='EveryHourAt' />
                <hr />
                <EveryMinHour setItem={this.props.setItem} type='EveryDayAt' />
                <hr />
                <EveryMinHour setItem={this.props.setItem} type='EveryWeekday' />
                <hr />
                <EveryWeekYearMonth setItem={this.props.setItem} type='EveryWeekdayAt' />
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
