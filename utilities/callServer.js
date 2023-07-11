import serverUrl from '../constants/serverUrl';

class CallServer {
    constructor(path, method) {
        this.path = path;
        this.method = method;
    }
    async makeRequest(headers, body) {
        const res = await fetch(`${serverUrl}${path}`, {
            method: this.method,
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            body: JSON.stringify({
                ...body
            })
        });

        const data = await res.json();

        return data;
    }
};

export default CallServer;