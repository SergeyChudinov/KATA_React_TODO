import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './todo-list-item.css'

class TodoListItem extends Component {
  state = {
    label: this.props.description,
    timer: 0,
    isRunning: true,
    timerInterval: null,
  }

  static defaultProps = {
    description: 'Active task',
    created: Date.now(),
    completed: false,
    onToggleProp: () => {},
    onDeleted: () => {},
    onItemChange: () => {},
  }

  static propTypes = {
    description: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggleProp: PropTypes.func,
    onDeleted: PropTypes.func,
    onItemChange: PropTypes.func,
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.state.isRunning) {
        this.setState((state) => ({
          timer: state.timer + 1,
        }))
      }
    }, 1000)
  }

  stopTimer() {
    this.setState({ isRunning: false })
  }

  playTimer() {
    this.setState({ isRunning: true })
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { onItemChange } = this.props
    onItemChange(this.state.label)
  }

  formatTime(time) {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60

    return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`
  }

  padZero(number) {
    return number.toString().padStart(2, '0')
  }

  render() {
    const { description, created, onToggleProp, onDeleted, completed } = this.props
    const { timer } = this.state

    const formattedTime = this.formatTime(timer)
    const time = formatDistanceToNow(created, { addSuffix: true })

    return (
      <>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={() => onToggleProp('completed')} />
          <label>
            <span className="title" onClick={() => onToggleProp('completed')}>
              {description}
            </span>
            <span className="description">
              <button className="icon icon-play" onClick={() => this.playTimer()}></button>
              <button className="icon icon-pause" onClick={() => this.stopTimer()}></button>
              {formattedTime}
            </span>
            <span className="description">{time}</span>
          </label>
          <button className="icon icon-edit" onClick={() => onToggleProp('editing')}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="text" className="edit" onChange={this.onLabelChange} value={this.state.label} />
        </form>
      </>
    )
  }
}

export default TodoListItem
