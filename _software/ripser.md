---
name: ripser
title: Ripser
tags:
  - lang/c++
  - lang/python
  - type/persistence
  - type/representative
  - complex/rips
  - custom/distance
links:
  - name: C++ Repository
    url: https://github.com/Ripser/ripser
  - name: Python Repository
    url: https://github.com/scikit-tda/ripser.py
  - name: Python Homepage
    url: https://ripser.scikit-tda.org/en/latest/
  - name: Python Docs
    url: https://ripser.scikit-tda.org/en/latest/reference/index.html
  - name: Online Demo
    url: https://live.ripser.org/

---

Ripser is a persistent homology package for computation of Vietoris-Rips persistence barcodes.
Ripser takes in either

- distances matrices (full, lower, or upper) as a CSV
- sparse distances matrices in sparse triplet format
- distance matrices as a binary file (DIPHA or lower triangular)
- point cloud data.

Ripser can also compute representative cocyles for persistent homology.

Ripser also has a Python version, Ripser.py, that also provides visualisation of persistence diagrams
and computing lower-star filtrations on images.
