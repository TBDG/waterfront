import './app.scss';

import Footer from './shared/footer.js';
import Header from './shared/header.js';
import Landing from './shared/landing.js';
import Location from './shared/location.js';
import Newsletter from './shared/newsletter';
import StoreTour from './shared/store-tour';
import Testimonials from './shared/testimonials.js';


function App() {
    return (
        <div className="App">
            <Header/>
            <div className='content'>
                <Landing />
                <Newsletter/>
                <Testimonials/>
                <StoreTour/>
                <Location />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
