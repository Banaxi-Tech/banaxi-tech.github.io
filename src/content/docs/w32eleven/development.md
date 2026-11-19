---
title: Development
description: The hosted harness, the test suite, and how every JIT change is verified.
---

## The hosted harness

`build/hosted` and `build/hosted32` run the same emulator as a Linux process:

```sh
build/hosted32 --ram 2048 --bios /usr/share/qemu/bios.bin \
  --vgabios /usr/share/qemu/vgabios-stdvga.bin --hda win11.img --snapshot \
  --insns 60000000000 --hash
```

| Option | Meaning |
| --- | --- |
| `--iso`, `--cdrom`, `--hda` | Boot media and disks |
| `--snapshot` | Writes go to a temporary overlay |
| `--insns N` | Stop after N guest instructions |
| `--hash`, `--hash-every N` | Guest state hashes for comparing runs |
| `--shot`, `--text` | Screenshot, text-mode dump |
| `--no-jit` | Interpreter only |
| `--ctl FIFO` | Drive a running guest: `press tab enter`, `type hello`, `mouse 10 -5 1`, `shot out.png`, `stop` |

## Tests

```sh
make jit-check       # interpreter vs JIT: identical guest state
make cpufuzz         # random instructions: host CPU vs emulator
make boot-test       # KleinOS ISO on the bare-metal image (KVM)
make boot-test-486   # the same on QEMU's software 486
```

## Verifying JIT changes

Every JIT change is checked by running Windows with `--hash-every 1000000000` for 60 billion instructions and
comparing all 60 checkpoints (RAM, framebuffer and registers) against an interpreter-only run.

## Profiling (hosted32)

| Variable | What it does |
| --- | --- |
| `W32_JITPROF=1` | Fallbacks, exits and the executed instruction mix (bit-exact, slower) |
| `W32_HOSTPROF=<icount>` | Host PC sampling into `hostprof.txt` |
| `W32_PERF=<icount>` | Hardware counters: top-down, I-cache, branches |
| `W32_TICK=<n>` | Timestamp every n instructions |
| `W32_JITOFF` / `W32_JITOFF2` | Switch translator features off |
