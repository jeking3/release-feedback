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

```yaml
name: example
on:
  release:
    types:
      - published

jobs:
  example:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
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
          content: "- Build Complete!"
          release: ${{ github.event.release.id }}
          token: ${{ secrets.GITHUB_TOKEN }}
```

## License

[Apache License Version 2.0](LICENSE)