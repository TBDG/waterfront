import {Component} from 'react';
import {AiFillPlayCircle, AiFillCloseCircle} from 'react-icons/ai';

class StoreTour extends Component {
    constructor() {
        super();

        this.state = {
            showingVideo: false,
        };

        this.closeOverlay = this.closeOverlay.bind(this);
        this.placeOverlay = this.placeOverlay.bind(this);
    }

    closeOverlay() {
        this.setState({
            showingVideo: true,
        });
    }

    placeOverlay() {
        this.setState({
            showingVideo: false,
        });
    }

    render() {
        return (<div id="store-tour">
            <div className="ratio-width">
                <div className="ratio-container">
                    {this.state.showingVideo ? <div className="youtube-container">
                        <iframe title="Youtube tour"
                            src="https://www.youtube.com/embed/shLZfw2F_9c?autoplay=1"
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                        <div className="close-holder"><AiFillCloseCircle onClick={this.placeOverlay} className="close-button"/></div>
                    </div> : <div className="overlay-card">
                        <h2 className="store-tour-overlay-text">Store Tour July 2020</h2>
                        <div className="play-holder"><AiFillPlayCircle onClick={this.closeOverlay} className="play-button"/></div>
                    </div>}
                </div>
            </div>
        </div>);
    }
}

export default StoreTour;
