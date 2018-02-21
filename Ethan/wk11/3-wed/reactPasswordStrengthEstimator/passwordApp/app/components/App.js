import React from 'react'
import PasswordInput from './PasswordInput'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>Password Strength Convertor</h1>
      
      <PasswordInput />
    </div>
  }

}
