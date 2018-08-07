import React from 'react';
import uuid from 'uuid';

import NoteForm from '../note-create-form/note-create-form.js';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            content: '',
            title: '',
          };

        this.addNote = this.addNote.bind(this);

    }

    handleTitle(e) {
        let title = e.target.value;
        this.setState({title});
      }
    
      handleContent(e) {
        let content = e.target.value;
        this.setState({content});
      }

    addNote(note) {
        note.id = uuid.v1();
        note.editing = false;
        note.completed = false;
        note.content = this.state.content;
        note.title = this.state.title;
    }

    render() {
        return (
            <React.Fragment>
                <h2>Notes App</h2>
                <NoteForm />
            </React.Fragment>
        );
    }
}

export default Dashboard;