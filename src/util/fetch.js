fetch("url", {
    Method: "POST",
    Headers: {
        Authorization: "cookie",
        Accept: "aplication.json",
        "Content-Type": "application/json"
    },
    Body: body,
    Cache: "default"
})