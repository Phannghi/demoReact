import videoHomePage from '../../assets/video-homepage.mp4';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    //console.log('account: ', account, 'isAuthenticated: ', isAuthenticated)
    const navigate = useNavigate();
    return (
        <div className="home-container">
            <video autoPlay muted loop playsInline>
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className="home-content d-flex gap-2 flex-column">
                <h1 className='title-1'>There's a better way to ask</h1>
                <p className='title-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque consequatur asperiores consectetur aspernatur non vitae sequi magnam, tempora odio eum.</p>
                <div>
                    {isAuthenticated === false ?
                        <button className='btn btn-dark p-2'
                            onClick={() => navigate('/login')}>Get's started. It's free</button>
                        :
                        <button className='btn btn-dark p-2'
                            onClick={() => navigate('/users')}>Doing Quiz Now</button>
                    }

                </div>
            </div>
        </div>
    )
}
export default Home;