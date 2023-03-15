---
name: eirene
title: Eirene
tags:
  - lang/julia
  - type/persistence
  - type/representative
  - complex/rips
  - custom/distance
  - custom/filtration
  - complex/simplicial
  - vis/barcode
  - vis/diagram
  - dist/wasserstein
links:
  - name: Homepage
    url: http://gregoryhenselman.org/eirene/index.html
  - name: Repository
    url: https://github.com/Eetion/Eirene.jl
---
From the homepage:
> EIRENE is an open-source platform for computational homology.
> It is part of a long term effort to introduce algebraic topology, the mathematics of abstract space, to modern problems in engineering and applied science.
> Explicit representation and 3D visualization of homological generators is an overarching theme of this project.

Eirene is a persistent homology package implemented in the Julia programming language.
It accepts as input:
* a distance matrix,
* a point cloud, or
* a filtered chain complex.

The package can compute barcodes and persistent representatives in any dimension.
For those working with point cloud data, representatives can be readily visualised via built-in calls to Plotly.
