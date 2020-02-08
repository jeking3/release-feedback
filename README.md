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

## TL;DR;

```yaml
     - uses: jeking3/release-feedback@v1
       with:
         content: "- Beginning Build"
         release: ${{ github.event.release.id }}
         token: ${{ secrets.GITHUB_TOKEN }}
```

## Example

The [example](.github/workflows/example.yaml) shows you how to:

1. Append to a release description during your workflow.
2. Use an environment variable in an action `with` statement through promotion.
3. Write longer, multi-line descriptions using standard YAML.

We use the example on our own [releases](https://www.github.com/jeking3/release-feedback/releases)
so you can see what the results of the example look like.

## License

[Apache License Version 2.0](LICENSE)