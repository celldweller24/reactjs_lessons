import React from "react";
import Main from './Main';
import FilmDetail from './FilmDetail';
import NotFound from './NotFound';
import { BrowserRouter as Router, StaticRouter, Route, Switch } from 'react-router-dom';

class IndexContainer extends React.Component {
    render() {  
        return (
            <div>
                <StaticRouter>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/search/:id" component={Main} />
                        <Route path="/film/:id" component={FilmDetail} />    
                        <Route component={NotFound} />
                    </Switch>
                </StaticRouter>
            </div>
        )
    }
}

export default IndexContainer;