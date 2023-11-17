import React from "react";
import { useEffect, useState } from 'react';
import { ArrowRight } from "@carbon/icons-react";
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

const HomePage = () => {

    useEffect(() => {
        // document.getElementsByClassName('masthead').style.visibility = "hidden";
    }, [])

    const HideMasthead = () => {

    }

    return (
        <div><DDSLeadspace size="medium" class="dds-theme-zone-g10">
            <DDSLeadspaceHeading>Go on. Leave me headless
            </DDSLeadspaceHeading>
            Easily deploy and embed AI across your business, manage all data sources, and accelerate responsible AI workflows—all on one platform
            
            <dds-background-media slot="image" opacity="100">
                <dds-video-player-container
                    video-id="1_ixmv5wsn"
                    href="banner_video_dancing.mp4"
                    background-mode="true"></dds-video-player-container>
                <iframe>

                </iframe>
            </dds-background-media>
        </DDSLeadspace>
            <DDSTableOfContents>
                <div class="bx--tableofcontents__contents">
                    <a name="1" data-title="Part 1: Overview"></a>
                    <DDSContentBlockHeading>Hit the nail on the head</DDSContentBlockHeading>

                    <dds-image alt="Image alt text" default-src="http://localhost/wpheadless/wp-content/uploads/2023/11/carpenter.png">
                        <dds-image-item srcset="http://localhost/wpheadless/wp-content/uploads/2023/11/carpenter.png"> </dds-image-item>
                    </dds-image>

                    <p>Section 1 content</p>
                    <a name="2" data-title="Part 2: Walkthrough"></a>
                    <DDSContentBlockHeading>Get your head in the game</DDSContentBlockHeading>
                    <p>Section 2 content</p>
                    <dds-card-in-card href="#/page/48">
                        <dds-card-in-card-image
                            slot="image"
                            alt="Image alt text"
                            default-src="http://localhost/wpheadless/wp-content/uploads/2023/11/runner.png"
                        >
                            <dds-image-item media="(min-width: 1312px)" srcset="http://localhost/wpheadless/wp-content/uploads/2023/11/runner.png">
                            </dds-image-item>
                            <dds-image-item media="(min-width: 672px)" srcset="http://localhost/wpheadless/wp-content/uploads/2023/11/runner.png">
                            </dds-image-item>
                            <dds-image-item media="(min-width: 320px)" srcset="http://localhost/wpheadless/wp-content/uploads/2023/11/runner.png">
                            </dds-image-item>
                        </dds-card-in-card-image>
                        <dds-card-eyebrow>Headless CMS</dds-card-eyebrow>
                        <dds-card-heading>Learn how a Headless CMS work</dds-card-heading>
                        <dds-card-cta-footer>
                            <svg
                                slot="icon"
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                aria-hidden="true"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                            >
                                <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                            </svg>
                        </dds-card-cta-footer>
                    </dds-card-in-card>
                    <a name="3" data-title="Part 3: Discussion"></a>
                    <DDSContentBlockHeading>Make head or tail</DDSContentBlockHeading>
                    {/* <dds-image alt="Image alt text" default-src="http://localhost/wpheadless/wp-content/uploads/2023/11/discussion.png">
                        <dds-image-item srcset="http://localhost/wpheadless/wp-content/uploads/2023/11/discussion.png"> </dds-image-item>
                    </dds-image> */}

                    <dds-content-item-horizontal-media align="left">
                        <dds-image slot="media" alt="Alt text" default-src="http://localhost/wpheadless/wp-content/uploads/2023/11/discussion.png"></dds-image>
                        <dds-content-item-horizontal-media-copy>Definition: to understand someone or something that someone has said</dds-content-item-horizontal-media-copy>

                        <dds-link-list slot="footer" type="vertical">
                            <dds-link-list-item-cta icon-placement="right" href="https://www.ibm.com" cta-type="local">
                                Learn more
                            </dds-link-list-item-cta>
                            <dds-link-list-item-cta icon-placement="right" href="https://www.ibm.com" cta-type="external">
                                Microservices and containers
                            </dds-link-list-item-cta>
                        </dds-link-list>
                    </dds-content-item-horizontal-media>

                    <a name="4" data-title="Part 4: Test"></a>

                    <dds-content-block-segmented complementary-style-scheme="with-border">
                        <dds-content-block-heading>Lorem ipsum dolor sit amet.</dds-content-block-heading>
                        <dds-content-block-copy>Lorem ipsum dolor sit amet</dds-content-block-copy>
                        <dds-image
                            slot="media"
                            alt="Image alt text"
                            default-src="https://fpoimg.com/672x378?text=16:9&amp;bg_color=ee5396&amp;text_color=161616"
                            heading="Mauris iaculis eget dolor nec hendrerit."
                        >
                        </dds-image>
                        <dds-content-block-segmented-item>
                            <dds-content-group-heading>Lorem ipsum dolor sit amet.</dds-content-group-heading>
                            <dds-content-item-copy>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.</dds-content-item-copy>
                        </dds-content-block-segmented-item>

                        <dds-link-list type="default" slot="complementary">
                            <dds-link-list-heading>Lorem Ipsum</dds-link-list-heading>
                            <dds-link-list-item-card-cta href="https://example.com" cta-type="local">
                                <p>Containerization A Complete Guide</p>
                                <dds-card-cta-footer></dds-card-cta-footer>
                            </dds-link-list-item-card-cta>
                            <dds-link-list-item-card-cta href="https://example.com" cta-type="external">
                                <dds-tag-link href="https://example.com" type="green" >
                                    Digital event
                                </dds-tag-link>
                                <p>Why should you use microservices and containers</p>
                                <dds-card-cta-footer></dds-card-cta-footer>
                            </dds-link-list-item-card-cta>
                        </dds-link-list>

                    </dds-content-block-segmented>
                </div>
            </DDSTableOfContents>

            {

            }
        </div>

    )
}

export default HomePage
