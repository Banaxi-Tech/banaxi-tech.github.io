---
title: Requirements
description: What you need to build W32Eleven and the PC to run Windows 11 on.
---

## To build and patch

A Linux PC with:

- GCC with 32-bit support (lib32 glibc for the 32-bit test harness), GNU ld, NASM, Python 3 and make
- GRUB with i386-pc support (`grub-mkstandalone`) and `xorriso`, for the patch tool
- SeaBIOS and the VGA BIOS (the patch tool uses QEMU's copies in `/usr/share/qemu/` by default)
- `qemu-system-i386` for testing (KVM recommended)
- A Windows 11 x64 ISO, [downloaded from Microsoft](https://www.microsoft.com/software-download/windows11)

On Arch Linux, for example:

```sh
sudo pacman -S base-devel lib32-glibc nasm python grub libisoburn qemu-full
```

## To run Windows

- A BIOS PC, or a UEFI PC with CSM / legacy boot enabled
- An x86 CPU, i386 or later, with an x87 FPU
- As much RAM as possible. Windows gets roughly what the PC can address below 4 GB, minus the emulator's share
  (about 2.8 GB on a 3 GB machine).
- A hard disk of at least 64 GB
- A DVD drive, or a USB port the BIOS can boot from

:::note[More than 4 GB of RAM]
PCs with truly 32-bit-only CPUs (Core Duo, Pentium M, early Atoms) have chipsets that can't address RAM above
4 GB anyway. Machines that can almost always have a 64-bit CPU, and run Windows natively.
:::
