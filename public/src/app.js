import './app.scss';

import Footer from './shared/footer.js';
import Landing from './shared/landing.js';
import Location from './shared/location.js'
import Newsletter from './shared/newsletter';
import Testimonials from './shared/testimonials.js';

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
