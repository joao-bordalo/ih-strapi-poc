export const GFMExample = `
# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote
<br />
A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
`;

export const stoplightExample1 = `
---
stoplight-id: 8bwe7v7ympl3x
---

# Welcome to SaltConnect. 

SaltConnect is Saltpay's developer portal. It aims to deliver well-written API documentation to developers so that they can seamlessly integrate with Saltpay's products. 

|  |
|---|
| [**Salt Account**](../docs/002_Salt_Account.md)<br />Unlock access to the SaltPay ecosystem by creating a Salt Account. |
| [**Using SaltConnect**](../docs/003_SaltConnect_Workspace.md)<br />Learn how to use our developer portal to create applications, and manage workspaces and teams. |
| [**Authentication**](../docs/006_Introduction_to_OAuth.md)<br /> Understand the grant types we use and which one fits your use case. Learn how to proceed with authentication for SaltPay APIs. 

<br />

# Explore SaltPay products.

With SaltConnect, partners should be able to find what product suits them best, the corresponding documentation, and make test API calls within minutes.

| <div /> | <div /> | <div /> |
|---|---|---|
 |  ![Catalogue_POSLink.png](../assets/images/Catalogue_POSLink.png)[**POSLink**](TBA)<br />Link your ePOS solution with SaltPay POS terminals via API.  |  ![Catalogue_Tax.png](../assets/images/Catalogue_Tax.png)[**Tax Automation**](TBA)<br />Automatize the management of taxes and integrate with local fiscal authorities to answer reporting obligations.  | ![Tokenisation.png](<../assets/images/Catalogue_Tokenisation.png>) [**Tokenisation**](TBA)<br />Track cardholders' behavior and to enable faster, easier payments automatically and on-demand across multiple channels.  |

---

| Next Steps |
|---|
| Not sure where to go next? First things first. You need a [Salt Account](docs/002_Salt_ID.md) to access the SaltPay ecosystem. So let's start there.|
`;

export const stoplightExample2 = `
---
stoplight-id: fldgc18x4091r
---

# Managing SaltConnect Workspace

After loging into the SaltConnect portal using your Salt Account, you land on your SaltConnect workspace. Through the SaltConnect workspace, you can view and edit APIs, manage requests to your APIs and view your requests history, and register new APIs on SaltConnect.

> **Reach out to the partnerships team for the initial setup.**<br />Our partnerships team will help you create and configure your first SaltConnect workspace. 

## SaltConnect Workspace Settings
After accessing Workspace Setting on the side menu of the portal, you will be able to:
- Change the name of your workspace.
- Add and remover members from your workspace.



![SaltConnect_Workspace.png](../assets/images/SaltConnect_Workspace.png)
`;

export const stoplightExample3 = `
---
stoplight-id: gvkq7o9531ycw
---

# Create and Configure Applications in SaltConnect

The first step to making authenticated requests to SaltPay APIs is to create and configure your application in SaltConnect. 

There are two main application types you can create using SaltConnect:

|  |  |
|---|---|
| **Web Applications (User Authenticated)** | In these applications, an authorization code is exchanged for a token. The application must be server-side because during this exchange, you must also pass along your application's client secret, which must always be kept secure, and you will have to store it in your client. You can also use this flow for SPAs and mobile devices [read more](docs/007_Use_Cases.md).|
| **Machine to Machine Applications** | With machine-to-machine applications the system authenticates and authorizes the app rather than a user. |

## Create a User Authenticated Application

1. Log in to the  [SaltConnect developer portal](https://identity.cloud.saltpay.co/authn/authentication/email) .
2. On the Applications page, create a new application.
3. Enter your application name and choose "Web Application (user authenticated)". Click "Next".
4. Enter the redirect URL for your application.
5. You can enter a homepage URL and Logo URL for your application at this point, or configure later in application settings.
6. Choose "Create".
7. You can select your application from the list to view credentials and settings.

<br />

![SaltConnect_Config01.png](../assets/images/SaltConnect_Config01.png)

<br />

## Configure Settings for User Authenticated Applications
1. Select an application to view its details and click "Application settings".
2. You can select "Edit settings" to edit any of the fields below.

<br />

![SaltConnect_Config03.gif](../assets/images/SaltConnect_Config03.gif)

<br />

|  |  |
|---|---|
| **Application Name** | The name of your application. This should be easily recognisable by a user. |
| **Application Redirect URL** | URL that points to your application. It receives the authorisation response and manages the resource owner’s access token, refresh token, the code_verifier and its associated authorisation code. For more info [create your redirect URL](docs/005_Create_Your_Redirect_URL.md). |
| **Homepage URL** | The homepage URL for your application. |
| **Logo URL** | The URL for your application logo. this should be 250px by 250px and will help the user identify your application on the authorize screen. |
| **Logout URL** | The URL that a user is redirected to if they log out of your application. |


## Create a Machine-to-Machine Application
1. Log in to the  [SaltConnect Developer Portal](https://identity.cloud.saltpay.co/authn/authentication/email) .
2. On the Applications page, create a new application.
3. Enter your application name and choose "Machine to machine application". 
4. Click "Create".
5. You can select your application from the list to view credentials and settings.

![SaltConnect_Conifg04.png](../assets/images/SaltConnect_Conifg04.png)


## Configure Settings for Machine-to-Machine Applications
1. Select a machine to machine application to view its details and click "Application settings".
2. You can select "Edit settings" to edit any of the fields below.


---

| Next Steps |
|---|
| For next steps see [Introduction to OAuth](docs/006_Introduction_to_OAuth.md). |
`;

export const stoplightExample4 = `---
stoplight-id: 4ndruodkvcli1
---

# Introduction to OAuth

This guide covers the basics of SaltPay's OAuth implementation and provides step-by-step instructions for various use cases.

1) [Introduction to OAuth](006_Introduction_to_OAuth.md)
    * Concepts
    * Grant Types
    
2) [Use Cases](007_Use_Cases.md)
    * [Authentication for Web Applications](008_Authentication_for_Web_Applications.md)
    * [Authentication for Single Page Applications](009_Authentication_for_Single_Page_Applications.md)
    * [Authentication for Mobile Applications](010_Authentication_for_Mobile_Applications.md)
    * [Authentication for Machine to Machine Applications](011_Authentication_for_Machine_to_Machine_Applications.md)

Here are some important OAuth concepts that we will refer to throughout our documentation.

The server that presents the interface where the user approves or denies the request.

The client is the third party application attempting to get access to the user’s account. It needs to get permission from the user before it can do so.

After registering your application, you should receive a client ID and a client secret. The client ID is considered public information, and is used to build login URLs, or included in Javascript source code on a page.

After registering your app, you should receive a client ID and a client secret. The client secret is a secret used by the OAuth client to authenticate to the authorization server and it **must be kept confidential**.

The resource owner is the person who is giving access to some portion of their account. It represents the user.


The resource server is the API server used to access the user’s information.


<br />


A token that grants access to a client's resources and has some privileges attached to it. Access tokens expire after a certain amount of time.


A code that is returned when calling the Authorize endpoint. This code is used to redeem an access token and a refresh token.

A token that is used to generate more access tokens.



### Creating an Application
Before you can begin the OAuth process, you must first register a new application in the SaltConnect developer portal. When registering a new app, you register basic information such as application name, redirect URL, website and logo.

> To learn more about the process of creating an application access [create and configure application in SaltConnect](004_SaltConnect_Apps.md).

#### Redirect URLs
The server will only redirect users to a registered URL, a security measure that helps us prevent some attacks. Any HTTP redirect URLs should be served via HTTPS. This prevents tokens from being intercepted during the authorization process. Native apps may register a redirect URI with a custom URL scheme for the application, which may look like \`myapp://redirect\`.

#### Client ID and Secret
After registering your app, you should receive a client ID and a client secret. The client ID is considered public information, and is used to build login URLs, or included in Javascript source code on a page. 
The client secret is a secret used by the OAuth client to authenticate to the authorization server and it **must be kept confidential**. If a deployed app cannot keep the secret confidential, such as single-page Javascript apps or native apps, then the secret is not used.

### Authorization
The first step of OAuth is to get authorization from the user. For browser-based or mobile apps, this is usually accomplished by displaying an interface provided by the service to the user.

OAuth provides several “grant types” for different use cases. The grant types defined are:

* **Code Flow:** For apps running on a web server, browser based and mobile apps.
* **Client Credentials:** For application access without a user present.

The OAuth protocol supposes additional grants that are not currently supported by SaltPay, such as implicit, device and password. If you are unsure which grant to use for your application check out [Use Cases](007_Use_Cases.md).

The endgame for all grant types is the same: obtaining an access token.
Once you have an access token, you can make requests to the SaltPay API. 
Make sure you always send requests over HTTPS and never ignore invalid certificates. HTTPS is the only thing protecting requests from being intercepted or modified.

### Code Flow
This flow is used to get permission from the resource owner to manage specific types of resources in that account. This is the process where client applications obtain an authorisation code that is then redeemed to get an access token and refresh token. These tokens allow you to manage resources for a user and are used when calling SaltPay APIs.

You request specific permissions from users to manage their resources and get access tokens to call SaltPay APIs on their behalf. Usually, you make OAuth part of your setup process when onboarding a user to your application.

> **What about Salt ID?**<br />Salt ID is SaltPay's OAuth and OIDC provider responsible for providing an authorisation framework to authenticate and identify all users and machines that interact with SaltPay services.

### Client Credentials
The Client Credentials flow is a server to server flow. There is no user authentication involved in the process. In fact there is no user at all, the resulting access tokens will not contain a user, but will instead contain the client ID as subject, unless configured otherwise.

This flow is useful for systems that need to perform API operations when no user is present. Since there is no user authorization, the flow only interacts with the token endpoint.



---


| Next Steps |
|---|
| Now that we have defined the grant types used within the SaltPay ecosystem, consider going through [Use Cases](007_Use_Cases.md) to find which process best fits your application. |
`;

export const stoplightExample5 = `
---
stoplight-id: a5etvq7go8pu6
---

# Authentication for Web Applications

Web applications are written in a server-side language and run on a server where the source code of the application is not available to the public. This means the application is able to use its client secret when communicating with the authorization server.

> **Before proceeding.**<br />Make sure you have [created and configured your application](004_SaltConnect_Apps.md) in SaltConnect and created your redirect URL.

#### 1. Redirecting the User to the SaltPay Authentication Page
Create a login link sending the user to the SaltPay authentication page. Here is an example.

\`\`\`
https://identity.cloud.saltpay.co/oauth/v2/oauth-authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=SCOPES&state=1234XYZ&code_challenge=CODE_CHALLENGE&code_challenge_method=S256&ui_locales=UI_LOCALES&nonce=NONCE
\`\`\`

|  |  |
|---|---|
| \`response_type\` | \`code\` indicates that your server expects to receive an authorization code. |
| \`client_id\` | The client ID you received when you created your application. |
| \`redirect_uri\` | The endpoint running on your application that receives the authorization response that contains the authorization code. |
| \`scope\` | One or more scope values indicating which parts of the user’s account you wish to access. |
| \`state\` | A random string generated by your application, which you’ll verify later. |
| \`ui_locales\` |  e.g. \`pt_PT\`, but we also provide \`en\` and \`sv\`.|
| \`nonce\` | A value generated by the client that should be checked in the token response to mitigate replay attacks. |
| \`login_hint\`[optional] | Used to populate the login identifier, in our case, the email |



> **Consider using an external library.**<br />As you can see, it’s essential to provide the parameters related to your client and the ones related to the prevention of some attacks. These usually need to be checked in further responses, which can be bothersome. Consequently, we advise using an external library instead of doing the integration manually.

The user sees the authorization prompt.

If the user clicks “Allow,” the service redirects the user back to your site with a corresponding authorization code.

\`\`\`
https://my-app.com/redirect?code=AUTH_CODE_HERE&state=1234zyx
\`\`\` 

|  |  |
|---|---|
| \`code\` | The server returns the authorization code in the query string. |
| \`state\` | The server returns the same state value that you passed. |


You should first compare this state value to ensure it matches the one you started with. You can typically store the state value in a cookie or session, and compare it when the user comes back. This helps ensure your redirection endpoint cannot be tricked into attempting to exchange arbitrary authorization codes.

#### 2. Getting Access, Refresh and ID Tokens

The endpoint on your side that matches the \`redirect_uri\` will receive the authorisation code from the parameters and call the authorization server via a back-channel with the code and your client secret to get an access, refresh and ID Token back with the information you requested. 

>**Consider using an external library. Déjà vu?**<br />This endpoint also checks the authenticity of both the authorization code parameters and the authorization server response. Some OIDC libraries do all of this for you, and again, this is one of the reasons we strongly recommend using them.
 
The endpoint you need to call to exchange the token is the \`token_endpoint\` attribute of the well-known configuration. At the time of writing, the URL for this endpoint in dev is \`https://identity.cloud.saltpay.dev/oauth/v2/oauth-token\`.

When calling this endpoint, you need to provide the following query parameters:

|  |  |
|---|---|
| \`grant_type\` | \`authorization_code\` |
| \`redirect_uri\` | The same URI provided before. |
| \`code\` | The authorization code received in the callback. |
| \`code_verifier\` | The code_verifier generated in step 1. |


Plus, you should provide in the \`authorization\` header \`CLIENT_ID:CLIENT_SECRET\` encoded as base64, and sent as a basic token. It should look something like this:

\`\`\`json
Authorization: Basic <VGhlIGJhc2tldCBpcyBmdWxsIG9mIGdyYXBlcy4=>
\`\`\`

#### 3. Parsing the ID token
The ID Token is just a JWT so that you can parse it and have the requested user attributes. It is essential to check the signature and the nonce of the JWT.

Here's an example of an ID Token payload:

\`\`\`
{
  exp 1654725332
  nbf 1654721732
  jti eb05d36c-eb41-4b44-9a59-6681f6ba0418
  iss https://identity.cloud.saltpay.dev/oauth/v2/oauth-anonymous
  aud auth-code-client
  client_id auth-code-client
  sub 67f71fd1b9a504eee165eb3497dacbe4cbf259bf70ca89b713b389b4267b4823
  auth_time 1654721724
  iat 1654721732
  purpose id
  at_hash HGTDGmlKwSC7kKfySjq_mA
  acr urn:se:curity:authentication:html-form:email-password
  delegation_id 0075442c-2a40-40db-8218-f3e08d83d329
  s_hash MqTQ2ilHJuG5YN2QKx516w
  email_verified false
  azp auth-code-client
  amr urn:se:curity:authentication:html-form:email-password
  nonce 1652884744203-G5m
  salt_id 7dfedd26-dc05-11ec-968d-d3e9456649ae
  email john.doe@saltpay.co
  sid 86KWYqlZNYuB9J7G
}

\`\`\`

>**Mind the Salt ID.**<br />Note that you'll always receive the \`salt_id\` attribute, which is the source of truth for identifying the user across our ecosystem.

#### 4. Making Authenticated Requests

Given a valid access token, you can now use a Bearer Token to authenticate your requests. 

All this means is prefixing your access token with the word \`Bearer\` and sending it in the HTTP \`Authorization\` header. This should look something like this:

\`\`\`json
Authorization: Bearer <ACCESS_TOKEN>
\`\`\`

#### 5. Refreshing the Access Token (Extending the Session)

Once an Access Token expires, if the user still possesses a valid Refresh Token you can ask for a new Access Token by calling an API to refresh it. This way, the current “authenticated session” will be valid for longer.

Call the token_endpoint attribute from our well known configuration (the JSON from \`/oauth/v2/oauth-anonymous/.well-known/openid-configuration\`) passing the following values:

- **refresh_token:** the value of the refresh token
- **grant_type:** refresh_token
- **client_id:** the OIDC client id of your application
- **client_secret:** the OIDC client secret

>**Mind token expiration times.**<br />Although longer than the Access Tokens, the Refresh Tokens also have expiration times. If the Refresh Token is expired or revoked, you will not be able to refresh the Access Token and will need to redirect the user to the Authentication Flow again.
`;
