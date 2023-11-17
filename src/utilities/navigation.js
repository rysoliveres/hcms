import { BrowserRouter, Route, Routes, useParams, HashRouter } from 'react-router-dom'; //Use Routes instead of Switch
import { React } from 'react'
import HomePage from '../pages/Home';
import WatsonxPage from '../pages/watsonx-page';
import PageDetails from '../pages/PageDetails';

const Navigation = () => {
    return (
        <HashRouter basename="/">
            
                <Route exact path="/" element={<HomePage />} />
                <Route path="/page/:id" element={<PageDetails />} />
                <Route path="/watsonx" element={<WatsonxPage />} />
           
        </HashRouter>
    )
}

export default Navigation