export const ALGORITHMS = [
  {
    id: 'pow',
    name: 'Proof of Work',
    shortName: 'PoW',
    abbr: 'PoW',
    color: '#F7931A',
    inventor: 'Satoshi Nakamoto',
    year: 2008,
    category: 'Computational Consensus',
    permissionType: 'Permissionless',
    energyLevel: 'high',
    energyLabel: 'Very High Energy Consumption',
    principle: 'Miners compete to solve cryptographic hash puzzles; the first to find a valid nonce earns the right to append the next block.',
    explanation: 'Proof of Work (PoW) is the original blockchain consensus mechanism introduced by Bitcoin. Participants known as miners expend computational power to find a hash value below a network difficulty target. This process is deliberately expensive, making it economically prohibitive to rewrite history or launch double-spend attacks.\n\nThe security of PoW derives from the cumulative work embedded in the longest chain. An attacker would need to control more than 50% of the network hash rate to consistently outpace honest miners. While highly secure and battle-tested, PoW networks face criticism for energy consumption and limited transaction throughput.',
    steps: [
      'Transactions are broadcast to the network and collected in the mempool',
      'Miners assemble candidate blocks from pending transactions',
      'Miners iteratively hash the block header with different nonce values',
      'The first miner to find a hash below the difficulty target broadcasts the block',
      'Other nodes validate the block and append it to their local chain',
      'The difficulty adjusts periodically to maintain target block times'
    ],
    advantages: [
      'Proven security model with over 15 years of operational history',
      'Highly decentralized — anyone with hardware can participate in mining',
      'Strong resistance to Sybil attacks due to computational cost',
      'No trusted parties required for block production',
      'Transparent and auditable consensus rules'
    ],
    disadvantages: [
      'Extremely high energy consumption at scale',
      'Low transaction throughput (typically 3–15 TPS)',
      'Mining hardware centralization in mining pools',
      'Slow finality — transactions need multiple confirmations',
      'Environmental concerns and regulatory scrutiny'
    ],
    useCases: [
      'Store-of-value cryptocurrencies (Bitcoin)',
      'Censorship-resistant digital money',
      'Networks prioritizing maximum decentralization',
      'Applications where security outweighs speed'
    ],
    workflow: [
      { icon: 'fa-broadcast-tower', label: 'Broadcast Transactions' },
      { icon: 'fa-cube', label: 'Assemble Block' },
      { icon: 'fa-microchip', label: 'Mine (Hash Puzzle)' },
      { icon: 'fa-trophy', label: 'Find Valid Nonce' },
      { icon: 'fa-check-circle', label: 'Validate & Append' }
    ],
    trilemma: { scalability: 3, security: 9, decentralization: 8 },
    metrics: {
      tps: { value: '~7', explanation: 'Bitcoin processes roughly 7 transactions per second due to 1 MB block size and 10-minute block intervals.' },
      blockTime: { value: '~10 min', explanation: 'Bitcoin targets a new block every 10 minutes, adjusted via difficulty retargeting every 2016 blocks.' },
      finality: { value: '~60 min', explanation: 'Six confirmations (~1 hour) are commonly accepted as probabilistic finality for large transactions.' },
      energyEfficiency: { value: 'Very Low', explanation: 'PoW consumes enormous electricity globally; Bitcoin alone uses more energy than many countries.' },
      attackResistance51: { value: 'High', explanation: 'A 51% attack requires controlling majority hash power, which is prohibitively expensive on major networks.' },
      sybilResistance: { value: 'Very High', explanation: 'Creating fake identities is useless without proportional computational work.' },
      faultTolerance: { value: '50%', explanation: 'Honest nodes with >50% hash power will always outpace attackers on the longest chain.' },
      validationCost: { value: 'Low', explanation: 'Verifying a PoW block requires only a single hash computation — cheap for full nodes.' }
    },
    comparison: {
      security: 'Very High',
      scalability: 'Low',
      decentralization: 'High',
      energy: 'Very High',
      tps: '~3–15',
      blockTime: '1–10 min',
      permissioned: 'No',
      permissionless: 'Yes',
      smartContracts: 'Limited',
      networks: 'Bitcoin, Litecoin, Dogecoin, Monero'
    }
  },
  {
    id: 'pos',
    name: 'Proof of Stake',
    shortName: 'PoS',
    abbr: 'PoS',
    color: '#627EEA',
    inventor: 'Sunny King & Scott Nadal',
    year: 2012,
    category: 'Stake-Based Consensus',
    permissionType: 'Permissionless',
    energyLevel: 'low',
    energyLabel: 'Low Energy Consumption',
    principle: 'Validators are chosen to propose blocks based on the amount of cryptocurrency they stake as collateral, replacing energy-intensive mining.',
    explanation: 'Proof of Stake (PoS) selects block producers based on staked tokens rather than computational work. Validators lock up cryptocurrency as collateral and are randomly chosen to propose and attest to blocks. Misbehavior results in slashing — forfeiture of staked funds — creating economic incentives for honest participation.\n\nEthereum\'s transition to PoS (The Merge, 2022) demonstrated that major networks can achieve consensus with ~99.95% less energy than PoW. PoS enables faster block times and opens pathways to sharding for improved scalability, though wealth concentration among large stakers remains a decentralization concern.',
    steps: [
      'Validators deposit stake (e.g., 32 ETH) into the staking contract',
      'The protocol randomly selects a validator to propose the next block',
      'A committee of validators attests to the validity of the proposed block',
      'Attestations are aggregated and included in subsequent blocks',
      'Honest validators earn staking rewards; malicious actors are slashed',
      'Finality is achieved through checkpointing and supermajority attestations'
    ],
    advantages: [
      'Dramatically lower energy consumption than PoW',
      'Faster block times and higher throughput potential',
      'Economic security through slashing penalties',
      'Enables sharding and parallel transaction processing',
      'Lower barrier to participation (no specialized hardware)'
    ],
    disadvantages: [
      'Nothing-at-stake problem requires careful protocol design',
      'Wealth concentration can reduce decentralization',
      'Long-range attacks possible without checkpointing',
      'Initial distribution fairness concerns',
      'Complexity in validator selection and slashing rules'
    ],
    useCases: [
      'General-purpose smart contract platforms (Ethereum, Cardano)',
      'Energy-efficient public blockchains',
      'DeFi and NFT ecosystems',
      'Networks requiring fast finality with staking economics'
    ],
    workflow: [
      { icon: 'fa-lock', label: 'Stake Tokens' },
      { icon: 'fa-random', label: 'Select Validator' },
      { icon: 'fa-file-alt', label: 'Propose Block' },
      { icon: 'fa-vote-yea', label: 'Attest Block' },
      { icon: 'fa-shield-alt', label: 'Finalize & Reward' }
    ],
    trilemma: { scalability: 6, security: 8, decentralization: 6 },
    metrics: {
      tps: { value: '~30–1000', explanation: 'Varies widely: Ethereum ~30 TPS base layer; Algorand claims ~1,000 TPS with pure PoS.' },
      blockTime: { value: '~12 sec', explanation: 'Ethereum PoS targets 12-second slots; other PoS chains range from 2–30 seconds.' },
      finality: { value: '~13 min', explanation: 'Ethereum achieves economic finality in ~2 epochs (12.8 minutes) under normal conditions.' },
      energyEfficiency: { value: 'Very High', explanation: 'PoS uses standard servers instead of ASIC farms, reducing energy use by ~99.95% vs PoW.' },
      attackResistance51: { value: 'High', explanation: 'Controlling 51% requires owning 51% of staked tokens — extremely costly on large networks.' },
      sybilResistance: { value: 'High', explanation: 'Stake requirements make creating many fake validator identities economically expensive.' },
      faultTolerance: { value: '33%', explanation: 'BFT-based PoS variants tolerate up to 1/3 malicious validators with provable safety.' },
      validationCost: { value: 'Low', explanation: 'Signature verification and state checks are computationally inexpensive.' }
    },
    comparison: {
      security: 'High',
      scalability: 'Medium',
      decentralization: 'Medium',
      energy: 'Low',
      tps: '~30–1000',
      blockTime: '2–30 sec',
      permissioned: 'No',
      permissionless: 'Yes',
      smartContracts: 'Full',
      networks: 'Ethereum, Cardano, Algorand, Tezos'
    }
  },
  {
    id: 'dpos',
    name: 'Delegated Proof of Stake',
    shortName: 'DPoS',
    abbr: 'DPoS',
    color: '#E6007A',
    inventor: 'Daniel Larimer',
    year: 2014,
    category: 'Stake-Based Delegated Consensus',
    permissionType: 'Permissionless',
    energyLevel: 'low',
    energyLabel: 'Low Energy Consumption',
    principle: 'Token holders vote to elect a fixed set of delegates (block producers) who take turns creating blocks on behalf of the network.',
    explanation: 'Delegated Proof of Stake (DPoS) combines stake-based security with representative democracy. Instead of all stakers validating directly, token holders elect a small number of delegates (typically 21–101) who produce blocks in a round-robin schedule. This design dramatically increases throughput by limiting the validator set.\n\nDPoS was pioneered by BitShares and adopted by EOS, TRON, and Steem. While it achieves high TPS and low latency, critics argue that concentrating block production among a few delegates sacrifices decentralization. Voter apathy and delegate collusion are ongoing governance challenges.',
    steps: [
      'Token holders stake tokens and vote for block producer candidates',
      'Top-voted candidates become active delegates/block producers',
      'Delegates take turns producing blocks in a predetermined schedule',
      'Delegates validate transactions and maintain the blockchain',
      'Token holders can change votes at any time to hold delegates accountable',
      'Rewards are distributed between delegates and their voters'
    ],
    advantages: [
      'Very high transaction throughput (1,000–4,000+ TPS)',
      'Fast block times (0.5–3 seconds)',
      'Low energy consumption — no mining required',
      'Democratic governance through token-weighted voting',
      'Predictable block production schedule'
    ],
    disadvantages: [
      'Centralization risk with small delegate sets',
      'Voter apathy reduces governance effectiveness',
      'Delegate collusion and cartel formation possible',
      'Wealthy stakeholders exert disproportionate voting power',
      'Less censorship-resistant than PoW or full PoS'
    ],
    useCases: [
      'High-throughput dApp platforms (EOS, TRON)',
      'Social media blockchains (Steem, Hive)',
      'Gaming and real-time applications',
      'Networks prioritizing speed over maximum decentralization'
    ],
    workflow: [
      { icon: 'fa-vote-yea', label: 'Vote for Delegates' },
      { icon: 'fa-users', label: 'Elect Block Producers' },
      { icon: 'fa-sync-alt', label: 'Round-Robin Block Production' },
      { icon: 'fa-check-double', label: 'Validate Transactions' },
      { icon: 'fa-coins', label: 'Distribute Rewards' }
    ],
    trilemma: { scalability: 8, security: 6, decentralization: 4 },
    metrics: {
      tps: { value: '~1000–4000', explanation: 'EOS claims ~4,000 TPS; TRON ~2,000 TPS with 27 super representatives producing blocks.' },
      blockTime: { value: '~0.5–3 sec', explanation: 'EOS produces blocks every 0.5 seconds; TRON every 3 seconds.' },
      finality: { value: '~1–45 sec', explanation: 'Near-instant irreversibility once a supermajority of delegates confirm a block.' },
      energyEfficiency: { value: 'Very High', explanation: 'Only elected delegates run nodes; no competitive mining wastage.' },
      attackResistance51: { value: 'Medium', explanation: 'Compromising a majority of ~21–27 delegates is feasible with coordinated resources.' },
      sybilResistance: { value: 'Medium', explanation: 'Becoming a delegate requires significant stake and community votes, but the set is small.' },
      faultTolerance: { value: '33%', explanation: 'Depends on BFT assumptions within the delegate committee.' },
      validationCost: { value: 'Very Low', explanation: 'Limited validator set means minimal redundant validation overhead.' }
    },
    comparison: {
      security: 'Medium',
      scalability: 'High',
      decentralization: 'Low',
      energy: 'Low',
      tps: '~1000–4000',
      blockTime: '0.5–3 sec',
      permissioned: 'No',
      permissionless: 'Yes',
      smartContracts: 'Full',
      networks: 'EOS, TRON, Steem'
    }
  },
  {
    id: 'poa',
    name: 'Proof of Authority',
    shortName: 'PoA',
    abbr: 'PoA',
    color: '#15BDFF',
    inventor: 'Gavin Wood',
    year: 2017,
    category: 'Identity-Based Consensus',
    permissionType: 'Permissioned',
    energyLevel: 'none',
    energyLabel: 'Negligible Energy Usage',
    principle: 'Pre-approved, identity-verified validators take turns producing blocks; reputation and identity serve as the stake.',
    explanation: 'Proof of Authority (PoA) replaces economic or computational stakes with identity as the validator\'s collateral. A fixed set of approved validators — often institutions or known entities — take turns creating blocks in a round-robin fashion. If a validator acts maliciously, their real-world reputation is at stake, not just tokens or hardware.\n\nPoA is ideal for private consortium chains, supply chain networks, and enterprise applications where participants are known and trusted. VeChain uses a variant called Proof of Authority for its enterprise-focused blockchain. The trade-off is clear: high throughput and zero energy waste at the cost of permissionless participation.',
    steps: [
      'Known entities apply and are vetted to become validators',
      'Approved validators are added to the authority set',
      'Validators take turns producing blocks on a fixed schedule',
      'Transactions are validated and blocks are signed with validator keys',
      'Misbehaving validators are removed from the authority set',
      'New validators can be added through governance procedures'
    ],
    advantages: [
      'Extremely high throughput (100–10,000+ TPS)',
      'Near-zero energy consumption',
      'Fast block times (1–5 seconds)',
      'Suitable for enterprise and consortium deployments',
      'Regulatory compliance friendly with known validators'
    ],
    disadvantages: [
      'Not permissionless — validators are pre-selected',
      'Centralized trust in approved authorities',
      'Single point of failure if authorities collude',
      'Unsuitable for censorship-resistant applications',
      'Identity verification overhead for validator onboarding'
    ],
    useCases: [
      'Enterprise supply chain tracking (VeChain)',
      'Private consortium blockchains',
      'Testnets and development networks',
      'Government and institutional record-keeping'
    ],
    workflow: [
      { icon: 'fa-id-card', label: 'Verify Identity' },
      { icon: 'fa-user-check', label: 'Approve Validators' },
      { icon: 'fa-sync', label: 'Rotate Block Production' },
      { icon: 'fa-signature', label: 'Sign & Publish Block' },
      { icon: 'fa-gavel', label: 'Governance & Removal' }
    ],
    trilemma: { scalability: 9, security: 5, decentralization: 2 },
    metrics: {
      tps: { value: '~100–10000', explanation: 'VeChain achieves ~10,000 TPS; POA Network ~5 seconds per block with high throughput.' },
      blockTime: { value: '~1–5 sec', explanation: 'POA Network targets 5-second blocks; VeChain ~10 seconds.' },
      finality: { value: 'Instant', explanation: 'Blocks are final once signed by the designated authority — no probabilistic confirmation needed.' },
      energyEfficiency: { value: 'Excellent', explanation: 'Standard servers with no mining or staking overhead; minimal power draw.' },
      attackResistance51: { value: 'Low', explanation: 'A colluding majority of authorities can rewrite history trivially.' },
      sybilResistance: { value: 'High (permissioned)', explanation: 'Only pre-approved identities can validate; Sybil attacks are prevented by KYC.' },
      faultTolerance: { value: 'N/A', explanation: 'Not designed for Byzantine fault tolerance among untrusted parties.' },
      validationCost: { value: 'Very Low', explanation: 'Simple signature verification on consumer-grade hardware.' }
    },
    comparison: {
      security: 'Medium',
      scalability: 'Very High',
      decentralization: 'Very Low',
      energy: 'Negligible',
      tps: '~100–10000',
      blockTime: '1–5 sec',
      permissioned: 'Yes',
      permissionless: 'No',
      smartContracts: 'Full',
      networks: 'VeChain, POA Network'
    }
  },
  {
    id: 'poh',
    name: 'Proof of History',
    shortName: 'PoH',
    abbr: 'PoH',
    color: '#9945FF',
    inventor: 'Anatoly Yakovenko',
    year: 2017,
    category: 'Time-Ordering Consensus',
    permissionType: 'Permissionless',
    energyLevel: 'low',
    energyLabel: 'Low Energy Consumption',
    principle: 'A verifiable delay function creates a cryptographic clock, establishing transaction order before consensus, enabling parallel processing.',
    explanation: 'Proof of History (PoH) is a novel time-ordering technique pioneered by Solana. A designated leader runs a sequential hash function (SHA-256) over itself, producing a verifiable sequence of timestamps. This cryptographic clock allows the network to establish the order of events without all nodes communicating synchronously.\n\nPoH is typically combined with Proof of Stake (Tower BFT) for final consensus. By pre-ordering transactions, Solana enables parallel execution across multiple GPU cores, achieving theoretical throughputs of 65,000+ TPS. The main trade-offs are hardware requirements for validators and occasional network outages during high load.',
    steps: [
      'The slot leader generates a continuous PoH hash sequence (verifiable clock)',
      'Transactions are inserted into the PoH stream with timestamps',
      'The leader produces blocks ordered by the PoH sequence',
      'Validators vote on blocks using Tower BFT (PoS variant)',
      'Transactions are executed in parallel by the Sealevel runtime',
      'Blocks are finalized after supermajority validator votes'
    ],
    advantages: [
      'Extremely high throughput (3,000–65,000 TPS)',
      'Sub-second block times (~400 ms)',
      'Innovative parallel transaction processing (Sealevel)',
      'Low transaction fees (~$0.00025)',
      'Combines with PoS for economic security'
    ],
    disadvantages: [
      'High hardware requirements for validators (128 GB RAM, GPU)',
      'Network stability issues during congestion (multiple outages in 2022–2023)',
      'Centralization concerns due to validator hardware costs',
      'PoH alone does not provide consensus — requires PoS overlay',
      'Complex architecture harder to audit and verify'
    ],
    useCases: [
      'High-frequency DeFi and trading applications',
      'NFT marketplaces requiring low fees',
      'Real-time gaming and metaverse platforms',
      'Payment networks needing sub-second settlement'
    ],
    workflow: [
      { icon: 'fa-clock', label: 'Generate PoH Sequence' },
      { icon: 'fa-stream', label: 'Order Transactions' },
      { icon: 'fa-layer-group', label: 'Parallel Execution' },
      { icon: 'fa-vote-yea', label: 'Tower BFT Voting' },
      { icon: 'fa-bolt', label: 'Finalize Block' }
    ],
    trilemma: { scalability: 9, security: 7, decentralization: 5 },
    metrics: {
      tps: { value: '~3000–65000', explanation: 'Solana routinely handles 3,000+ TPS in practice; theoretical max ~65,000 TPS.' },
      blockTime: { value: '~400 ms', explanation: 'Solana targets 400-millisecond slot times with PoH-driven ordering.' },
      finality: { value: '~12 sec', explanation: 'Tower BFT provides optimistic confirmation in ~400 ms; full finality in ~12 seconds.' },
      energyEfficiency: { value: 'High', explanation: 'No mining; energy use comparable to other PoS systems despite high throughput.' },
      attackResistance51: { value: 'Medium-High', explanation: 'Requires controlling 1/3+ of staked SOL for safety violations; hardware barriers limit validator count.' },
      sybilResistance: { value: 'High', explanation: 'Stake requirements and hardware costs limit Sybil participation.' },
      faultTolerance: { value: '33%', explanation: 'Tower BFT tolerates up to 1/3 Byzantine validators.' },
      validationCost: { value: 'High', explanation: 'Validators need powerful hardware to keep up with PoH stream and parallel execution.' }
    },
    comparison: {
      security: 'Medium-High',
      scalability: 'Very High',
      decentralization: 'Medium',
      energy: 'Low',
      tps: '~3000–65000',
      blockTime: '~400 ms',
      permissioned: 'No',
      permissionless: 'Yes',
      smartContracts: 'Full',
      networks: 'Solana'
    }
  },
  {
    id: 'pbft',
    name: 'Practical Byzantine Fault Tolerance',
    shortName: 'PBFT',
    abbr: 'PBFT',
    color: '#2B5797',
    inventor: 'Miguel Castro & Barbara Liskov',
    year: 1999,
    category: 'Classical BFT Consensus',
    permissionType: 'Permissioned',
    energyLevel: 'none',
    energyLabel: 'Negligible Energy Usage',
    principle: 'Nodes exchange multi-round messages (pre-prepare, prepare, commit) to reach agreement despite up to f Byzantine (malicious) nodes in a set of 3f+1 replicas.',
    explanation: 'Practical Byzantine Fault Tolerance (PBFT) is a classical consensus algorithm designed for distributed systems where nodes may fail or act maliciously. It guarantees safety and liveness if fewer than one-third of nodes are Byzantine. The protocol proceeds in three phases: pre-prepare (leader proposes), prepare (nodes agree on sequence), and commit (nodes finalize).\n\nPBFT underpins Hyperledger Fabric\'s ordering service and Zilliqa\'s consensus within each shard. It provides instant finality with no forks, making it ideal for enterprise applications. However, message complexity is O(n²), limiting scalability to typically fewer than 100 nodes.',
    steps: [
      'A client sends a request to the primary (leader) node',
      'Primary broadcasts a pre-prepare message with the request',
      'Replicas broadcast prepare messages after validating the pre-prepare',
      'Once 2f+1 matching prepare messages are received, replicas send commit messages',
      'After 2f+1 commit messages, the request is executed and a reply is sent',
      'View change protocol replaces faulty primary nodes'
    ],
    advantages: [
      'Instant finality — no probabilistic confirmation needed',
      'Proven mathematical safety guarantees (BFT)',
      'Tolerates up to 1/3 malicious nodes',
      'No energy-intensive mining or staking',
      'Deterministic consensus with no chain forks'
    ],
    disadvantages: [
      'Poor scalability — O(n²) message complexity',
      'Requires permissioned, known validator set',
      'Leader bottleneck can reduce throughput',
      'Complex implementation and debugging',
      'Not suitable for large public networks'
    ],
    useCases: [
      'Enterprise permissioned blockchains (Hyperledger Fabric)',
      'Sharded blockchain consensus (Zilliqa)',
      'Financial settlement systems',
      'Inter-bank payment networks'
    ],
    workflow: [
      { icon: 'fa-paper-plane', label: 'Client Request' },
      { icon: 'fa-bullhorn', label: 'Pre-Prepare (Leader)' },
      { icon: 'fa-handshake', label: 'Prepare Phase' },
      { icon: 'fa-check-double', label: 'Commit Phase' },
      { icon: 'fa-reply', label: 'Execute & Reply' }
    ],
    trilemma: { scalability: 4, security: 9, decentralization: 3 },
    metrics: {
      tps: { value: '~100–2800', explanation: 'Hyperledger Fabric ~3,500 TPS in benchmarks; Zilliqa ~2,800 TPS across shards.' },
      blockTime: { value: '~1–60 sec', explanation: 'Fabric configurable; Zilliqa ~60 seconds per DS epoch block.' },
      finality: { value: 'Instant', explanation: 'Once commit phase completes, transactions are irreversibly finalized.' },
      energyEfficiency: { value: 'Excellent', explanation: 'Message-passing consensus with no wasteful computation.' },
      attackResistance51: { value: 'Very High', explanation: 'Safety guaranteed with <1/3 Byzantine nodes; different threat model than 51% hash.' },
      sybilResistance: { value: 'High (permissioned)', explanation: 'Only enrolled members participate; identity management prevents Sybils.' },
      faultTolerance: { value: '33%', explanation: 'Tolerates f Byzantine failures in a 3f+1 node network.' },
      validationCost: { value: 'Medium', explanation: 'Multiple message rounds per transaction increase per-node overhead.' }
    },
    comparison: {
      security: 'Very High',
      scalability: 'Low-Medium',
      decentralization: 'Low',
      energy: 'Negligible',
      tps: '~100–3500',
      blockTime: '1–60 sec',
      permissioned: 'Yes',
      permissionless: 'No',
      smartContracts: 'Full',
      networks: 'Hyperledger Fabric, Zilliqa'
    }
  }
];

export const BLOCKCHAINS = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    crypto: 'BTC',
    consensus: 'pow',
    consensusLabel: 'Proof of Work',
    year: 2009,
    founder: 'Satoshi Nakamoto',
    purpose: 'Decentralized peer-to-peer digital cash and store of value',
    reason: 'First successful implementation of blockchain and PoW, establishing the foundation for all subsequent cryptocurrencies.',
    tps: 7,
    blockTime: '10 min',
    website: 'https://bitcoin.org',
    color: '#F7931A',
    logoLetter: 'B'
  },
  {
    id: 'litecoin',
    name: 'Litecoin',
    crypto: 'LTC',
    consensus: 'pow',
    consensusLabel: 'Proof of Work',
    year: 2011,
    founder: 'Charlie Lee',
    purpose: 'Faster, lighter alternative to Bitcoin for everyday payments',
    reason: 'Uses Scrypt hashing and 2.5-minute blocks to offer quicker confirmations while maintaining PoW security.',
    tps: 56,
    blockTime: '2.5 min',
    website: 'https://litecoin.org',
    color: '#345D9D',
    logoLetter: 'L'
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    crypto: 'DOGE',
    consensus: 'pow',
    consensusLabel: 'Proof of Work',
    year: 2013,
    founder: 'Billy Markus & Jackson Palmer',
    purpose: 'Community-driven meme cryptocurrency for tipping and microtransactions',
    reason: 'Merged-mined with Litecoin, demonstrating PoW can support fun, community-oriented use cases.',
    tps: 33,
    blockTime: '1 min',
    website: 'https://dogecoin.com',
    color: '#C2A633',
    logoLetter: 'D'
  },
  {
    id: 'monero',
    name: 'Monero',
    crypto: 'XMR',
    consensus: 'pow',
    consensusLabel: 'Proof of Work',
    year: 2014,
    founder: 'Nicolas van Saberhagen',
    purpose: 'Privacy-focused cryptocurrency with untraceable transactions',
    reason: 'Uses RandomX PoW algorithm resistant to ASIC mining, promoting CPU-based decentralization and privacy.',
    tps: 15,
    blockTime: '2 min',
    website: 'https://www.getmonero.org',
    color: '#FF6600',
    logoLetter: 'M'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    crypto: 'ETH',
    consensus: 'pos',
    consensusLabel: 'Proof of Stake',
    year: 2015,
    founder: 'Vitalik Buterin',
    purpose: 'Decentralized world computer enabling smart contracts and dApps',
    reason: 'Transitioned from PoW to PoS (The Merge, 2022), hosting the largest DeFi and NFT ecosystems.',
    tps: 30,
    blockTime: '12 sec',
    website: 'https://ethereum.org',
    color: '#627EEA',
    logoLetter: 'E'
  },
  {
    id: 'cardano',
    name: 'Cardano',
    crypto: 'ADA',
    consensus: 'pos',
    consensusLabel: 'Proof of Stake (Ouroboros)',
    year: 2017,
    founder: 'Charles Hoskinson',
    purpose: 'Research-driven, peer-reviewed blockchain platform for secure smart contracts',
    reason: 'Ouroboros PoS protocol is the first provably secure PoS based on academic peer-reviewed research.',
    tps: 250,
    blockTime: '20 sec',
    website: 'https://cardano.org',
    color: '#0033AD',
    logoLetter: 'A'
  },
  {
    id: 'algorand',
    name: 'Algorand',
    crypto: 'ALGO',
    consensus: 'pos',
    consensusLabel: 'Pure Proof of Stake',
    year: 2019,
    founder: 'Silvio Micali',
    purpose: 'Borderless economy with instant finality and no forks',
    reason: 'Pure PoS with cryptographic sortition achieves ~1,000 TPS with immediate finality and no slashing.',
    tps: 1000,
    blockTime: '3.3 sec',
    website: 'https://algorand.com',
    color: '#000000',
    logoLetter: 'A'
  },
  {
    id: 'tezos',
    name: 'Tezos',
    crypto: 'XTZ',
    consensus: 'pos',
    consensusLabel: 'Liquid Proof of Stake',
    year: 2018,
    founder: 'Arthur & Kathleen Breitman',
    purpose: 'Self-amending blockchain with on-chain governance',
    reason: 'Liquid PoS allows token holders to delegate without locking funds; on-chain upgrades without hard forks.',
    tps: 40,
    blockTime: '30 sec',
    website: 'https://tezos.com',
    color: '#2C7DF7',
    logoLetter: 'T'
  },
  {
    id: 'eos',
    name: 'EOS',
    crypto: 'EOS',
    consensus: 'dpos',
    consensusLabel: 'Delegated Proof of Stake',
    year: 2018,
    founder: 'Daniel Larimer / Block.one',
    purpose: 'High-performance blockchain platform for commercial-scale dApps',
    reason: '21 elected block producers achieve ~4,000 TPS with 0.5-second block times via DPoS.',
    tps: 4000,
    blockTime: '0.5 sec',
    website: 'https://eosnetwork.com',
    color: '#443F54',
    logoLetter: 'E'
  },
  {
    id: 'tron',
    name: 'TRON',
    crypto: 'TRX',
    consensus: 'dpos',
    consensusLabel: 'Delegated Proof of Stake',
    year: 2017,
    founder: 'Justin Sun',
    purpose: 'Decentralized entertainment and content-sharing platform',
    reason: '27 Super Representatives produce blocks every 3 seconds, optimized for high-throughput dApps and stablecoins.',
    tps: 2000,
    blockTime: '3 sec',
    website: 'https://tron.network',
    color: '#FF0013',
    logoLetter: 'T'
  },
  {
    id: 'steem',
    name: 'Steem',
    crypto: 'STEEM',
    consensus: 'dpos',
    consensusLabel: 'Delegated Proof of Stake',
    year: 2016,
    founder: 'Daniel Larimer / Ned Scott',
    purpose: 'Blockchain-based social media and content rewards platform',
    reason: 'First major DPoS implementation rewarding content creators; predecessor to Hive blockchain.',
    tps: 1000,
    blockTime: '3 sec',
    website: 'https://steem.com',
    color: '#00D1B2',
    logoLetter: 'S'
  },
  {
    id: 'vechain',
    name: 'VeChain',
    crypto: 'VET',
    consensus: 'poa',
    consensusLabel: 'Proof of Authority',
    year: 2018,
    founder: 'Sunny Lu',
    purpose: 'Enterprise supply chain management and business process blockchain',
    reason: '101 authority masternodes validated by known enterprises enable ~10,000 TPS for supply chain tracking.',
    tps: 10000,
    blockTime: '10 sec',
    website: 'https://www.vechain.org',
    color: '#15BDFF',
    logoLetter: 'V'
  },
  {
    id: 'poa-network',
    name: 'POA Network',
    crypto: 'POA',
    consensus: 'poa',
    consensusLabel: 'Proof of Authority',
    year: 2017,
    founder: 'POA Network Team',
    purpose: 'Ethereum-compatible sidechain with fast, inexpensive transactions',
    reason: 'Open, permissioned network where US notaries serve as validators for an EVM-compatible chain.',
    tps: 200,
    blockTime: '5 sec',
    website: 'https://www.poa.network',
    color: '#5B6DEE',
    logoLetter: 'P'
  },
  {
    id: 'solana',
    name: 'Solana',
    crypto: 'SOL',
    consensus: 'poh',
    consensusLabel: 'Proof of History + PoS',
    year: 2020,
    founder: 'Anatoly Yakovenko',
    purpose: 'High-performance blockchain for scalable decentralized applications',
    reason: 'PoH cryptographic clock combined with Tower BFT enables 3,000+ TPS with sub-second confirmation.',
    tps: 3000,
    blockTime: '400 ms',
    website: 'https://solana.com',
    color: '#9945FF',
    logoLetter: 'S'
  },
  {
    id: 'hyperledger-fabric',
    name: 'Hyperledger Fabric',
    crypto: 'N/A',
    consensus: 'pbft',
    consensusLabel: 'PBFT (Raft/Kafka ordering)',
    year: 2016,
    founder: 'Linux Foundation',
    purpose: 'Modular enterprise blockchain framework for business solutions',
    reason: 'Permissioned PBFT-based ordering service used by IBM, Walmart, and hundreds of enterprise deployments.',
    tps: 3500,
    blockTime: 'Configurable',
    website: 'https://www.hyperledger.org/use/fabric',
    color: '#2B5797',
    logoLetter: 'H'
  },
  {
    id: 'zilliqa',
    name: 'Zilliqa',
    crypto: 'ZIL',
    consensus: 'pbft',
    consensusLabel: 'PBFT (within shards)',
    year: 2019,
    founder: 'Xinshu Dong & Prateek Saxena',
    purpose: 'High-throughput sharded blockchain using Scilla smart contract language',
    reason: 'Combines sharding with PBFT consensus within each shard to achieve ~2,800 TPS on a public network.',
    tps: 2800,
    blockTime: '60 sec',
    website: 'https://www.zilliqa.com',
    color: '#49C1BF',
    logoLetter: 'Z'
  }
];

export const SMART_CONTRACTS = [
  {
    blockchain: 'Bitcoin',
    consensus: 'pow',
    language: 'Bitcoin Script',
    compiler: 'N/A (interpreted)',
    devExperience: 2,
    codeLang: 'bitcoin-script',
    code: '// Pay-to-Public-Key-Hash (P2PKH) output script\nOP_DUP\nOP_HASH160\n<pubKeyHash>\nOP_EQUALVERIFY\nOP_CHECKSIG\n\n// Simple conditional: require 2-of-3 multisig\nOP_2\n<pubKey1> <pubKey2> <pubKey3>\nOP_3\nOP_CHECKMULTISIG'
  },
  {
    blockchain: 'Ethereum',
    consensus: 'pos',
    language: 'Solidity',
    compiler: 'solc (Solidity Compiler)',
    devExperience: 5,
    codeLang: 'solidity',
    code: '// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\n\ncontract SimpleStorage {\n    uint256 private storedValue;\n    address public owner;\n\n    event ValueChanged(uint256 newValue);\n\n    constructor() {\n        owner = msg.sender;\n    }\n\n    function set(uint256 value) external {\n        require(msg.sender == owner, "Not owner");\n        storedValue = value;\n        emit ValueChanged(value);\n    }\n\n    function get() external view returns (uint256) {\n        return storedValue;\n    }\n}'
  },
  {
    blockchain: 'Cardano',
    consensus: 'pos',
    language: 'Plutus (Haskell-based)',
    compiler: 'GHC + Plutus Tx plugin',
    devExperience: 3,
    codeLang: 'haskell',
    code: '{-# INLINABLE mkValidator #-}\nmkValidator :: BuiltinData -> BuiltinData -> BuiltinData -> ()\nmkValidator _ _ _ = ()\n\nvalidator :: Validator\nvalidator = mkValidatorScript $$(PlutusTx.compile [|| mkValidator ||])\n\n-- Spending script that always succeeds\nspendScript :: PlutusScript PlutusV2\nspendScript = PlutusScriptSerialised $ SBS.toShort $ LBS.toStrict $ serialise validator'
  },
  {
    blockchain: 'EOS',
    consensus: 'dpos',
    language: 'C++',
    compiler: 'eosio-cpp (CDT)',
    devExperience: 3,
    codeLang: 'cpp',
    code: '#include <eosio/eosio.hpp>\n\nclass [[eosio::contract]] hello : public eosio::contract {\n  public:\n    using eosio::contract::contract;\n\n    [[eosio::action]]\n    void hi(eosio::name to, std::string message) {\n      require_auth(to);\n      print("Hello, ", message);\n    }\n\n    [[eosio::action]]\n    void transfer(eosio::name from, eosio::name to, uint64_t amount) {\n      require_auth(from);\n      // Transfer logic here\n    }\n};'
  },
  {
    blockchain: 'TRON',
    consensus: 'dpos',
    language: 'Solidity (TVM-compatible)',
    compiler: 'solc + TronBox',
    devExperience: 4,
    codeLang: 'solidity',
    code: '// SPDX-License-Identifier: MIT\npragma solidity ^0.8.6;\n\ncontract TRC20Token {\n    string public name = "MyToken";\n    string public symbol = "MTK";\n    uint8 public decimals = 6;\n    uint256 public totalSupply;\n    mapping(address => uint256) public balanceOf;\n\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    constructor(uint256 _initialSupply) {\n        totalSupply = _initialSupply * 10 ** uint256(decimals);\n        balanceOf[msg.sender] = totalSupply;\n    }\n\n    function transfer(address to, uint256 value) public returns (bool) {\n        require(balanceOf[msg.sender] >= value);\n        balanceOf[msg.sender] -= value;\n        balanceOf[to] += value;\n        emit Transfer(msg.sender, to, value);\n        return true;\n    }\n}'
  },
  {
    blockchain: 'VeChain',
    consensus: 'poa',
    language: 'Solidity (EVM-compatible)',
    compiler: 'solc',
    devExperience: 4,
    codeLang: 'solidity',
    code: '// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract SupplyChain {\n    struct Product {\n        string name;\n        address manufacturer;\n        uint256 timestamp;\n        bool verified;\n    }\n\n    mapping(bytes32 => Product) public products;\n\n    event ProductRegistered(bytes32 indexed id, string name);\n\n    function registerProduct(bytes32 id, string calldata name) external {\n        products[id] = Product(name, msg.sender, block.timestamp, true);\n        emit ProductRegistered(id, name);\n    }\n}'
  },
  {
    blockchain: 'Solana',
    consensus: 'poh',
    language: 'Rust (Anchor framework)',
    compiler: 'cargo build-sbf / Anchor CLI',
    devExperience: 4,
    codeLang: 'rust',
    code: 'use anchor_lang::prelude::*;\n\ndeclare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");\n\n#[program]\npub mod counter {\n    use super::*;\n\n    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {\n        let counter = &mut ctx.accounts.counter;\n        counter.count = 0;\n        Ok(())\n    }\n\n    pub fn increment(ctx: Context<Increment>) -> Result<()> {\n        let counter = &mut ctx.accounts.counter;\n        counter.count += 1;\n        Ok(())\n    }\n}\n\n#[account]\npub struct Counter {\n    pub count: u64,\n}'
  },
  {
    blockchain: 'Hyperledger Fabric',
    consensus: 'pbft',
    language: 'Go (Chaincode)',
    compiler: 'go build',
    devExperience: 3,
    codeLang: 'go',
    code: 'package main\n\nimport (\n\t"github.com/hyperledger/fabric-contract-api-go/contractapi"\n)\n\ntype SmartContract struct {\n\tcontractapi.Contract\n}\n\ntype Asset struct {\n\tID    string `json:"ID"`\n\tValue int    `json:"Value"`\n\tOwner string `json:"Owner"`\n}\n\nfunc (s *SmartContract) CreateAsset(ctx contractapi.TransactionContextInterface, id string, value int) error {\n\texists, err := s.AssetExists(ctx, id)\n\tif err != nil { return err }\n\tif exists { return fmt.Errorf("asset %s already exists", id) }\n\tasset := Asset{ID: id, Value: value, Owner: "Org1"}\n\treturn ctx.GetStub().PutState(id, assetJSON)\n}'
  },
  {
    blockchain: 'Zilliqa',
    consensus: 'pbft',
    language: 'Scilla',
    compiler: 'scilla-compiler (0.11.0)',
    devExperience: 2,
    codeLang: 'scilla',
    code: 'scilla_version 0\n\nimport ListUtils\n\ncontract SimpleContract\n(\n  owner: ByStr20,\n  mutable balance: Uint128\n)\n\nfield counter: Uint32 = Uint32 0\n\nprocedure Increment()\n  counter := counter + Uint32 1\nend\n\ntransition SetBalance(val: Uint128)\n  is_owner = builtin eq _sender owner;\n  match is_owner with\n  | True =>\n    balance := val;\n    Increment\n  | False =>\n    e = { _exception: "NotOwner" };\n    throw e\n  end\nend'
  }
];

export const LAYER_DATA = [
  {
    blockchain: 'Bitcoin',
    layer: 'L1',
    reason: 'Base layer blockchain with its own consensus, native token, and full node network',
    relationship: 'Foundation layer — all Bitcoin L2 solutions (Lightning Network) build on top'
  },
  {
    blockchain: 'Ethereum',
    layer: 'L1',
    reason: 'Primary smart contract platform with independent PoS consensus and global state',
    relationship: 'Settlement layer for rollups (Arbitrum, Optimism, zkSync) and sidechains'
  },
  {
    blockchain: 'Solana',
    layer: 'L1',
    reason: 'Independent high-throughput blockchain with PoH consensus and native SOL token',
    relationship: 'Standalone L1; some bridges connect to Ethereum but Solana is not an L2'
  },
  {
    blockchain: 'Cardano',
    layer: 'L1',
    reason: 'Self-contained PoS blockchain with Ouroboros consensus and native ADA',
    relationship: 'Independent L1; Hydra scaling solution acts as L2 on top of Cardano'
  },
  {
    blockchain: 'Arbitrum',
    layer: 'L2',
    reason: 'Optimistic rollup that batches transactions off-chain and settles on Ethereum',
    relationship: 'L2 scaling solution inheriting Ethereum security via fraud proofs'
  },
  {
    blockchain: 'Polygon (Matic)',
    layer: 'L2',
    reason: 'Sidechain/rollup hybrid providing faster, cheaper transactions than Ethereum mainnet',
    relationship: 'L2/sidechain connected to Ethereum via bridges and periodic checkpoints'
  },
  {
    blockchain: 'Lightning Network',
    layer: 'L2',
    reason: 'Payment channel network enabling instant, low-fee Bitcoin micropayments off-chain',
    relationship: 'L2 built on Bitcoin — channels settle to Bitcoin mainnet when closed'
  },
  {
    blockchain: 'Optimism',
    layer: 'L2',
    reason: 'Optimistic rollup using Ethereum for data availability and dispute resolution',
    relationship: 'L2 rollup posting compressed transaction data to Ethereum L1'
  },
  {
    blockchain: 'zkSync',
    layer: 'L2',
    reason: 'ZK-rollup using zero-knowledge proofs for validity without fraud proof delays',
    relationship: 'L2 validity rollup with cryptographic proofs verified on Ethereum'
  },
  {
    blockchain: 'Hyperledger Fabric',
    layer: 'L1',
    reason: 'Permissioned enterprise blockchain with its own PBFT ordering and channel architecture',
    relationship: 'Private L1 for consortium use — not built on a public chain'
  }
];

export const TIMELINE_EVENTS = [
  {
    year: 2008,
    title: 'Bitcoin Whitepaper Published',
    description: 'Satoshi Nakamoto releases "Bitcoin: A Peer-to-Peer Electronic Cash System," introducing Proof of Work consensus and the blockchain data structure.',
    algorithmId: 'pow'
  },
  {
    year: 2009,
    title: 'Bitcoin Genesis Block Mined',
    description: 'The Bitcoin network launches with the mining of block #0 (Genesis Block) on January 3, 2009, marking the birth of decentralized cryptocurrency.',
    algorithmId: 'pow'
  },
  {
    year: 2012,
    title: 'Proof of Stake Introduced',
    description: 'Sunny King and Scott Nadal publish the Peercoin whitepaper, introducing Proof of Stake as an energy-efficient alternative to Proof of Work.',
    algorithmId: 'pos'
  },
  {
    year: 2014,
    title: 'Delegated Proof of Stake Created',
    description: 'Daniel Larimer introduces DPoS with BitShares, pioneering elected delegate block production for higher throughput.',
    algorithmId: 'dpos'
  },
  {
    year: 2015,
    title: 'Ethereum Mainnet Launches',
    description: 'Vitalik Buterin\'s Ethereum goes live with PoW consensus, introducing Turing-complete smart contracts to blockchain.',
    algorithmId: 'pow'
  },
  {
    year: 2017,
    title: 'Proof of Authority & Proof of History',
    description: 'Gavin Wood proposes Proof of Authority for enterprise chains. Anatoly Yakovenko publishes the Solana whitepaper introducing Proof of History.',
    algorithmId: 'poa'
  },
  {
    year: 2018,
    title: 'EOS and DPoS Mainstream Adoption',
    description: 'EOS raises $4 billion in ICO and launches with 21 block producers, demonstrating DPoS at commercial scale.',
    algorithmId: 'dpos'
  },
  {
    year: 2020,
    title: 'Solana Mainnet Beta Launch',
    description: 'Solana launches with Proof of History combined with Tower BFT, achieving thousands of TPS on a public network.',
    algorithmId: 'poh'
  },
  {
    year: 2022,
    title: 'The Ethereum Merge',
    description: 'Ethereum completes its transition from Proof of Work to Proof of Stake, reducing energy consumption by ~99.95%.',
    algorithmId: 'pos'
  },
  {
    year: 2022,
    title: 'Hyperledger Fabric 2.x Maturity',
    description: 'Hyperledger Fabric reaches enterprise maturity with PBFT-based ordering, adopted by Walmart, IBM, and global supply chains.',
    algorithmId: 'pbft'
  },
  {
    year: 2024,
    title: 'Multi-Consensus Era',
    description: 'The blockchain ecosystem matures with diverse consensus mechanisms coexisting — PoW for store of value, PoS for smart contracts, PoH for speed, and PBFT for enterprise.',
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: 'Which consensus mechanism does Bitcoin use to validate transactions and create new blocks?',
    options: ['Proof of Stake', 'Proof of Work', 'Delegated Proof of Stake', 'Proof of Authority'],
    correct: 1,
    explanation: 'Bitcoin uses Proof of Work (PoW), where miners compete to solve cryptographic hash puzzles. The first to find a valid nonce earns the right to add the next block.'
  },
  {
    question: 'What is the primary advantage of Proof of Stake over Proof of Work?',
    options: ['Higher decentralization', 'Lower energy consumption', 'Simpler implementation', 'Better Sybil resistance'],
    correct: 1,
    explanation: 'PoS dramatically reduces energy consumption by replacing computational mining with stake-based validator selection. Ethereum\'s Merge reduced energy use by ~99.95%.'
  },
  {
    question: 'In Delegated Proof of Stake (DPoS), who produces blocks?',
    options: ['All token holders equally', 'A randomly selected single validator', 'Elected delegates or block producers', 'Government-approved authorities'],
    correct: 2,
    explanation: 'DPoS uses token-holder voting to elect a small set of delegates (e.g., 21 on EOS, 27 on TRON) who take turns producing blocks.'
  },
  {
    question: 'What does the Blockchain Trilemma describe?',
    options: [
      'The trade-off between speed, cost, and privacy',
      'The difficulty of simultaneously achieving scalability, security, and decentralization',
      'The choice between public and private blockchains',
      'The balance between miners and validators'
    ],
    correct: 1,
    explanation: 'Coined by Vitalik Buterin, the Blockchain Trilemma states that a network can optimize for at most two of three properties: scalability, security, and decentralization.'
  },
  {
    question: 'How many Byzantine faulty nodes can PBFT tolerate in a network of 3f+1 nodes?',
    options: ['Up to f nodes (one-third)', 'Up to f+1 nodes (one-third plus one)', 'Up to 50% of nodes', 'Up to 2f nodes (two-thirds)'],
    correct: 0,
    explanation: 'PBFT guarantees safety and liveness with up to f Byzantine (malicious) nodes in a network of 3f+1 total nodes, meaning it tolerates fewer than one-third failures.'
  },
  {
    question: 'What is Proof of History primarily used for in Solana?',
    options: [
      'Replacing Proof of Stake entirely',
      'Creating a verifiable cryptographic clock for transaction ordering',
      'Encrypting transaction data for privacy',
      'Selecting validators by historical performance'
    ],
    correct: 1,
    explanation: 'Proof of History generates a verifiable sequence of timestamps via continuous SHA-256 hashing, establishing event order before consensus and enabling parallel processing.'
  },
  {
    question: 'What happens to a validator\'s stake in Proof of Stake if they act maliciously?',
    options: ['Nothing — stake is returned', 'Slashing — a portion of stake is destroyed', 'Stake is transferred to the attacker', 'The validator is temporarily banned only'],
    correct: 1,
    explanation: 'Slashing is a penalty mechanism where malicious or negligent validators lose a portion of their staked cryptocurrency, creating economic disincentives for bad behavior.'
  },
  {
    question: 'Which type of blockchain is Hyperledger Fabric designed for?',
    options: ['Public permissionless networks', 'Enterprise permissioned consortiums', 'Decentralized social media', 'High-frequency trading only'],
    correct: 1,
    explanation: 'Hyperledger Fabric is a permissioned enterprise blockchain framework using PBFT-based ordering, designed for business consortiums with known participants.'
  },
  {
    question: 'Approximately how many transactions per second can the Bitcoin network process?',
    options: ['~7 TPS', '~100 TPS', '~1,000 TPS', '~10,000 TPS'],
    correct: 0,
    explanation: 'Bitcoin processes approximately 7 transactions per second due to its 1 MB block size limit and ~10-minute block interval.'
  },
  {
    question: 'What is a 51% attack in Proof of Work?',
    options: [
      'When 51% of users disagree on a fork',
      'When an entity controls majority hash power to rewrite blockchain history',
      'When 51 validators collude in Proof of Stake',
      'When the network reaches 51% uptime'
    ],
    correct: 1,
    explanation: 'A 51% attack occurs when a single entity controls more than half the network\'s mining hash rate, allowing them to double-spend coins and censor transactions.'
  }
];

export const GLOSSARY = [
  {
    term: 'Nonce',
    definition: 'A number used once in cryptographic operations. In PoW mining, miners increment the nonce to find a hash below the difficulty target.'
  },
  {
    term: 'Validator',
    definition: 'A node in Proof of Stake networks responsible for proposing and attesting to blocks. Validators must stake cryptocurrency as collateral.'
  },
  {
    term: 'Miner',
    definition: 'A participant in Proof of Work networks who uses computational power to solve hash puzzles and create new blocks in exchange for block rewards.'
  },
  {
    term: 'Node',
    definition: 'A computer running blockchain software that maintains a copy of the ledger, validates transactions, and participates in network consensus.'
  },
  {
    term: 'Hash',
    definition: 'A fixed-size cryptographic output produced by a hash function (e.g., SHA-256). Any change to input data produces a completely different hash.'
  },
  {
    term: 'Ledger',
    definition: 'The complete record of all transactions on a blockchain, distributed across all network nodes and immutable once confirmed.'
  },
  {
    term: 'Fork',
    definition: 'A divergence in the blockchain where two or more valid chains exist. Can be temporary (orphaned blocks) or permanent (hard/soft forks).'
  },
  {
    term: 'TPS',
    definition: 'Transactions Per Second — a measure of blockchain throughput indicating how many transactions the network can process each second.'
  },
  {
    term: 'Gas Fee',
    definition: 'A fee paid to compensate validators or miners for processing transactions and executing smart contract operations on a blockchain.'
  },
  {
    term: 'Consensus',
    definition: 'The mechanism by which distributed nodes agree on the state of the blockchain without relying on a central authority.'
  },
  {
    term: 'Smart Contract',
    definition: 'Self-executing code deployed on a blockchain that automatically enforces agreement terms when predefined conditions are met.'
  },
  {
    term: 'Block',
    definition: 'A container of validated transactions linked to the previous block via cryptographic hash, forming the blockchain data structure.'
  },
  {
    term: 'Mempool',
    definition: 'The memory pool where unconfirmed transactions wait before being selected by a miner or validator and included in a block.'
  },
  {
    term: '51% Attack',
    definition: 'An attack where an entity gains majority control of mining hash power (PoW) or staked tokens (PoS) to manipulate the blockchain.'
  },
  {
    term: 'Slashing',
    definition: 'A penalty in Proof of Stake where a validator loses a portion of staked tokens for malicious behavior or protocol violations.'
  },
  {
    term: 'Finality',
    definition: 'The guarantee that a transaction or block cannot be reversed or altered. Ranges from probabilistic (PoW) to instant (PBFT).'
  },
  {
    term: 'Sharding',
    definition: 'A scalability technique that partitions the blockchain into parallel shards, each processing a subset of transactions independently.'
  },
  {
    term: 'Byzantine Fault',
    definition: 'A failure mode where nodes may act maliciously or send conflicting information. BFT algorithms tolerate up to 1/3 Byzantine nodes.'
  }
];

export const REFERENCES = [
  {
    title: 'Bitcoin Whitepaper',
    description: 'Satoshi Nakamoto\'s original 2008 paper introducing Bitcoin and Proof of Work consensus.',
    url: 'https://bitcoin.org/bitcoin.pdf',
    icon: 'fa-file-pdf',
    color: '#F7931A'
  },
  {
    title: 'Ethereum Whitepaper',
    description: 'Vitalik Buterin\'s 2013 paper describing a next-generation smart contract platform.',
    url: 'https://ethereum.org/en/whitepaper/',
    icon: 'fa-file-alt',
    color: '#627EEA'
  },
  {
    title: 'Practical Byzantine Fault Tolerance',
    description: 'Castro and Liskov\'s 1999 academic paper defining the PBFT consensus algorithm.',
    url: 'https://pmg.csail.mit.edu/papers/osdi99.pdf',
    icon: 'fa-graduation-cap',
    color: '#2B5797'
  },
  {
    title: 'Solana Whitepaper',
    description: 'Anatoly Yakovenko\'s paper on Proof of History and high-performance blockchain architecture.',
    url: 'https://solana.com/solana-whitepaper.pdf',
    icon: 'fa-bolt',
    color: '#9945FF'
  },
  {
    title: 'Hyperledger Fabric Documentation',
    description: 'Official documentation for the enterprise-grade permissioned blockchain framework.',
    url: 'https://hyperledger-fabric.readthedocs.io/',
    icon: 'fa-book',
    color: '#2B5797'
  },
  {
    title: 'Cardano Ouroboros Paper',
    description: 'Peer-reviewed academic paper on the provably secure Ouroboros Proof of Stake protocol.',
    url: 'https://iohk.io/en/research/library/papers/ouroboros-a-provably-secure-proof-of-stake-blockchain-protocol/',
    icon: 'fa-university',
    color: '#0033AD'
  },
  {
    title: 'Ethereum Proof-of-Stake Consensus Specs',
    description: 'Official Ethereum consensus layer specifications after The Merge transition.',
    url: 'https://github.com/ethereum/consensus-specs',
    icon: 'fa-code-branch',
    color: '#627EEA'
  },
  {
    title: 'Blockchain Trilemma — Ethereum.org',
    description: 'Educational resource explaining the scalability, security, and decentralization trade-offs.',
    url: 'https://ethereum.org/en/developers/docs/scaling/',
    icon: 'fa-balance-scale',
    color: '#627EEA'
  }
];
