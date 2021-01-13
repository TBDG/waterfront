import image1 from './images/home1.jpg';
import image2 from './images/home2.jpg';
import image3 from './images/home3.jpg';
import image4 from './images/home4.jpg';


const images = [
    image1,
    image2,
    image3,
    image4,
];

function HomeImages() {


    const imageMap = () => {
        return images.map((image, i) => {
            return <div key={'image-' + i} id={'image-' + (i + 1)} className="four-images">

            </div>;
        });
    };

    return (<div id="home-images">
        {imageMap()}
    </div>);
}

export default HomeImages;
