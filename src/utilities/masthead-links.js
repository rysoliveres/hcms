import { React } from "react";
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


export const l1Data = {
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
    {
      title: 'Book a live demo',
      url: 'https://www.ibm.com/account/reg/us-en/signup?formid=DEMO-dataaiwatsonxai',

    },
    {
      title: 'Try it for free',
      class: 'bx--masthead__l1-cta',
    }
  ],
};


const MastheadLinks = () =>
{



  const { data, loading, error } = useQuery(GET_ALL_PAGES)

  if (loading) {
    return <p>Loading</p>
  }
  
  if (error) {
  
    return <p>Page not found</p>
  }

  console.log(data.pizzas.edges)

  console.log("HELLO")

  l1Data = {
    title: 'watsonxxxx',
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
      {
        title: 'Book a live demo',
        url: 'https://www.ibm.com/account/reg/us-en/signup?formid=DEMO-dataaiwatsonxai',
  
      },
      {
        title: 'Try it for free',
        class: 'bx--masthead__l1-cta',
      }
    ],
  };

  return l1Data
}



export  default l1Data


// console.log("HELLO");
// document.querySelector('dds-masthead-composite').l1Data = l1Data;
