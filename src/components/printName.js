// TODO: postcss works, tailwind build works.

import React, { Component } from 'react';

class PrintName extends Component {
  constructor() {
    super()
    this.state = {
      names: ['Jacob', 'Amber', 'Joy'],
      age: ''
    }
    // setInterval(() => {
    //   this.setState({age: 1})
    // }, 3000)
  }

  // lifecycle methods pratice
  // setState in printName every 3 secs to trigger componentDidUpdate and
  // WillUpdate and unmount the component every 5 secs to trigger
  // componentDidMount, WillMount, and WillUnmount

  // cdm6 for snippets
  componentDidMount() {
    console.log('this is componentDidMount');
  }

  // cwm6 for snippets
  componentWillMount() {
    console.log('this is componentWillMount');
  }

  componentWillUnmount() {
    console.log('this is componentWillUnmount');
  }
  // cdup6 for snippets
  componentDidUpdate(prevProps, prevState) {
    console.log('this is componentDidUpdate');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('this is componentWillUpdate');
  }

  render() {
    return(
      <div>
        {this.props.render(this.state)}
      </div>
    )
  }

}

export default PrintName
