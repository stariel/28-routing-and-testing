import React from 'react';

import '../../style/main.scss';

export default class NoteForm extends React.Component {

  render() {
    const {handleTitle, handleContent, addNote} = this.props;
    return(
      <React.Fragment>
        <form className={this.props.err} onSubmit={addNote}>
          <input type="text" onChange={handleTitle} placeholder="Title" />
          <input type="text" onChange={handleContent} placeholder="Content" />
          <button type='submit'>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}