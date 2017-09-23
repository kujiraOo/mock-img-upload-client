import React, {Component} from 'react'
import './App.css'
import Input from './Input'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      imgUrl: null
    }

    this.handleDataUpdate = this.handleDataUpdate.bind(this)
  }

  handleDataUpdate(data) {

    if (data && data.uploadPicture) {
      this.setState({
        imgUrl: data.uploadPicture.avatarUrl
      })
    }

  }

  render() {
    const {imgUrl} = this.state

    return (
      <div>
        <h1>First enter the email of existing user then choose file</h1>
        <Input onDataUpdate={this.handleDataUpdate} />
        <img src={imgUrl}/>
      </div>
    )
  }
}

export default App
