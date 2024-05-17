---
name: gramag
title: gramag
tags:
  - lang/rust
  - lang/python
  - complex/magnitude
  - type/representative
  - type/parallel
  - complex/digraph
links:
  - name: Repository
    url: https://github.com/tomchaplin/gramag
  - name: Python Docs
    url: https://gramag.readthedocs.io/en/latest/
---
gramag is a library for computing the magnitude homology of finite (directed) graphs in Python and Rust.
The library is capable of computing homology ranks and representatives, over ℤ₂.
In an attempt to compute magnitude homology for large graphs, we attempt to parallelise computation wherever possible; this may result in increased memory usage.
In particular, the initial basis for each of the magnitude chain groups is computed via a parallelised breadth-first search. 

The library is implemented in Rust, but also exposes a Python API, installable via pip.
