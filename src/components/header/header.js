import { Component } from 'react'
import PropTypes from 'prop-types'
import './header.css'

class Header extends Component {
  state = {
    label: '',
  }

  static defaultProps = {
    onItemAdded: () => {},
  }

  static propTypes = {
    onItemAdded: PropTypes.func,
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { onItemAdded } = this.props
    onItemAdded(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <header className="header">
        <form onSubmit={this.onSubmit}>
          <h1>todos</h1>
          <input
            onChange={this.onLabelChange}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={this.state.label}
          ></input>
        </form>
      </header>
    )
  }
}

export default Header
