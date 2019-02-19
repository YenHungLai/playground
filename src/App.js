// TODO:
//  postcss works, tailwind build works.

import React, { Component } from 'react';
import PrintName from './components/printName'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      unmount: true,
      myData: [ ],
      options: ['door', 'window', 'lock']
    }
    // unmount the component using conditional rendering
    // gets memory leak error
    // setInterval(() => {
    //   this.setState((prevState) => {
    //     return {unmount: !prevState.unmount}
    //   })
    // }, 5000)
  }

  componentWillMount() {
    // fetching data using axios
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res.data);
        this.setState({
          myData: res.data.slice(0, 10)
        })
      })
      // if not in a function, it does not wait??
      .then(() => console.log(this.state.myData))
  }

  componentDidMount() {
    const user = {
      name: 'Jacob'
    }
    // add item to the API
    axios.post('https://jsonplaceholder.typicode.com/users', {user})
      .then(res => {
        console.log(res)
        console.log(res.data)
      })

    // delete the item after 3 secs
    setTimeout(() => {
      axios.delete('https://jsonplaceholder.typicode.com/users/11')
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
    }, 3000)
  }

  // render props
  render() {
    document.body.style.backgroundColor = "rgb(53, 235, 164)";

    const print = (
      <PrintName render = {
        (name) => (<div>Here are the names: {name['names']}</div>)
      } />
    )
    const posts = this.state.myData.map(item => {
      return(
        <div className='container mx-auto border border-blue m-1' key={item.id}>
          <div>company: {item.company.name}</div>
          <div>name: {item.name}</div>
          <div>email: {item.email}</div>
          <br/>
        </div>
      )
    })

    return(
      <div>
        {this.state.unmount? print : null}
        {posts}
        <form>
          <select>
            {this.state.options.map((item, id) => {
              return(
                <option key={id}>{item}</option>
              )
            })}
          </select>
        </form>
      </div>
    )
  }
}

export default App
