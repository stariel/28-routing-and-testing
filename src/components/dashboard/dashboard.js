import React from 'react';
import uuid from 'uuid';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            content: '',
            title: '',
          };

    }

    addNote(note) {
        note.id: uuid.v1(),
        note.editing: false,
        note.completed: false,
        note.content: this.state.content,
        note.title: this.state.title,
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2>Notes App</h2>
                
            </React.Fragment>
        );
    }
}

export default Dashboard;