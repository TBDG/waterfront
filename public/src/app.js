import Footer from './shared/footer.js';
import Newsletter from './shared/newsletter';
import Testimonials from './shared/testimonials.js';
import StoreTour from './shared/store-tour';
import './app.scss';

function App() {
    return (
        <div className="App">
            <Newsletter/>
            <Testimonials />
            <StoreTour/>
            <Footer />
        </div>
    );
}

export default App;
