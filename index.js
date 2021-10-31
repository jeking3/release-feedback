const core = require('@actions/core');
const github = require('@actions/github');

module.exports.run = async function run() {
  try {
    var repository = process.env.GITHUB_REPOSITORY;
    var parts = repository.split("/");
    var owner = parts[0];
    var repo = parts[1];

    const octokit = github.getOctokit(core.getInput('token') || process.env.GITHUB_TOKEN);
    
    const release = await octokit.repos.getRelease({
      owner: owner,
      repo: repo,
      release_id: core.getInput('release')
    });

    const new_content = core.getInput('content');
    const new_body = `${release.data.body}\r\n${new_content}`

    octokit.repos.updateRelease({
      owner: owner,
      repo: repo,
      release_id: core.getInput('release'),
      body: new_body
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

this.run()
