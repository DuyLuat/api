import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="navbar navbar-default">
      <a className="navbar-brand">CALL API</a>
      <ul className="nav navbar-nav">
        <li>
          <a>Trang chủ</a>
        </li>
        <li>
          <a>Danh sách sản phẩm</a>
        </li>
      </ul>
    </div>

  );
}
}

export default App;
