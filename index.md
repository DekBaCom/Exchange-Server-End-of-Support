---
layout: default
title: Home
nav_order: 1
description: "Comprehensive guide for Exchange Server End of Support planning, migration, and risk management."
permalink: /
---

# Exchange Server End of Support
{: .fs-9 }

A complete resource for IT teams and decision-makers navigating Exchange Server end of support — from assessment through migration.
{: .fs-6 .fw-300 }

[Start with the Checklist]({% link docs/checklist.md %}){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[View Migration Options]({% link docs/implement.md %}){: .btn .fs-5 .mb-4 .mb-md-0 }

---

{: .warning }
> **Exchange Server 2016 and 2019 reached End of Support on October 14, 2025.**  
> These versions no longer receive security updates, bug fixes, or Microsoft technical support. Continued operation creates significant security, compliance, and operational risk.

## What Happens After End of Support?

After the end-of-support date, Microsoft no longer provides:

| What Stops | Impact |
|:---|:---|
| Security patches | Known CVEs remain unpatched permanently |
| Bug fixes | Product defects accumulate without resolution |
| Microsoft Support | No escalation path for critical incidents |
| Compliance documentation | Audit evidence becomes harder to produce |

Your mail infrastructure will continue to function, but the risk profile changes dramatically the moment support ends.

---

## End of Support Timeline

| Version | End of Extended Support | Status |
|:---|:---:|:---:|
| Exchange Server 2010 | October 13, 2020 | End of Life |
| Exchange Server 2013 | April 11, 2023 | End of Life |
| Exchange Server 2016 | **October 14, 2025** | End of Support |
| Exchange Server 2019 | **October 14, 2025** | End of Support |
| Exchange Server SE | 2030+ | Active |

{: .note }
Exchange Server Subscription Edition (SE) is Microsoft's current on-premises offering, providing a supported path for organizations that cannot move to the cloud.

---

## Your Three Migration Paths

### 1. Microsoft 365 — Exchange Online
Move mailboxes to Microsoft's fully managed cloud service. No more server maintenance, automatic updates, and integrated security.
**Best for:** Organizations embracing cloud-first strategy.

### 2. Exchange Server SE — On-Premises
Upgrade to the new subscription-based Exchange Server. Stays on your infrastructure with full control over data.
**Best for:** Organizations with regulatory, data-sovereignty, or connectivity requirements.

### 3. Hybrid Deployment
Run Exchange on-premises alongside Exchange Online, migrating users in waves. Offers the most flexibility and lowest risk per-batch.
**Best for:** Large organizations needing a phased, low-disruption transition.

---

## Guide Sections

| Section | What You'll Find |
|:---|:---|
| [Checklist]({% link docs/checklist.md %}) | Phased migration readiness tasks from assessment to go-live |
| [Implementation]({% link docs/implement.md %}) | Step-by-step migration options and technical guidance |
| [Concerns]({% link docs/concern.md %}) | Security, compliance, continuity, and user-experience issues |
| [TCO Analysis]({% link docs/tco.md %}) | On-premises vs. cloud 5-year cost comparison |
| [Risk Assessment]({% link docs/risk.md %}) | Risk matrix, categories, and mitigation strategies |
| [Licensing]({% link docs/license.md %}) | Exchange SE, Microsoft 365, and CAL options explained |

---

{: .important }
All pricing figures in this guide are approximate and subject to change. Verify current pricing and licensing terms directly with Microsoft or your licensing partner before making procurement decisions.
