import branding from "./../components/ui/branding";
import link from './../components/ui/link';
import errors from './../components/icons/errorspic';
import makeElement from "./../utils/makeElement";
import errorMsg from "./../components/ui/errorMsg";

//Page not found page
const pageNotFound = function() {
    const notFoundContent = document.createElement('div')
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('error-image')
    const linkContainer = document.createElement('div')
    linkContainer.classList.add('link-container')    
    
    const brand = branding()

    const image = makeElement(errors())
    imgContainer.append(image)

    const message = errorMsg('404', 'The road ends here...')
    
    const linkElm = link('go back to where its safe!', '/')
    linkContainer.append(linkElm)

    notFoundContent.append(brand)
    notFoundContent.append(imgContainer)
    notFoundContent.append(message)
    notFoundContent.append(linkContainer)
    return notFoundContent
}

export default pageNotFound
