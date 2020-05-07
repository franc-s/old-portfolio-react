import React from 'react';
import { Route } from 'react-router-dom';
 
export default (
    <Route>
	<Route path='/#/' />
    <Route path="/#/about"/>
    <Route path="/#/about#contactMe" />
    <Route path="/#/projects" />
        <Route path="/#/harvestmate" />
        <Route path="/#/seekdo" />
        <Route path="/#/project3" />
        <Route path="/#/project4" />
    </Route>
);