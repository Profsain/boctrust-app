const getCreditRegistrySessionCode = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "EmailAddress": "t.akinpelu@boctrustmfb.com",
        "Password": "boctrust@100%",
        "SubscriberID": "738795738430091048"
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://api.creditregistry.com/nigeria/AutoCred/Test/v8/api/Login", requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = getCreditRegistrySessionCode;

