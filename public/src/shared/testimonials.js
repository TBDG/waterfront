import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () => {
    const quotes = [
        [
            "The Waterfront is a welcome addition for fishkeepers. Louis is very knowledgeable and approachable.\n\nThe thing I like the best about The Waterfront is that Louis is what I call \"The Fish Detective.\" He has been able to track down hard to find plecos for me, quarantine them in his store, make sure they are eating, etc.\n\nI will definitely be a repeat customer.","Doug Jessop"
        ],[
            "Amazing fish store!! Definitely recommend! The owner has the best customer service skills out of all the other fish stores in the valley! And super knowledgeable! Thank you Waterfront for helping us with all our needs and our many questions!","Cortnee-jo Mills"
        ],[
            "What an amazing experience today at your awesome shop! thank you so much for the time spent with my wife and I, you have definitely gained long lasting customers. I HIGHLY recommend Waterfront as your new LFS. We will see you again soon our new friend!! Cant't wait to see what's next!!", "Beau Mills"
        ]
    ];

    const responsive = {
        superLargeDesktop: {
          // for the car
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



    return (
        <div id='testimonials'>
            <Carousel responsive={responsive}>
                <div >Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>;
        </div>
    )
}



export default Testimonials;