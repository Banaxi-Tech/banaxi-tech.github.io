---
title: Patch tool
description: Reference for w32-patch-iso.py, which turns a Windows ISO into W32Eleven boot media.
---

```sh
python3 tools/w32-patch-iso.py IN.iso OUT.iso [options]
python3 tools/w32-patch-iso.py --in-place IMAGE.iso [options]
python3 tools/w32-patch-iso.py --restore IMAGE.iso
```

## Options

| Option | Meaning |
| --- | --- |
| `--in-place` | Patch the image itself instead of writing a copy. |
| `--restore` | Undo the patch: restores the boot catalog and the first sector, and truncates the image to its original size. |
| `--emulator FILE` | Bare-metal emulator to embed (default `build/emulator.elf`). |
| `--bios FILE` | SeaBIOS image for the emulated PC (default `/usr/share/qemu/bios.bin`). |
| `--vgabios FILE` | VGA BIOS (default `/usr/share/qemu/vgabios-stdvga.bin`). |
| `--ram MIB` | Guest RAM in MiB (default: everything the emulator can spare). |
| `--args "..."` | Extra [emulator options](/w32eleven/emulator-options/) for every menu entry. |
| `--no-slim` | Automatic install without the [slim settings](/w32eleven/slim-settings/). |

## What the patch changes

- The payload (emulator, firmware, answer files, disk boot loader and two GRUB images) is appended after the end
  of the ISO.
- The El Torito boot catalog's BIOS entry points at the appended GRUB image. The original entry is saved, and the
  emulated PC still sees and boots it.
- The ISO's unused first sector gets a boot sector and a partition entry (a hybrid MBR), so the same file boots
  from a USB stick.

Everything else stays byte for byte the same, including the UDF and ISO 9660 file systems and the UEFI boot entry.
