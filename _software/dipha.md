---
name: dipha
title: DIPHA
tags:
  - lang/c++
  - lang/matlab
  - custom/boundary-matrix
  - custom/distance
  - complex/cubical
  - complex/rips
  - type/parallel
  - type/distributed
links:
  - name: Repository
    url: https://github.com/DIPHA/dipha
---

DIPHA is "A Distributed Persistent Homology Algorithm".

From the repo:
> This C++ software package computes persistent homology following the algorithm proposed [by Bauer, Kerber and Reininghaus].
> Besides supporting parallel execution on a single machine, DIPHA may also be run on a cluster of several machines using MPI.

The three inputs supported by DIPHA are:

* d-dimensional gray-scale image data,
* custom distance matrix,
* custom, weighted boundary matrix.
