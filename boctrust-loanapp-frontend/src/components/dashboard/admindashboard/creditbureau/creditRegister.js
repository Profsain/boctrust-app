const fetchCreditReport = async() => {
  const apiUrl = 'https://api.creditregistry.com/nigeria/AutoCred/Test/v8/api/GetReport200';

  // Define the request payload
  const requestBody = {
    SessionCode: 'string',
    CustomerRegistryIDList: ['string'],
    EnquiryReason: 'KYCCheck',
    HistoryLengthInMonths: 0
  };

  // Define request options
  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  };

  try {
    // Send the POST request
    const response = await fetch(apiUrl, requestOptions);

    if (response.ok) {
      // Parse the response JSON if the request is successful
      const data = await response.json();
      console.log('API response:', data);
    } else {
      // Handle error responses here
      console.error('Error:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export default fetchCreditReport;