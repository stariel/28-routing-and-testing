import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Dashboard from './dashboard/dashboard.js';
import Landing from './landing/landing.js';
import NoteCreateForm from './note-create-form/note-create-form.js';
import NoteList from './note-list/note-list.js';
import NoteItem from './note-item/note-item.js';
import '../style/main.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.addItem = this.addItem.bind(this);

  }



  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header title="Note App" />
          <main>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard}/>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }

}