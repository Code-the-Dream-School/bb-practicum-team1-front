export function setCookie(cName: string, value: string, days: number): void {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + date.toUTCString()
    document.cookie = `${cName}= ${value}; ${expires}; "path=/"`
}

export function getCookie(cName: string): object | null{
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
        if( result !== null){
        jsonObj = JSON.parse(result)
        }
    } catch (error) {
        console.error('Invalid JSON string:', error)
    }
    return jsonObj;
}

export function deleteCookie(cName: string): void {
    setCookie(cName,'', 1) 
}
