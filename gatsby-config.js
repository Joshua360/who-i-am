module.exports = {
  siteMetadata: {
    title: "The People I Love!",
    author:"Joshua O. Owuor"
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve:  "gatsby-transformer-remark",
      options:{
        plugins:[
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options:{
              maxWidth: 750,
              linkImagesToOriginal:false
            }
          }
        ]
      }
    },
   

    {
      resolve:"gatsby-source-filesystem",
      options:{
        name:"src",
        path:`${__dirname}/src`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
