---
layout: default
title: Home
nav_order: 1
description: "Comprehensive guide for Exchange Server End of Support planning, migration, and risk management."
permalink: /
---

<!-- ═══ HERO ═══════════════════════════════════════════ -->
<div class="hero">
  <span class="hero-eyebrow">📧 Exchange Server EOS Guide</span>
  <h1>Exchange Server<br>End of Support</h1>
  <p class="hero-sub">
    A complete resource for IT teams and decision-makers navigating
    Exchange Server end of support — from assessment through migration
    and decommission.
  </p>
  <div class="hero-actions">
    <a href="{% link docs/checklist.md %}" class="hero-btn hero-btn-primary">✅ Start Checklist</a>
    <a href="{% link docs/implement.md %}" class="hero-btn hero-btn-outline">🔧 Migration Options →</a>
  </div>
</div>

<!-- ═══ EOS WARNING BANNER ════════════════════════════ -->
<div class="eos-banner eos-banner-danger">
  <span class="eos-icon">🚨</span>
  <div>
    <span class="eos-banner-title">Exchange Server 2016 &amp; 2019 reached End of Support — October 14, 2025</span>
    <p class="eos-banner-body">
      No security patches, no bug fixes, no Microsoft technical support.
      Every new vulnerability discovered from this point is a permanent, unpatched risk.
    </p>
  </div>
</div>

---

## What Stops After End of Support

| What Microsoft Stops Providing | Business Impact |
|:---|:---|
| 🔴 Security patches | New CVEs become permanent vulnerabilities |
| 🔴 Bug fixes | Product defects accumulate without resolution |
| 🔴 Microsoft Support | No escalation for P1 incidents |
| 🔴 Compliance documentation | Audit evidence harder to produce |
| 🔴 Online content updates | Documentation no longer current |

---

## End of Support Timeline

| Version | End of Extended Support | Status |
|:---|:---:|:---:|
| Exchange Server 2010 | October 13, 2020 | <span class="badge badge-eol">End of Life</span> |
| Exchange Server 2013 | April 11, 2023 | <span class="badge badge-eol">End of Life</span> |
| Exchange Server 2016 | **October 14, 2025** | <span class="badge badge-eos">⚠ End of Support</span> |
| Exchange Server 2019 | **October 14, 2025** | <span class="badge badge-eos">⚠ End of Support</span> |
| Exchange Server SE | 2030+ | <span class="badge badge-active">✓ Current</span> |

{: .note }
Exchange Server Subscription Edition (SE) is Microsoft's current on-premises offering — a supported migration target for organizations that must keep email infrastructure on-premises.

---

## Your Three Migration Paths

<div class="option-grid">

  <div class="option-card">
    <span class="card-icon">☁️</span>
    <div class="card-title">Microsoft 365</div>
    <p class="card-desc">Fully managed cloud email. No server maintenance, automatic updates, built-in Defender security, and integrated compliance tools.</p>
    <span class="card-tag">Cloud</span>
    <span class="card-tag">Recommended</span>
    <br>
    <a href="{% link docs/implement.md %}#option-1-microsoft-365-exchange-online" class="card-link">Learn more →</a>
  </div>

  <div class="option-card">
    <span class="card-icon">🏢</span>
    <div class="card-title">Exchange Server SE</div>
    <p class="card-desc">Microsoft's new subscription-based on-premises Exchange. Full data control with a supported upgrade path from Exchange 2016/2019.</p>
    <span class="card-tag">On-Premises</span>
    <br>
    <a href="{% link docs/implement.md %}#option-2-exchange-server-subscription-edition" class="card-link">Learn more →</a>
  </div>

  <div class="option-card">
    <span class="card-icon">🔀</span>
    <div class="card-title">Hybrid Deployment</div>
    <p class="card-desc">Combine Exchange Online and on-premises Exchange. Migrate users in waves while maintaining seamless calendar and mail coexistence.</p>
    <span class="card-tag">Phased</span>
    <span class="card-tag">Low Risk</span>
    <br>
    <a href="{% link docs/implement.md %}#option-3-hybrid-deployment" class="card-link">Learn more →</a>
  </div>

</div>

---

## Navigate This Guide

<div class="nav-grid">

  <a href="{% link docs/checklist.md %}" class="nav-card">
    <span class="nav-icon">✅</span>
    <span class="nav-title">Checklist</span>
    <span class="nav-desc">5-phase migration readiness tasks from assessment to decommission</span>
  </a>

  <a href="{% link docs/implement.md %}" class="nav-card">
    <span class="nav-icon">🔧</span>
    <span class="nav-title">Implementation</span>
    <span class="nav-desc">Step-by-step guide for all three migration paths</span>
  </a>

  <a href="{% link docs/concern.md %}" class="nav-card">
    <span class="nav-icon">⚠️</span>
    <span class="nav-title">Concerns</span>
    <span class="nav-desc">Security, compliance, continuity, and user-experience issues</span>
  </a>

  <a href="{% link docs/tco.md %}" class="nav-card">
    <span class="nav-icon">💰</span>
    <span class="nav-title">TCO Analysis</span>
    <span class="nav-desc">5-year total cost of ownership across all options</span>
  </a>

  <a href="{% link docs/risk.md %}" class="nav-card">
    <span class="nav-icon">🛡️</span>
    <span class="nav-title">Risk Assessment</span>
    <span class="nav-desc">Risk register, matrix, and mitigation strategies</span>
  </a>

  <a href="{% link docs/license.md %}" class="nav-card">
    <span class="nav-icon">📋</span>
    <span class="nav-title">Licensing</span>
    <span class="nav-desc">Exchange SE, Microsoft 365 plans, CAL guide, and FAQs</span>
  </a>

</div>

---

<!-- ═══ URGENCY BANNER ════════════════════════════════ -->
<div class="eos-banner eos-banner-warning">
  <span class="eos-icon">⏱️</span>
  <div>
    <span class="eos-banner-title">Don't wait — every month of delay increases exposure</span>
    <p class="eos-banner-body">
      Enterprise migrations typically take <strong>3–12 months</strong> depending on size and complexity.
      Organizations still planning should target completion by <strong>Q4 2026</strong> at the latest.
      <a href="{% link docs/checklist.md %}">Start your assessment today →</a>
    </p>
  </div>
</div>

{: .important }
All pricing and licensing figures in this guide are approximate estimates. Verify current terms directly with Microsoft or a licensed Microsoft partner before making procurement decisions.
