
module.exports = {
    siteMetadata: {
        title: 'Smart Doq',
    },
    /* Your site config here */
    plugins: [
        'gatsby-disable-404',
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                custom: {
                    families: ['SuperGrotesk Regular, SuperGrotesk Medium, sCamela Medium, SuperGroteskPro, SuperGrotesk Medium, Canela Medium'],
                    urls: ['/fonts/fonts.css'],
                },
            },
        },
        /*
         * Gatsby's data processing layer begins with “source”
         * plugins. Here the site sources its data from prismic.io.
         */
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'devCurtains',
                accessToken:
                    'MC5YX2NBc0JFQUFDTUFVY09o.77-977-977-9Mu-_ve-_vRoTUVDvv73vv70c77-977-977-977-9Wnvvv70ieO-_ve-_vToO77-9ZSnvv73vv70U',
                releaseID: 'develop',
                linkResolver: ({ node, key, value }) => (doc) => {
                    // Your link resolver
                },

                // Set a list of links to fetch and be made available in your link
                // resolver function.
                // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
                fetchLinks: [
                    // Your list of links
                ],

                // Set an HTML serializer function used to process formatted content.
                // Fields with rich text formatting use this function to generate the
                // correct HTML.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different HTML serializer logic for each field if necessary.
                // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
                htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {
                    // Your HTML serializer
                },

                // Provide an object of Prismic custom type JSON schemas to load into
                // Gatsby. This is required.
                schemas: {
                    blogpost: require('./src/schemas/blogpost.json'),
                },

                // Set a default language when fetching documents. The default value is
                // '*' which will fetch all languages.
                // See: https://prismic.io/docs/javascript/query-the-api/query-by-language
                lang: '*',

                // Add the Prismic Toolbar script to the site. Defaults to false.
                // Set to "legacy" if your repository requires the older toolbar script.
                // See: https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature
                prismicToolbar: true,

                // Set a function to determine if images are downloaded locally and made
                // available for gatsby-transformer-sharp for use with gatsby-image.
                // The document node, field key (i.e. API ID), and field value are
                // provided to the function, as seen below. This allows you to use
                // different logic for each field if necessary.
                // This defaults to always return false.
                shouldDownloadImage: ({ node, key, value }) => {
                    // Return true to download the image or false to skip.
                },

                // Provide a default set of Imgix image transformations applied to
                // Imgix-backed gatsby-image fields. These options will override the
                // defaults set by Prismic.
                // See: https://docs.imgix.com/apis/url
                imageImgixParams: {
                    
                },

                // Provide a default set of Imgix image transformations applied to
                // the placeholder images of Imgix-backed gatsby-image fields. These
                // parameters will be applied over those provided in the above
                // `imageImgixParams` option.
                // See: https://docs.imgix.com/apis/url
                imagePlaceholderImgixParams: {
                   
                },

                // Set the prefix for the filename where type paths for your schemas are
                // stored. The filename will include the MD5 hash of your schemas after
                // the prefix.
                // This defaults to 'prismic-typepaths---${repositoryName}'.
                typePathsFilenamePrefix: 'prismic-typepaths---gatsby-source-prismic-test-site',
            },
        },
    ],
};
