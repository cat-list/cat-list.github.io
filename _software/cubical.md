---
name: cubicle
title: Cubicle
tags:
  - lang/c++
  - lang/cli
  - type/persistence
  - complex/cubical
links:
  - name: BitBucket
    url: https://bitbucket.org/hubwag/cubicle/src/master/
---
From the docs:

> Cubicle computes the peristent homology (persistence diagram) of images.
> Input is a grey scale image in dimension 2 or 3.
> The software accepts only 'raw' binary files, but we provide conversion tools as python scripts.
> The image is read in small chunks -- so it's possible to handle images that may not store in RAM! But if the image is both huge and complicated you may be out of luck... Working on it though.
> Each chunk is efficienctly preprocessed -- so the approach is significantly faster and uses much less memory than a naive approach.
> The resulting persistence diagram is the same as the diagram yielded by the reduced boundary matrix of the filtered cubical complex of the image (with voxels interpreted as the top-dimensional cubical cells).
