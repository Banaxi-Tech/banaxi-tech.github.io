---
title: Building
description: Compile W32Eleven and run its self-tests.
---

## Get the source

```sh
git clone https://github.com/Banaxi-Tech/W32Eleven.git
cd W32Eleven
```

## Build

```sh
make
```

This builds three programs:

| File | What it is |
| --- | --- |
| `build/emulator.elf` | The bare-metal emulator, a Multiboot kernel. This is what goes onto the boot media. |
| `build/hosted` | The same emulator as a 64-bit Linux program, for development. |
| `build/hosted32` | The same as a 32-bit Linux program, the closest match to a real 32-bit PC. |

## Test

```sh
make test       # bare-metal self-tests on QEMU's software 486
make jit-check  # interpreter vs JIT: identical guest state
```

`make test` boots the emulator on an emulated 486 and checks the JIT against the interpreter on thousands of
instruction cases. It proves that the code really only uses i386 and x87 instructions. Both should print `PASS`.
