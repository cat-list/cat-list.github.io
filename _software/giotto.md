---
name: giotto-tda
title: Giotto-TDA
tags:
  - lang/python
  - type/persistence
  - type/images
  - complex/cover-mapper
  - complex/rips
  - complex/rips-weighted
  - complex/alpha
  - complex/cech
  - complex/flag
  - complex/cubical
  - repr/landscape
  - repr/kernel
  - repr/image
  - repr/silhouette
  - feat/amplitude
  - feat/entropy
  - feat/polynomial
  - dist/bottleneck
  - dist/wasserstein
  - vis/diagram
  - vis/betti-surface
links:
  - name: Repository
    url: https://github.com/giotto-ai/giotto-tda
  - name: Docs
    url: https://giotto-ai.github.io/gtda-docs/0.5.1/library.html
---
Giotto-TDA is a well-tested suite of computational topology tools, compatible with the `scikit-learn` API and framework.
From the docs:
> giotto-tda is a high performance topological machine learning toolbox in Python built on top of scikit-learn and is distributed under the GNU AGPLv3 license.
> It is part of the Giotto family of open-source projects.

Supported data types include:
* point clouds,
* tabular data,
* time series data
* (directed) graphs,
* images.

Supported filtrations include:
* (weighted/sparse) Vietoris-Rips,
* weak alpha filtration,
* euclidean Čech filtration, 
* filtered cubical complexes,
* (un)directed flag complex filtrations.

Persistence diagrams can also be converted into other representations including persistence landscapes, persistence images and Betti curves.
In line with the `scikit-learn` framework, preprocessing, persistent homology and diagram representations can be combined into a single pipeline.

Under the hood, many demanding workloads are implemented in C++, vectorised and parallelised.
