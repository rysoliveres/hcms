import { BrowserRouter, Route, Routes, useParams, HashRouter, Link } from 'react-router-dom'; //Use Routes instead of Switch
import { React } from 'react'
import HomePage from '../pages/Home';
import WatsonxPage from '../pages/watsonx-page';
import PageDetails from '../pages/PageDetails';

const Navigation = () => {
    return (
        <HashRouter basename="/">
            <div>
                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/watsonx">About</Link></li>
                </ul>
                <hr /> */}
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/page/:id" element={<PageDetails />} />
                    {/* <Route path="/watsonx" element={<WatsonxPage />} /> */}
                </Routes>
            </div>
        </HashRouter>
    )
}

export default Navigation