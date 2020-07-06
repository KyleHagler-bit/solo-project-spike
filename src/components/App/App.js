import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  BrowserRouter
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import SecretsPage from '../SecretsPage/SecretsPage';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
//npm install react-transition-group --save

import { play, exit } from '../timelines/index'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Nav />

        <Route render={({location}) => (

          <TransitionGroup>
            <CSSTransition
            key={location.key} //unique identifier
              timeout={300}
              classNames="fade">

              <Switch location={location}> {/*render route at the right time */}
                <Redirect exact from="/" to="/home" />
                <Route exact path="/about" component={AboutPage} />
                <ProtectedRoute exact path="/home" component={UserPage} />
                <ProtectedRoute exact path="/secrets" component={SecretsPage} />
                <Route render={() => <h1>404</h1>} />
              </Switch>

            </CSSTransition>
          </TransitionGroup>

        )}/>


          {/* <Route render={(location) => {
            return (
              <Switch location={location}>
                <Route exact path="/" component={UserPage}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/home" component={UserPage}/>
              <ProtectedRoute exact path="/secrets" component={SecretsPage}/>
              <Route render={() => <h1>404</h1>} />
              </Switch>
            )
          }} /> */}

          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

// render() {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Nav/>
//         <Route render={({ location }) => {
//           const { pathname, key } = location;

//           return (
//             <TransitionGroup component={null}>
//               <Transition
//                 key={key}
//                 appear={true}
//                 onEnter={(node, appears) => play(pathname, node, appears)}
//                 onExit={(node, appears) => exit(node, appears)}
//                 timeout={{enter: 750, exit: 150}}
//               >
//                 <Switch location={location}>
//                   <Route exact path="/" component={UserPage}/>
//                   <Route path="/secrets" component={SecretsPage} />
//                   <Route path="/about" component={AboutPage} />
//                 </Switch>
//               </Transition>
//             </TransitionGroup>
//           )
//         }}/>
//       </div>
//     </BrowserRouter>
//   )
// }
// }

export default connect()(App);
