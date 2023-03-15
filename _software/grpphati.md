---
name: grpphati
title: GrPPHATI
tags:
  - lang/python
  - type/persistence
  - type/representative
  - complex/digraph
  - custom/filtration
links:
  - name: Repository
    url: https://github.com/tomchaplin/grpphati
---
GrPPHATI is a tool for developing 'grounded pipelines', which are topological descriptors of weighted digraphs.
In particular, GrPPHATI implements grounded persistent path homology.

By default, the library uses [PHAT](/software/phat.html) to run the underlying persistence calculation.
The backend can be swapped out for [Eirene](/software/eirene.html) in order to compute representatives.

Grounded pipelines can be flexibly defined given any filtration of digraphs and homology theory for digraphs.
Given implementations of these two, GrPPHATI returns a function implementing the corresponding pipeline.
