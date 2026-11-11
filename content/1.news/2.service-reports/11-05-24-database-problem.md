---
title: "Database.exe cannot be found - 11 May 2024"
description: "A full report on the server outage that occured on 11 May 2024 at 1:00pm AEST"
aside: true
bottom: true
toc: true
---

# Incident Report: Databse.exe Cannot Be Found
11 May 2024

## Introduction

Hey Fat Duck Gamers,

Here are some details about our outage today. 

## Timeline & Events

A wild failing container appeared! It seemed our network security container wasn't too keen on the whole "updating properly" thing. We like to think it was just trying to keep things exciting.

Escalation! What started as a minor glitch turned into a P0 outage. How? Our heroic engineer decided it was a good idea to restart the physical server. Spoiler alert: it wasn't. Why? Because that's also where our beloved database cozy's up.

The plot thickens as the server gracefully wakes up from its nap, but uh-oh, MariaDB service decided it wasn’t going to show up for work today.

Plot twist! The drive hosting our database was found hanging out, unmounted. Enter our engineer, who, in a moment of overzealous ambition, attempted to mount the device, not the partition.

Panic at the server room! Realizing the mounting mistake, our engineer took a crash course in basic Linux commands right there on the spot. We're not saying there were tears, but we're not denying it either.

With newfound courage (and the correct mount command), our intrepid engineer finally got the drive and the database back in action. Cheers were heard, high-fives were seen, and somewhere, a duck quacked in approval.

## Conclusion

Everything is now back to normal in the Fat Duck Gaming universe. Games are running, ducks are gaming, and all is right with the world. This incident report will serve as a reminder of the day when a simple container misconfiguration led to an epic saga of server restarts, unmounted drives, and heroic recoveries.

Remember gamers, always mount your partitions, not just your ambitions. Happy gaming!

— The Fat Duck Tech Team

EDIT: Spolier alert, the engineer was yours truly (kn0pee)