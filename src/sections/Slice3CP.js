import React from "react";
import { gql, useQuery } from "@apollo/client"
import * as Carbon from '@carbon/pictograms-react'

const GET_SECTION = gql`query GetSlice3CP($id: Int!) {
  slices3CP(where: {id: $id}) {
    edges {
      node {
        id
        databaseId
        sectionHeadline
        sectionDisplayName
        sectionDescription
        sectionTitle
        sliceThreeColumnPictogram {
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
          thirdcolumn {
            columnheadline
            columnicon
            description
          }
        }
      }
    }
  }
}`

function RenderPictogram(props) {
    console.log(props)
        const iconName = props.name
        const Base = Carbon[iconName]
        return <Base />
  }

export default function Slice3CP(props) {

  const queryId = parseInt(props.id);

  // Query from WPGraphQL using ID variable
  const { data, loading, error } = useQuery(GET_SECTION, { variables: { id: queryId } },)

  if (loading) {
    return <p>Loading</p>
  }

  if (error) {
    return <p>Page not found</p>
  }
  const sectionDetails  = data.slices3CP.edges;
  console.log(sectionDetails)
    // <RenderPictogram name={props.name}/>

    return(
      sectionDetails.map(item =>
        {
          console.log(item.node)
          const slice3cpData = item.node.sliceThreeColumnPictogram;

          console.log(slice3cpData)
          return (
    
          <dds-cta-block-item-row>
          <dds-cta-block-item>
          <dds-pictogram-item slot="media"> <RenderPictogram name={slice3cpData.firstcolumn.columnicon}/></dds-pictogram-item>
            <dds-content-item-heading>{slice3cpData.firstcolumn.columnheadline}</dds-content-item-heading>
            <dds-content-item-copy>{slice3cpData.firstcolumn.description}</dds-content-item-copy>
            {/* <dds-text-cta slot="footer" cta-type="local" icon-placement="right" href="example.com">Find a partner</dds-text-cta> */}
          </dds-cta-block-item>
      
          <dds-cta-block-item>
          <dds-pictogram-item slot="media"> <RenderPictogram name={slice3cpData.secondcolumn.columnicon}/></dds-pictogram-item>
            <dds-content-item-heading>{slice3cpData.secondcolumn.columnheadline}</dds-content-item-heading>
            <dds-content-item-copy>{slice3cpData.secondcolumn.description}</dds-content-item-copy>
          </dds-cta-block-item>

          <dds-cta-block-item>
          <dds-pictogram-item slot="media"> <RenderPictogram name={slice3cpData.thirdcolumn.columnicon}/></dds-pictogram-item>
            <dds-content-item-heading>{slice3cpData.thirdcolumn.columnheadline}</dds-content-item-heading>
            <dds-content-item-copy>{slice3cpData.thirdcolumn.description}</dds-content-item-copy>
          </dds-cta-block-item>
        </dds-cta-block-item-row>
        
          )
        }
      )
    )
    
  }
