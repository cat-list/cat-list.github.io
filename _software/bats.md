---
name: bats
title: Basic Applied Topology Subprograms
tags:
  - lang/c++
  - lang/python
  - type/persistence
  - type/representative
  - complex/simplicial
  - complex/cubical
  - complex/cell
  - complex/rips
  - complex/witness
  - custom/filtration
  - custom/distance
links:
  - name: C++ Repository
    url: https://github.com/CompTop/BATS
  - name: Python Repository
    url: https://github.com/CompTop/BATS.py
  - name: C++ Docs
    url: https://bats.readthedocs.io/en/latest/index.html
  - name: Python Docs
    url: https://bats-tda.readthedocs.io/en/latest/
---
From the docs:
> There are many very high-performance libraries for computing things like persistent homology that have been developed over the past decade.
> Unlike many of these libraries BATS is focused on functorality, and provides functionality to handle maps between topological spaces, chain maps, and induced maps on homology.
> The goal is to make it easier for researchers and practitioners to implement and explore the vast back catalog of algebraic topology while also providing applied functionality.

Highlighted functionality from the docs include:
* Creation of simplicial, cubical, and cell complexes, as well as cellular maps
* Implementation of chain and homology functors
* Filtered complexes and persistent homology
* Diagrams of spaces and maps, and computation of zigzag homology
* Topological constructions such as Vietoris-Rips complexes, Witness complexes, Nerves of covers
* Sparse linear algebra over (finite) fields

Notably, constructions such as filtrations and chain complexes are generic over relevant parameters such as field coefficients and complex type.
Moreover, OpenMP is used for parallelism.
Python bindings are also provided 
