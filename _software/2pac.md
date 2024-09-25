---
name: 2pac
title: two-parameter persistent (co)homology
tags:
  - lang/c++
  - lang/python
  - lang/cli
  - type/multiparameter
  - type/persistence
  - complex/rips
  - custom/boundary-matrix
  - custom/distance
  - custom/filtration
links:
  - name: GitLab repository
    url: https://gitlab.com/flenzen/2pac
---

The program 2pac computes a minimal free resolution of 2-parameter persistent cohomology and homology of function-Vietoris-Rips complexes of a finite metric space, and of other, user-defined two-parameter (co)chain complexes.
Computation of minimal free resolutions is performed either directly, analogous to mpfree, or via a cohomological algorithm that in many cases gives a noticeable speedup.
The data can be optionally preprocessed using the chunk algorithm and/or (strong) filtration domination.
