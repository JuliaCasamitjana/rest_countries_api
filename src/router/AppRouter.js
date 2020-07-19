import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Desktop from '../components/Desktop'
import Country from '../components/Country'
import Header from '../components/Header'

const AppRouter = (props) => (
<BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Desktop}  exact={true}/>
            <Route path="/:id" component={Country}/>
        </Switch>
</BrowserRouter>

)

export default AppRouter;