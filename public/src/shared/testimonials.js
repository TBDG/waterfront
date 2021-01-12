import React from 'react';
import Carousel from 'react-multi-carousel';
//see documentation: https://www.npmjs.com/package/react-multi-carousel
import 'react-multi-carousel/lib/styles.css';
import {GrBlockQuote} from 'react-icons/gr';
import {VscChevronLeft} from 'react-icons/vsc';
import {VscChevronRight} from 'react-icons/vsc';
//see documentation: https://react-icons.github.io/react-icons/

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    return <button onClick={() => onClick()}><VscChevronRight />Hwellos</button>;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()}><VscChevronLeft /></button>;
};

const Testimonials = () => {
    const quotes = [
        [
            'The Waterfront is a welcome addition for fishkeepers. Louis is very knowledgeable and approachable.\n\nThe thing I like the best about The Waterfront is that Louis is what I call "The Fish Detective." He has been able to track down hard to find plecos for me, quarantine them in his store, make sure they are eating, etc.\n\nI will definitely be a repeat customer.', 'Doug Jessop',
        ], [
            'Amazing fish store!! Definitely recommend! The owner has the best customer service skills out of all the other fish stores in the valley! And super knowledgeable! Thank you Waterfront for helping us with all our needs and our many questions!', 'Cortnee-jo Mills',
        ], [
            'What an amazing experience today at your awesome shop! thank you so much for the time spent with my wife and I, you have definitely gained long lasting customers. I HIGHLY recommend Waterfront as your new LFS. We will see you again soon our new friend!! Cant\'t wait to see what\'s next!!', 'Beau Mills',
        ],
    ];

    const responsive = {
        superLargeDesktop: {
            // for the car
            breakpoint: {max: 4000, min: 3000},
            items: 5,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
        },
        mobile: {
            breakpoint: {max: 550, min: 0},
            items: 1,
        },
    };

    const quoteBlock = (quote, author) => {
        return (
            <div className='quote-block'>
                <h1 className='quote-icon'><GrBlockQuote/></h1>
                <p>{quote}</p>
                <p className='author'>— {author}</p>
            </div>);
    };

    return (
        <div
            id="testimonials"
            style={{
                paddingBottom: '30px',
                position: 'relative',
            }}
        >
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                dotListClass=""
                draggable={false}
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={responsive}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <div>{quoteBlock(quotes[0][0], quotes[0][1])}</div>
                <div>{quoteBlock(quotes[1][0], quotes[1][1])}</div>
                <div>{quoteBlock(quotes[2][0], quotes[2][1])}</div>
            </Carousel>
        </div>
    );
};


export default Testimonials;
