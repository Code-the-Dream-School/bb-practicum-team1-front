function setCookie(cName, value, days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + date.toUTCString()
    document.cookie = `${cName}= ${value}; ${expires}; "path=/"`
}

function getCookie(cName) {
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split('; ')
    let result = null

    cArray.forEach((element) => {
        if (element.indexOf(cName) === 0) {
            result = element.substring(cName.length + 1)
        }
    })

    let jsonObj = null
    try {
        jsonObj = JSON.parse(result)
    } catch (error) {
        console.error('Invalid JSON string:', error)
    }
    return jsonObj;
}

function deleteCookie(cName) {
    setCookie(cName, null, null)
}
