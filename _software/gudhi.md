---
name: gudhi
title: Gudhi
tags: 
  - lang/c++
  - lang/python
  - type/persistence
  - type/clustering
  - type/representative
  - complex/cubical
  - complex/simplicial
  - complex/alpha
  - complex/rips
  - complex/rips-weighted
  - complex/witness
  - complex/cover-mapper
  - complex/tangential
  - dist/bottleneck
  - dist/wasserstein
  - repr/landscape
  - repr/image
  - repr/silhouette
  - repr/kernel
  - repr/atol
  - vis/barcode
  - vis/diagram
  - vis/density
  - custom/distance
  - custom/filtration
links:
  - name: Homepage
    url: https://gudhi.inria.fr/
  - name: Repository
    url: https://github.com/GUDHI/gudhi-devel
  - name: Docs
    url: https://gudhi.inria.fr/python/latest/
---

From the website:
> The GUDHI library is a generic open source C++ library, with a Python interface, for Topological Data Analysis (TDA) and Higher Dimensional Geometry Understanding. The library offers state-of-the-art data structures and algorithms to construct simplicial complexes and compute persistent homology.

>The library comes with data sets, demos, examples and test suites.

Supported data types include:
* simplicial,
* alpha,
* Vietoris-Rips,
* witness,
* tangential,
* cover complexes.

Gudhi implements most representations of persistence diagrams such as:
* persistence landscapes,
* ATOL,
* complex polynomials,
* persistence images
* silhouette,
* topological vectors.

Gudhi also implements various features and kernels for persistence diagrams such as:
* persistence entropy,
* Fisher kernel,
* weighted Gaussian kernel,
* sliced Wasserstein kernel.

Gudhi has several convenience methods for working with persistence diagrams, distances, and for plotting.
