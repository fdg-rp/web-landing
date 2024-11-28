---
title: "The MFA Rollout Gone Wrong - 23 Nov 2024"
description: "Incident Report: Session Tokens and Recursive Chaos – The MFA Rollout Gone Wrong"
aside: true
bottom: true
toc: true
---

# Incident Report: Session Tokens and Recursive Chaos – The MFA Rollout Gone Wrong

## **Summary**

Our attempt to enhance security by rolling out multi-factor authentication (MFA) to staff accounts turned into an unexpected saga of downtime, recursive logic loops, and a new kind of session token hell. Here's how an internal rollout designed to secure accounts managed to take down every service we rely on—and why "more testing" remains an idea we’ll probably continue to ignore.

---

## **What Happened?**

1. **The Plan:**  
   MFA support for staff accounts, tested locally and deemed flawless. To prepare for the rollout, we cleared all session tokens, assuming this wouldn’t impact accounts outside the scope of the update. Assumptions are dangerous.

2. **The Execution:**  
   Clearing the tokens corrupted every account. No one could log in—not even to services unaffected by the update. Unfortunately, our principal web developer, already under executive pressure to meet a tight deadline, was unavailable for immediate troubleshooting due to… let’s say "personal commitments."  

3. **The Overwatch Incident:**  
   While our web developer valiantly faced the opposing team on Numbani, the problem was escalating. We lost the match *and* valuable time detecting the issue. A tough P0 call followed: service uptime or gaming glory?  

4. **The First Fix Attempt:**  
   The developer, now free and still under immense pressure, enlisted ChatGPT to write a quick Axios interceptor to clear invalid session tokens. Unwilling to test (time is money!), they sent it live. The result? The website stopped loading entirely due to a missing reference. Fixception was born.

5. **The Second Fix Attempt:**  
   After fixing the first issue, another missing reference cropped up, delaying progress further. It turns out rushing fixes under pressure doesn’t create fewer bugs—it just stacks them.  

6. **The Coordinator Steps In:**  
   Our project coordinator jumped in to save the day but fared no better. The problem proved too tangled for even their god-tier skills. At this point, rollback was considered but dismissed since corrupted session tokens meant even the old version wouldn’t work.

7. **Recursive Logout Madness:**  
   A fix was devised: trigger a client logout when the server rejected a session token. This created a glorious infinite logout loop, further destabilizing the system. With the critical 2 PM server restart looming, we looked doomed.  

8. **2 PM and Total Meltdown:**  
   The server restarted and failed to launch. Every service—core systems, auxiliary tools, everything—went offline. It was discovered the logout logic wasn’t even doing anything useful, so it was removed. Finally, the patch was redeployed, and logins were restored.  

9. **The MFA Plot Twist:**  
   Relief was short-lived. A new issue surfaced where one person registering for MFA caused every account to register to them. How this happened is anyone’s guess. A significant post-mortem is required.  

---

## **What We Learned**

1. **Testing Would Have Helped (Probably):**  
   Comprehensive pre-deployment testing could have prevented this mess, but let's be real—executive pressure and tight deadlines mean we’ll probably skip this step again next time.  

2. **Overwatch vs. Service Uptime:**  
   It’s clear we need a better policy for gaming during active rollouts. If we’d just paused the match, we might have caught the issue sooner—and maybe even avoided losing on Numbani.

3. **Recursive Loops Are the Devil:**  
   Infinite logic loops are worse than losing uptime—and significantly harder to debug.

4. **Executive Pressure Produces *Results* (Sort Of):**  
   Rushing under intense deadlines guarantees something will happen. It just won’t be good.  

---

## **Conclusion**

This incident was a perfect storm of overconfidence, under-testing, and recursive chaos. While the patch ultimately worked, the ordeal left us with some tough lessons to (probably not) implement. On the bright side, we’ll always have Numbani.