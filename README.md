# celenort.site

Personal academic CV site powered by the al-folio Jekyll theme.

Edit these files first:

- `_pages/about.md` for the landing profile
- `_data/cv.yml` for structured CV content
- `_bibliography/papers.bib` for publications
- `_projects/*.md` for research/project pages

## Deployment

The source repository is `Celenort/celenort.github.io`.

GitHub Actions builds the site and publishes the static output to the
`gh-pages` branch. The server mirrors that branch into:

```text
/home/ubuntu/cv_site
```

The public domain is:

```text
https://celenort.site/
```

The server mirror is refreshed by:

```bash
/home/ubuntu/start_sites.sh
```
