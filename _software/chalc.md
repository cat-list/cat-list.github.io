---
name: chalc
title: Chalc
tags:
  - complex/alpha
  - complex/chromatic-alpha
  - complex/rips
  - complex/simplicial
  - lang/python
  - lang/c++
  - type/chromatic
  - type/parallel
  - type/persistence
  - vis/diagram
links:
  - name: Documentation
    url: https://abhinavnatarajan.github.io/Chalc/
  - name: Repository
    url: https://github.com/abhinavnatarajan/chalc
  - name: PyPI
    url: https://pypi.org/project/chalc
---

Chalc is a Python package, with a C++ core, for computing chromatic Delaunay filtrations of labelled (coloured) point clouds in Euclidean space, together with their 6-packs of persistence diagrams (kernel, domain, image, codomain, cokernel and relative). 6-packs quantify the spatial relationships between the different classes of points in a labelled point cloud.

As well as chromatic alpha filtrations, Chalc can compute chromatic Delaunay–Čech and chromatic Delaunay–Rips filtrations, which are computationally simpler. It is aimed mainly at 2D and 3D point clouds with two or three colours and a few thousand points, though there is no hard limit on dimension and up to 16 colours are supported.

Features include:
* exact multiple-precision arithmetic for geometric computations (via [CGAL](https://www.cgal.org)), with sensible handling of degenerate inputs
* lock-free, parallel computation of persistence diagrams with the clearing optimisation (via [Phimaker](https://github.com/tomchaplin/phimaker))
* plotting of 6-packs and animation of filtrations

Paper the implementation is based on:
* [Morse Theory for Chromatic Delaunay Triangulations](https://arxiv.org/abs/2405.19303)

The package can be installed with
```
pip install chalc
```