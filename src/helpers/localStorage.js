import React from 'react';

class LocalStorage extends React.Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  getData(name) {
    const value = window.localStorage.getItem(name);
    return value;
  }

  setData(name, value) {
    window.localStorage.setItem(name, value);
  }

  clearData(name){
    window.localStorage.removeItem(name);
  }
}

export default LocalStorage;
