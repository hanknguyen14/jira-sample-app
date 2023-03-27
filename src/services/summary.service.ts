import NLPCloudClient from 'nlpcloud';

enum SUMMARIZATION_MODEL {
  BART_LARGE_CNN = 'bart-large-cnn',
  FAST_GPT_J = 'fast-gpt-j',
  FINETUNED_GPT_NEOX_20B = 'finetuned-gpt-neox-20b',
}

export type TextResponse = {
  summary_text: string;
};

export function initSummarizationClient() {
  return new NLPCloudClient(SUMMARIZATION_MODEL.BART_LARGE_CNN, process.env.AI_API_KEY as string, false, 'en');
}

export async function summarize(client: NLPCloudClient, content: string): Promise<TextResponse> {
  const response = await client.summarization(content, 'small');
  return response.data as TextResponse;
}
