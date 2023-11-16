// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3alibiavev6fpoohfflj9hh1t0",     // CognitoClientID
  "api_base_url": "https://iaeh6jhcwf.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "aygotodoappdemo-aygo-webapp-stack.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1euv3t5nruggb.amplifyapp.com"                                      // AmplifyURL
};

export default config;
