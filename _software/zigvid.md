---
name: zigvid
title: Zigvid
tags:
  - complex/formigram
  - lang/rust
  - lang/python
  - type/persistence
  - type/zigzag
  - type/video
  - type/parallel
  - vis/barcode
links:
  - name: GitHub
    url: https://github.com/Landa233/zigvid
---

Zigvid computes H0 and H1 decorated zigzag persistence barcodes for binary video. It uses a graph-based approach that avoids constructing cubical complexes and exploits low-dimensional structure to scale to high-resolution and high-frame-rate video. Moreover, it is highly parallelisable.

It provides a Rust library and Python bindings, supports 4- and
8-connectivity and union/intersection zigzags.