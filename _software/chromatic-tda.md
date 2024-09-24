---
name: chromatic-tda
title: Chromatic TDA
tags:
  - complex/alpha
  - complex/chromatic-alpha
  - complex/simplicial
  - lang/python
  - type/persistence
  - type/chromatic
  - vis/diagram
links:
  - name: Repository
    url: https://github.com/OnDraganov/chromatic-tda
  - name: PyPI
    url: https://pypi.org/project/chromatic_tda
---

From repository:
> chromatic_tda is a package for computing six-packs of persistent diagrams of colored point clouds, such as cells on a tissue slide with an information about their type or 3D stucture of a material composed of different atoms. The six-pack is a topological summary of capturing many aspects of how the different types of point mingle. It consists of kernel, domain, image, codomain, cokernel and relative persistence diagrams.
> The main purpose of the code is to provide implementation to experiment with chromatic topological data analysis. Although not completely naive, many aspects of the code can be optimised, especially if only part of the infomration from the six-packs turns out to be interesting in a given application.

Preprints of papers the implementaiton is based on:
* [Chromatic Topological Data Analysis](arxiv.org/abs/2406.04102) -- survey of the main ideas
* [Chromatic Alpha Complexes](https://arxiv.org/abs/2212.03128) -- the main paper detailing the construction and mathematics behind it
* [On the Size of Chromatic Delaunay Mosaics](https://arxiv.org/abs/2212.03121) -- analysis of the combinatorial aspects of the main simplicial complex used

Talk from AATRN online seminar:
* [Ondřej Draganov (08/16/2023): TDA for Chromatic Point Clouds](https://youtu.be/HIqiF00yKaw?si=2xHbBf3ybmYfdTG5)

The package can be installed with
```
pip install chromatic_tda
```
