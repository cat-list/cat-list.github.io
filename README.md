<p align="center">
  <img src="https://github.com/cat-list/cat-list.github.io/blob/main/images/cat.svg" />
</p>

# The Computational and Applied Topology List

A searchable list for software and code for computational and applied topology.

https://cat-list.github.io/

## Contributing

We strongly encourage any additions, updates or corrections to the CAT list.

* Preferably submit your changes as a [pull request](https://github.com/cat-list/cat-list.github.io/pulls), otherwise open an [issue](https://github.com/cat-list/cat-list.github.io/issues).
* Try to use [tags that have already been defined](metadata/all-tags.txt).
* Note that upon submitting a pull request, a github action will automatically commit a recompiled [`metadata/all-tags.txt`](metadata/all-tags.txt).

### Software file format

Software appearing on the CAT list is given by an individual markdown file in [_software](_software).
The format of the file is as follows:

```
---
name: NAME
title: TITLE
tags:
  - TAG1
  - TAG2
links:
  - name: LINK1_DESCRIPTION
    url: LINK1_URL
  - name: LINK2_DESCRIPTION
    url: LINK2_URL
---

DESCRIPTION OF SOFTWARE
```
Make sure to use spaces and not tabs in the file, otherwise it will break.

## Running the website locally

If you wish to run the website locally, first install Ruby and [Bundler](https://bundler.io/) then install the required packages with `bundle install` and finally run the website with `bundle exec jekyll serve`.
