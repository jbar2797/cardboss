const request = require('supertest');
const { createServer } = require('../src/server');

describe('GET /rankings', () => {
  test('returns 100 cards', async () => {
    const app = createServer();
    const res = await request(app).get('/rankings');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(100);
  });
});
