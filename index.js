'use strict'

const core = require('@actions/core');
const github = require('@actions/github');

module.exports.run = async function run() {
  try {
    const context = github.context;
    core.debug("context: ${context}");

    const octokit = new github.GitHub(process.env.INPUT_TOKEN || process.env.GITHUB_TOKEN);
    const release = octokit.releases.get({
      owner: context.owner,
      repo: context.repo,
      release_id: context.release_id
    });
    core.debug(`release: ${release}`);

    const new_content = process.env.INPUT_CONTENT;
    core.debug(`content: ${new_content}`);

    core.debug("done for now")
  } catch (error) {
    core.setFailed(error.message)
  }
}

this.run()
