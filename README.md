---
lang: en
title: Consensus Algorithms in Blockchain --- A Comparative Explorer
viewport: width=device-width, initial-scale=1.0
---

::: bg-grid
:::

::: topbar
::: brand
CONSENSUS[ // ]{style="opacity: 0.4"}**EXPLORER**
:::
:::

::: {.section .hero}
A Comparative Explorer

# How strangers agree on *one truth*, eight different ways.

Every blockchain has to solve the same problem: get thousands of
untrusting computers to agree on a single, tamper-proof history. Pick a
mechanism to trace exactly how it happens --- from a broadcast
transaction to a finalized block.

::: hero-grid
::: ledger-wrap
::: ledger-label
LIVE LEDGER --- BLOCKS APPENDING[PoW]{#ledgerAlgoLabel}
:::
:::

::: hero-instructions
::: instruction-row
[01]{.num}

**Click any algorithm** in the top bar --- PoW, PoS, DPoS, PoA, PoH,
PBFT, PoI, or PoSpace.
:::

::: instruction-row
[02]{.num}

Every panel below --- **overview, working, trilemma chart, metrics,
chains, languages, layer, matrix** --- updates together.
:::

::: instruction-row
[03]{.num}

Watch the **step flow** animate through exactly how a transaction gets
confirmed under that mechanism.
:::
:::
:::
:::

::: {#mainContent role="main"}
::: {#panel-overview .section .panel}
::: section-head
<div>

::: section-tag
01 / Algorithm Overview
:::

## Core mechanism []{#overviewAlgoName .accent} {#core-mechanism .section-title}

</div>
:::

::: overview-grid
::: algo-id-card
::: {#idFullName .full-name}
:::

::: {#idShortName .short-name}
:::
:::

::: overview-text
::: mechanism-label
In plain language
:::

::: mechanism-label
Why it exists
:::
:::
:::
:::

::: {#panel-steps .section .panel}
::: section-head
<div>

::: section-tag
02 / Transaction Flow
:::

## Step-by-step working {#step-by-step-working .section-title}

</div>
:::

::: flow-wrap
::: flow-line
::: {#flowLineFill .flow-line-fill}
:::
:::

::: {#flowSteps .flow-steps}
:::
:::
:::

::: {#panel-trilemma .section .panel}
::: section-head
<div>

::: section-tag
03 / Blockchain Trilemma
:::

## Scalability · Security · Decentralisation {#scalability-security-decentralisation .section-title}

</div>
:::

::: trilemma-grid
::: radar-box
![](data:image/svg+xml;base64,PHN2ZyBpZD0icmFkYXJTdmciIHZpZXdib3g9IjAgMCAzNDAgMzIwIj48L3N2Zz4=){#radarSvg}
:::

::: {#trilemmaNotes .trilemma-notes}
:::
:::
:::

::: {#panel-performance .section .panel}
::: section-head
<div>

::: section-tag
04 / Performance Metrics
:::

## Block time & throughput (TPS) {#block-time-throughput-tps .section-title}

</div>
:::

::: perf-grid
::: perf-card
#### Typical block time

::: {#blockTimeStat .big-stat}
:::

::: {#blockTimeNote .stat-note}
:::

::: {#blockTimeCompare .perf-compare}
:::
:::

::: perf-card
#### Throughput (TPS)

::: {#tpsStat .big-stat}
:::

::: {#tpsNote .stat-note}
:::

::: {#tpsCompare .perf-compare}
:::
:::
:::
:::

::: {#panel-mapping .section .panel}
::: section-head
<div>

::: section-tag
05 / Real-World Mapping
:::

## Blockchains & cryptocurrencies {#blockchains-cryptocurrencies .section-title}

</div>
:::

::: {#mappingCards .map-grid}
:::
:::

::: {#panel-languages .section .panel}
::: section-head
<div>

::: section-tag
06 / Smart Contract Support
:::

## Languages tied to this consensus {#languages-tied-to-this-consensus .section-title}

</div>
:::

::: {#langCards .lang-grid}
:::
:::

::: {#panel-layer .section .panel}
::: section-head
<div>

::: section-tag
07 / Layer Classification
:::

## Layer 1 base chain vs. Layer 2 scaling {#layer-1-base-chain-vs.-layer-2-scaling .section-title}

</div>
:::

::: layer-grid
::: {.layer-card .l1}
#### Layer 1 --- base chain

::: {#l1Title .layer-title}
:::

::: {#l1Chips .layer-chip-row}
:::
:::

::: {.layer-card .l2}
#### Layer 2 --- built on top

::: {#l2Title .layer-title}
:::

::: {#l2Chips .layer-chip-row}
:::
:::
:::
:::

::: {#panel-matrix .section .panel}
::: section-head
<div>

::: section-tag
08 / Compatibility Matrix
:::

## Which chains share a consensus mechanism {#which-chains-share-a-consensus-mechanism .section-title}

</div>
:::

::: matrix-wrap
::: matrix-legend
::: legend-item
[]{.legend-swatch
style="background: rgba(79, 209, 197, 0.35)"}Compatible --- same
mechanism
:::

::: legend-item
[]{.legend-swatch
style="background: rgba(232, 93, 117, 0.1)"}Incompatible --- different
mechanism
:::

::: legend-item
[]{.legend-swatch style="
                  background: var(--panel);
                  border: 1px solid var(--hairline);
                "}Same chain
:::
:::

::: {#matrixHolder}
:::

Compatibility here means **protocol-level agreement** only --- two
chains running the same consensus family validate blocks the same way,
which is a prerequisite for things like shared validator tooling or
federated bridges. It does not by itself mean two chains can transact
natively; cross-chain transfers still need a bridge or wrapped asset
regardless of matching consensus.
:::
:::
:::

CONSENSUS // EXPLORER --- an educational reference. Figures are
representative, real-world values vary by network conditions and client
implementation.
