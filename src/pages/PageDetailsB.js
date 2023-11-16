import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ORDER_PIZZA_QUERY = `
{
    pizzas {
        nodes {
          pageTitle
        }
      }
    }
`
const query = `query GetPageDetails {
    pizzas(where: {id: $id}) {
      edges {
        node {
          pageTitle
             pageDisplayName
          pageDescription
          pageHeadline
          pageSections {
            connectToSections {
              ... on Slice3CP {
                id
                contentTypeName
                sectionTitle
                sectionDisplayName
                contentTypeName
                sliceThreeColumnPictogram {
                  fieldGroupName
                  firstcolumn {
                    columnheadline
                    columnicon
                    description
                  }
                  secondcolumn {
                    columnheadline
                    columnicon
                    description
                  }
                  thirdcolum {
                    columnheadline
                    columnicon
                    description
                  }
                }
              }
            }
          }
     
       
        }
      }
    }
  }`;

const PageDetailsB = () => {
    const [posts, setPosts] = useState([])
    const [pizzaBox, setOrder] = useState([])
    const params = useParams();
    const queryId = { id: params.id };

    // const fetchWPDataGraphQL = () => {
    //     fetch('http://localhost/wpheadless/graphql', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ query, queryId }),
    //     })
    //         .then(response => response.json())
    //         .then(data => setOrder(data.pizzas))
    // }

    const fetchWPDataGraphQL = () => {
        fetch('http://localhost/wpheadless/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: ORDER_PIZZA_QUERY,
            }),
        })
            .then(response => console.log(response.json()))
            .then(data => setOrder(data.pizzas))
    }

    useEffect(() => {
        fetchWPDataGraphQL()
        console.log(pizzaBox)
    }, [])

    //   const contentHtml = pizzaBox.map(pizza => {
    //     return (
    //         console.log(pizza)
    //     )
    // })

    return <div>{pizzaBox}</div>
}



export default PageDetails;