import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import './index.css';
const App = () => {
    return (
        <Fragment>
            <div className="container">

                <div className="card card-default" id="card_contacts">
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true" >
                        <ul className="list-group pull-down" id="contact-list">

                        <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid"/>

                            </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                            <label className="name lead">Mike Anamendolla</label>
                            <br/> 
                            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5842 Hillcrest Rd"></span>
                            <span className="text-muted">5842 Hillcrest Rd</span>
                            <br/>
                            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                            <span className="text-muted small">(870) 288-4149</span>
                            <br/>
                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
                            <span className="text-muted small text-truncate">mike.ana@example.com</span>
                        </div>
                    </div>
                </li>

                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>);
}

ReactDOM.render(<App />, document.getElementById('root'));


