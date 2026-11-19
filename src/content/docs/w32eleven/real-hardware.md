---
title: Real hardware
description: How W32Eleven handles disks, display and input on real 32-bit PCs.
---

:::caution[Untested]
W32Eleven hasn't been tested on real hardware yet. BIOSes differ more than QEMU's SeaBIOS, especially in their USB
support. If you try it, please [report what happened](https://github.com/Banaxi-Tech/W32Eleven/issues).
:::

- **Disks:** the emulator has its own polled drivers for IDE / legacy-mode SATA and AHCI. Anything else the BIOS
  can boot from (USB sticks, SATA in other modes, NVMe with CSM) is read through the PC's own BIOS, by switching
  back to 16-bit real mode for each INT 13h call.
- **Display:** the VESA graphics mode GRUB sets up (1024×768 preferred).
- **Keyboard and mouse:** PS/2. USB keyboards and mice work through the BIOS's legacy USB emulation.
- **CPUs:** the emulated PC has two CPUs, both time-sliced on the one host core W32Eleven uses.
- **Not passed through yet:** network, sound and USB devices.
