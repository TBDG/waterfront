import Header from "./shared/header";
import Newsletter from './shared/newsletter';
import Testimonials from './shared/testimonials.js';
import StoreTour from './shared/store-tour';
import Footer from './shared/footer.js';
import './app.scss';


function App() {
    return (
        <div className="App">
            <Header/>
            <div className='content'>
                <Newsletter/>
                <Testimonials/>
                <StoreTour/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
