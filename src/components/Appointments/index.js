// Write your code here

import {Component} from 'react'

import {format} from 'date-fns'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    userName: '',
    userDate: '',
    appointmentList: [],
    isFilteredActive: false,
  }

  onChangeUser = event => {
    this.setState({userName: event.target.value})
  }

  onChangeDate = event => {
    this.setState({userDate: event.target.value})
  }

  toggleStarred = id => {
    this.setState(prevValue => ({
      appointmentList: prevValue.appointmentList.map(each => {
        if (each.id === id) {
          return {...prevValue.appointmentList, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  onClickFilter = () => {
    const {isFilteredActive} = this.state
    this.setState({
      isFilteredActive: !isFilteredActive,
    })
  }

  onAdd = event => {
    event.preventdefault()

    const {userName, userDate} = this.state

    const formattedDate = userDate
      ? format(new Date(userDate), 'dd MMMM,yyyy,EEEE')
      : ''
    const newContact = {
      id: v4(),
      title: userName,
      date: formattedDate,
      isFilteredActive: false,
    }
    this.setState(prevValue => ({
      appointmentList: {...prevValue.appointmentList, newContact},
      userName: '',
      userDate: '',
    }))
  }

  getFilterAppointment = () => {
    const {appointmentList, isFilteredActive} = this.state
    if (isFilteredActive) {
      return appointmentList.filter(eachOne => eachOne.isLike === true)
    }
    return appointmentList
  }

  render() {
    const {userName, userDate, isFilteredActive} = this.state
    const filteredClassName = isFilteredActive
      ? 'filter-filled'
      : 'filter-empty'

    const filteredAppointmentList = this.getFilterAppointment()

    return (
      <div className="app-container">
        <div className="container">
          <div className="container-second">
            <div className="s-cont">
              <h1 className="heading">Add Appointments</h1>
              <form className="form" onSubmit={this.onAdd}>
                <label htmlFor="title" className="title">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  className="input-name"
                  placeholder="Title"
                  value={userName}
                  onChange={this.onChangeUser}
                  autoComplete="OFF"
                />
                <br />
                <label htmlFor="date" className="title">
                  DATE
                </label>
                <br />

                <input
                  type="date"
                  id="date"
                  className="input-name"
                  placeholder="dd/mm/yyyy"
                  onChange={this.onChangeDate}
                  value={userDate}
                />
                <br />
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="line" />
          <div className="star-cont">
            <h1 className="head">Appointments</h1>
            <button
              type="button"
              className={`filter-style ${filteredClassName}`}
              onClick={this.onClickFilter}
            >
              starred
            </button>
          </div>
          <ul className="appointments-list">
            {filteredAppointmentList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                userDetails={eachAppointment}
                toggleStarred={this.toggleStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
