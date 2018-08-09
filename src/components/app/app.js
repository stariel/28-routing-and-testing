import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Landing from '../landing/landing.js';
import Dashboard from '../dashboard/dashboard.js';
// import NoteList from '../note-list/note-list.js';
// import NoteItem from '../note-item/note-item.js';
import '../../style/main.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);

  }



  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <main>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard}/>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }

}