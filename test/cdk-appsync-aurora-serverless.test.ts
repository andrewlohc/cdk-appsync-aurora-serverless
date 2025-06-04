import { describe, it, expect } from 'vitest';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkAppsyncAuroraServerlessStack } from '../lib/cdk-appsync-aurora-serverless-stack';

describe('CdkAppsyncAuroraServerlessStack', () => {
  it('creates an empty stack', () => {
    const app = new cdk.App();
    const stack = new CdkAppsyncAuroraServerlessStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    // Implement tests here.
  });
});
