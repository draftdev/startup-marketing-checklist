# Side Project Marketing

[![](https://i.imgur.com/uZJHDXL.jpg)](https://www.sideprojectchecklist.com/)


## Why?

I've been building little software side projects for years, but I've always been terrible at marketing them. I come up with some ideas, forget those ideas, do some random stuff, then lose interest. The goal of this repository is to fix that.


## Quickstart

1. Copy the [marketing-checklist.md](marketing-checklist.md) file or [fork this repository](https://github.com/karllhughes/side-project-marketing).

2. Add, remove, or modify the tactics as you see fit based on your project and customers.

3. Get to work! The checklist format allows you to keep up with which things you've tried and which you haven't.

4. Profit? I mean, that's the goal, right?

The checklist and companion blog posts are also available online at [sideprojectchecklist.com](https://www.sideprojectchecklist.com/).


## Contributing

See the [Contributing page](https://www.sideprojectchecklist.com/contributing/).


## Credits

See the [resources page](https://www.sideprojectchecklist.com/resources/).


## Local Development

This site is powered by [Jekyll](https://jekyllrb.com/), so if you'd like to run the site locally, here are some of the commands you can use:

### Docker
- Build the site: `docker run --rm -it -v $PWD:/srv/jekyll jekyll/jekyll:latest jekyll build`
- Serve locally: `docker run --rm -it -v $PWD:/srv/jekyll -p 4000:4000 jekyll/jekyll:latest jekyll serve`

### Without Docker
- Install bundler: `gem install bundler`
- Install depdencies: `bundle install`
- Build the site: `jekyll build`
- Serve locally: `jekyll serve`


## License

This project is offered via the MIT License. See the [license page](https://www.sideprojectchecklist.com/license/) for details.
