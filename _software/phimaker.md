---
name: phimaker
title: Phimaker
tags:
  - custom/boundary-matrix
  - custom/filtration
  - lang/python
  - lang/rust
  - type/parallel
  - type/persistence
links:
  - name: Repository
    url: https://github.com/tomchaplin/phimaker
  - name: PyPI
    url: https://pypi.org/project/phimaker
---

Phimaker (**P**ersistent **h**omology of **im**ages **a**nd (co)**ker**nels) computes the persistent homology of kernels, images and cokernels for an inclusion of filtrations, using the algorithm of Cohen-Steiner, Edelsbrunner, Harer and Morozov. It is written in Rust, with Python bindings provided via PyO3.

Persistence computations are lock-free and parallel, built on the [LoPHAT](https://github.com/tomchaplin/lophat) library. Phimaker is also used as the persistence backend of [Chalc](https://abhinavnatarajan.github.io/Chalc/) for computing 6-packs of chromatic point clouds.

Paper the implementation is based on:
* Cohen-Steiner, D., Edelsbrunner, H., Harer, J. and Morozov, D. Persistent homology for kernels, images, and cokernels. *Proceedings of the Twentieth Annual ACM-SIAM Symposium on Discrete Algorithms* (SODA 2009), pp. 1011–1020.

The package can be installed with
```
pip install phimaker
```