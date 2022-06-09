# BingeWave React API Library

## About The React API Library
BingeWave has a robust API available here: [https://developers.bingewave.com/](https://developers.bingewave.com/) . The API does require developers how to do AJAX calls the endpoints. This library turns that API into code and handles most of the heavy lifting for the developer.

## Installation
This API is designed for React projects. To install, on your command line run the following in your React root folder:

`npm install bingewave-libraries/react-api --save`

## Using The Library

Once the library is installed, you can use the Library to make calls to the API. An example use case of a user logging in, first import the library at the top of your file:

`import { BWAPI } from  "@BingeWave-Libraries/react-api";`

After the important, the BWAPI objects will contain several classes such as Config, Auth, Events, Products, etc. Typically, we want to make sure the Auth token has been set. If you have retrieved the users Auth token, set it as such:

`BWAPI.Config.setAuthToken("Some Auth Token Value);`

For the login and register functions, the Auth Token will not be required, for other required the auth token will be required. Afterwards, call one of the route methods and passed in the required data. For example, if we are authenticating a user.

```
let  data = {
   email :  "john@example.com",
   password :  "abc123"
};

BWAPI.Auth.login(data).then(response=>{

    if(response.status == "success"){
		//API call was a success, do something
		let data = response.data;
    } else {
		//API call failed, do something else
		let errors = response.errors;
	}
}

}).catch(error  => {
	console.log(error);
});
```
All the API routes called will return a promise. If the endpoint was successfully called, the status will be success and you can parse the data. If the endpoint failed, the status will be a failure and the error messages can be examined.

## Building The Library

If at any point you need to compile the library, you can perform what is known a rollup. If the packages are not installed, be sure to install the development packages.

`npm install --save-dev rollup typescript`

Afterwards in the root directory, run the following commands to perform a rollup, which will compile the code into the dist folder:

`npm run rollup`

And finally if you have access, you can deploy the code to npm.

`npm publish --access public`



