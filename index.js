'use strict'

const core = require('@actions/core');
const github = require('@actions/github');

module.exports.run = async function run() {
  try {
    const context = github.context;
    core.debug("context: ${context}");

    const octokit = new github.GitHub(process.env.INPUT_TOKEN || process.env.GITHUB_TOKEN);
    const release = octokit.repos.getRelease({
      owner: context.owner,
      repo: context.repo,
      release_id: context.release_id
    });
    core.debug(`release: ${release}`);

    const new_content = process.env.INPUT_CONTENT;
    core.debug(`content: ${new_content}`);

    const new_body = `${release.body}\r\n${new_content}`
    octokit.repos.updateRelease({
      owner: context.owner,
      repo: context.repo,
      release_id: context.release_id,
      body: new_body
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

this.run()
