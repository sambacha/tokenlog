import { Context, APIGatewayEvent } from 'aws-lambda';
import VotingService from 'services/VotingService';

export async function handler(event: APIGatewayEvent, context: Context) {
  if (event.httpMethod !== 'GET') return { statusCode: 405, body: 'Method Not Allowed' };

  const address = event.queryStringParameters?.address ?? '';
  if (!address) return { statusCode: 400, body: 'Bad Request' };

  const data = await VotingService.GetTokenInfo(address);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
}