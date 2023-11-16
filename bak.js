// Custom Masthead l1 Navigation

const l1Data = {
  title: 'watsonx',
  url: 'https://example.com',
  class: 'NotWOrking',
  menuItems: [
    {
      title: 'watsonx.ai',
      titleEnglish: 'watsonx.ai',
      url: 'https://www.ibm.com/products/watsonx-ai',

    },
    {
      title: 'watsonx.data',
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
      url: 'https://eu-de.dataplatform.cloud.ibm.com/registration/stepone?context=wx&preselect_region=true',
      class: 'bx--masthead__l1-cta',
    }
  ],
};

//Fetch from REST API

const fetchWPData = () => {
  fetch("http://localhost/wpheadless/wp-json/wp/v2/slices")
      .then(response => {
          return response.json()
      })
      .then(data => {
          setPosts(data)
      })
}
