import React, { Component } from 'react';
import Datatable from './data-table/DataTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Datatable props={props} />
      </div>
    );
  }
}

export default App;
