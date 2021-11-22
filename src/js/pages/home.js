import link from './../components/ui/link';
import branding from './../components/ui/branding'; //use branding to make a titlebrand

// home page
const home = function() {

    const homeContent = document.createElement('div')
    const linkContainer = document.createElement('div')
    linkContainer.classList.add('link-container')

    const brand = branding()    
    const linkElm = link('to do', '/todo')

    linkContainer.append(linkElm)
    homeContent.append(brand)
    homeContent.append(linkContainer)   

    return homeContent
}

export default home