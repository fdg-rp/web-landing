---
title: "Network Diagnostics"
description: "How to perform network diagnostics using WinMTR"
aside: true
bottom: true
toc: true
---

# Network Diagnostics Using WinMTR

This guide explains how to gather network diagnostics data using [WinMTR](https://sourceforge.net/projects/winmtr/) for the purposes of investigating network connectivity issues. FDG Staff may request you perform the below steps when reporting network connectivity issues. WinMTR is a user-friendly tool for performing Trace Route and Ping tests given a target IP address.

## Step 1: Download WinMTR.zip

Download the [WinMTR](https://sourceforge.net/projects/winmtr/) zip file from Soureforge: https://sourceforge.net/projects/winmtr/ 

![screenshot of WinMTR on sourceforge site](https://cdn.fatduckgaming.com/211c9ba7-3a00-4c81-bf29-51c13fc862c5_1725247374485.png)

## Step 2: Extract WinMTR.zip Contents to Desktop

Extract the contents of `WinMTR.zip` to your Desktop (or anywhere, if you know what you're doing).

![file extraction example](https://cdn.fatduckgaming.com/cdb748fc-4aab-462f-819a-252a5ab1d413_1725250199122.jpeg)
## Step 3: Open WinMTR

Open the WinMTR folder you extracted to the `Desktop`, open the folder that matches the version of Windows (32-bit or 64-bit) you're running, and run `WinMTR.exe`. If you don't know what version you're running, see [Microsoft Support: 32-bit and 64-bit Windows: Frequently asked questions](https://support.microsoft.com/en-au/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d#:~:text=Select%20the%20Start%20button%2C%20then%20select%20Settings%20%3E%20System%20%3E%20About%20.&text=At%20the%20right%2C%20under%20Device%20specifications%2C%20see%20System%20type.).

![zip file contents](https://cdn.fatduckgaming.com/b3e4f880-24f3-4a57-b013-715b089b2a49_1725250409638.jpeg)
![file version example](https://cdn.fatduckgaming.com/3e19481a-8582-4ece-a57f-7c086989b433_1725250474903.webp)


## Step 4: Enter the IP Address

Unless otherwise specified by FDG Staff, use the IP address `103.212.227.19`

![winmtr ip example](https://cdn.fatduckgaming.com/17a94649-58a4-45fe-8a61-4e9aff220cfe_1725250575499.jpeg)

## Step 5: Click Start

Click the `Start` button, and **wait 60 seconds** for the program to perform its testing.

![winmtr start](https://cdn.fatduckgaming.com/438e9ebb-6505-43a6-bc54-98e13aa79b7b_1725250831760.jpeg)


## Step 6: Click Stop

After 60 seconds has passed, click `Stop`. The program should have completed its testing.


## Step 7: Take a Screenshot and Attach to FDG Support Ticket

Take a screenshot of the results from the WinMTR window and attach the screenshot to an existing ticket on [FDG Support](https://support.fatduckgaming.com). If you haven't got an existing ticket, we suggest opening one in the [Network Connectivity Issue](https://support.fatduckgaming.com/tickets/create/44) category.
