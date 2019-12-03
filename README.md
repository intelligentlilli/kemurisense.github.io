# www.kemuri.co.uk

## Building

Built using Jekyll.  For a single local build, use

    bundle exec jekyll build

and for localhost serving use

    bundle exec jekyll serve


## Notes for upgrading

Built using the github pages gem.  Check the version number if there are issues (may need to downgrade)

Sometimes there can be problems with the bundled gems.  A good thing to run is

    bundle clean --force





##  Boostrap

We have a custom build of bootstrap with loads of the stuff we don't use stripped out.  The config file for this can be found in the js directory, js/boostrap.config.json.  If we need to re-build it, the bootstrap site accepts this file to make a new one.