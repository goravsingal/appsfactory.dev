import React, { Component } from 'react'
import '../styles/cron.css'
import ColOneMidShrink10 from '../components/layouts/col_one_mid_shrink_10'
import CronConstants from '../data/cron_constants'
import CronEvaluationComponent from '../components/cron/cron_evaluation'
import CronExampleComponent from '../components/cron/cron_example'
import CronGeneratorTool from '../components/cron/cron_generator_tool'
const prettyCron = require('prettycron');

export default class cron extends Component {
  state = {
    cron_expr: '0 10 * * *',
    
    //only for pre-defined stuff
    cron_title: null,
    cron_evaluation: '',
    example_exprs: CronConstants.example_cron_expr
  };

  doFocus = () => {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.focus();
  }

  setRandomCronExpr = () => {
    const randomIdx = Math.floor(Math.random() * this.state.example_exprs.length);
    this.setItem(this.state.example_exprs[randomIdx]);
  }

  setItem = (item) => {
    // console.log(item);
    this.setState({
      cron_expr: item.expr,
      cron_title: item.name,
      cron_evaluation: prettyCron.toString(item.expr)
    });

    this.doFocus();
  }

  componentDidMount() {
    this.setState({
      cron_title: null,
      cron_evaluation: prettyCron.toString(this.state.cron_expr)
    });
  }

  handleChange = e => {
    this.setState({
      cron_title: null,
      cron_expr: e.target.value,
      cron_evaluation: prettyCron.toString(e.target.value)
    });
  };

  render() {
    return (
      <ColOneMidShrink10>

      <h1 className="text-center">Make Cron Expression Easily Understandable</h1>
      <p className="lead text-center">
        Put your expression and understand its meaning
      </p>
      
      <div className="row justify-content-md-center pb-3">
        <div className="col-sm-12">
        <div className="card text-white bg-dark p-4">
          <form>
            <div className="form-group">
              <input className="form-control form-control-lg text-center" type="text" 
                onChange={this.handleChange}
                value={this.state.cron_expr}
                ref={(input) => { this.textInput = input; }} 
                />
              
              <div className="row">
                <div className="col-6">
                  <small className="form-text">
                    Write a cron expression to know its evaluation
                  </small>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-6 text-right">
                      <small className="form-text text-muted mr-2">
                        <button type="button" className="btn btn-secondary btn-sm"
                          onClick={this.setRandomCronExpr}>
                          Random Expression
                        </button>
                      </small>
                    </div>
                    <div className="col-6 text-right">
                      <CronExampleComponent 
                        example_exprs={this.state.example_exprs}
                        setItem={this.setItem}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>

      <CronEvaluationComponent 
        cron_title={this.state.cron_title}
        cron_evaluation={this.state.cron_evaluation}
        />

      <CronGeneratorTool maxNumber={60} setItem={this.setItem}/>
      
      
    </ColOneMidShrink10>
    )
  }
}

