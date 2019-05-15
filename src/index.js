import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import classnames from 'classnames';

import JSONTree from 'react-json-tree'
import RJSON from 'relaxed-json';
import ReactJson from 'react-json-view'

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            json: null,
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.treeSelect = this.treeSelect.bind(this);
        this.parseJson = this.parseJson.bind(this);
    }
    parseJson() {
        try {
            this.setState({json: RJSON.parse(this.state.value)});
        } catch (error) {
            console.log(error);
        }
    }
    toggle(tab) {
        if (tab == 2) {
            if (this.state.value !== null) {
                this.parseJson();
            }
        }
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    treeSelect(sel) {
        console.log(sel);
    }
    render() {
        return (
            <div>
              <Nav pills card>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Input
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    View Json
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Form>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea"
                                value={this.state.value}
                                onChange={this.handleChange} />
                        </FormGroup>
                    </Form>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                        { this.state.json && 
                            <ReactJson src={this.state.json} collapsed={true} onSelect={this.treeSelect} />
                        }
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
