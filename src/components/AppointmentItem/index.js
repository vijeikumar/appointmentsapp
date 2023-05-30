// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {userDetails, toggleStarred} = props
  const {userName, userDate, isLike, id} = userDetails

  const onClickStart = () => {
    toggleStarred(id)
  }

  const starImage = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="appointment-item">
      <div className="head-container">
        <p className="name">{userName}</p>
        <button className="button-btn" type="button" onClick={onClickStart}>
          <img src={starImage} className="img" alt="star" />
        </button>
      </div>
      <p className="date">Date:{userDate}</p>
    </li>
  )
}
export default AppointmentItem
