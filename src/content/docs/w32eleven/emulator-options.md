---
title: Emulator options
description: Command-line options of the W32Eleven bare-metal emulator.
---

The GRUB menu passes these on the emulator's command line. Add your own with the patch tool's `--args`, or edit
an entry at boot time with GRUB's <kbd>e</kbd> key.

| Option | Default | Meaning |
| --- | --- | --- |
| `cpus=1\|2` | 2 | CPUs of the emulated PC. Both run time-sliced on one host core. Windows 11 Setup requires two. |
| `cores=N` | 2 | Core count reported in the SMBIOS tables. |
| `ram=MIB` | all available | Guest RAM in MiB. |
| `hdd=ata` | off | Attach the PC's first hard disk: IDE or AHCI, otherwise any hard disk the BIOS knows. Never the boot medium. |
| `cdrom=optional` | required | Start even without a boot CD (used when booting from the hard disk). |
| `cdrom=bios` | off | Read the boot medium through the BIOS even if the CD drive driver would work. |
| `install=1` | 0 | Write the disk boot loader (the "Install the W32Eleven boot loader" entry). |
| `unattend=0` | 1 | Don't attach the answer-file CD. |
| `jit=0` | 1 | Interpreter only (much slower, for debugging). |
| `jitmb=N` | 256 | Size of the JIT's code area in MiB. |
