export function setCookie(
    cName: string,
    value: string | null,
    days: number | null
): void {
    const date = new Date()
    if (days !== null) {
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = 'expires=' + date.toUTCString()
        document.cookie = `${cName}= ${value}; ${expires}; "path=/"`
    } else {
        document.cookie = `${cName}= ${value};"path=/"`
    }
}

export function getCookie(cName: string): object | null {
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
        if (result !== null) {
            jsonObj = JSON.parse(result)
        }
    } catch (error) {
        console.error('Invalid JSON string:', error)
    }
    return jsonObj
}

export function deleteCookie(cName: string): void {
    const cookies = document.cookie.split('; ')
    for (let c = 0; c < cookies.length; c++) {
        const d = window.location.hostname.split('.')
        while (d.length > 0) {
            const cookieBase =
                encodeURIComponent(cookies[c].split(';')[0].split('=')[0]) +
                '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' +
                d.join('.') +
                ' ;path='

            const p = document.location.pathname.split('/')
            document.cookie = cookieBase + '/'
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/')
                p.pop()
            }
            d.shift()
        }
    }
}

export const cookieName = 'shelf-share-session'
