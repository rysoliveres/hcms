import {BrowserRouter, Route, Routes, useParams } from 'react-router-dom'; //Use Routes instead of Switch
import { React} from 'react'
import HomePage from '../pages/home';
import WatsonxPage from '../pages/watsonx-page';
import PageDetails from '../pages/PageDetails';


const Navigation = () => {


return (
<BrowserRouter>
<Routes>
<Route exact path="/" element={<HomePage />} />
<Route path="/page/:id" element={<PageDetails />} />
<Route path="/watsonx" element={<WatsonxPage />} />
</Routes>
</BrowserRouter>
)

}

export default Navigation