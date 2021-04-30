const getFuncIcon = (funcIconsArray, funcIndex) => {
    const name = 'functionality_' + `${funcIndex + 1}` + '_icon'
    if (funcIconsArray) {
        const arrObj = funcIconsArray[0]
        if (arrObj) {
            const obj = arrObj[name]
            return obj?.url
        } else {
            return null
        }
    }
}
export default getFuncIcon
