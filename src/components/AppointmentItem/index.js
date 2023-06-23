// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {userDetails, toggleStarred} = props
  const {title, date, isFilteredActive, id} = userDetails

  const onClickStart = () => {
    toggleStarred(id)
  }

  const starImage = isFilteredActive
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-item">
      <div className="head-container">
        <h1 className="name">{title}</h1>
        <button
          data-testid="star"
          className="button-btn"
          type="button"
          onClick={onClickStart}
        >
          <img src={starImage} className="img" alt="star" />
        </button>
      </div>
      <p className="date">Date:{date}</p>
    </li>
  )
}
export default AppointmentItem
