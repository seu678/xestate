import React from "react";
import Nav from 'react-bootstrap/Nav'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Tab, Row, Col} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import App from '../App';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


function Home(){
  const classes = useStyles();
    return(
      <div>
        
      </div>
    //     <React.Fragment>
    //     <CssBaseline />
    //     <AppBar position="relative">
    //       <Toolbar>
    //       <Navbar bg="#6610f2" variant="dark">
    //             <Nav className="mr-auto">
    //               <button onClick={this.goback}>뒤로</button>
    //               <Navbar.Brand href="/" >Home </Navbar.Brand>
    //                 <Nav.Link  href="/RegisterRoom"> 등록 </Nav.Link>
    //                 <Nav.Link href="/report">마이페이지</Nav.Link>                                                                        
    //             </Nav>
    //         </Navbar>
    //       </Toolbar>
    //     </AppBar>
    //     <br /><br /><br />
    // </React.Fragment>
    )
}


export default Home;