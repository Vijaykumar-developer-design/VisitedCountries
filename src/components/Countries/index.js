import './index.css'

const Country = props => {
  const {item, updateVisit} = props
  const {id, name, isVisited} = item

  const update = () => {
    // const val = {id, name, imageUrl, isVisited}
    updateVisit(id)
  }

  return (
    <li className="li">
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button onClick={update} className="v-btn" type="button">
          Visit
        </button>
      )}
    </li>
  )
}
export default Country
