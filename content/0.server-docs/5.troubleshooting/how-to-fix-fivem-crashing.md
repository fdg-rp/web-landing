---
title: "FiveM Crashing Fixes"
description: "Tips and tricks to potentially fix FiveM crashing"
aside: true
bottom: true
toc: true
---

# How to *Potentially* Fix FiveM Crashing

FiveM is a popular multiplayer modification framework for Grand Theft Auto V. However, like any other software, it may encounter crashes from time to time. If you are experiencing frequent crashes in FiveM, checkout this guide to see if any of these solutions work for you.

## Causes of FiveM Crashes

Sometimes, frequent crashes are out of your control and are server/cfx based. But if this isn't the case, here are some reasons why frequent crashes may happen.

::list{type="info"}
- Corrupted or outdated [cache](/server-docs/troubleshooting/how-to-clear-fivem-cache) files
- [Failure to meet minimum system requirments](#check-system-requirements)
- [Corrupted Game Files](#verify-game-files)
- FiveM server issues
- CFX issues
- [Outdated Graphics Drivers](#update-graphics-drivers)
- [Antivirus/Firewall](#disable-antivirusfirewall)
- [Resource-Heavy Modifications](#disable-resource-heavy-modifications)
- [Backround Applications](#close-unnecessary-background-processes)
- [Outdated Fivem](#update-fivem)
- [Early-Exit trap](#early-exit-trap)
::

## *Potential* Fixes

### Check System Requirements

Ensure that your computer meets the minimum system requirements to run [**FiveM**]. This includes having sufficient RAM, a compatible graphics card, and a stable internet connection.

#### Minimum Hardware Specs

::list{type="info"}
- **Windows** 8.1
- **CPU** Intel Core 2 Q6600 @ 2.40GHz / AMD Phenom 9850 @ 2.5GHz
- **GPU** NVIDIA 9800 GT 1GB / AMD HD 4870 1GB / Intel HD GT2
- **RAM** 8GB (4 may work)
- **HDD** 72GB + ~4GB
::

#### Reccomended Hardware Specs

::list{type="info"}
- **Windows** 10
- **CPU** Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz
- **GPU** NVIDIA GTX 660 2GB / AMD HD 7870 2GB
- **RAM** 16GB
- **HDD** 72GB + 8GB
::

### Update Graphics Drivers

Outdated graphics drivers can often cause crashes. Visit the website of your graphics card manufacturer (such as NVIDIA or AMD) and download the latest drivers for your specific model. Install the drivers and restart your computer to apply the changes.

### Verify Game Files

If you are experiencing crashes specifically in relation to GTA V content, it is important to verify the game files. This process will check for any corrupted or missing files and fix them if required.

#### How to Verify Game Files on Steam

1. Open Steam and click on the Library tab.
2. `Right-click` on `GTAV` from the left panel and select the `Properties` option.
3. Click on the `Local Files` tab.
4. Click on the `Verify Integrity of Game Files`.
5. Let it scan your files and if any are missing/corrupted let it reinstall them

#### How to Verify Game Files on Epic Games
1. Open Steam and find your game in the libary.
2. Click the `three dots` on the right side of the game line.
3. Select Manage.
4. Click the `Verify` button.
5. Let it scan your files and if any are missing/corrupted let it reinstall them

#### How to Verify Game Files on Rockstar Launcher
1. Sign into the `Rockstar Games Launcher`.
2. Navigate to `Settings`.
3. Select the game you want to *verify* from the list under `My installed games` on the left.
4. Select `Verify Integrity` under Verify game file integrity from the options on the right .
5. Let it scan your files and if any are missing/corrupted let it reinstall them

### Disable Antivirus/Firewall

Sometimes, antivirus or firewall software can interfere with FiveM's functionality and cause crashes. Temporarily disable your antivirus and firewall programs to see if the crashes persist. If the issue no longer occurs, you should whitelist FiveM in your security software or adjust its settings accordingly.

### Disable Resource-Heavy Modifications

If you have installed additional mods or resource packs in FiveM, it is possible that one of them is causing conflicts and crashes. Temporarily remove any resource-heavy modifications and restart FiveM to see if the crashes stop. If this resolves the issue, try adding the mods back one by one to identify the problematic one.

### Close Unnecessary Background Processes

Ensure that you don't have any resource-intensive programs or unnecessary background processes running while playing FiveM. Close unused applications, especially those that consume a lot of memory or CPU power, as they can potentially conflict with FiveM and lead to crashes.

### Update FiveM

Make sure you are using the latest version of FiveM. Developers frequently release updates and bug fixes that can address crashes and stability issues. Check the official FiveM website or relevant forums to download and install the most recent version.


### Early-exit trap

The early-exit trap can be caused by a multitude of reasons. First, go through all the steps above and clear all your mods and attempt to run FiveM in an unmodded state, if the issue persists, here are some of the most common causes/fixes:
1. Disable Medal clipping
2. Disable the Steam overlay, or close steam prior to running FiveM
3. Disable the **new** Discord overlay
4. Disable or whitelist FiveM from your antivirus, as programs that read process memory can interfere with FiveM's anticheat
5. Do a deep scan for malware with malwarebytes (including the "Scan for rootkits" option)

::alert{type="warning"}
Modifying your CPU in such a manner **can be dangerous** if not done correctly, exercise extreme caution when doing this. These are solutions that have worked for others, but may not work for you. If you do not want to take this risk, do not.
::

If the issue persists after trying the above steps, refer to [here](https://www.zdnet.com/article/intel-chip-bug-faq-which-pcs-are-affected-how-to-get-the-patch-and-everything-else-you-need-to-know/). If your processor is listed there, follow the instructions below:

1. Download Intel Extreme Tuner (XTU) from [here](https://www.intel.com/content/www/us/en/download/17881/intel-extreme-tuning-utility-intel-xtu.html)  
2. Once installed, lower the performance core ratio by 2–6 from the default (e.g. lower from 56x to 50x)  
3. Lower the core voltage offset by **-0.005V** intervals up to **-0.100V**, testing at each step  
4. When the issue stops, keep those voltage/ratio settings when playing FiveM


Alternatively, if you are confident in updating your BIOS, you may do so, as most motherboard manufacturers pushed a BIOS update to fix the overvoltage issue. No instructions will be provided for this, as it varies from model to model.




## Still Crashing?

If the crashes continue after following these steps, consider seeking assistance from the FiveM community forums, official support channels, fat duck gaming support channel sometimes people can help you if they have knowlege on that subject or a previous experience to it, or contacting the FiveM developers directly for more specific troubleshooting options.

Remember to always provide detailed information about the crashes, such as any error messages, recent changes, or specific patterns to help others assist you in finding a solution.
