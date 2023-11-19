const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const dotenv = require("dotenv");

// configure dotenv
dotenv.config();

// Generate a unique requestId
const generateRequestId = () => {
  return Date.now().toString();
}

// Generate the authorization header
const generateAuthorization = () => {
  const apiKey = process.env.REMITA_API_KEY;
  const requestId = generateRequestId();
  const apiToken = process.env.REMITA_TOKEN; // API_TOKEN is the secret key

  const dataToHash = apiKey + requestId + apiToken;
  const apiHash = crypto.createHash('sha512').update(dataToHash).digest('hex');
  return apiHash;
}


// get salary history endpoint (Done)
router.post('/get-salary-history', async (req, res) => {
  try {
      const merchantId = "27768931";
      const apiKey = process.env.REMITA_API_KEY;
      const apiToken = process.env.
REMITA_TOKEN;
    
      const d = new Date();
      const requestId = d.getTime();
      const randomnumber = Math.floor(Math.random() * 1101233);
      const authorisationCode = randomnumber;
      const dataToHash = apiKey + requestId + apiToken;
    const apiHash = crypto.createHash('sha512').update(dataToHash).digest('hex');
    
    const authorization = "remitaConsumerKey=" + apiKey + ", remitaConsumerToken=" + apiHash;
    
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Api_Key", "Q1dHREVNTzEyMzR8Q1dHREVNTw==");
      myHeaders.append("Merchant_id", "27768931");
      myHeaders.append("Request_id", requestId);
      myHeaders.append("Authorization", authorization);

      const raw = JSON.stringify({
        "authorisationCode": authorisationCode,
        "phoneNumber": "07038684773",
        "authorisationChannel": "USSD"
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const response = await fetch("https://remitademo.net/remita/exapp/api/v1/send/api/loansvc/data/api/v2/payday/salary/history/ph", requestOptions)
      
    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    res.status(200).json({
      message: "Salary history api called successfully",
      data: result
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// loan disbursement notification endpoint
router.post('/loan-disbursement-notification', async (req, res) => {
  // console.log("Request body", req.body)
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("API_KEY", "Q1dHREVNTzEyMzR8Q1dHREVNTw==");
    myHeaders.append("MERCHANT_ID", "27768931");
    myHeaders.append("REQUEST_ID", "1699024782828");
    myHeaders.append("AUTHORIZATION", "remitaConsumerKey=Q1dHREVNTzEyMzR8Q1dHREVNTw==, remitaConsumerToken=db950f1ff4849186d24f32dc295ab523c21b9bf7e60d736e796fa2a16ca84a980fb156e559d3f9c8fc32081cb3523165f2cdf14a404761895d4a53f944b5fdd5");

    const raw = JSON.stringify({
      "customerId": "456783897",
      "authorisationCode": "764386",
      "authorisationChannel": "USSD",
      "phoneNumber": "07038684773",
      "accountNumber": "1234657893",
      "currency": "NGN",
      "loanAmount": 2000,
      "collectionAmount": 2100,
      "dateOfDisbursement": "14-05-2021 10:16:18+0000",
      "dateOfCollection": "11-07-2021 10:16:18+0000",
      "totalCollectionAmount": 2100,
      "numberOfRepayments": 1,
      "bankCode": "214"
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch("https://remitademo.net/remita/exapp/api/v1/send/api/loansvc/data/api/v2/payday/post/loan", requestOptions)
    
    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    // console.log("Loan Disbursement", result);
    res.status(200).json({
      message: "Loan disbursement notification api called successfully",
      data: result
    });
  } catch (error) {
    // Handle any errors that occur during the request
    res.status(500).json({ error: 'An error occurred' });
  }
});

// collection notification endpoint (webhooks in process )
router.post('/collection-notification', (req, res) => {
  try {
    // Handle the incoming collection notification data
    const collectionData = req.body;

    // Process the collection notification data (you can customize this part)
    // In this example, we're acknowledging the notification by updating the 'notificationSent' field.
    collectionData.notificationSent = true;

    // Log the received collection data (you can customize this part)
    console.log('Received collection notification:');
    console.log(collectionData);

    // Respond with an acknowledgment (you can customize this part)
    const acknowledgment = {
      message: 'Collection notification received and acknowledged',
      collectionData: collectionData,
    };

    res.status(200).json(acknowledgment);
  } catch (error) {
    console.error('Error handling collection notification:', error);
    res.status(500).json({ error: 'An error occurred while processing the notification' });
  }
});

// mandate history endpoint (Done)
router.post('/mandate-history', async (req, res) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("API_KEY", "Q1dHREVNTzEyMzR8Q1dHREVNTw==");
    myHeaders.append("MERCHANT_ID", "27768931");
    myHeaders.append("REQUEST_ID", "1699026823811");
    myHeaders.append("AUTHORIZATION", "remitaConsumerKey=Q1dHREVNTzEyMzR8Q1dHREVNTw==, remitaConsumerToken=40c98022882ebee36aca1d440576c8ace6214d2acab3c3b62821dd8efce1766635ac01af60af7d46e444dd9bb7a4f38ea4532690598665e10086745550b5499e");

    const raw = JSON.stringify({
      "authorisationCode": "30519",
      "customerId": "456783897",
      "mandateRef": "150008232525"
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch("https://remitademo.net/remita/exapp/api/v1/send/api/loansvc/data/api/v2/payday/loan/payment/history", requestOptions)
    
    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
  
    res.status(200).json({
      message: "Mandate history api called successfully",
      data: result
    });
  } catch (error) {
    // Handle any errors that occur during the request
    res.status(500).json({ error: 'An error occurred' });
  }
});

// stop loan collection endpoint (Done)
router.post('/stop-loan-collection', async (req, res) => {
  // console.log("Request body", req.body)
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("API_KEY", "Q1dHREVNTzEyMzR8Q1dHREVNTw==");
    myHeaders.append("MERCHANT_ID", "27768931");
    myHeaders.append("REQUEST_ID", "1699025591491");
    myHeaders.append("AUTHORIZATION", "remitaConsumerKey=Q1dHREVNTzEyMzR8Q1dHREVNTw==, remitaConsumerToken=23577395468b1e7f660d7a0dbd9164127fc35ae0516ee9a7e0deacf31c083a2ab25665434fb5e0e4b77fcbf53c68933946bc8037891f221a46aea639205b7107");

    const raw = JSON.stringify({
      "authorisationCode": "764386",
      "customerId": "456783897",
      "mandateReference": "280008217475"
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch("https://remitademo.net/remita/exapp/api/v1/send/api/loansvc/data/api/v2/payday/stop/loan", requestOptions)
    
    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
 
    res.status(200).json({
      message: "Stop loan collection api called successfully",
      data: result
    });
  } catch (error) {
    // Handle any errors that occur during the request
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router; // export the router