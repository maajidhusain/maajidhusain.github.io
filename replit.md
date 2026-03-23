# Maajid's Blog - Jekyll Portfolio Site

## Overview
A personal portfolio and blog website for Maajid Husain, a student at the University of Virginia. Built with Jekyll and the Minimal Mistakes theme (dark skin).

## Tech Stack
- **Static Site Generator:** Jekyll 4.4+
- **Theme:** minimal-mistakes-jekyll (local gem, dark skin)
- **Ruby:** 3.2.2
- **Package Manager:** Bundler 2.4.10

## Project Structure
- `_config.yml` - Jekyll configuration (site settings, theme, plugins, author)
- `Gemfile` / `Gemfile.lock` - Ruby gem dependencies
- `index.markdown` - Homepage
- `about.md` - About page
- `contact.md` - Contact page
- `portfolio.md` - Portfolio/projects page
- `_posts/` - Blog posts (Markdown)
- `_pages/` - Additional pages (categories, tags)
- `_data/navigation.yml` - Site navigation links
- `assets/images/` - Images including profile headshot

## Running the Site
The workflow runs Jekyll on port 5000:
```
ruby /home/runner/workspace/.local/share/gem/ruby/3.2.0/gems/bundler-2.4.10/exe/bundle exec jekyll serve --host 0.0.0.0 --port 5000 --livereload --force_polling
```

## Key Notes
- Uses local `minimal-mistakes-jekyll` gem instead of `remote_theme` (for Replit compatibility)
- The bundler must be invoked via the direct path since bundler 2.4.10 is at `.local/share/gem/ruby/3.2.0/gems/bundler-2.4.10/exe/bundle`
- Sass deprecation warnings from the theme are harmless and don't affect functionality
