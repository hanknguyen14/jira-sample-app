import api, { route } from '@forge/api';
import { checkResponse } from './utils.service';

export async function getIssueDescription(issueKey: string) {
  const issueResponse = await api.asApp().requestJira(route`/rest/api/2/issue/${issueKey}?fields=summary,description`);
  await checkResponse('Jira API', issueResponse);
  const { description } = (await issueResponse.json()).fields;
  return { description };
}
