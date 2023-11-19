const idpRedirect = () => {
    // Define the URL with the required parameters
    const idpAuthorizeURL =
    'https://idsandbox.nibss-plc.com.ng/oxauth/authorize.htm' +
    '?scope=contact_info' +
    '&acr_values=otp' +
    '&response_type=code' +
    '&redirect_uri=https://openaccount.chanellemicrofinancebank.com/' +
    '&client_id=8e7cd2fe-35b5-4e25-9a98-0a555f1c23cd';

    // Redirect the user to the IDP authorization page
    window.location.href = idpAuthorizeURL;
}

export default idpRedirect;