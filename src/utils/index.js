const pdfBodyName = 'PrismicBlogpostBodyPdfslice';
const socialSliceName = 'PrismicBlogpostBodySocial';
const menuSliceName = 'PrismicBlogpostBodyMenu';
const websiteMeta = 'PrismicBlogpostBodyWebsitemeta';
const sliderData = 'PrismicBlogpostBodySlider';
const videoSliderData = 'PrismicBlogpostBodyVideo';
const pdfData = 'PrismicBlogpostBodyPdf';
const threeDModelInternal = 'PrismicBlogpostBody3dModelInternal';
const topRight = 'PrismicBlogpostBodyTopRight';
const iframeData = 'PrismicBlogpostBodyIframe';
const websiteData = 'PrismicBlogpostBodyWebsiteAdd';
const funcIcons = 'PrismicBlogpostBodyFunctionalityicons';

const NO_OF_FUNCTIONALITIES = 5;

export const getFuncIcons = (data) => {
    return data.prismicBlogpost.data.body.filter((item) => item['__typename'] === funcIcons).map((i) => i.items)[0];
};

const removeUndefined = (item) => item !== undefined;

const getSelectedFunctionalities = (websiteData) => {
    const values = Object.keys(websiteData)
        .map((key) => {
            if (key.includes('functionality_choice')) {
                if (isNotEmpty(websiteData[key])) {
                    return websiteData[key];
                }
            }
        })
        .filter(removeUndefined);
    return values;
};
export const getWebsiteHeaderData = (data) => {
    const websiteData = data.prismicBlogpost.data;
    let logoUrl = websiteData.website_main_logo.url;
    logoUrl = logoUrl.substring(0, logoUrl.indexOf('?auto'));

    return {
        backgroundImage: websiteData.website_background_image.url,
        logoImage: logoUrl,
        name: websiteData.name,
        logoDescription: websiteData.logo_description.text,
        footerLineImage: websiteData.footer_line_image.url,
        footerImage: websiteData.footer_image.url,
        footerLink: websiteData.footer_image_url ? websiteData.footer_image_url.url : 'none',
        enabledChoices: getSelectedFunctionalities(websiteData),
    };
};

export const getSliderData = (data) => {
    return data.prismicBlogpost.data.body
        .filter((item) => item['__typename'] === sliderData)
        .map((i) => i.items)[0]
}

export const getIFrameData = (data) => {
    return data.prismicBlogpost.data.body.filter((item) => item['__typename'] === iframeData);
};

export const getWebsiteData = (data) => {
    return data.prismicBlogpost.data.body.filter((item) => item['__typename'] === websiteData);
};

export const getTopRightData = (data) => {
    return data.prismicBlogpost.data.body.filter((item) => item['__typename'] === topRight).map((i) => i.items)[0];
};

export const getPDFData = (data, index = 0) => {
    const lookUpIndex = NO_OF_FUNCTIONALITIES - index;
    console.log( index )
    
    const pdfDataArray = data.prismicBlogpost.data.body.filter((item) => item['__typename'] === pdfData);
    console.log( pdfDataArray ,pdfDataArray.reverse())

   // return pdfDataArray[NO_OF_FUNCTIONALITIES - lookUpIndex]['items'];

    return data.prismicBlogpost.data.body
        .filter((item) => item['__typename'] === pdfData)
        .map((i) => i.items)[0]
};
export const getThreeDModelInternalData = (data) => {
    return data.prismicBlogpost.data.body
        .filter((item) => item['__typename'] === threeDModelInternal)
        .map((i) => i.items)[0];
};

export const getVideoSliderData = (data, index=0) => {
     return data.prismicBlogpost.data.body.filter((item) => item['__typename'] === videoSliderData).map((i) => i.items)[0];
   // return videoDataArray[NO_OF_FUNCTIONALITIES - lookUpIndex]['items'];
};

// export const getVideoMapSlice = data => {
//   return data.prismicBlogpost.data.body
//     .filter(item => item['__typename'] === videoMapSlice)
//     .map(i => i.primary)[0]
//   //return embedVideo && embedVideo.embed_video_url ? embedVideo.embed_video_url.html: null;
// }

export const getPDFSlice = (data) => {
    return data.prismicBlogpost.data.body.filter((item) => item['__typename'] === pdfBodyName).map((i) => i.primary)[0];
};

export const getPDFDocuments = (data) => {
    let documents = data.prismicBlogpost.data.body
        .filter((item) => item['__typename'] === pdfBodyName)
        .map((i) => i.primary)[0];
    var result = [];
    documents &&
        Object.keys(documents).map((k) => {
            if (documents[k] && documents[k].url && documents[k].url.indexOf('.pdf') > 0) {
                result.push(documents[k]);
            }
        });
    return result;
};

export const getMenuData = (data) => {
    return data.prismicBlogpost.data.body
        .filter((item) => item['__typename'] === menuSliceName)
        .map((i) => i.primary)[0];
};

export const getSocialUrls = (data) => {
    return data.prismicBlogpost.data.body
        .filter((item) => item['__typename'] === socialSliceName)
        .map((i) => i.primary)[0];
};

export const getWebsiteMeta = (data) => {
    return data.prismicBlogpost.data.body.filter((item) => item['__typename'] === websiteMeta).map((i) => i.primary)[0];
};

export const showRightMenu = (menuData) => {
    if (menuData.show_right_menu === null) {
        return true;
    } else {
        return menuData.show_right_menu;
    }
};

export const menuStyle = (menuData, place) => {
    const bgColor = place === 'left' ? menuData.menu_left_icon_bgcolor : menuData.menu_right_icon_bg_color;
    const bgImageURL = place === 'left' ? menuData.menu_left_icon.url : menuData.menu_right_icon.url;
    return {
        backgroundColor: amendMenuBGColor(bgColor),
        backgroundImage: getImageURL(bgImageURL),
    };
};
export const getImageURL = (url) => url.substring(0, url.indexOf('?auto'));
export const amendMenuBGColor = (ccode) => (ccode === '#FFFFFF' ? 'none' : ccode);

export const isNotEmpty = (item) => {
    if (item === undefined || item === '' || item === null) {
        return false;
    }
    return true;
};
