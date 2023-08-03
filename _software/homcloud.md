---
name: homcloud
title: HomCloud
tags:
  - lang/python
  - type/persistence
  - type/representative
  - complex/simplicial
  - complex/cubical
  - complex/rips
  - custom/distance
  - repr/image
links:
  - name: Homepage
    url: https://homcloud.dev
---
HomCloud is a TDA package with both a Python and a CLI interface.

The package can compute persistent homlogy of a wide variety of data, including
* 3D pointcloud analysis
* Binary image analysis
* Grayscale image analysis
* 3D binary image analysis
* Distance matrix analysis (Vietoris-Rips)
* 3D periodic pointcloud analysis

The package also provides a range of histogram-based vectorisation methods,
including persistence images and diagram binning.
These methods are tightly coupled with the Python machine-learning ecosystem, including scikit-learn.

The package also includes many inverse methods inclduing
* optimal volumes
* stable volumes
* optimal 1-cycles
