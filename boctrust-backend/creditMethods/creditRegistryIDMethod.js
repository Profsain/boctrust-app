const getCustomerId = async (sessionCode) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "SessionCode": sessionCode,
        "CustomerQuery": "22200102111", // replace with customer bvn
        "GetNoMatchReport": "IfNoMatch",
        "MinRelevance": 0,
        "MaxRecords": 0,
        "EnquiryReason": "KYCCheck"
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://api.creditregistry.com/nigeria/AutoCred/Test/v8/api/FindDetail", requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = getCustomerId;