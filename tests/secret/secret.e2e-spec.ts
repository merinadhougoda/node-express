const request = require('supertest');
const uuid4 = require ('uuid');
import { AppFactory } from '../factory/app';
import { createSecret } from '../factory/secret';

describe('Secret e2e', () => {
  let app: AppFactory;

  beforeAll(async () => {
    app = await AppFactory.new();
  });

  beforeEach(async () => {
    await app.refreshDatabase();
  });

  it('POST /secrets creates secret entry', async () => {
    const { body } = await request(app.instance)
      .post(`/secrets`)
      .send({
        body: 'secret body goes here',
        password: 'secret',
        expiresIn: '03:02:01',
      })
      .expect(200);

    expect(body).toEqual(
      expect.objectContaining({
        'body': 'secret body goes here',
        'expiresIn': expect.objectContaining({ hours: 3, minutes: 2, seconds: 1 }),
      }),
    );
  });

  it('GET /secrets/:id should fetch secret', async () => {
    const id = uuid4();
    await createSecret({
      id,
      body: 'secret body test',
      password: 'secret',
      expiresIn: '2hour',
    });

    const { body } = await request(app.instance)
      .get(`/secrets/${id}`)
      .expect(200);
  });
  afterAll(async() => {
    await app.close();
  });
});
