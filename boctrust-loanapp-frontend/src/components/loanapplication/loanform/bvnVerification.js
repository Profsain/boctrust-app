// Step 1: Redirect the customer to the IDP page
const idpAuthorizeUrl = 'https://idsandbox.nibss-plc.com.ng/oxauth/authorize.htm';
const clientId = '8e7cd2fe-35b5-4e25-9a98-0a555f1c23cd';
const redirectUri = 'https://openaccount.chanellemicrofinancebank.com/';

const authorizeUrl = `${idpAuthorizeUrl}?scope=icad&acr_values=otp&response_type=code&redirect_uri=${redirectUri}&client_id=${clientId}`;

console.log(`Redirect the customer to: ${authorizeUrl}`);

// Step 2: After the customer is redirected back to your callback URL with a temporary code,
// extract the code and exchange it for an access token
const idpTokenUrl = 'https://idsandbox.nibss-plc.com.ng/oxauth/restv1/token';
const clientSecret = 'R6EuiPa8sLsrdbNMVoxMadTOFlbuEXfdEOTabq82'; 
const code = 'temporary_code'; // Replace with the actual temporary code received
const grantType = 'authorization_code';

const tokenRequestBody = new URLSearchParams();
tokenRequestBody.append('client_id', clientId);
tokenRequestBody.append('client_secret', clientSecret);
tokenRequestBody.append('code', code);
tokenRequestBody.append('redirect_uri', redirectUri);
tokenRequestBody.append('grant_type', grantType);

fetch(idpTokenUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: tokenRequestBody,
})
  .then((response) => response.json())
  .then((data) => {
    const accessToken = data.access_token;
    console.log(`Access Token: ${accessToken}`);

    // Step 3: Use the access token to call the API endpoints
    // Replace 'your-api-endpoint' with the actual API endpoint you want to call
    const apiEndpoint = 'your-api-endpoint';

    fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })
      .then((apiResponse) => apiResponse.json())
      .then((apiData) => {
        console.log('API Response:', apiData);
      })
      .catch((apiError) => {
        console.error('Error calling API:', apiError.message);
      });
  })
  .catch((error) => {
    console.error('Error exchanging code for access token:', error.message
    );
  });