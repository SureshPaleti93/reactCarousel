import Slider from 'react-slick'

import PlantsItem from '../PlanetItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    sildesToShow: 1,
    sildesToScroll: 1,
  }

  const {planetsList} = props

  return (
    <div data-testid="planets" className="carousel-container">
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlantsItem key={eachItem.id} plantsItem={eachItem} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
