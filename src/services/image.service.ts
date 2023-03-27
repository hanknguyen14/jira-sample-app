import NLPCloudClient from 'nlpcloud';

export type ImageResponse = {
  url: string;
};

export function initImageGenerationClient() {
  return new NLPCloudClient('stable-diffusion', process.env.AI_API_KEY as string, true, 'en');
}

export async function imageGenerate(client: NLPCloudClient, prompt: string): Promise<ImageResponse> {
  const response = await client.imageGeneration(prompt);
  return response.data;
}
