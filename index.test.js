const process = require('process');
const index = require('./index');

beforeAll(() => {
    process.env = Object.assign(process.env, {
        GITHUB_REPOSITORY: 'owner/repo',
        GITHUB_TOKEN: 'github-token',
        INPUT_CONTENT: 'test-content-to-add',
        INPUT_RELEASE_ID: 'test-release-id'
    });
  });

test('normal', async() => {
    await index.run();
})