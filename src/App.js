
//#region IMPORT
import logo from './logo.svg';
import './App.css';

// import { Route, Routes, HashRouter, Link, NavLink } from 'react-router-dom' //Use Routes instead of Switch
import { Route, Routes, useParams, HashRouter} from 'react-router-dom'; //Use Routes instead of Switch
import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { WebChatContainer, setEnableDebug } from '@ibm-watson/assistant-web-chat-react';
import DDSTableOfContents from '@carbon/ibmdotcom-web-components/es/components-react/table-of-contents/table-of-contents.js';
import { ArrowRight, Home } from '@carbon/icons-react';
// import DDSBackgroundMedia from '@carbon/ibmdotcom-web-components/es/components-react/background-media/background-media.js';
// import DDSButtonCTA from '@carbon/ibmdotcom-web-components/es/components-react/cta/button-cta.js';
// import DDSButtonGroup2 from '@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group.js';
import DDSBackgroundMedia from '@carbon/ibmdotcom-web-components/es/components-react/background-media/background-media.js'
import DDSImageItem from '@carbon/ibmdotcom-web-components/es/components-react/image/image-item.js'
import DDSButtonGroup from '@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group.js';
import DDSButtonGroupItem from '@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group-item.js'
import DDSLeadspace from '@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace.js'
import DDSLeadspaceHeading from '@carbon/ibmdotcom-web-components/es/components-react/leadspace/leadspace-heading.js'
import DDSContentBlock from '@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block.js'
import DDSContentBlockHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading.js'
import DDSContenttem from '@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item.js'
import DDSContentBlockHorizontal from '@carbon/ibmdotcom-web-components/es/components-react/content-block-horizontal/content-block-horizontal.js';
import DDSContentItemHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-heading.js';
import DDSContentItemHorizontal from '@carbon/ibmdotcom-web-components/es/components-react/content-item-horizontal/content-item-horizontal.js';
import DDSContentItemHorizontalCopy from '@carbon/ibmdotcom-web-components/es/components-react/content-item-horizontal/content-item-horizontal-copy.js';


// import DDSImageItem from '@carbon/ibmdotcom-web-components/es/components-react/image/image-item.js';
// import DDSVideoPlayerContainer from '@carbon/ibmdotcom-web-components/es/components-react/video-player/video-player-container.js';

import HomePage from './pages/Home';
import WatsonxPage from './pages/watsonx-page';
import PageDetails from './pages/PageDetails';

//#endregion

const webChatOptions = {
  integrationID: '390f57e8-d96b-487c-a228-d21d8cddef1d',
  region: 'us-south',
  serviceInstanceID: '222d3397-d7bb-48ce-8996-f9dd8de1f6e9',
};

function App() {

  const mastheadProps = {
    navigation: 'default',
    platform: {
      name: 'IBM Cloud',
      url: 'https://www.ibm.com/cloud',
    },
    hasNavigation: true,
    hasProfile: true,
    searchProps: {
      hasSearch: true,
      placeHolderText: 'Search all of IBM',
      searchOpenOnload: false,
    },
  };

  const [posts, setPosts] = useState([])
  const fetchWPData = () => {
    fetch("http://localhost/wpheadless/wp-json/wp/v2/categories")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPosts(data)
      })
  }

  useEffect(() => {
    fetchWPData()
  }, [])

  const test = posts;

  const postHtml = test.map((post, i) => {
    return (
      <div key={post.id}>
        <a name={post.id} data-title={post.name}></a>
        <DDSContentBlock>
          <DDSContentBlockHeading>{post.description}</DDSContentBlockHeading>
        </DDSContentBlock>
      </div>
    )
  })

  return (

  
      <div className="App">
        <WebChatContainer config={webChatOptions} />
      </div>
  );
}
export default App;
