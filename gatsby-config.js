module.exports = {
    siteMetadata: {
        title: "anton.bergaker.com",
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-static-folders",
            options: {
                folders: ["./static", "./externally_made_stuff"],
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images,
        `gatsby-transformer-json`,
        `gatsby-transformer-plaintext`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/`,
                name: `src`,
            },
        },
        "gatsby-plugin-no-javascript",
        {
            resolve: "gatsby-plugin-no-javascript-utils",
            options: {
                noSourcemaps: true,
                removeGeneratorTag: true,
                removeReactHelmetAttrs: true,
                noInlineStyles: false,
                removeGatsbyAnnouncer: true,
                removePreloadLinks: true,
            },
        },
    ],
};
