
#!/usr/bin/env node
import "source-map-support/register"
import cdk = require("@aws-cdk/core")
import { TokenLoggerLambdaAPI } from "../lib/lambda-api-stack"

export const lambdaApiStackName = "TokenLoggerLambdaAPI"
export const lambdaTokenLogger = "TokenLoggerGitHubFunction"

const app = new cdk.App()
new TokenLoggerLambdaAPI(app, lambdaApiStackName, {
    functionName: lambdaTokenLogger,
})