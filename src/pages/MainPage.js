import Carousel from '../components/moleculs/carousel/carousel'
import backdrop from '../assets/img/backdrop.jpg'
import './MainPage.css'

const MainPage = () => {
    return (
        <section>
            <div className="greeting-card-wrapper">
                <span>
                    <img className="greeting-img" src={backdrop} alt="" />
                </span>
                <div className="greeting-card">
                    <p className="greeting-text first-greet">Welcome to <b>The Movie Catalogue.</b></p>
                    <p className="greeting-text second-greet">There are more than thousands of movies information you can explore!</p>
                </div>
            </div>
            <div className="first-list">
                <Carousel category="latest" />
            </div>
            <div className="second-list">
                <Carousel category="popular" />
            </div>

        </section>
    )
}

export default MainPage