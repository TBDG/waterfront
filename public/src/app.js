import Landing from './shared/landing.js';
import Newsletter from './shared/newsletter';
import Testimonials from './shared/testimonials.js';
import Location from './shared/location.js'
import Footer from './shared/footer.js';
import './app.scss';

function App() {
    return (
        <div className="App">
            <Landing />
            <Newsletter/>
            <Testimonials />
            <Location />
            <Footer />
        </div>
    );
}

export default App;
