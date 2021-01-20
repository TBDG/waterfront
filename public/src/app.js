import './app.scss';

import Footer from './shared/footer';
import Header from './shared/header';
import HomeImages from './shared/home-images';
import Landing from './shared/landing';
import Location from './shared/location';
import Newsletter from './shared/newsletter';
import StoreTour from './shared/store-tour';
import Testimonials from './shared/testimonials';


function App() {
    return (
        <div className="App">
            <Header/>
            <div className='content'>
                <Landing />
                <Newsletter/>
                <Testimonials/>
                <HomeImages/>
                <StoreTour/>
                <Location />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
