# Jira Sample App

This is an example [Forge](https://developer.atlassian.com/platform/forge/) app that generate a wireframe from Jira issue fields contents using the [NLP Cloud](https://nlpcloud.com/home/playground/).

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

Once you have logged into the CLI (`forge login`), follow the steps below to install the app onto your site:

1. Clone this repository
2. Run `forge register` to register a new copy of this app to your developer account
3. Run `npm install` to install your dependencies
4. Run `forge deploy` to deploy the app into the default environment
5. Run `forge install` and follow the prompts to install the app

## Usage

Press the corresponding button on the issue view to generate a wireframe from the issue description.

## Installation

1. [Sign up for the NLP Cloud API](https://nlpcloud.com/home/register)
2. Find your **API Key** on the [API](https://nlpcloud.com/home/token) page.
3. Set an encrypted [environment variable](https://developer.atlassian.com/platform/forge/environments/) keyed by `AI_API_KEY` with a value of your **NLP Cloud API**. `forge variables set --encrypt AI_API_KEY xxxxxxxxxx`.
4. Run `forge deploy` to deploy the changes to your environment variables.
5. You're done! Test out the app by browsing to a Jira issue and try it out.

## Debugging

You can enable verbose logging by setting the `DEBUG_LOGGING` [environment variable](https://developer.atlassian.com/platform/forge/environments/) to `1`. Logs can then be viewed with the `forge logs` command.

Alternatively, you can use the [`forge tunnel`](https://developer.atlassian.com/platform/forge/change-the-frontend-with-forge-ui/#set-up-tunneling) command to run your Forge app locally. Note that you must pass the environment variable values to the tunnel with the prefix `FORGE_USER_VAR_`, e.g.:

```
FORGE_USER_VAR_AI_API_KEY=your_ai_api_key_here FORGE_USER_VAR_DEBUG_LOGGING=1 forge tunnel
```

### Made by Hung with ❤️
