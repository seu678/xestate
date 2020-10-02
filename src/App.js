import React, {Component} from "react";
import './App.css';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { rooms, RegisterRoom, report} from './';
import Login from "./component/Login";
import Signup from "./component/Signup";
import Home  from './component/Home';
import Title from './component/Title';
import Nav from 'react-bootstrap/Nav'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Tab, Row, Col} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'

class App extends Component{
  // componentDidMount() {
  //   console.log(this.props);
  // }
  handleCreate = (data) => {
    console.log(data);
  };
  
  goBack = () => {
    this.props.history.goBack();
  };

  state = {
    isLoading: true,
    room: []
  };
  render(){
    return( 
      <div>
        {/* <button onClick={this.goback}>뒤로</button> */}
        <Router>
          <CssBaseline />
                <AppBar position="relative">
                  <Toolbar>
                  <Navbar bg="#6610f2" variant="dark">
                        <Nav className="mr-auto">
                        
                          <Navbar.Brand href="/" >Home </Navbar.Brand>
                            <Nav.Link  href="/RegisterRoom"> 등록 </Nav.Link>
                            <Nav.Link href="/report">마이페이지</Nav.Link>                                                                        
                        </Nav>
                    </Navbar>
                  </Toolbar>
                </AppBar>
                <br /><br /><br />

              <div>
                <Route path='/' component={Home}/>
                <Route exact path='/' component={Title}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Signup' component={Signup}/>
                <Route path='/rooms' component={rooms}/>
                <Route path='/RegisterRoom' component={RegisterRoom}>
                  <RegisterRoom onCreate={this.handleCreate} />  
                </Route>
                <Route path='/report' component={report}/>                
              </div>
        </Router>
      </div>
      
      );
    }
  }
  export default App;