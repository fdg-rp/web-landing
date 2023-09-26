---
title: "How to Fix FPS Stutters and Frame Drops"
description: "Step by step guide on how to fix fps stutters and frame drops within fivem."
aside: true
bottom: true
toc: true
---


# How to Fix FPS Stutters and Frame Drops in FiveM

If you are experiencing FPS stutters and frame drops in FiveM, it can affect your gaming experience. In this guide, we will provide you with simple steps to eliminate this issue and improve the overall performance of the game.

## Check Your PC Hardware

Before proceeding with any fixes, it is essential to ensure that the hardware specifications of your computer meet the minimum requirements to play FiveM. If your PC falls short of the minimum specifications, it can lead to frame drops and stutters. To check your PC hardware specifications, follow these steps:

1. Press the `Windows key + R` to open the Run dialog box.
2. Type `dxdiag` and hit Enter.
3. The `DirectX Diagnostic Tool` window will open, displaying your system information, including the processor, memory, and graphics card.

### Minimum Hardware Specs

::list{type="info"}
- **Windows** 8.1
- **CPU** Intel Core 2 Q6600 @ 2.40GHz / AMD Phenom 9850 @ 2.5GHz
- **GPU** NVIDIA 9800 GT 1GB / AMD HD 4870 1GB / Intel HD GT2
- **RAM** 8GB (4 may work)
- **HDD** 72GB + ~4GB
::

## Cap your FPS

Sometimes capping your FPS is a common way to fix and help minimise FPS stutters.

### Cap your FPS with **Nvidia Control Panel**

1. First, open the **NVIDIA Control Panel** on your PC by right-clicking on your desktop screen and selecting **NVIDIA Control Panel** from the drop-down menu.
2. Click on the `Manage 3D Settings` option under the `3D Settings` category in the left panel.
3. In the right panel, click on the `Program Settings` tab.
4. Select the game or program for which you want to cap the FPS from the drop-down menu in this case it would be FiveM.
5. Scroll down and find the `Vertical sync` option and click on it.
6. In the drop-down menu, select `On` to cap the FPS at the refresh rate of your monitor.
7. Alternatively, you can select `Max Frame Rate` click on and then set your FPS cap to your monitors refresh rate.
8. Click Apply to save your changes.

::alert{type="success"}
That's it! Your FPS is now capped in the **NVIDIA Control Panel**.
::

### Cap your FPS with **AMD Radeon**

1. Open the **AMD Radeon software** by right-clicking on your desktop and selecting `AMD Radeon software`.
2. In the **AMD Radeon software**, click on the `Settings` button located at the bottom right corner of the window.
3. Once you are in the settings panel, navigate to the `Graphics` section on the left-hand side of the screen.
4. Click on the `Advanced` option under the `Graphics` section.
5. On the advanced options page, you will see a section called `Framerate Target Control`. Here, you can toggle the `Enable Framerate Target Control` button.
6. Enter the desired FPS limit value in the `Target FPS` field. It's recommended to set it to your monitors refresh rate.
7. Click `Apply` to save the changes.

::alert{type="success"}
Once these steps are complete, your FPS should be capped to the desired value when running games or other GPU intensive applications.
::

## Update graphics driver

A possible cause of FPS stutters and frame drops in FiveM is an outdated graphics driver. To update your graphics driver, follow these steps:

1. Press the `Windows key + X` and select `Device Manager.`
2. Expand the `Display adapters` option.
3. Right-click on the graphics driver and select `Update driver.`
4. Follow the on-screen instructions to update the driver.

## Run PC Maintenance Tasks

Running maintenance tasks can help improve the overall performance of your PC. It includes deleting temporary files, cleaning the registry, and defragmenting the hard drive. To run maintenance tasks:

1. Press the `Windows key + R` to open the Run dialog box.
2. Type in `cleanmgr.exe` and hit Enter.
3. Check the boxes next to `Temporary files` and `Recycle Bin.`
4. Click on `OK` and wait for the process to complete.

## Adjust In-Game Graphics Settings

Another way to improve the performance of FiveM is to adjust in-game graphics settings.

::alert{type="danger"}
Shadow Quality must be set to a minimum of **`Normal`**. Failure to do so would fall under a breach of rule **C2**. You can read more about this by [**clicking here**](/server-docs/rules/graphic-modifications),
::

1. When in-game press `ESC` and go-to the `Settings` tab and click on it.
2. Once in the `Settings` tab click on the `Graphics` tab, adjust the following settings:
   - Particle Quality: `Low`
   - Reflection Quality: `Off`
   - Shadow Quality: `Normal`
   - Water Quality: `Normal`
   - Anti-Aliasing: `Off`
   - Anisotropic Filtering: `Off`
   - PostFX Quality: `Low`
3. Click on `Save` and exit the settings.

::alert{type="info"}
When doing this in-game it may prompt you to restart your game making you leave the server to fully save these settings.
::

---

Following these steps should help eliminate FPS stutters and frame drops in FiveM, improving the overall gaming experience. If this guide fails to help your needs and doesnt fix it you can always ask around in [`#fivem-support`](https://discord.com/channels/343265479302971402/989346639015706675) channel in the Fat Duck Gaming discord.