---
title: Troubleshooting
description: Common problems running Windows 11 on W32Eleven, and what to do about them.
---

## The screen stays black for minutes

That's normal, especially before Setup's first screen and during the first start after installing. Also, unless
the [slim settings](/w32eleven/slim-settings/) were applied, Windows turns the display off after a while: move the
mouse.

## Setup says the PC doesn't meet the requirements

Boot an entry from the patched disc: it attaches the answer file with the `LabConfig` bypasses. Keep `cpus=2`,
because Setup refuses PCs with fewer than two cores.

## "Why did my PC restart?"

Windows shows this page after its first-start setup (OOBE) has failed several times. Choose **Next** to make it
try again. If it keeps coming back, it's most likely an emulator bug: please
[open an issue](https://github.com/Banaxi-Tech/W32Eleven/issues) with the crash reports from
`C:\ProgramData\Microsoft\Windows\WER\ReportQueue`.

## "No ATAPI CD/DVD drive with an ISO 9660 disc found"

The emulator couldn't find the boot medium. For USB sticks and unusual controllers it falls back to the BIOS
automatically. Add `cdrom=bios` to force that path (press <kbd>e</kbd> on the menu entry).

## Defender can't be switched off on an installed system

While Windows is running, it blocks changes to Defender, even from SYSTEM: Tamper Protection, and access lists on
Defender's service keys that only let TrustedInstaller write. The automatic install switches Defender off before
Windows' first start. On an existing installation, change the service keys with the disk mounted elsewhere.

## Everything is very slow

That's expected; see [Performance](/w32eleven/performance/). Give a fresh installation its first hour, use the
automatic install's slim settings, and use the fastest 32-bit CPU you have.
