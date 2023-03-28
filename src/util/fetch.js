export const fetchAPIData = async (url, method, body, headers) => {
    const token = getCookie(" ")
    const data = await fetch(url, {
        method,
        body: JSON.stringify(body),
        Headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            ...headers,
        },
    })
    const response = await data.json();
    return response; 
}
