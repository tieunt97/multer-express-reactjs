import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form action="http://localhost:5000/upload" method="POST" enctype="multipart/form-data">
          <input type="file" name="images" />
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        
        <img src="http://localhost:5000/images/images-1544952695058.png" class="img-responsive" alt="Image"/>
        
      </div>
    );
  }
}

export default App;
