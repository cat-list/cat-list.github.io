---
name: lophat
title: LoPHAT
tags:
  - lang/rust
  - lang/python
  - type/persistence
  - type/parallel
  - custom/boundary-matrix
  - custom/filtration
links:
  - name: Repository
    url: https://github.com/tomchaplin/lophat
  - name: Rust Docs
    url: https://docs.rs/lophat/latest/lophat/
---
LoPHAT is a Rust library implementing the lockfree algorithm for computing persistent homology (PH), introduced by Morozov and Nigmetov.
Python bindings are provided via PyO3, with an interface familiar to those who have used [PHAT](/software/phat.html).

LoPHAT can compute the persistent homology of any filtered chain complex; input is provided as an iterator over sparse columns.
Persistence diagrams are returned as sets of paired and unpaired simplices.
