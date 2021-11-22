import makeElement from "./../../utils/makeElement";

const tagline = function(tagline="catchyTagline", className="ui-tagline") {
    const template = `<p class="${className}">${tagline}</p>`
    const element = makeElement(template)
    return element
}

export default tagline