export async function checkResponse(apiName: string, response: any) {
  if (!response.ok) {
    const message = `Error from ${apiName}: ${response.status} ${await response.text()}`;
    console.error(message);
    throw new Error(message);
  } else if (process.env.DEBUG_LOGGING) {
    console.debug(`Response from ${apiName}: ${await response.text()}`);
  }
}
