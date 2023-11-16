import { React, ReactDOM } from "react";
import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom";
import createDOMPurify from 'dompurify'

import DDSTableOfContents from '@carbon/ibmdotcom-web-components/es/components-react/table-of-contents/table-of-contents.js';
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

import { ArrowRight } from "@carbon/icons-react";

import { Airplane } from "@carbon/pictograms-react";
import {MastheadLinks, l1Data} from '../utilities/masthead-links';
import Slice3CP from "../sections/Slice3CP";

const DOMPurify = createDOMPurify(window)

const PageDetails = () => {

  //#region QUERY
  const GET_ALL_PAGES = gql`query GetAllPages {
        pizzas {
          edges {
            node {
              pageDisplayName
            }
          }
        }
      }`

  const GET_PAGE = gql`query GetPage($id: Int!) {
        pizzas(where: {id: $id}) {
          edges {
            node {
              databaseId
              pageTitle
              pageHeadline
              pageDescription
              pageBanner {
                mediatype
                bannerimageurl {
                  id
                  mediaItemUrl
                  
                }
              }
              pageCTAButtons {
                enablecta
                ctaitem1 {
                  ctatext
                  ctatype
                  ctaurl
                }
                ctaitem2 {
                  ctatext
                  ctatype
                  ctaurl
                }
              }
              pageFootnotes {
                pagefootnotes
              }
            }
          }
        }
      }`

  // Get ID from URL
  const params = useParams();
  const queryId = parseInt(params.id);

  // Query from WPGraphQL using ID variable
  const { data, loading, error } = useQuery(GET_PAGE, { variables: { id: queryId } },)
 
  if (loading) {
    return <p>Loading</p>
  }

  if (error) {
    return <p>Page not found</p>
  }

  const pageContent = data.pizzas.edges;
  //#endregion

  console.log(pageContent)

  // Render list of pages in the menu
  document.querySelector('dds-masthead-composite').l1Data = l1Data;

  function RenderLeadspace()
  {

  }

  function RenderFootnotes(props) {
    return (
      <DDSContentBlock class="footnote" id="pageFootnotesContainer">
        <div class="bx--grid">
          <div class="bx--row">
            <div class="bx--col-lg-4">
              <DDSContentItemHeading class="footnote-heading">Footnotes</DDSContentItemHeading>
            </div>
            <div class="bx--col-lg-8">
              <DDSContentItemHorizontalCopy class="footnote-content">
                <DDSContenttem>   <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.data) }} /> </DDSContenttem>
              </DDSContentItemHorizontalCopy>
            </div>
          </div>
        </div>
      </DDSContentBlock>)
  }

  return (
    pageContent.map(item => {
      const { databaseId, pageTitle, pageHeadline, pageDescription, pageBanner, pageFootnotes, pageCTAButtons } = item.node
      const pageCTAButtonsItem1 = pageCTAButtons.ctaitem1
      const pageCTAButtonsItem2 = pageCTAButtons.ctaitem2
      let pageFootnotesContent
      let pageBannerMedia

      if (pageBanner.bannerimageurl != null && pageBanner.bannerimageurl != undefined) {
        pageBannerMedia = pageBanner.bannerimageurl.mediaItemUrl
      }

      if (pageFootnotes.pagefootnotes != null && pageFootnotes.pagefootnotes != undefined) {
        pageFootnotesContent = pageFootnotes.pagefootnotes
      }

      return (
        <>

          <DDSLeadspace size="medium" class="dds-theme-zone-g10" key={databaseId}>
            <DDSLeadspaceHeading> {pageHeadline}
            </DDSLeadspaceHeading>
            {pageDescription}

            {pageCTAButtons.enablecta != null &&
              <DDSButtonGroup slot="action">
                <DDSButtonGroupItem href={pageCTAButtonsItem1.ctaurl} > {pageCTAButtonsItem1.ctatext}<ArrowRight slot="icon" />
                </DDSButtonGroupItem>
                <DDSButtonGroupItem href={pageCTAButtonsItem2.ctaurl} > {pageCTAButtonsItem2.ctatext}<ArrowRight slot="icon" />
                </DDSButtonGroupItem>
              </DDSButtonGroup>
            }

            {pageBanner.mediatype == "Image" &&
              <DDSBackgroundMedia
                slot="image"
                default-src={pageBannerMedia}
                alt="Image alt text"
                opacity="100">
                <DDSImageItem
                  media="(min-width: 672px)"
                  srcset={pageBannerMedia}></DDSImageItem>
                <DDSImageItem
                  media="(min-width: 0)"
                  srcset={pageBannerMedia}></DDSImageItem>
              </DDSBackgroundMedia>
            }
          </DDSLeadspace>

          <div class="table-of-contents container responsivegrid">
            <DDSTableOfContents class="">
              <div className="bx--tableofcontents__contents">

              </div>
            </DDSTableOfContents>
          </div>
          
          <RenderFootnotes data={pageFootnotesContent} />
          <MastheadLinks/>
        </>
      )
    })
  )
}



export default PageDetails;

{/* <Slice3CP name="Airplane"/>

  <Slice3CP name="ConnectedEcosystem"/> */}