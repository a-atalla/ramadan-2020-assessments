export const submitVideoRequest = (data) => {
    return fetch('http://localhost:7777/video-request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),

    }).then((res) => { return res.json() })
}