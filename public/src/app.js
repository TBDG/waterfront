import Footer from './shared/footer.js';
import Newsletter from './shared/newsletter';
import Testimonials from './shared/testimonials.js';
import './app.scss';
import Landing from './shared/landing.js';

function App() {
    return (
        <div className="App">
            <Landing />
            <Newsletter/>
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
