---
title: Booting without the DVD
description: Install the W32Eleven boot loader on the hard disk, so the PC starts Windows without the DVD.
---

After installing, the PC still needs the DVD to start Windows through the emulator. To change that, boot the DVD
once more and choose **Install the W32Eleven boot loader on the hard disk**.

This writes GRUB, the emulator and its firmware into the unused area between the disk's partition table and its
first partition (sectors 1–2046). From then on the PC starts Windows through the emulator directly from the disk.

:::note[Windows never notices]
When Windows reads that area, the emulator shows it the original contents. Partitions must start at sector 2048
or later, which is what Windows creates.
:::
