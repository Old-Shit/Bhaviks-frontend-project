import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import AddNote from './AddNote';
import ViewNotes from './ViewNotes';
import ViewNote from './ViewNote';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          path: '/view',
          exact: true,
          sidebar: "View Your Notes",
          main: () => this.viewNotes()
        },
        {
          path: '/add',
          exact: false,
          sidebar: "+ Create New Note",
          main: () => <AddNote addNote={this.props.addNote} />
        }
      ]
    }
  }

  viewNotes = () => {
    return (
      <ViewNotes notes={this.props.notes} />
    )
  }

  render() {
    return (
      <div>
        <Navbar inverse>
          <Nav>
            { this.state.routes.map((route, index) => {
              return (
                <LinkContainer to={route.path} key={index}>
                  <NavItem>
                    {route.sidebar}
                  </NavItem>
                </LinkContainer>
            )})}
          </Nav>
        </Navbar>
        <Grid>
          {/* <Row> */}
            {/* <Col> */}
              <Route path="/view/:id"
                  component={() => <ViewNote notes={this.props.notes} />} />
              {this.state.routes.map((route, index) => (
                <Route key={index}
                       path={route.path}
                       exact={route.exact}
                       component={route.main}
                />
              ))}
            {/* </Col> */}
          {/* </Row> */}
        </Grid>
      </div>
    )
  }
}

export default Sidebar;