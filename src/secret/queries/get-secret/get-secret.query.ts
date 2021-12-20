import { Secret } from 'secret/queries/get-secret/secret';
import { db } from 'database';

export class GetSecretQuery {
  async byId(id: string): Promise<Secret> {
    const secrets = await db('secrets').where({ id }).first();
    return new Secret({
      id: secrets.id,
      body: secrets.body,
      expiresIn: secrets.expiresIn,
    });
  }
} 
