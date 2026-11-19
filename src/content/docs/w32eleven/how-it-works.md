---
title: How it works
description: The interpreter, the x86-64 to i386 JIT, the emulated PC and the bare-metal host.
---

## Interpreter

`src/emu/cpu.c`, `sse.c` and `x87.c` implement real, protected, compatibility and long mode; legacy, PAE and
4-level paging with a software TLB; lazy flags; x87, MMX, and SSE through SSE4.2. SSE floating point matches the
hardware bit for bit in the fuzzer.

## JIT

`src/emu/jit64.c` translates x86-64 into i386 code:

- superblocks across conditional branches
- inline TLB lookups, and a stack-region check per block so stack accesses skip the TLB
- lazy flags with dead-flag elimination
- block chaining, guarded by the execution TLB, and per-site indirect dispatch
- separate hot and cold code

Whatever it doesn't translate runs in the interpreter, one instruction at a time. Execution is step for step
identical to the interpreter.

## The emulated PC

`src/emu/` also has the i440FX/PIIX chipset, PIC, PIT, CMOS clock, UART, PS/2, IDE with ATAPI and bus-master DMA,
local APICs and IOAPIC with two CPUs, generated ACPI tables (with a small AML encoder), Bochs VBE graphics, and
fw_cfg for SeaBIOS.

## The bare-metal host

`src/host/` is the Multiboot kernel around it: ATA/ATAPI and AHCI drivers, BIOS disk access through a real-mode
thunk, the VBE display and PS/2 passthrough.

## Deterministic time

The emulated clock is driven by the instruction count, so every run is reproducible, which makes bugs
reproducible too.
