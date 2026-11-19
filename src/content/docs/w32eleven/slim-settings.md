---
title: Slim settings
description: The background work the automatic install switches off so Windows 11 runs better on slow PCs.
---

By default the automatic install switches off the background work that makes Windows 11 crawl on a slow machine.
The settings are written into the installed system before its first start, so Windows never runs them at all, not
even during its slow first boot.

| Area | Switched off |
| --- | --- |
| Services | SysMain (prefetching), Windows Search indexing, telemetry (DiagTrack, dmwappushservice), Maps, Microsoft Defender (antivirus, network inspection, boot driver) |
| Visual effects | "Adjust for best performance": no animations, transparency, peek or shadows; windows are drawn as outlines while dragging |
| Background activity | Background apps, widgets, suggested and silently installed apps, Edge staying open in the background |
| Updates | Automatic Store app and Edge updates. Windows Update stays on. |
| Power | Hibernation and fast startup; the display and sleep timeouts |
| Scheduled jobs | Defrag, telemetry collection, Defender's scheduled scan, WinSAT |

:::caution[No antivirus]
With Defender off, the installed system has no antivirus. That suits old offline machines and testing. Patch with
`--no-slim` to keep Windows' defaults.
:::

## Changing the list

Each setting is one line in `SLIM_REG` (registry values) or `SLIM_FIRSTLOGON` (commands run at the first logon) in
`tools/w32-patch-iso.py`.

## On an installed system

Most of these settings can also be applied to a running Windows from an administrator command prompt, with the
same registry values under `HKLM\SYSTEM\CurrentControlSet`, `HKLM\SOFTWARE` and `HKCU`. Defender is the exception:
see [Troubleshooting](/w32eleven/troubleshooting/#defender-cant-be-switched-off-on-an-installed-system).
