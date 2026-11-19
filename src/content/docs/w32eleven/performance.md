---
title: Performance
description: How fast W32Eleven runs Windows 11, and why.
---

Measured in the development harness (`build/hosted32`, a 32-bit Linux process) on one performance core of an
Intel i9-12900KF, booting an installed Windows 11. The averages cover the first 60 billion guest instructions,
from power-on to the desktop and services.

| Measure | Guest MIPS |
| --- | --- |
| Average over the whole boot | **~525** |
| Best 5-billion-instruction stretch | ~1500 |
| Peak (0.5-billion-instruction window) | ~2100 |
| Interpreter only, without the JIT | ~45 |

That's roughly 1/100 of native speed on a modern PC. A real 32-bit CPU is another 5–10× slower: Windows works,
but slowly, and installing takes many hours.

## Why fresh installations are slowest

During its first hour Windows does one-time background work: Defender's first scan, .NET optimization, app
updates and search indexing. Almost all of it is code the JIT hasn't seen yet, and new code runs much slower than
code it has already translated. The [slim settings](/w32eleven/slim-settings/) avoid most of this.

## Where the time goes

The generated code is front-end bound: instruction-cache misses dominate. The next big step is a block-level code
generator with register allocation.
