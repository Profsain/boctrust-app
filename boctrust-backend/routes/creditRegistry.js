const express = require("express");
const router = express.Router();
// import credit registry methods
const getCreditRegistrySessionCode = require("../creditMethods/creditRegistryMethods");
const getCustomerId = require("../creditMethods/creditRegistryIDMethod");



// create endpoint to call credit registry api
router.post('/getreport', async (req, res) => {
   // get credit registry session code
    const sessionCode = await getCreditRegistrySessionCode();
    const sessionCodeValue = sessionCode.SessionCode;

    // get customer id
    let customerId;
    if (sessionCode) {
        customerId = await getCustomerId(sessionCodeValue);
    }
    const searchId = customerId.SearchResult[0].RegistryID;

    // fetch customer report
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "SessionCode": sessionCodeValue, // session code
    "CustomerRegistryIDList": [
        searchId // replace with customer id
    ],
    "GetNoMatchReport": "IfNoMatch",
    "EnquiryReason": "KYCCheck",
    "HistoryLengthInMonths": 84
    });

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    try {
        const response = await fetch("https://api.creditregistry.com/nigeria/AutoCred/Test/v8/api/GetReport203", requestOptions);

        if (!response) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        res.status(200).json({
            message: "Credit registry api called successfully",
            data: result
        });
    } catch (error) {
        throw new Error(error);
    }
});

// export router
module.exports = router;

