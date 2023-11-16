import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client"

const GET_ALL_PAGES = gql`query GetAllPages {
  pizzas {
    edges {
      node {
        databaseId
        pageDisplayName
      }
    }
  }
}`

const l1Data = {
  title: 'watsonx',
  url: '/watsonx',
  menuItems: [
    {
      title: 'watsonx.ai',
      titleEnglish: 'watsonx.ai',
      url: '/watsonx',
      class: 'test',
    },
    {
      title: 'watsonx.dataaaaa',
      titleEnglish: 'watsonx.data',
      url: 'https://www.ibm.com/products/watsonx-data',
    },
    {
      title: 'watsonx.governance',
      titleEnglish: 'watsonx.governance',
      url: 'https://www.ibm.com/products/watsonx-data',
    },
    // {
    //   title: 'Book a live demo',
    //   url: 'https://www.ibm.com/account/reg/us-en/signup?formid=DEMO-dataaiwatsonxai',

    // },
    // {
    //   title: 'Try it for free',
    //   class: 'bx--masthead__l1-cta',
    // }
  ],
};

const MastheadLinks = () =>
{
   // Get ID from URL
  const params = useParams();
  const queryId = parseInt(params.id);

  // Query from WPGraphQL using ID variable
  const { data, loading, error } = useQuery(GET_ALL_PAGES, { variables: { id: queryId } },)
 
  if (loading) {
    return <p>Loading</p>
  }

  if (error) {
    return <p>Page not found</p>
  }
  

 
}
export {MastheadLinks, l1Data}


// console.log("HELLO");
// document.querySelector('dds-masthead-composite').l1Data = l1Data;
