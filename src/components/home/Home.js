import videoHomePage from '../../assets/video-homepage.mp4';
const Home = (props) => {
    return (
        <div className="home-container">
            <video autoPlay muted loop playsInline>
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className="home-content d-flex gap-2 flex-column">
                <h1 className='title-1'>There's a better way to ask</h1>
                <p className='title-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequatur asperiores consectetur aspernatur non vitae sequi magnam, tempora odio eum.</p>
                <div>
                    <button className='btn btn-dark p-2'>Get's started. It's free</button>
                </div>
            </div>
        </div>
    )
}
export default Home;