import React from 'react';
import uuid from 'uuid';

import NoteForm from '../note-create-form/note-create-form.js';
import NoteList from '../note-list/note-list.js';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
        };

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        

    }

    addNote(note) {
        let notes = [...this.state.notes, note];
        this.setState({ notes });
    }

    removeNote(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    render() {
        return (
            <React.Fragment>
                <h2>Notes App</h2>
                <NoteForm onSubmit={this.addNote} />
                <NoteList notes={this.state.notes} />
            </React.Fragment>
        );
    }
}

export default Dashboard;