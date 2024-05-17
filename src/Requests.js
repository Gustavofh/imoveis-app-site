import https from "stream-http";

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const requestOptions = {
    method: "GET",
    redirect: "follow",
    agent: new https.Agent({
        rejectUnauthorized: false
    })
};


export const doRequest = async() => {
    try {
        const result = await fetch(`http://localhost:8080/api/dados`, {
            requestOptions
        });
        return await result.json();
    } catch (err) {
        return console.error(err)
    }
};
