/* eslint no-useless-escape: 0 */
const IsExternalLink = (link) => /((http|https):\/\/(?!www.google.co.uk)[\w\.\/\-=?#]+)/.test(link)


export default IsExternalLink
