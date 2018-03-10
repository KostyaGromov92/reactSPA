import React from 'react';
import NotesEditor from './NotesEdit';
import NotesGrid from './NotesGrid';
import './App.less';

class App extends React.Component {

  handleNoteAdd = (data) => {
    console.log(data);
  }

  render() {
    return (
      <div className='App'>
        <h2 className='App__header'>Notes App</h2>
        <NotesEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid/>
      </div>
    );
  }
}

export default App;
