---
name: phlite
title: phlite
tags:
  - lang/rust
  - type/persistence
  - type/representative
  - custom/boundary-matrix
  - custom/filtration
  - custom/distance
  - complex/rips
links:
  - name: Repository
    url: https://github.com/tomchaplin/phlite
---
phlite is a Rust library, providing a framework for _implicit_ matrix reduction, for persistent homology.

From the repo:
> The goal of this library is to separate out the components of Ripser that are specialised to the VR filtration from those that are applicable more boardly.
> As such, we provide a framework for developing fast, memory-efficient software to compute the persistent homology of novel filtrations.
> 
> At its core, phlite is a framework for implementing lazy oracles for sparse matrices D
> where the rows and columns can be indexed by arbitrary (ordered types). Unlike Ripser, phlite is batteries not included. In order to use the library, you must
> * choose appropriate types to index your matrix;    
> * implement a matrix oracle which can report the non-zero entries in a given column;
> * compute an ordered basis for the column space of D (typically in reverse filtration order).

Typically one should compute the barcode by decomposing the boundary matrix for relative cohomology.
Representative cycles can then be computed via [involution](https://arxiv.org/abs/2105.03629).
