<p align="center">
  <a href="https://github.com/jeking3/release-feedback/actions">
    <img alt="javscript-action status" src="https://github.com/jeking3/release-feedback/workflows/test/badge.svg">
  </a>
</p>

# release-feedback

GitHub Repository Releases are great, but lacking any feedback mechanism to let
you know a workflow is running, how it did, or where it may have placed third-party
assets.  release-feedback lets you push updates to your release description during
the release workflow.

## Example

This example also shows you how to promote workflow environment variable into
step output that can be used inside `with` statements on actions.  One cannot
put environment variables into `with` statements directly.

```yaml
name: example
on:
  release:
    types:
      - published

env:
  SOME_DOCKER_IMAGE: docker/foobar:v.awesome

jobs:
  example:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Promote env to output
        id: promote
        run: echo "::set-output name=image::${SOME_DOCKER_IMAGE}"
      - uses: jeking3/release-feedback@v1
        with:
          content: "### Build Status"
          release: ${{ github.event.release.id }}
          token: ${{ secrets.GITHUB_TOKEN }}
      - uses: jeking3/release-feedback@v1
        with:
          content: "- Beginning Build"
          release: ${{ github.event.release.id }}
          token: ${{ secrets.GITHUB_TOKEN }}
      - uses: jeking3/release-feedback@v1
        with:
          content: "- Build Complete!  Fictitiously pushed to ${{ steps.id.image }}"
          release: ${{ github.event.release.id }}
          token: ${{ secrets.GITHUB_TOKEN }}
```

## License

[Apache License Version 2.0](LICENSE)