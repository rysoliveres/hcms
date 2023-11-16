// NOTE: CAPITALIZE FIRST LETTER OF REACT COMPONENT

// #region import
import React from "react";
import { useEffect, useState } from 'react';
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
// import MastheadLinks from '../utilities/masthead-links';

import { ArrowRight } from "@carbon/icons-react";
import DDSContentItem from "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item.js";
// #endregion

const ORDER_PIZZA_QUERY = `
{
        pizzas(where: {id: 48}){
          nodes {
            pageTitle
            pageDisplayName
            pageHeadline
            pageFooter
            
            pageDescription
            pageCTAText1
            pageCTALink1
            pageCTAText2
            pageCTALink2
            sections {
              nodes {
                sectionOrder
                sectionDisplayName
                sectionTitle
                sectionHeadline
              }
            }
          }
        }    
}
`
const WastonxPage = () => {
    const [posts, setPosts] = useState([])
    const [pizzaBox, setOrder] = useState([])
    const headingHTML = '<h1><span class="enhanced-title"><p class="enhanced-title">watson<span class="enhanced-title-blue">x</span> </p></span></h1>';

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
            .then(response => response.json())
            .then(data => setOrder(data.data.pizzas.nodes))
    }

    const renderComponents = () => {

    }

    useEffect(() => {

       
        // document.querySelector('dds-masthead-composite').l1Data = MastheadLinks;
        // document.querySelector('dds-leadspace-heading').innerHTML = headingHTML;

        // fetchWPDataGraphQL()
        // renderComponents()

    }, [])


    const contentHtml = pizzaBox.map(pizza => {
        return (
            pizza.sections.nodes.map(slices => {
                console.log("SLICES")
                return (
                    <div key={slices.sectionOrder}>
                        <a name={slices.sectionOrder} data-title={slices.sectionHeadline}></a>
                        <DDSContentBlockHeading>{slices.sectionHeadline}</DDSContentBlockHeading>

                    </div>
                )
            })


        )
    })

    const footerHtml = pizzaBox.map((pizza, i) => {
        return (
            <div class="bx--grid" key={i}>
                <div class="bx--row">
                    <div class="bx--col-lg-4">
                        <DDSContentItemHeading class="footnote-heading">Footnotes</DDSContentItemHeading>
                    </div>
                    <div class="bx--col-lg-8">
                        <DDSContentItemHorizontalCopy class="footnote-content">
                            <DDSContentItem>
                                {pizza.pageFooter}</DDSContentItem>
                        </DDSContentItemHorizontalCopy>
                    </div>
                </div>
            </div>


        )
    })

    return (
        <div>
            <DDSLeadspace size="medium" class="dds-theme-zone-g10">
                <DDSLeadspaceHeading>
                </DDSLeadspaceHeading>
                Easily deploy and embed AI across your business, manage all data sources, and accelerate responsible AI workflows—all on one platform
                <DDSButtonGroup slot="action">
                    <DDSButtonGroupItem>Start your free trial<ArrowRight />
                    </DDSButtonGroupItem>
                    <DDSButtonGroupItem>Book a live demo<ArrowRight />
                    </DDSButtonGroupItem>
                </DDSButtonGroup>
                <DDSBackgroundMedia
                    slot="image"
                    default-src="http://localhost/wpheadless/wp-content/uploads/2023/10/page-banner-default-1.png"
                    alt="Image alt text"
                    opacity="100">
                    <DDSImageItem
                        media="(min-width: 672px)"
                        srcset="http://localhost/wpheadless/wp-content/uploads/2023/10/page-banner-default-1.png"></DDSImageItem>
                    <DDSImageItem
                        media="(min-width: 0)"
                        srcset="http://localhost/wpheadless/wp-content/uploads/2023/10/page-banner-default-1.png"></DDSImageItem>
                </DDSBackgroundMedia>
            </DDSLeadspace>
            <div class="table-of-contents container responsivegrid">
                <DDSTableOfContents class="">
                    <div className="bx--tableofcontents__contents">
                        {/* {contentHtml} */}
                    </div>
                </DDSTableOfContents>
                </div>
                <DDSContentBlock class="footnote">
                    {/* {footerHtml} */}
                </DDSContentBlock>
        </div>
    )
}

export default WastonxPage
