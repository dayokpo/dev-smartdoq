
module.exports = {
    siteMetadata: {
        title: 'Smart Doq',
    },
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
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'recipedia',
                accessToken:
                    'MC5ZRVpWUWhFQUFDQUEyaEsx.au-_vR03WgVhQCbvv73vv73vv70lIXQqTO-_ve-_ve-_vX8lfu-_vXvvv71y77-977-9YO-_vQ8',
                releaseID: 'develop',
                linkResolver: ({ node, key, value }) => (doc) => {},
                fetchLinks: [],
                htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {},
                schemas: {
                    blogpost: require('./src/schemas/blogpost.json'),
                },
                lang: '*',
                prismicToolbar: true,
                shouldDownloadImage: ({ node, key, value }) => {},
                imageImgixParams: {},
                imagePlaceholderImgixParams: {},
                typePathsFilenamePrefix: 'prismic-typepaths---gatsby-source-prismic-test-site',
            },
        },
    ],
};
