import {gql, graphql} from 'react-apollo'
import * as React from 'react'


class Input extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
  }

  handleChange({target}) {
    const {mutate} = this.props
    const {email} = this.state

    if (target.validity.valid) {
      mutate({
        variables: {
          email,
          avatar: target.files[0]
        }
      }).then(({data}) => {
        console.log('Mutation response:', data)

        const {onDataUpdate} = this.props

        onDataUpdate(data)
      })
    }
  }

  handleEmailInput({target}) {
    this.setState({
      email: target.value
    })
  }

  render() {
    return (
      <div>
        email
        <input
          type="text"
          onChange={this.handleEmailInput}
        />
        <br/>
        <br/>
        <input
          type="file"
          accept={'image/jpeg,image/png'}
          required
          onChange={this.handleChange}
        />

      </div>
    )
  }
}


export default graphql(gql`
  mutation uploadPicture($email: String!, $avatarUrl: String!) {
    uploadPicture(email: $email, avatarUrl: $avatarUrl) {
      email,
      avatarUrl
    }
  }

`)(Input)
