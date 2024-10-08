import CityWeatherCard from "@/components/CityWeatherCard"

export default function CityWeatherCarousel() {
  return (
    <section className="container">
      <button className="arrowLeftControl" aria-label="Previous image">{'<'}</button>
      <button className="arrowRightControl" aria-label="Next image">{'>'}</button>
      <div className="cityWeatherCarouselWrapper">
        <div className="cityWeatherCarousel">
          <CityWeatherCard />
        </div>
      </div>
    </section>
  )
}