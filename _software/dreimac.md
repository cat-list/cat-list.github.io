---
name: dreimac
title: DREiMac
tags:
  - lang/python
  - type/dimensionality-reduction
  - type/persistence
  - type/representative
  - complex/rips
  - custom/distance
  - vis/diagram

links:
  - name: Repository
    url: https://github.com/scikit-tda/DREiMac
  - name: Docs
    url: https://scikit-tda.org/DREiMac/index.html
  - name: Software Paper
    url: https://joss.theoj.org/papers/10.21105/joss.05791

---

DREiMac is a library for topological data coordinatization, visualization, and dimensionality reduction. DREiMac is able to find topology-preserving representations of point clouds taking values in the circle, in higher dimensional tori, in the real and complex projective space, and in lens spaces.

In a few words, DREiMac takes as input a point cloud together with a topological feature of the point cloud (in the form of a persistent cohomology class), and returns a map from the point cloud to a well-understood topological space (a circle, a product of circles, a projective space, or a lens space), which preserves the given topological feature in a precise sense.
