import './_toast.scss';
import {Component} from 'react';
import $ from 'jquery';

class Toast extends Component {

    componentDidMount() {
        let toast = $('#the-toast');
        toast.toast({animation: true, autohide: true, delay: 3000});

        setTimeout(() => {
            $('#the-toast').toast('show');
        }, 1000);
    }


    render() {
        return (
            <div>
                <div id="the-toast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        Hello, world! This is a toast message!
                    </div>
                </div>
            </div>
        );
    }


}

export default Toast;
