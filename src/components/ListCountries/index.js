const VisitedCountry = props => {
  const {item, updateRemove} = props
  const {id, name, imageUrl} = item

  const remove = () => {
    updateRemove(id)
  }

  return (
    <li className="c-li">
      <img className="img" src={imageUrl} alt="thumbnail" />
      <div className="remove-div">
        <p>{name}</p>
        <button onClick={remove} type="button" className="remove-btn">
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountry
