## About 

The Testing Training Application was created in order to train testers on end to end test frameworks. The application is a simplified version of an Insurance company's Policy system. It requests information on the user, basic vehicle details, and other vehicle drivers they may wish to add to the policy. The final page is a limited review of all information entered on previous screens. 

From a test perspective, the training application highlights how important data management is. The 'About You' page requries a half-dozen fields before proceeding to the Vehicle page (this feature is currently disabled). Therefore, any "end to end" test that is to take place on the Vehicle page requires valid data to pass through the first page. The next two pages (reg. vehicles and drivers) allow the user to add as many vehicles and drivers as they want (eventually breaking the formatting). How should test data be organized so multiple 'vehicles' and 'person drivers' may be added on these pages? Finally, the last page is where the tester should validate the data entered on the previous screens. The message above each 'grouping' should reflect how many vehicles/persons were created in the navigation of the application. 

The Testing Training Application is a stateless application with no supporting backend. It does not save or store any of the information after the browser is closed. 

Access the Testing Training Application at: <br />
https://policytrainer.gagnonagon.com/

## Lifecycle

### `nvm use v15.3.0`
This project does not support the latest version of Node. Downgrade to a working version of node (using nvm) in order to build and start the project. 

### `npm install`

Installs dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `sam deploy --s3-bucket sam-resources-bucket --profile admin`

Deploy/Update the supporting infrastructure defined in the template.yml. Deployment is achieved using [SAM](https://aws.amazon.com/serverless/sam/). Even though there are no "serverless" resources in the template, sam provides regular resource status as CloudFormation does its thing. 

### `aws s3 sync build/ s3://policytrainer --profile admin`

Publish the latest build to S3, making it available to end users. 

## Architecture

<img src="https://user-images.githubusercontent.com/38666646/187100897-783ebf0d-13b6-480f-b750-ea4fb04945b8.png" alt="training-app-architecture" width="500">

The content origin is the `policytrainer` S3 bucket. The bucket is inaccessible except through CloudFront. The CloudFront url serves the content, but it accepts the alternate (and prettier) domain https://policytrainer.gagnonagon.com/. When accessing the site through CloudFront, the CloudFront certificate is used. However, when accessing from gagnonagon.com, the custom certificate is used instead. That certificate is defined [here](https://github.com/bgagnon93/aws-working-dir/tree/main/certificates/gagnonagon). 

Since everything is defined with IaC, the entire CF stack could be terminated and restored at will. 