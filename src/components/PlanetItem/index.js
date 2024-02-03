import './index.css'

const PlantsItem = props => {
  const {plantsItem} = props
  const {name, imageUrl, description} = plantsItem

  return (
    <div data-testid="planets" className="carousel-item-container">
      <img className="image" src={imageUrl} alt={name} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-descr">{description}</p>
    </div>
  )
}
export default PlantsItem
