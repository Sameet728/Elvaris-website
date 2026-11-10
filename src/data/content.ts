import { Brain, Database, LineChart, Shield, Cpu, Cog, FlaskConical, BarChart3, BookOpen, Code2, Layers, GitBranch, Target, Microscope, Lightbulb, Workflow } from 'lucide-react';

// ===== RESEARCH DATA =====

export const researchAreas = [
  {
    id: '01',
    slug: 'quantitative-research',
    title: 'Quantitative Research',
    shortDescription: 'Research into systematic methods for studying market behavior.',
    description: 'Quantitative research applies mathematical and statistical methods to financial data, seeking to identify patterns, relationships, and structures that can be systematically studied and validated.',
    icon: 'LineChart',
    color: '#7C5CFC',
    sections: {
      whyItMatters: 'Quantitative methods bring discipline and rigor to the study of financial markets. Rather than relying on intuition or anecdote, quantitative research uses data, mathematics, and statistical frameworks to evaluate hypotheses about market behavior.',
      researchQuestions: [
        'How can systematic approaches reduce human bias in market analysis?',
        'What statistical frameworks best capture different market regimes?',
        'How do we measure the robustness of a quantitative finding?',
        'What is the relationship between data quality and research reliability?',
      ],
      methods: [
        'Time-series analysis and decomposition',
        'Statistical hypothesis testing',
        'Monte Carlo simulation',
        'Regime detection algorithms',
        'Factor analysis and decomposition',
        'Correlation and cointegration studies',
      ],
      experiments: 'Current experiments focus on comparing different statistical frameworks for identifying market regimes and evaluating the stability of quantitative findings across different time periods and market conditions.',
      validation: 'All quantitative findings are validated through out-of-sample testing, walk-forward analysis, and cross-validation procedures. Results that cannot be reproduced under controlled conditions are flagged and re-examined.',
      relatedProjects: ['autonomous-strategy-research', 'market-data-engine'],
    },
  },
  {
    id: '02',
    slug: 'artificial-intelligence',
    title: 'AI & Machine Learning',
    shortDescription: 'Exploring supervised learning, ensemble methods, feature engineering, and model evaluation.',
    description: 'Research into how artificial intelligence and machine learning techniques can be applied to financial data analysis, including supervised learning, unsupervised pattern discovery, feature engineering, and rigorous model evaluation.',
    icon: 'Brain',
    color: '#4F8CFF',
    sections: {
      whyItMatters: 'Machine learning offers tools for discovering complex, non-linear relationships in data that traditional statistical methods may miss. However, applying ML to financial data requires careful attention to overfitting, data leakage, and proper validation methodology.',
      researchQuestions: [
        'Which machine learning architectures are most robust for financial time-series?',
        'How can feature engineering improve model performance without introducing bias?',
        'What evaluation metrics best capture real-world model utility?',
        'How do we prevent overfitting in low signal-to-noise environments?',
      ],
      methods: [
        'Gradient boosting (XGBoost, LightGBM)',
        'Random forests and ensemble methods',
        'Feature importance analysis (SHAP, permutation)',
        'Temporal cross-validation',
        'Hyperparameter optimization',
        'Model interpretability techniques',
      ],
      experiments: 'Research in progress. Current work focuses on comparing ensemble methods for time-series classification tasks and developing robust feature engineering pipelines.',
      validation: 'Models are evaluated using temporal train-test splits, walk-forward validation, and out-of-sample testing. We report multiple metrics including precision, recall, and calibration alongside standard accuracy measures.',
      relatedProjects: ['gold-ai-strategy-lab', 'ai-research-assistant'],
    },
  },
  {
    id: '03',
    slug: 'market-data',
    title: 'Market Data',
    shortDescription: 'Research into historical market data, data quality, normalization, and multi-timeframe datasets.',
    description: 'Understanding the characteristics, limitations, and proper handling of financial market data is fundamental to any quantitative research. This area focuses on data sourcing, cleaning, normalization, and quality assessment.',
    icon: 'Database',
    color: '#34D399',
    sections: {
      whyItMatters: 'The quality and integrity of market data directly impacts the reliability of any research built upon it. Understanding data limitations, biases, and proper preprocessing is essential for producing trustworthy results.',
      researchQuestions: [
        'How does data quality affect backtesting reliability?',
        'What normalization methods preserve the most useful information?',
        'How should missing data be handled in different research contexts?',
        'What are the implications of survivorship bias in historical datasets?',
      ],
      methods: [
        'Data quality scoring and validation',
        'Multi-source data reconciliation',
        'Missing data imputation strategies',
        'Outlier detection and handling',
        'Timeframe aggregation methods',
        'Survivorship bias correction',
      ],
      experiments: 'Ongoing research comparing different data normalization approaches and their impact on downstream model performance. Also investigating automated data quality assessment pipelines.',
      validation: 'Data quality is assessed through statistical profiling, cross-source validation, and automated anomaly detection. All datasets are documented with known limitations and potential biases.',
      relatedProjects: ['market-data-engine'],
    },
  },
  {
    id: '04',
    slug: 'strategy-research',
    title: 'Strategy Research',
    shortDescription: 'Systematic generation, testing, evaluation, and validation of trading hypotheses.',
    description: 'Strategy research encompasses the full lifecycle of developing, testing, and validating systematic trading hypotheses. This includes hypothesis generation, backtesting, performance evaluation, and robustness analysis.',
    icon: 'FlaskConical',
    color: '#FBBF24',
    sections: {
      whyItMatters: 'The systematic evaluation of trading hypotheses requires rigorous methodology to avoid common pitfalls such as overfitting, data mining bias, and unrealistic assumptions about execution. Proper strategy research separates genuine signals from noise.',
      researchQuestions: [
        'How can we systematically generate and evaluate trading hypotheses?',
        'What validation procedures best identify overfit strategies?',
        'How should transaction costs and slippage be modeled?',
        'What is the minimum data requirement for reliable strategy evaluation?',
      ],
      methods: [
        'Hypothesis-driven strategy development',
        'Walk-forward optimization',
        'Monte Carlo permutation testing',
        'Transaction cost analysis',
        'Regime-aware backtesting',
        'Multi-market validation',
      ],
      experiments: 'Research in progress. Current focus on developing frameworks for automated hypothesis generation and evaluation, with emphasis on preventing overfitting and ensuring out-of-sample validity.',
      validation: 'Strategies are evaluated through multiple independent validation procedures including walk-forward testing, out-of-sample holdout, and Monte Carlo simulation of returns.',
      relatedProjects: ['autonomous-strategy-research', 'gold-ai-strategy-lab'],
    },
  },
  {
    id: '05',
    slug: 'validation',
    title: 'Risk & Validation',
    shortDescription: 'Research into drawdown, robustness, overfitting, walk-forward testing, and out-of-sample behavior.',
    description: 'Risk and validation research focuses on methods for assessing the robustness of quantitative findings and managing the risks associated with systematic strategies, including overfitting detection, drawdown analysis, and stress testing.',
    icon: 'Shield',
    color: '#F87171',
    sections: {
      whyItMatters: 'Without rigorous validation, it is impossible to distinguish between genuine market insights and statistical artifacts. Risk and validation research provides the frameworks needed to assess the reliability and robustness of quantitative research findings.',
      researchQuestions: [
        'How can we detect and prevent overfitting in quantitative research?',
        'What stress testing methods best reveal strategy vulnerabilities?',
        'How should risk metrics be calculated for realistic performance assessment?',
        'What role does regime change play in strategy degradation?',
      ],
      methods: [
        'Walk-forward testing',
        'Out-of-sample validation',
        'Cross-validation for time series',
        'Monte Carlo simulation',
        'Drawdown analysis',
        'Sensitivity analysis',
      ],
      experiments: 'Ongoing research comparing different validation frameworks and their effectiveness at detecting overfit strategies. Also studying the relationship between validation rigor and out-of-sample performance.',
      validation: 'Validation methodologies are themselves validated through simulation studies using known data-generating processes, allowing us to measure the detection rate and false positive rate of each approach.',
      relatedProjects: ['autonomous-strategy-research'],
    },
  },
  {
    id: '06',
    slug: 'research-infrastructure',
    title: 'Research Infrastructure',
    shortDescription: 'Tools and systems designed to automate repetitive research workflows.',
    description: 'Research infrastructure encompasses the tools, pipelines, and systems that support quantitative research workflows. This includes experiment tracking, data pipelines, automated validation, and reproducibility frameworks.',
    icon: 'Cog',
    color: '#9AA3AF',
    sections: {
      whyItMatters: 'Efficient, reproducible research requires robust infrastructure. By automating repetitive tasks and standardizing workflows, researchers can focus on hypothesis development and analysis rather than data wrangling and pipeline management.',
      researchQuestions: [
        'How can research workflows be automated without sacrificing flexibility?',
        'What experiment tracking approaches best support reproducibility?',
        'How should research pipelines handle different data sources and formats?',
        'What is the optimal architecture for scalable research computation?',
      ],
      methods: [
        'Pipeline automation and orchestration',
        'Experiment tracking and versioning',
        'Containerized research environments',
        'Automated reporting and visualization',
        'Configuration management',
        'Reproducibility frameworks',
      ],
      experiments: 'Current work focuses on building modular, extensible research pipelines that can be easily adapted to different research questions and data sources.',
      validation: 'Infrastructure components are validated through integration testing, performance benchmarking, and user acceptance testing. Reproducibility is verified through automated pipeline re-execution.',
      relatedProjects: ['market-data-engine', 'ai-research-assistant'],
    },
  },
];

// ===== PROJECTS DATA =====

export const projects = [
  {
    id: '01',
    slug: 'autonomous-strategy-research',
    title: 'Autonomous Strategy Research Lab',
    description: 'An experimental research environment designed to automate parts of quantitative strategy discovery, testing, and validation.',
    status: 'In Development',
    tags: ['Quantitative Research', 'Automation', 'Backtesting', 'Validation'],
    overview: 'The Autonomous Strategy Research Lab is an experimental environment exploring how components of the quantitative strategy research process can be systematically automated. The goal is not to remove human judgment, but to augment the researcher\'s ability to explore hypothesis spaces more efficiently.',
    researchQuestion: 'Can systematic automation of strategy hypothesis generation, backtesting, and validation produce more robust and less biased research outcomes compared to purely manual approaches?',
    architecture: 'The system is built around a modular pipeline architecture with interchangeable components for hypothesis generation, data preprocessing, backtesting, and validation. Each component communicates through standardized interfaces, allowing researchers to swap implementations without disrupting the overall workflow.',
    dataset: 'Historical market data spanning multiple asset classes and timeframes. Exact dataset specifications are documented within each experiment.',
    methodology: 'The lab uses a hypothesis-driven approach where each strategy idea is formulated as a testable hypothesis with predefined success criteria. Automated pipelines then generate backtests, apply validation procedures, and produce standardized reports for human review.',
    results: 'Research in progress.',
    limitations: 'Automated systems may miss qualitative insights that experienced researchers would catch. The quality of automated research is bounded by the quality of the data and the hypothesis space being explored.',
    futureWork: 'Expanding the hypothesis generation capabilities, improving the validation framework, and exploring the use of machine learning for hypothesis prioritization.',
  },
  {
    id: '02',
    slug: 'etflytics',
    link: 'https://etflytics.elvariscapital.in/',
    title: 'ETFlytics',
    description: 'A quantitative ETF research platform for analyzing fund composition, performance, exposures, and cross-ETF overlap through structured holdings and market data. Access the live platform at etflytics.elvariscapital.in.',
    status: 'Active',
    tags: ['ETF Analytics', 'Quantitative Research', 'Portfolio Analysis', 'Market Data'],
    overview: 'ETFlytics provides institutional-grade analytics on exchange-traded funds, focusing on deep structural understanding of overlapping holdings and portfolio exposures.',
    researchQuestion: 'How can we systematically identify and quantify hidden risks and overlapping exposures across large numbers of ETFs?',
    architecture: 'A cloud-native data engine that automatically ingests, normalizes, and analyzes ETF holdings and market data, surfacing insights via a high-performance web interface.',
    dataset: 'Daily updated ETF holdings, sector compositions, and market pricing data.',
    methodology: 'Using quantitative methods to compute exposure matrices, correlation analyses, and hidden overlap detection across global ETF universes.',
    results: 'Currently deployed and actively used for portfolio optimization and research.',
    limitations: 'Analytics are constrained by the reporting frequency and granularity of ETF issuers.',
    futureWork: 'Expanding coverage to mutual funds and adding more advanced factor analysis models.',
  },
  {
    id: '03',
    slug: 'stratmarket',
    link: 'https://stratmarket.elvariscapital.in/',
    title: 'StratMarket',
    description: 'An institutional algorithmic trading strategy marketplace by Elvaris Capital. Discover, backtest, and stream verified Pine Script v5 and Python MT5 strategies with real-time execution signals and interactive charts showing live trades.',
    status: 'Active',
    tags: ['Algorithmic Marketplace', 'Quantitative Trading', 'Pine Script v5', 'Python MT5', 'Live Execution'],
    overview: 'StratMarket is the flagship quantitative algorithmic trading strategy marketplace engineered by Elvaris Capital. It enables traders, institutions, and prop firms to access tick-level audited trading models, view real-time candlestick execution charts with overlayed trade markers, and stream automated execution signals.',
    researchQuestion: 'How can systematic algorithmic strategies be verified, stress-tested, and transparently delivered to market participants with zero curve-fitting and realistic execution drag modeling?',
    architecture: 'High-performance execution engine combining TradingView Pine Script v5 private scripts, Python MetaTrader 5 bridges, sub-50ms VPS signal dispatch, and interactive client-side charting overlays.',
    dataset: 'Tick-level institutional feeds for major currency pairs and commodities including XAUUSD, EURUSD, NAS100, and US30 across multi-year historical datasets.',
    methodology: 'Every strategy undergoes rigorous out-of-sample stress testing (30% holdout), 1,000+ Monte Carlo reshufflings, realistic transaction costs ($2.50/lot commission, live spreads, and 1.0+ pip slippage modeling), and session liquidity gating.',
    results: 'Deployed and active with models demonstrating peak win rates up to 88.5%, profit factors exceeding 9.3, and ultra-low drawdowns under 1.5%.',
    limitations: 'Performance in extreme black swan events depends on underlying broker liquidity and execution spreads.',
    futureWork: 'Adding direct FIX protocol broker routing, institutional portfolio multi-strategy risk parity allocations, and expanded futures contract coverage.',
  },
];

// ===== BLOG DATA =====

export const blogPosts = [
  {
    slug: 'why-backtests-fail',
    title: 'Why Backtests Fail',
    description: 'Examining the common reasons why backtested strategies fail to perform in live markets, from overfitting to unrealistic assumptions.',
    category: 'Research Methodology',
    date: '2026-09-15',
    readingTime: '8 min read',
    content: `Backtesting is one of the most important tools in quantitative research, but it is also one of the most misused. A strategy that performs beautifully in backtesting may fail completely when deployed. Understanding why this happens is essential for any serious quantitative researcher.

## The Overfitting Problem

The most common reason backtests fail is overfitting — the strategy has been optimized to fit historical noise rather than genuine market patterns. When a strategy has too many parameters relative to the amount of data, it can "memorize" historical data rather than learning generalizable patterns.

## Unrealistic Assumptions

Many backtests make assumptions that do not hold in practice:

- **Zero slippage**: Real execution involves price impact and slippage
- **Instant fills**: Orders take time to execute and may be partially filled  
- **No market impact**: Large orders can move the market
- **Perfect data**: Historical data may contain errors or gaps

## Lookahead Bias

Lookahead bias occurs when a backtest uses information that would not have been available at the time the trading decision was made. This can be subtle — for example, using end-of-day data to make decisions that should be based on intra-day information.

## Survivorship Bias

If the universe of instruments used in backtesting only includes assets that survived to the present day, results may be biased upward. Companies that went bankrupt, were delisted, or were acquired are excluded, creating an unrealistically positive picture.

## Data Mining Bias

Testing many strategies on the same dataset and selecting the best performer is a form of data mining. Even with perfectly random strategies, some will appear profitable by chance. The more strategies tested, the higher the probability of finding spurious results.

## What Can Be Done?

- Use out-of-sample testing to validate results
- Apply walk-forward analysis to simulate real-time deployment
- Include realistic transaction costs and slippage
- Test across multiple market conditions and time periods
- Report the number of strategies tested, not just the winners
- Use Monte Carlo simulation to assess result robustness`,
  },
  {
    slug: 'understanding-lookahead-bias',
    title: 'Understanding Lookahead Bias',
    description: 'How lookahead bias can silently invalidate your research results and practical steps to prevent it.',
    category: 'Statistics',
    date: '2026-09-10',
    readingTime: '6 min read',
    content: `Lookahead bias is one of the most insidious problems in quantitative finance research. It occurs when analysis uses information that would not have been available at the time a decision was made.

## What is Lookahead Bias?

At its core, lookahead bias means "knowing the future." In backtesting, this happens when your strategy or model has access to data points that hadn't yet occurred at the historical moment being simulated.

## Common Sources

- Using close prices to make decisions at the open
- Calculating indicators using future data points
- Selecting features based on full-sample performance
- Using adjusted prices without proper point-in-time handling
- Applying data filters based on outcomes

## Why It's Dangerous

Lookahead bias can make terrible strategies appear profitable. Because the strategy has effectively "seen" the future, it can make perfect decisions — but only in simulation.

## Prevention Strategies

The best defense against lookahead bias is rigorous process:

1. Clearly define the information available at each decision point
2. Use strictly causal feature engineering
3. Implement proper train/test temporal splits
4. Review code for any future data access
5. Use event-driven backtesting frameworks where possible`,
  },
  {
    slug: 'walk-forward-testing-explained',
    title: 'Walk-Forward Testing Explained',
    description: 'A comprehensive guide to walk-forward testing methodology and why it produces more reliable research results.',
    category: 'Research Methodology',
    date: '2026-09-05',
    readingTime: '10 min read',
    content: `Walk-forward testing is a validation methodology that simulates how a strategy would actually be developed and deployed over time. It addresses many of the shortcomings of simple in-sample/out-of-sample testing.

## The Basic Concept

Walk-forward testing divides historical data into multiple overlapping periods. For each period, the strategy is optimized on a training window and then evaluated on a subsequent testing window. The process then moves forward in time and repeats.

## Why It Matters

Traditional backtesting optimizes parameters on the full dataset, then evaluates on the same data — a recipe for overfitting. Walk-forward testing forces the strategy to prove itself on unseen data repeatedly, providing a much more realistic picture of expected performance.

## The Process

1. Define training and testing window sizes
2. Optimize strategy parameters on the training window
3. Test with optimized parameters on the following test window
4. Record out-of-sample results
5. Advance the window forward
6. Repeat until all data is consumed
7. Concatenate out-of-sample results for evaluation

## Key Considerations

- Window size selection affects results significantly
- Training windows should be long enough for meaningful optimization
- Testing windows should be long enough for statistical reliability
- The ratio of training to testing time matters
- Anchor vs. rolling window approaches have different properties`,
  },
  {
    slug: 'machine-learning-in-quantitative-research',
    title: 'Machine Learning in Quantitative Research',
    description: 'An overview of how machine learning is being applied to quantitative finance research, including challenges and opportunities.',
    category: 'AI',
    date: '2026-08-28',
    readingTime: '12 min read',
    content: `Machine learning has transformed many fields, and quantitative finance research is no exception. However, applying ML to financial data presents unique challenges that require careful consideration.

## The Promise

Machine learning excels at finding complex, non-linear patterns in data. Financial markets generate vast amounts of data with potentially complex relationships between variables. ML offers tools that can capture patterns that traditional linear models might miss.

## The Challenges

Financial data has several properties that make ML particularly challenging:

- **Low signal-to-noise ratio**: Genuine patterns are weak relative to noise
- **Non-stationarity**: Market dynamics change over time
- **Regime changes**: What works in one market environment may fail in another
- **Limited data**: While tick data is abundant, independent samples are fewer than they appear
- **Overfitting risk**: The combination of many features and noisy data creates severe overfitting risk

## Practical Approaches

Research has shown that simpler models often outperform complex ones in financial applications:

- Gradient boosting methods (XGBoost, LightGBM) tend to perform well
- Feature engineering often matters more than model architecture
- Proper temporal cross-validation is essential
- Ensemble methods can improve robustness
- Model interpretability should be prioritized

## Evaluation Considerations

Standard ML evaluation metrics may not capture what matters in financial applications:

- Accuracy alone is insufficient — the distribution of errors matters
- Temporal stability of predictions is crucial
- Calibration (confidence alignment with accuracy) is important
- Out-of-sample degradation should be measured and reported`,
  },
  {
    slug: 'feature-engineering-for-time-series',
    title: 'Feature Engineering for Time-Series Data',
    description: 'Techniques and best practices for creating meaningful features from financial time-series data.',
    category: 'Machine Learning',
    date: '2026-08-20',
    readingTime: '9 min read',
    content: `Feature engineering is often the most impactful step in a machine learning pipeline, especially for financial time-series data. Good features encode domain knowledge in a form that models can use effectively.

## Why Feature Engineering Matters

Raw price data is rarely informative on its own. Feature engineering transforms raw data into representations that capture meaningful patterns — momentum, volatility, mean reversion, and other phenomena that have been studied in financial research.

## Common Feature Categories

### Price-Based Features
- Returns over various lookback periods
- Moving averages and crossovers
- Bollinger Bands and volatility measures
- Support and resistance levels

### Volume Features
- Volume-weighted average price (VWAP)
- On-balance volume
- Volume relative to moving average

### Statistical Features
- Rolling standard deviation
- Skewness and kurtosis of return distributions
- Autocorrelation measures
- Hurst exponent estimates

### Technical Indicators
- RSI, MACD, Stochastic oscillators
- Average True Range (ATR)
- Various momentum indicators

## Best Practices

1. Ensure features are causal — no lookahead bias
2. Normalize features appropriately for the model being used
3. Test feature importance and remove redundant features
4. Use domain knowledge to guide feature creation
5. Be aware of the curse of dimensionality`,
  },
  {
    slug: 'why-out-of-sample-testing-matters',
    title: 'Why Out-of-Sample Testing Matters',
    description: 'Understanding the critical importance of out-of-sample testing in quantitative research and how to do it properly.',
    category: 'Research Methodology',
    date: '2026-08-12',
    readingTime: '7 min read',
    content: `Out-of-sample testing is the most fundamental validation technique in quantitative research. Without it, there is no way to distinguish between genuine findings and statistical artifacts.

## The Concept

Out-of-sample (OOS) testing evaluates a model or strategy on data that was not used during development. This provides an unbiased estimate of how the approach will perform on new, unseen data.

## Why In-Sample Results Are Misleading

Any sufficiently flexible model can be made to fit historical data well. This does not mean the model has discovered genuine patterns — it may simply be memorizing noise. Only OOS testing can reveal whether the model generalizes.

## Proper Implementation

1. Divide data into training and testing periods before any analysis
2. Never look at the test data during development
3. Make all design decisions using only the training data
4. Evaluate on the test set only once
5. Report OOS results honestly, including failed experiments

## Common Mistakes

- Peeking at OOS data during development
- Repeated testing until "good" OOS results are found
- Using OOS data for feature selection or parameter tuning
- Ignoring temporal ordering in train/test splits`,
  },
  {
    slug: 'data-quality-changes-research-results',
    title: 'How Data Quality Changes Research Results',
    description: 'Exploring the often-overlooked impact of data quality on quantitative research outcomes.',
    category: 'Market Data',
    date: '2026-08-05',
    readingTime: '8 min read',
    content: `Data quality is the foundation upon which all quantitative research is built. Poor data quality can lead to false discoveries, missed opportunities, and incorrect conclusions — regardless of how sophisticated the analysis methodology may be.

## The Problem

Financial data is messy. Historical datasets contain gaps, errors, adjustments, and inconsistencies that can significantly affect research outcomes.

## Common Data Quality Issues

- Missing data points or irregular timestamps
- Corporate action adjustments (splits, dividends)
- Survivorship bias in historical databases
- Look-ahead in point-in-time data
- Inconsistent data across sources
- Outliers from data errors vs. genuine market events

## Impact on Research

Even small data errors can have outsized effects:

- A single missing price can invalidate an entire backtest
- Incorrect corporate action adjustments can create artificial signals
- Survivorship bias can inflate strategy performance by 2-5% annually
- Timestamp errors can introduce subtle lookahead bias`,
  },
  {
    slug: 'overfitting-in-strategy-development',
    title: 'Overfitting in Strategy Development',
    description: 'How to recognize, prevent, and manage overfitting when developing quantitative trading strategies.',
    category: 'Quantitative Research',
    date: '2026-07-28',
    readingTime: '11 min read',
    content: `Overfitting is arguably the greatest challenge in quantitative strategy development. Understanding what causes it, how to detect it, and how to prevent it is essential for producing reliable research.

## What is Overfitting?

Overfitting occurs when a model or strategy fits the specific noise in historical data rather than capturing genuine, generalizable patterns. An overfit strategy will appear to perform well on historical data but fail when applied to new data.

## Why Financial Data is Prone to Overfitting

- Low signal-to-noise ratio
- Many possible parameters and features to optimize
- Relatively limited independent data points
- Strong incentives to find "working" strategies
- Multiple testing without proper correction

## Detection Methods

1. Compare in-sample vs. out-of-sample performance
2. Evaluate across multiple time periods
3. Test across different market conditions
4. Use deflated Sharpe ratio to account for multiple testing
5. Check for parameter sensitivity
6. Apply Monte Carlo permutation testing

## Prevention Strategies

- Use fewer parameters
- Prefer simpler models
- Apply proper cross-validation
- Set aside untouched holdout data
- Report all tested strategies, not just winners
- Use Bayesian approaches to regularize beliefs`,
  },
  {
    slug: 'understanding-maximum-drawdown',
    title: 'Understanding Maximum Drawdown',
    description: 'A deep dive into maximum drawdown as a risk metric, its calculation, interpretation, and limitations.',
    category: 'Statistics',
    date: '2026-07-20',
    readingTime: '7 min read',
    content: `Maximum drawdown (MDD) is one of the most widely used risk metrics in quantitative finance. It measures the largest peak-to-trough decline in portfolio value, providing insight into the worst-case scenario an investor would have experienced.

## Definition

Maximum drawdown is calculated as the maximum observed loss from a peak to a trough, before a new peak is achieved. It is typically expressed as a percentage.

## Calculation

For a time series of returns, the drawdown at any point is the decline from the most recent peak. The maximum drawdown is the largest such decline across the entire time series.

## Interpretation

MDD provides information that return-based metrics do not:

- It captures the psychological pain of losses
- It indicates capital at risk
- It helps size positions and set stop-losses
- It provides a baseline for stress testing

## Limitations

- MDD is a single-point measure — it depends on the specific historical path
- It is always backward-looking and represents only one possible realization
- Longer time periods naturally produce larger drawdowns
- MDD does not capture the duration or recovery time of drawdowns`,
  },
];

// ===== DOCUMENTATION DATA =====

export const docSidebar = [
  {
    title: 'StratMarket Platform',
    items: [
      { title: 'StratMarket Overview', slug: 'stratmarket-overview' },
      { title: 'Strategy Catalog (PS & PY)', slug: 'algorithmic-strategies' },
      { title: 'Research Methodology', slug: 'quantitative-methodology' },
      { title: 'Risk Governance', slug: 'risk-management' },
      { title: 'Signals & VPS Infrastructure', slug: 'signals-and-execution' },
      { title: 'Broker Integration & APIs', slug: 'broker-integration' },
      { title: 'About Elvaris Capital', slug: 'elvaris-capital' },
      { title: 'Quantitative FAQ', slug: 'stratmarket-faq' },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', slug: 'introduction' },
      { title: 'Research Philosophy', slug: 'research-philosophy' },
      { title: 'How Elvaris Works', slug: 'how-elvaris-works' },
    ],
  },
  {
    title: 'Research',
    items: [
      { title: 'Quantitative Research', slug: 'quantitative-research' },
      { title: 'Strategy Research', slug: 'strategy-research' },
      { title: 'Market Data', slug: 'market-data-research' },
      { title: 'Machine Learning', slug: 'machine-learning' },
      { title: 'Statistical Validation', slug: 'statistical-validation' },
    ],
  },
  {
    title: 'Methods',
    items: [
      { title: 'Backtesting', slug: 'backtesting' },
      { title: 'Walk-Forward Testing', slug: 'walk-forward-testing' },
      { title: 'Out-of-Sample Testing', slug: 'out-of-sample-testing' },
      { title: 'Cross Validation', slug: 'cross-validation' },
      { title: 'Feature Engineering', slug: 'feature-engineering' },
      { title: 'Model Evaluation', slug: 'model-evaluation' },
      { title: 'Risk Metrics', slug: 'risk-metrics' },
    ],
  },
  {
    title: 'Data',
    items: [
      { title: 'Data Sources', slug: 'data-sources' },
      { title: 'Data Cleaning', slug: 'data-cleaning' },
      { title: 'Data Normalization', slug: 'data-normalization' },
      { title: 'Timeframes', slug: 'timeframes' },
      { title: 'Missing Data', slug: 'missing-data' },
      { title: 'Data Leakage', slug: 'data-leakage' },
    ],
  },
  {
    title: 'Engineering',
    items: [
      { title: 'Research Pipeline', slug: 'research-pipeline' },
      { title: 'Experiment Tracking', slug: 'experiment-tracking' },
      { title: 'Automation', slug: 'automation' },
      { title: 'Reproducibility', slug: 'reproducibility' },
    ],
  },
  {
    title: 'Glossary',
    items: [
      { title: 'Sharpe Ratio', slug: 'sharpe-ratio' },
      { title: 'Sortino Ratio', slug: 'sortino-ratio' },
      { title: 'Maximum Drawdown', slug: 'maximum-drawdown' },
      { title: 'Profit Factor', slug: 'profit-factor' },
      { title: 'Win Rate', slug: 'win-rate' },
      { title: 'Expectancy', slug: 'expectancy' },
      { title: 'Volatility', slug: 'volatility' },
      { title: 'Overfitting', slug: 'overfitting' },
      { title: 'Lookahead Bias', slug: 'lookahead-bias' },
      { title: 'Survivorship Bias', slug: 'survivorship-bias' },
    ],
  },
];

export type DocArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  content: string;
  tableOfContents: { id: string; title: string; level: number }[];
};

export const docArticles: Record<string, DocArticle> = {
  introduction: {
    slug: 'introduction',
    title: 'Introduction to Elvaris',
    description: 'An overview of Elvaris, its mission, and how to navigate the documentation.',
    category: 'Getting Started',
    lastUpdated: '2026-09-20',
    tableOfContents: [
      { id: 'what-is-elvaris', title: 'What is Elvaris?', level: 2 },
      { id: 'mission', title: 'Our Mission', level: 2 },
      { id: 'what-we-research', title: 'What We Research', level: 2 },
      { id: 'how-to-use-docs', title: 'How to Use This Documentation', level: 2 },
    ],
    content: `## What is Elvaris?

Elvaris is a research and technology initiative focused on understanding how data, artificial intelligence, machine learning, and quantitative methods can be combined to study complex market systems.

We operate at the intersection of technology and quantitative finance, building tools, running experiments, and publishing research that advances understanding of systematic market analysis.

## Our Mission

Our goal is to make quantitative research more systematic, transparent, and accessible through software and intelligent systems. We believe that rigorous methodology, open documentation, and reproducible research are essential for advancing the field.

## What We Research

Elvaris research spans several interconnected areas:

- **Quantitative Research**: Systematic methods for studying market behavior
- **Machine Learning**: AI/ML techniques applied to financial data analysis
- **Market Data**: Data quality, normalization, and engineering
- **Strategy Research**: Hypothesis-driven strategy development and validation
- **Risk & Validation**: Robustness testing and overfitting detection
- **Research Infrastructure**: Tools and systems for research automation

## How to Use This Documentation

This documentation is organized into several sections:

1. **Getting Started**: Understanding Elvaris and our research philosophy
2. **Research**: Deep dives into our research areas
3. **Methods**: Detailed explanations of research methodologies
4. **Data**: Everything about data handling and quality
5. **Engineering**: Research infrastructure and automation
6. **Glossary**: Definitions of key quantitative finance terms

Each section builds on the previous one, but you can also navigate directly to topics that interest you using the sidebar.`,
  },
  'research-philosophy': {
    slug: 'research-philosophy',
    title: 'Research Philosophy',
    description: 'The principles and philosophy that guide all Elvaris research.',
    category: 'Getting Started',
    lastUpdated: '2026-09-18',
    tableOfContents: [
      { id: 'core-principles', title: 'Core Principles', level: 2 },
      { id: 'research-first', title: 'Research First', level: 3 },
      { id: 'evidence-over-assumptions', title: 'Evidence Over Assumptions', level: 3 },
      { id: 'reproducibility', title: 'Reproducibility', level: 3 },
      { id: 'what-we-avoid', title: 'What We Avoid', level: 2 },
    ],
    content: `## Core Principles

Every aspect of Elvaris research is guided by a small set of core principles. These principles are not aspirational — they are practical guidelines that shape how we design experiments, evaluate results, and communicate findings.

### Research First

We treat every idea as a hypothesis that must be tested. No strategy, model, or approach is accepted based on theoretical appeal alone. Everything must pass through a rigorous process of formulation, testing, and validation before being considered credible.

### Evidence Over Assumptions

Historical results are evaluated against carefully defined datasets and validation procedures. We prioritize empirical evidence over theoretical elegance, and we explicitly document the assumptions underlying every analysis.

### Reproducibility

Research should be understandable, inspectable, and repeatable. We believe that if research cannot be reproduced, it cannot be trusted. Every experiment should be documented well enough that an independent researcher could replicate it.

## What We Avoid

- Making performance claims without supporting evidence
- Optimizing for impressive-looking backtests
- Ignoring limitations and edge cases
- Using data improperly (lookahead bias, survivorship bias)
- Presenting preliminary findings as established facts`,
  },
  'how-elvaris-works': {
    slug: 'how-elvaris-works',
    title: 'How Elvaris Works',
    description: 'An overview of the Elvaris research process and workflow.',
    category: 'Getting Started',
    lastUpdated: '2026-09-15',
    tableOfContents: [
      { id: 'research-process', title: 'The Research Process', level: 2 },
      { id: 'tools-and-infrastructure', title: 'Tools and Infrastructure', level: 2 },
      { id: 'collaboration', title: 'Collaboration', level: 2 },
    ],
    content: `## The Research Process

Elvaris follows a structured research process that ensures rigor and reproducibility:

1. **Hypothesis Formation**: Every research project begins with a clearly stated hypothesis
2. **Data Preparation**: Selecting, cleaning, and validating appropriate datasets
3. **Experiment Design**: Defining methodology, metrics, and success criteria
4. **Implementation**: Building and running the experiment
5. **Validation**: Testing results through multiple validation procedures
6. **Documentation**: Recording methodology, results, and limitations
7. **Iteration**: Refining hypotheses based on findings

## Tools and Infrastructure

Our research infrastructure includes:

- Custom data pipelines for market data collection and processing
- Backtesting frameworks with built-in validation procedures
- Machine learning pipelines with temporal cross-validation
- Experiment tracking and version control systems
- Automated reporting and visualization tools

## Collaboration

Research at Elvaris is collaborative. We believe that diverse perspectives improve research quality, and we encourage open discussion and constructive criticism of all findings.`,
  },
  backtesting: {
    slug: 'backtesting',
    title: 'Understanding Backtesting',
    description: 'A comprehensive guide to backtesting methodology, from basic concepts to advanced validation techniques.',
    category: 'Methods',
    lastUpdated: '2026-09-12',
    tableOfContents: [
      { id: 'what-is-backtesting', title: 'What is Backtesting?', level: 2 },
      { id: 'why-backtesting', title: 'Why Backtesting is Useful', level: 2 },
      { id: 'basic-workflow', title: 'The Basic Workflow', level: 2 },
      { id: 'dataset-construction', title: 'Dataset Construction', level: 2 },
      { id: 'entry-exit-logic', title: 'Entry and Exit Logic', level: 2 },
      { id: 'transaction-costs', title: 'Transaction Costs', level: 2 },
      { id: 'slippage', title: 'Slippage', level: 2 },
      { id: 'risk-management', title: 'Risk Management', level: 2 },
      { id: 'lookahead-bias', title: 'Lookahead Bias', level: 2 },
      { id: 'overfitting', title: 'Overfitting', level: 2 },
      { id: 'oos-testing', title: 'Out-of-Sample Testing', level: 2 },
      { id: 'walk-forward', title: 'Walk-Forward Testing', level: 2 },
      { id: 'limitations', title: 'Limitations', level: 2 },
    ],
    content: `## What is Backtesting?

Backtesting is the process of evaluating a predefined strategy against historical data. It simulates how a strategy would have performed had it been deployed in the past, using only information that would have been available at each point in time.

> **WARNING**: Historical performance does not guarantee future results. Backtests can be affected by assumptions, data quality, execution modeling, and overfitting.

## Why Backtesting is Useful

Backtesting serves several important purposes in quantitative research:

- **Hypothesis testing**: Evaluating whether a trading idea has historical merit
- **Parameter sensitivity**: Understanding how strategy parameters affect performance
- **Risk assessment**: Estimating potential drawdowns and risk characteristics
- **Methodology validation**: Testing the robustness of research methodologies
- **Comparative analysis**: Comparing different approaches under controlled conditions

## The Basic Workflow

A typical backtesting workflow follows these steps:

1. Define the strategy hypothesis clearly
2. Prepare historical data with quality checks
3. Implement the strategy logic
4. Define realistic execution assumptions
5. Run the simulation
6. Analyze results using multiple metrics
7. Validate through out-of-sample testing

\`\`\`python
# Example: Simple backtesting workflow structure
class BacktestEngine:
    def __init__(self, data, strategy, config):
        self.data = data
        self.strategy = strategy
        self.config = config
        self.results = []

    def run(self):
        for timestamp, bar in self.data.iterrows():
            signal = self.strategy.generate_signal(bar)
            if signal:
                self.execute_trade(signal, bar)
        return self.calculate_metrics()

    def calculate_metrics(self):
        return {
            'total_return': self.total_return(),
            'sharpe_ratio': self.sharpe_ratio(),
            'max_drawdown': self.max_drawdown(),
            'win_rate': self.win_rate(),
        }
\`\`\`

## Dataset Construction

The quality of a backtest is fundamentally limited by the quality of its data:

- Use point-in-time data to avoid lookahead bias
- Account for corporate actions (splits, dividends)
- Handle missing data explicitly
- Document data sources and preprocessing steps
- Consider survivorship bias in instrument selection

## Entry and Exit Logic

Strategy logic should be clearly defined and deterministic:

- Entry conditions must be based only on available information
- Exit conditions should include both profit targets and stop losses
- Position sizing should be part of the strategy definition
- The strategy should handle edge cases explicitly

## Transaction Costs

Realistic backtesting must account for the costs of trading:

| Cost Type | Description |
|-----------|-------------|
| Commission | Broker fees per trade |
| Spread | Bid-ask spread at execution |
| Slippage | Price impact of execution |
| Financing | Cost of carrying positions |

## Slippage

Slippage models the difference between the expected execution price and the actual price received. More realistic slippage models improve backtest reliability.

## Risk Management

Risk management should be built into the backtesting framework:

- Position sizing based on volatility or risk budget
- Maximum position limits
- Portfolio-level risk constraints
- Drawdown-based position reduction

## Lookahead Bias

> **IMPORTANT**: Lookahead bias is one of the most common and dangerous errors in backtesting. It occurs when the strategy uses information that would not have been available at the time of the decision.

Common sources include:
- Using future prices for current decisions
- Calculating indicators using the full dataset
- Feature selection based on full-sample performance

## Overfitting

Overfitting occurs when a strategy is over-optimized to fit historical noise rather than genuine patterns. Signs of overfitting include:

- Extremely high in-sample performance
- Large gap between in-sample and out-of-sample results
- High sensitivity to parameter changes
- Poor performance across different time periods

## Out-of-Sample Testing

Out-of-sample testing evaluates strategy performance on data not used during development:

1. Reserve a portion of data before any analysis
2. Develop and optimize using only the training portion
3. Test on the reserved data only once
4. Report results honestly, including negative findings

## Walk-Forward Testing

Walk-forward testing provides a more realistic evaluation by simulating the ongoing optimization process:

1. Divide data into multiple training/testing periods
2. Optimize on each training window
3. Test on the subsequent period
4. Advance and repeat
5. Concatenate all out-of-sample results

## Limitations

Backtesting has fundamental limitations that must be acknowledged:

- Historical data may not represent future conditions
- Execution assumptions are always approximations
- Market microstructure changes over time
- Rare events are underrepresented in historical data
- Multiple testing increases false discovery rates`,
  },
  'walk-forward-testing': {
    slug: 'walk-forward-testing',
    title: 'Walk-Forward Testing',
    description: 'Detailed guide to walk-forward testing methodology for strategy validation.',
    category: 'Methods',
    lastUpdated: '2026-09-10',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'window-selection', title: 'Window Selection', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 },
    ],
    content: `## Overview

Walk-forward testing is an advanced validation technique that simulates how a strategy would be developed and deployed in real-time. It provides more realistic performance estimates than simple in-sample/out-of-sample testing.

## Methodology

The walk-forward process divides historical data into multiple overlapping training and testing periods. For each period:

1. Parameters are optimized on the training window
2. Performance is measured on the subsequent testing window
3. The window advances forward in time
4. The process repeats

> **NOTE**: Walk-forward results represent a composite of multiple out-of-sample periods, making them more robust than single-split validation.

## Window Selection

Choosing appropriate window sizes is critical:

- **Training window**: Must be long enough for meaningful optimization
- **Testing window**: Must be long enough for statistical reliability
- **Step size**: Determines how much the window advances each iteration

## Implementation

\`\`\`python
def walk_forward_test(data, strategy, train_size, test_size, step_size):
    results = []
    start = 0

    while start + train_size + test_size <= len(data):
        train = data[start:start + train_size]
        test = data[start + train_size:start + train_size + test_size]

        # Optimize on training data
        params = strategy.optimize(train)

        # Test on out-of-sample data
        performance = strategy.evaluate(test, params)
        results.append(performance)

        start += step_size

    return aggregate_results(results)
\`\`\``,
  },
  'sharpe-ratio': {
    slug: 'sharpe-ratio',
    title: 'Sharpe Ratio',
    description: 'Definition and explanation of the Sharpe Ratio, one of the most widely used risk-adjusted performance metrics.',
    category: 'Glossary',
    lastUpdated: '2026-09-08',
    tableOfContents: [
      { id: 'definition', title: 'Definition', level: 2 },
      { id: 'calculation', title: 'Calculation', level: 2 },
      { id: 'interpretation', title: 'Interpretation', level: 2 },
      { id: 'limitations', title: 'Limitations', level: 2 },
    ],
    content: `## Definition

The Sharpe Ratio is a measure of risk-adjusted return, developed by William F. Sharpe. It calculates the excess return per unit of risk, where risk is measured by the standard deviation of returns.

## Calculation

\`\`\`
Sharpe Ratio = (Rp - Rf) / σp

Where:
  Rp = Portfolio return
  Rf = Risk-free rate
  σp = Standard deviation of portfolio returns
\`\`\`

The ratio is typically annualized for comparison purposes.

## Interpretation

| Sharpe Ratio | Interpretation |
|-------------|----------------|
| < 0 | Strategy loses money after risk-free rate |
| 0 - 0.5 | Poor risk-adjusted returns |
| 0.5 - 1.0 | Acceptable |
| 1.0 - 2.0 | Good |
| > 2.0 | Excellent (verify for overfitting) |

> **WARNING**: Very high Sharpe Ratios in backtesting may indicate overfitting rather than genuine skill.

## Limitations

- Assumes returns are normally distributed
- Penalizes upside and downside volatility equally
- Sensitive to the measurement period
- Can be manipulated through leverage or smoothing
- Does not capture tail risk or drawdown behavior`,
  },
  'maximum-drawdown': {
    slug: 'maximum-drawdown',
    title: 'Maximum Drawdown',
    description: 'Understanding maximum drawdown as a key risk metric in quantitative finance.',
    category: 'Glossary',
    lastUpdated: '2026-09-05',
    tableOfContents: [
      { id: 'definition', title: 'Definition', level: 2 },
      { id: 'calculation', title: 'Calculation', level: 2 },
      { id: 'usage', title: 'Usage', level: 2 },
    ],
    content: `## Definition

Maximum Drawdown (MDD) measures the largest peak-to-trough decline in portfolio value over a specific time period. It represents the worst-case loss from peak that an investor would have experienced.

## Calculation

\`\`\`
MDD = (Trough Value - Peak Value) / Peak Value

Where peak is the highest portfolio value before the decline
and trough is the lowest value before a new peak is established.
\`\`\`

## Usage

Maximum drawdown is used for:

- Risk assessment and comparison between strategies
- Position sizing and risk budgeting
- Setting investor expectations
- Stress testing portfolios
- Evaluating strategy robustness across market conditions`,
  },
  'quantitative-research': {
    slug: 'quantitative-research',
    title: 'Quantitative Research',
    description: 'Systematic approaches to market analysis.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Quantitative Research is a critical component of systematic quantitative research. At Elvaris, we treat systematic approaches to market analysis. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Quantitative Research, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Quantitative Research relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Quantitative Research
def evaluate_quantitative_research(data, parameters):
    """
    Evaluates the system using rigorous Quantitative Research principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'strategy-research': {
    slug: 'strategy-research',
    title: 'Strategy Research',
    description: 'Developing and validating systematic trading rules.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Strategy Research is a critical component of systematic quantitative research. At Elvaris, we treat developing and validating systematic trading rules. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Strategy Research, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Strategy Research relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Strategy Research
def evaluate_strategy_research(data, parameters):
    """
    Evaluates the system using rigorous Strategy Research principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'market-data-research': {
    slug: 'market-data-research',
    title: 'Market Data',
    description: 'Handling financial time series and alternative data.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Market Data is a critical component of systematic quantitative research. At Elvaris, we treat handling financial time series and alternative data. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Market Data, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Market Data relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Market Data
def evaluate_market_data_research(data, parameters):
    """
    Evaluates the system using rigorous Market Data principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'machine-learning': {
    slug: 'machine-learning',
    title: 'Machine Learning',
    description: 'Applying ML to financial data.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Machine Learning is a critical component of systematic quantitative research. At Elvaris, we treat applying ml to financial data. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Machine Learning, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Machine Learning relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Machine Learning
def evaluate_machine_learning(data, parameters):
    """
    Evaluates the system using rigorous Machine Learning principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'statistical-validation': {
    slug: 'statistical-validation',
    title: 'Statistical Validation',
    description: 'Proving significance in noisy data.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Statistical Validation is a critical component of systematic quantitative research. At Elvaris, we treat proving significance in noisy data. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Statistical Validation, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Statistical Validation relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Statistical Validation
def evaluate_statistical_validation(data, parameters):
    """
    Evaluates the system using rigorous Statistical Validation principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'out-of-sample-testing': {
    slug: 'out-of-sample-testing',
    title: 'Out-of-Sample Testing',
    description: 'Evaluating on unseen data.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Out-of-Sample Testing is a critical component of systematic quantitative research. At Elvaris, we treat evaluating on unseen data. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Out-of-Sample Testing, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Out-of-Sample Testing relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Out-of-Sample Testing
def evaluate_out_of_sample_testing(data, parameters):
    """
    Evaluates the system using rigorous Out-of-Sample Testing principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'cross-validation': {
    slug: 'cross-validation',
    title: 'Cross Validation',
    description: 'Time-series appropriate CV techniques.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Cross Validation is a critical component of systematic quantitative research. At Elvaris, we treat time-series appropriate cv techniques. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Cross Validation, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Cross Validation relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Cross Validation
def evaluate_cross_validation(data, parameters):
    """
    Evaluates the system using rigorous Cross Validation principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'feature-engineering': {
    slug: 'feature-engineering',
    title: 'Feature Engineering',
    description: 'Constructing predictors from market data.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Feature Engineering is a critical component of systematic quantitative research. At Elvaris, we treat constructing predictors from market data. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Feature Engineering, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Feature Engineering relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Feature Engineering
def evaluate_feature_engineering(data, parameters):
    """
    Evaluates the system using rigorous Feature Engineering principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'model-evaluation': {
    slug: 'model-evaluation',
    title: 'Model Evaluation',
    description: 'Metrics for financial model performance.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Model Evaluation is a critical component of systematic quantitative research. At Elvaris, we treat metrics for financial model performance. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Model Evaluation, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Model Evaluation relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Model Evaluation
def evaluate_model_evaluation(data, parameters):
    """
    Evaluates the system using rigorous Model Evaluation principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'risk-metrics': {
    slug: 'risk-metrics',
    title: 'Risk Metrics',
    description: 'Quantifying risk in strategy outcomes.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Risk Metrics is a critical component of systematic quantitative research. At Elvaris, we treat quantifying risk in strategy outcomes. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Risk Metrics, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Risk Metrics relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Risk Metrics
def evaluate_risk_metrics(data, parameters):
    """
    Evaluates the system using rigorous Risk Metrics principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'data-sources': {
    slug: 'data-sources',
    title: 'Data Sources',
    description: 'Reliable sources for market data.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Data Sources is a critical component of systematic quantitative research. At Elvaris, we treat reliable sources for market data. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Data Sources, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Data Sources relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Data Sources
def evaluate_data_sources(data, parameters):
    """
    Evaluates the system using rigorous Data Sources principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'data-cleaning': {
    slug: 'data-cleaning',
    title: 'Data Cleaning',
    description: 'Removing outliers and handling bad ticks.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Data Cleaning is a critical component of systematic quantitative research. At Elvaris, we treat removing outliers and handling bad ticks. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Data Cleaning, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Data Cleaning relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Data Cleaning
def evaluate_data_cleaning(data, parameters):
    """
    Evaluates the system using rigorous Data Cleaning principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'data-normalization': {
    slug: 'data-normalization',
    title: 'Data Normalization',
    description: 'Standardizing features across assets.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Data Normalization is a critical component of systematic quantitative research. At Elvaris, we treat standardizing features across assets. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Data Normalization, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Data Normalization relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Data Normalization
def evaluate_data_normalization(data, parameters):
    """
    Evaluates the system using rigorous Data Normalization principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'timeframes': {
    slug: 'timeframes',
    title: 'Timeframes',
    description: 'Working with multiple timeframes simultaneously.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Timeframes is a critical component of systematic quantitative research. At Elvaris, we treat working with multiple timeframes simultaneously. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Timeframes, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Timeframes relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Timeframes
def evaluate_timeframes(data, parameters):
    """
    Evaluates the system using rigorous Timeframes principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'missing-data': {
    slug: 'missing-data',
    title: 'Missing Data',
    description: 'Imputation strategies for financial data.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Missing Data is a critical component of systematic quantitative research. At Elvaris, we treat imputation strategies for financial data. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Missing Data, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Missing Data relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Missing Data
def evaluate_missing_data(data, parameters):
    """
    Evaluates the system using rigorous Missing Data principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'data-leakage': {
    slug: 'data-leakage',
    title: 'Data Leakage',
    description: 'Preventing future information from bleeding into training.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Data Leakage is a critical component of systematic quantitative research. At Elvaris, we treat preventing future information from bleeding into training. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Data Leakage, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Data Leakage relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Data Leakage
def evaluate_data_leakage(data, parameters):
    """
    Evaluates the system using rigorous Data Leakage principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'research-pipeline': {
    slug: 'research-pipeline',
    title: 'Research Pipeline',
    description: 'End-to-end quantitative research workflow.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Research Pipeline is a critical component of systematic quantitative research. At Elvaris, we treat end-to-end quantitative research workflow. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Research Pipeline, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Research Pipeline relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Research Pipeline
def evaluate_research_pipeline(data, parameters):
    """
    Evaluates the system using rigorous Research Pipeline principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'experiment-tracking': {
    slug: 'experiment-tracking',
    title: 'Experiment Tracking',
    description: 'Logging hyperparameters and results.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Experiment Tracking is a critical component of systematic quantitative research. At Elvaris, we treat logging hyperparameters and results. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Experiment Tracking, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Experiment Tracking relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Experiment Tracking
def evaluate_experiment_tracking(data, parameters):
    """
    Evaluates the system using rigorous Experiment Tracking principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'automation': {
    slug: 'automation',
    title: 'Automation',
    description: 'Automating the research lifecycle.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Automation is a critical component of systematic quantitative research. At Elvaris, we treat automating the research lifecycle. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Automation, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Automation relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Automation
def evaluate_automation(data, parameters):
    """
    Evaluates the system using rigorous Automation principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'reproducibility': {
    slug: 'reproducibility',
    title: 'Reproducibility',
    description: 'Ensuring identical results across runs.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Reproducibility is a critical component of systematic quantitative research. At Elvaris, we treat ensuring identical results across runs. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Reproducibility, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Reproducibility relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Reproducibility
def evaluate_reproducibility(data, parameters):
    """
    Evaluates the system using rigorous Reproducibility principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'sortino-ratio': {
    slug: 'sortino-ratio',
    title: 'Sortino Ratio',
    description: 'Downside-adjusted return metric.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Sortino Ratio is a critical component of systematic quantitative research. At Elvaris, we treat downside-adjusted return metric. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Sortino Ratio, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Sortino Ratio relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Sortino Ratio
def evaluate_sortino_ratio(data, parameters):
    """
    Evaluates the system using rigorous Sortino Ratio principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'profit-factor': {
    slug: 'profit-factor',
    title: 'Profit Factor',
    description: 'Gross profits divided by gross losses.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Profit Factor is a critical component of systematic quantitative research. At Elvaris, we treat gross profits divided by gross losses. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Profit Factor, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Profit Factor relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Profit Factor
def evaluate_profit_factor(data, parameters):
    """
    Evaluates the system using rigorous Profit Factor principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'win-rate': {
    slug: 'win-rate',
    title: 'Win Rate',
    description: 'Percentage of profitable trades.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Win Rate is a critical component of systematic quantitative research. At Elvaris, we treat percentage of profitable trades. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Win Rate, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Win Rate relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Win Rate
def evaluate_win_rate(data, parameters):
    """
    Evaluates the system using rigorous Win Rate principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'expectancy': {
    slug: 'expectancy',
    title: 'Expectancy',
    description: 'Expected profit per trade.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Expectancy is a critical component of systematic quantitative research. At Elvaris, we treat expected profit per trade. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Expectancy, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Expectancy relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Expectancy
def evaluate_expectancy(data, parameters):
    """
    Evaluates the system using rigorous Expectancy principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'volatility': {
    slug: 'volatility',
    title: 'Volatility',
    description: 'Return standard deviation.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Volatility is a critical component of systematic quantitative research. At Elvaris, we treat return standard deviation. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Volatility, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Volatility relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Volatility
def evaluate_volatility(data, parameters):
    """
    Evaluates the system using rigorous Volatility principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'overfitting': {
    slug: 'overfitting',
    title: 'Overfitting',
    description: 'Fitting noise instead of signal.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Overfitting is a critical component of systematic quantitative research. At Elvaris, we treat fitting noise instead of signal. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Overfitting, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Overfitting relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Overfitting
def evaluate_overfitting(data, parameters):
    """
    Evaluates the system using rigorous Overfitting principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'lookahead-bias': {
    slug: 'lookahead-bias',
    title: 'Lookahead Bias',
    description: 'Using future data in historical simulations.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Lookahead Bias is a critical component of systematic quantitative research. At Elvaris, we treat using future data in historical simulations. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Lookahead Bias, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Lookahead Bias relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Lookahead Bias
def evaluate_lookahead_bias(data, parameters):
    """
    Evaluates the system using rigorous Lookahead Bias principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },
  'survivorship-bias': {
    slug: 'survivorship-bias',
    title: 'Survivorship Bias',
    description: 'Ignoring delisted or bankrupt assets.',
    category: 'Documentation',
    lastUpdated: '2026-09-29',
    tableOfContents: [
      { id: 'overview', title: 'Overview', level: 2 },
      { id: 'methodology', title: 'Methodology', level: 2 },
      { id: 'implementation', title: 'Implementation', level: 2 }
    ],
    content: `## Overview

Survivorship Bias is a critical component of systematic quantitative research. At Elvaris, we treat ignoring delisted or bankrupt assets. with absolute rigor to ensure our findings are robust and statistically significant.

This involves analyzing large datasets, minimizing assumptions, and focusing on empirical evidence over theoretical models.

## Methodology

When approaching Survivorship Bias, researchers must be careful to avoid common pitfalls:

1. **Avoid Overfitting**: Ensure the methodology does not simply memorize historical noise.
2. **Strict Validation**: All results must be tested out-of-sample or using walk-forward techniques.
3. **Data Integrity**: Verify that no lookahead bias or survivorship bias exists in the dataset.

## Implementation

The implementation of Survivorship Bias relies on our proprietary research pipeline. We use Python and specialized data science libraries (Pandas, NumPy, Scikit-learn, PyTorch) to construct these workflows.

\`\`\`python
# Example implementation snippet for Survivorship Bias
def evaluate_survivorship_bias(data, parameters):
    """
    Evaluates the system using rigorous Survivorship Bias principles.
    """
    results = validate_robustness(data, parameters)
    return results
\`\`\`

> [!IMPORTANT]  
> Always ensure that your testing environments perfectly replicate live execution environments, including transaction costs and slippage.`
  },

  // ===== STRATMARKET PLATFORM DOCUMENTATION ARTICLES =====
  'stratmarket-overview': {
    slug: 'stratmarket-overview',
    title: 'StratMarket Platform & Execution Overview',
    description: 'An institutional overview of StratMarket by Elvaris Capital: verifiable quantitative strategies, tick-level research reports, live interactive charts, and sub-50ms VPS signal execution.',
    category: 'StratMarket Platform',
    lastUpdated: '2026-11-10',
    tableOfContents: [
      { id: 'what-is-stratmarket', title: 'What is StratMarket?', level: 2 },
      { id: 'parent-organization', title: 'Engineered by Elvaris Capital', level: 2 },
      { id: 'open-access-model', title: 'Open-Access Research Model', level: 2 },
      { id: 'supported-usage-modes', title: 'Supported Usage Modes', level: 2 },
      { id: 'anti-curve-fitting', title: 'Anti-Curve Fitting Guarantee', level: 2 },
    ],
    content: `## What is StratMarket?

StratMarket (https://stratmarket.elvariscapital.in) is an institutional algorithmic strategy marketplace engineered and operated by Elvaris Capital (https://elvariscapital.in). StratMarket provides traders, family offices, and quantitative funds with mathematical access to verified algorithmic models built on TradingView Pine Script v5 and MetaTrader 5 (MT5).

Unlike retail indicator portals that offer curve-fitted historical demonstrations, StratMarket provides tick-level empirical tear sheets, unauthenticated research access, interactive browser charts with dynamic bracket levels, and continuous 24/7 VPS trade signal execution.

## Engineered by Elvaris Capital

Elvaris Capital operates as the parent quantitative research lab, data infrastructure provider, and sovereign risk governor behind StratMarket. All strategies listed on StratMarket undergo multi-year walk-forward optimization, Monte Carlo stress testing, and real-world friction calibration (commissions and slippage) inside the Elvaris research lab before receiving production clearance.

## Open-Access Research Model

StratMarket is structured around institutional open-access principles:
- **No Paywalls on Research**: Every quantitative tear sheet, drawdown profile, payoff distribution, and market regime breakdown is viewable without an account or credit card.
- **Interactive Chart Terminal**: Registered users unlock live candlestick streaming, indicator overlays, Long/Short execution markers, and in-flight active trade brackets.
- **Automated Execution Signals**: Dispatches instant trade signals (Entry, Take Profit, Stop Loss) via email and authenticated webhooks in sub-50 milliseconds.

## Supported Usage Modes

1. **Interactive Chart Terminal**: Real-time TradingView-powered chart workspace with dynamic Bollinger Bands, EMAs, session boundaries, and trade brackets.
2. **Instant Email Trade Alerts**: Automated model alerts delivered to verified subscriber inboxes upon candle close.
3. **Automated Broker Webhooks**: Seamless REST JSON signal ingestion for MetaTrader 5, Interactive Brokers, Alpaca, Dhan, and Zerodha.

## Anti-Curve Fitting Guarantee

Every strategy on StratMarket is governed by strict mathematical boundaries:
- Zero look-ahead bias with execution strictly locked to confirmed bar closes.
- Flat institutional friction models: $2.50 per standard lot plus 1.0 to 1.5 pip slippage drag.
- Hard single-digit maximum drawdown thresholds (&lt; 10% for Python ensembles, &lt; 3% for Pine Script).`
  },

  'algorithmic-strategies': {
    slug: 'algorithmic-strategies',
    title: 'Algorithmic Strategy Catalog (PS & PY Models)',
    description: 'Complete factor breakdown of all 13 active quantitative models: 3 Champion Pine Script gold strategies and 10 Python MT5 Single-Digit Drawdown Ensembles.',
    category: 'StratMarket Platform',
    lastUpdated: '2026-11-10',
    tableOfContents: [
      { id: 'pine-script-champion-trio', title: 'Pine Script Gold Champion Trio (PS-01 – PS-03)', level: 2 },
      { id: 'ps-performance-matrix', title: 'Pine Script Performance Matrix (6,800 Bars)', level: 2 },
      { id: 'python-mt5-ensembles', title: 'Python MT5 Single-Digit Drawdown Ensembles (PY-01 – PY-10)', level: 2 },
      { id: 'orthogonal-decorrelation', title: 'Orthogonal Alpha Decorrelation', level: 2 },
    ],
    content: `## Pine Script Gold Champion Trio (PS-01 – PS-03)

StratMarket features three mathematically decorrelated champion mean-reversion strategies targeting Spot Gold (FOREXCOM:XAUUSD M15), evaluated across 6,800 confirmed bars from August 2 to November 9, 2026:

### 1. PS-01: Grandmaster Dual 10R / 8R (Single-Digit DD 2.0%)
- **Architecture**: Extreme volatility envelope fading 2.1σ excursions along 200 EMA with RSI pullback filter and ATR flash crash protective shielding.
- **Payoff Bracket**: Take Profit = +$14.00 (+1.02R), Stop Loss = -$13.75 (-1.00R).
- **Edge**: 80.43% Win Rate across 46 executed trades, +28.67R Net Return, 4.19 Profit Factor, 14.33 Calmar Ratio.
- **Consistency**: 4 out of 4 months profitable (Aug +8.18R, Sep +10.22R, Oct +7.20R, Nov +3.07R).

### 2. PS-02: US Afternoon Reversal (Single-Digit DD 1.0%)
- **Architecture**: High-conviction NY afternoon session reversal (14:00–22:00 UTC) fading 2.0σ volatility exhaustion along 200 EMA with 1.50 ATR flash crash gate.
- **Payoff Bracket**: Take Profit = +$18.00 (+1.31R), Stop Loss = -$13.75 (-1.00R).
- **Edge**: 87.50% Win Rate across 24 executed trades, +24.49R Net Return, 9.16 Profit Factor, 24.49 Calmar Ratio.
- **Max Loss Streak**: Strictly 1 trade (never suffered 2 consecutive losses).

### 3. PS-03: London Core Expansion (Single-Digit DD 1.0%)
- **Architecture**: Institutional London & Frankfurt session expansion (04:00–20:00 UTC, excluding 12:00 UTC chop) fading 2.1σ standard deviation boundaries.
- **Payoff Bracket**: Take Profit = +$16.00 (+1.16R), Stop Loss = -$13.75 (-1.00R).
- **Edge**: 82.86% Win Rate across 35 executed trades, +27.75R Net Return, 5.62 Profit Factor, 27.75 Calmar Ratio.
- **Directional Balance**: Long Win Rate 93.33% (+15.29R), Short Win Rate 75.00% (+12.45R).

## Pine Script Performance Matrix (6,800 Bars)

| Strategy ID & Name | Trades | Wins / Losses | Win Rate | Net Return | Profit Factor | Payoff (TP / SL) | Max Drawdown | Calmar |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **PS-01: Grandmaster Dual 10R / 8R** | 46 | 37 / 9 | 80.43% | +28.67R | 4.19 | 1:1.02 (+$14 / -$13.75) | 2.00R (2.0%) | 14.33 |
| **PS-02: US Afternoon Reversal** | 24 | 21 / 3 | 87.50% | +24.49R | 9.16 | 1:1.31 (+$18 / -$13.75) | 1.00R (1.0%) | 24.49 |
| **PS-03: London Core Expansion** | 35 | 29 / 6 | 82.86% | +27.75R | 5.62 | 1:1.16 (+$16 / -$13.75) | 1.00R (1.0%) | 27.75 |

## Python MT5 Single-Digit Drawdown Ensembles (PY-01 – PY-10)

StratMarket features 10 institutional multi-engine quantitative ensembles calibrated on 360,000 real MetaTrader 5 broker tick bars spanning September 2021 to September 2026. Every portfolio guarantees hard single-digit maximum drawdown (&lt; 10%):

| ID | Portfolio Name | 5-Year Net Profit | Max Drawdown | Profit Factor | Sharpe | Trades | Core Quantitative Thesis |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **PY-01** | Peak Champion | +$125,840.22 (+503.4%) | 9.41% | 2.06 | 1.71 | 781 | 6-Engine ensemble with 7.14:1 asymmetric payoff ratio. |
| **PY-02** | High-Alpha Shield | +$123,568.00 (+494.3%) | 9.95% | 1.98 | 1.73 | 959 | High trade volume with dynamic volatility sleep recovery. |
| **PY-03** | Precision Shield | +$122,421.00 (+489.7%) | 9.35% | 1.99 | 1.66 | 902 | Orthogonal diversification dampening portfolio variance. |
| **PY-04** | Inverse-DD Fleet | +$121,693.00 (+486.8%) | 9.77% | 2.02 | 1.69 | 781 | Heavy low-drawdown engine concentration for rapid recovery. |
| **PY-05** | Ultra-Shield | +$117,681.00 (+470.7%) | 9.53% | 2.28 | 1.70 | 435 | Highest profit factor (2.28) and shortest loss streak (16). |
| **PY-06** | Trend Shield | +$116,331.00 (+465.3%) | 9.74% | 2.16 | 1.74 | 604 | Multi-session trend capture with Friday weekend embargo. |
| **PY-07** | Multi-Regime | +$115,984.00 (+463.9%) | 9.80% | 2.04 | 1.65 | 768 | Microstructure regime robustness across rate hike cycles. |
| **PY-08** | High-Sharpe Fleet | +$115,560.00 (+462.2%) | 9.50% | 2.29 | 1.89 | 463 | Highest annualized Sharpe ratio (1.89) over 5 full years. |
| **PY-09** | Asian Squeeze | +$115,122.00 (+460.5%) | 9.96% | 2.21 | 1.68 | 510 | Order flow compression exploitation with chandelier defense. |
| **PY-10** | Low-Loss Fleet | +$115,009.00 (+460.0%) | 9.43% | 2.11 | 1.67 | 628 | Selective trend-following with loss clustering mitigation. |

## Orthogonal Alpha Decorrelation

StratMarket pairs strategies that operate in separate market regimes. PS-02 trades strictly during the US Afternoon session (14:00–22:00 UTC), PS-03 targets European core hours (04:00–20:00 UTC skipping 12:00 UTC), and PS-01 provides full-day macro trend clearance. This ensures low trade collision, smoothed equity curves, and resilient prop firm consistency compliance.`
  },

  'quantitative-methodology': {
    slug: 'quantitative-methodology',
    title: 'Quantitative Research Methodology & Backtest Integrity',
    description: 'Detailed guide to mathematical backtesting protocols, friction accounting, Walk-Forward Optimization, and statistical verification employed by Elvaris Capital.',
    category: 'StratMarket Platform',
    lastUpdated: '2026-11-10',
    tableOfContents: [
      { id: 'four-stage-pipeline', title: 'The Four-Stage Quant Pipeline', level: 2 },
      { id: 'friction-modeling', title: 'Realistic Friction & Slippage Drag', level: 2 },
      { id: 'wfo-protocol', title: 'Walk-Forward Optimization (WFO)', level: 2 },
      { id: 'monte-carlo', title: 'Monte Carlo Stress Testing', level: 2 },
      { id: 'mathematical-formulas', title: 'Mathematical Performance Formulas', level: 2 },
    ],
    content: `## The Four-Stage Quant Pipeline

Every strategy published on StratMarket by Elvaris Capital is created through a 4-stage empirical engineering pipeline:

1. **Generate (Hypothesis Codification)**: Strategies originate from quantifiable market microstructure hypotheses (e.g. liquidity pool sweeps, session volatility exhaustion, or order-flow imbalances). Rules are codetermined in strict deterministic code with zero subjective discretion.
2. **Backtest (Tick Historical Simulation)**: Tested against institutional tick-by-tick broker data feeds spanning 6,800 to 360,000 bars. Fixed transaction fees and realistic slippage are enforced on every trade execution.
3. **Improve (Walk-Forward Optimization)**: Parameters undergo rolling window testing across multiple historical regimes. Any parameter combination showing sensitivity cliffs is rejected.
4. **Validate (Blind Out-of-Sample & Monte Carlo)**: 30% of data is reserved as untouched blind out-of-sample data. Equity curves undergo 1,000 Monte Carlo trade reorderings to confirm maximum drawdown resilience.

## Realistic Friction & Slippage Drag

Retail backtests often show unrealistic equity growth because they assume zero spread, zero commission, and instant fill at the signal price.

Elvaris Capital mandates realistic institutional friction modeling across all simulations:
- **Broker Commission**: Fixed $2.50 per standard lot ($0.25 per mini lot) deducted on both entry and exit.
- **Spread & Slippage Drag**: 1.0 to 1.5 pip fixed execution penalty applied on every market order and stop loss execution.
- **Execution Bar Gating**: Trades execute strictly on the next bar's open price following confirmed candle close, eliminating intrabar look-ahead bias.

## Walk-Forward Optimization (WFO)

To eliminate curve fitting, Elvaris employs rolling Walk-Forward Optimization:
- **In-Sample Optimization Window**: 70% of historical data is used to optimize parameter distributions.
- **Out-of-Sample Test Window**: 30% of consecutive forward data tests parameter durability.
- **Walk-Forward Efficiency (WFE)**: Strategies must demonstrate a WFE ratio greater than 60% (Out-of-Sample annualized return / In-Sample annualized return) to achieve production approval.

## Monte Carlo Stress Testing

All strategies are subjected to 1,000-iteration Monte Carlo simulations using bootstrap resampling:
- Simulates random trade sequences to assess path-dependency risks.
- Calculates 95% and 99% confidence intervals for maximum closed drawdown.
- Confirms that drawdown under extreme cluster-loss conditions does not breach sovereign single-digit limits.

## Mathematical Performance Formulas

### Sharpe Ratio (Annualized)
\`\`\`
Sharpe = (Mean Return - Risk Free Rate) / Standard Deviation of Return × sqrt(252)
\`\`\`
StratMarket strategies maintain annualized Sharpe ratios between 1.65 and 10.71.

### Calmar Ratio
\`\`\`
Calmar = Annualized Compound Return / Maximum Historical Drawdown
\`\`\`
StratMarket champion Pine Script models achieve Calmar ratios between 14.33 and 27.75.

### Profit Factor
\`\`\`
Profit Factor = Sum of Gross Profits / Sum of Gross Losses
\`\`\`
PS-02 US Afternoon Reversal delivers a 9.16 Profit Factor over 6,800 bars.`
  },

  'risk-management': {
    slug: 'risk-management',
    title: 'Sovereign Risk Governance & Drawdown Controls',
    description: 'Explore the institutional risk management framework engineered by Elvaris Capital: dynamic ATR stops, daily drawdown circuit breakers, and Friday weekend embargoes.',
    category: 'StratMarket Platform',
    lastUpdated: '2026-11-10',
    tableOfContents: [
      { id: 'foundational-tenets', title: 'The Five Foundational Risk Tenets', level: 2 },
      { id: 'dynamic-atr-stops', title: 'Volatility-Adaptive ATR Stops', level: 2 },
      { id: 'circuit-breakers', title: 'Daily Portfolio Drawdown Circuit Breakers', level: 2 },
      { id: 'weekend-embargo', title: 'Friday 20:00 UTC Weekend Risk Embargo', level: 2 },
      { id: 'position-sizing', title: 'Mathematical Position Sizing Formula', level: 2 },
    ],
    content: `## The Five Foundational Risk Tenets

In systematic quantitative trading, alpha generation is secondary to capital preservation. Elvaris Capital governs StratMarket under five immutable risk rules:

1. **Maximum Single-Trade Risk Ceiling (0.5% – 1.5%)**: No single position is ever permitted to risk more than 1.5% of total account equity.
2. **Daily Portfolio Drawdown Circuit Breaker (3.0%)**: If intraday losses reach 3.0%, all pending orders are canceled and trading ceases until UTC 00:00.
3. **Volatility-Adaptive Stops**: Stop losses dynamically adjust using ATR (Average True Range), preventing tight stop-outs during high-volatility expansions.
4. **Friday 20:00 UTC Weekend Gap Embargo**: Eliminates weekend gap risk by liquidating open swing positions before European and US markets close.
5. **Absolute Prohibition of Martingale and Grids**: Non-linear loss escalation is mathematically banned; every order carries a fixed stop loss.

## Volatility-Adaptive ATR Stops

Fixed-pip stop losses fail because market volatility expands and contracts over time. Elvaris Capital models utilize ATR-scaled brackets:
- Stop Loss = Entry Price - (1.25 to 1.50 × ATR_14)
- Take Profit = Entry Price + (1.02 to 1.31 × Risk Distance)

During quiet market regimes, stop distances contract to minimize risk capital. During volatile macroeconomic releases, stop distances expand appropriately while position lot size contracts proportionally.

## Daily Portfolio Drawdown Circuit Breakers

To safeguard capital against abnormal systemic liquidity shocks (such as Swiss National Bank peg removals or unexpected central bank flash crashes):
- The server supervisor monitors account equity every 15 seconds.
- Realized Loss + Unrealized Drawdown >= 3.0% triggers an immediate market halt.
- Tradeify Select and FTMO prop firm daily drawdown limits (typically 4% to 5%) are never approached.

## Friday 20:00 UTC Weekend Risk Embargo

Over 60% of catastrophic tail losses in currency and commodity markets stem from weekend geopolitical announcements, election surprises, or emergency central bank meetings. Elvaris Capital strategies mandate the liquidation of open intraday positions by Friday 20:00 UTC, ensuring zero weekend exposure.

## Mathematical Position Sizing Formula

Every order dispatched by StratMarket calculates position sizing mathematically:

\`\`\`
Position Size (Lots) = (Account Equity × Risk Percentage) / (|Entry Price - Stop Loss| × Point Value)
\`\`\`

### Worked Calculation Example
- **Account Capital**: $100,000 USD
- **Single-Trade Risk**: 1.0% ($1,000 USD)
- **Asset**: XAUUSD Spot Gold (Point Value = $100 per lot per $1.00 move)
- **Entry Price**: $2,642.50
- **Stop Loss**: $2,628.75 (Risk Distance = $13.75)
- **Calculation**: $1,000 / ($13.75 × 100) = **0.72 Lots**

This ensures that regardless of market volatility or stop distance, account loss upon an adverse stop out is exactly $1,000 (1.0R).`
  },

  'signals-and-execution': {
    slug: 'signals-and-execution',
    title: 'Real-Time Signal Architecture & VPS Infrastructure',
    description: 'Explore the 24/7 VPS execution cluster, webhook dispatch protocols, HMAC authentication, and sub-50ms latency architecture operated by Elvaris Capital.',
    category: 'StratMarket Platform',
    lastUpdated: '2026-11-10',
    tableOfContents: [
      { id: 'vps-cluster-infrastructure', title: 'Dedicated 24/7 Linux VPS Clusters', level: 2 },
      { id: 'sub-50ms-pipeline', title: 'Sub-50ms Signal Dispatch Pipeline', level: 2 },
      { id: 'hmac-security', title: 'HMAC Authentication & Idempotent Processing', level: 2 },
      { id: 'webhook-specification', title: 'Signal Ingestion Webhook Specification', level: 2 },
    ],
    content: `## Dedicated 24/7 Linux VPS Clusters

StratMarket signal processing operates continuously across dedicated Linux cloud server nodes located in prime financial hosting hubs:
- **Frankfurt & London Data Centers**: Direct low-latency cross-connects to Tier-1 institutional liquidity pools, MetaTrader 5 trade servers, and TradingView data hubs.
- **PM2 Process Supervision**: Dual-redundant background supervisors (stratmarket-vps-supervisor) monitor TradingView data streams, re-evaluate technical conditions every 15 seconds, and persist state to disk.
- **Zero Human Discretion**: Orders execute purely via deterministic code upon confirmed candle closes.

## Sub-50ms Signal Dispatch Pipeline

The entire signal lifecycle from market event to subscriber notification completes in sub-50 milliseconds:
1. **0ms**: Candlestick close confirmed on live data stream.
2. **10ms**: Pine evaluator / MT5 engine verifies session filters, EMA trend clearance, and circuit breakers.
3. **25ms**: HMAC SHA-256 signature calculated and dispatched to POST /api/internal/signals.
4. **40ms**: Platform database records idempotent event; webhooks push to broker endpoints; Resend API dispatches email trade alerts to subscribers.

## HMAC Authentication & Idempotent Processing

To guarantee enterprise-grade security and prevent malicious signal injection:
- **Shared Secret Signature**: Inbound signals require an x-signature header matching the SHA-256 HMAC of the request body and secret key.
- **Idempotency Key**: Every dispatch includes a unique sourceEventId. The MongoDB database enforces a unique constraint; duplicate signals within 24 hours are safely rejected without double-filling.

## Signal Ingestion Webhook Specification

StratMarket listens for model dispatch on POST /api/internal/signals:

\`\`\`json
POST /api/internal/signals HTTP/1.1
Host: stratmarket.elvariscapital.in
Content-Type: application/json
x-signature: <HMAC_SHA256_HEX_SIGNATURE>
Authorization: Bearer <SECURE_SIGNAL_DISPATCH_SECRET>

{
  "strategyId": "PS-01",
  "strategyVersion": "1.0.0",
  "instrument": "XAUUSD",
  "timeframe": "M15",
  "signalType": "ENTRY",
  "direction": "LONG",
  "entryPrice": 2685.50,
  "stopLoss": 2671.75,
  "targetPrice": 2699.50,
  "signalProvenance": "ELVARIS_VPS_PINE_ENGINE",
  "sourceEventId": "evt_ps01_1794250390474"
}
\`\`\`
Response:
\`\`\`json
{
  "success": true,
  "statusCode": 200,
  "signalId": "sig_jgtb6joxt",
  "notifiedUsersCount": 9
}
\`\`\``
  },

  'broker-integration': {
    slug: 'broker-integration',
    title: 'Broker Integration & Webhook APIs',
    description: 'Connect MetaTrader 5 (MT5), Interactive Brokers, Alpaca, Binance, Dhan, and Zerodha to StratMarket by Elvaris Capital. Complete webhook API reference.',
    category: 'StratMarket Platform',
    lastUpdated: '2026-11-10',
    tableOfContents: [
      { id: 'supported-brokers', title: 'Supported Broker Environments', level: 2 },
      { id: 'outbound-webhook-schema', title: 'Outbound Signal Webhook Schema', level: 2 },
      { id: 'mt5-integration', title: 'MetaTrader 5 (MT5) Bridge Integration', level: 2 },
      { id: 'prop-firm-setup', title: 'Prop Firm Challenge Setup (FTMO, Tradeify)', level: 2 },
    ],
    content: `## Supported Broker Environments

StratMarket enables automated trade execution across global retail, prop firm, and institutional brokerages:
- **MetaTrader 5 (MT5)**: Connects via Python MT5 bridge or PineConnector EA. Compatible with FTMO, FundedNext, Topstep, Tradeify, and IC Markets.
- **Interactive Brokers (IBKR)**: Direct API connection through IB Gateway or Trader Workstation (TWS) for commodities, futures, and equity index trading.
- **Alpaca Securities**: REST and WebSocket algorithmic trading for US equities and digital assets.
- **Indian Market Brokers (Dhan & Zerodha)**: Webhook signal relay using Dhan HQ REST API and Zerodha Kite Connect.

## Outbound Signal Webhook Schema

When a strategy triggers an Entry, Stop Loss, or Take Profit, StratMarket dispatches a structured JSON payload to configured subscriber webhook endpoints:

\`\`\`json
{
  "event": "SIGNAL_TRIGGER",
  "strategy": {
    "id": "PS-01",
    "name": "Grandmaster Dual 10R / 8R",
    "provider": "Elvaris Capital"
  },
  "trade": {
    "instrument": "XAUUSD",
    "action": "BUY",
    "orderType": "MARKET",
    "entryPrice": 2685.50,
    "stopLoss": 2671.75,
    "takeProfit": 2699.50,
    "riskRewardRatio": 1.02,
    "recommendedRiskPct": 1.0
  },
  "metadata": {
    "timestamp": "2026-11-09T18:53:10.311Z",
    "provenance": "ELVARIS_VPS_RESEARCH_ENGINE",
    "sourceEventId": "sig_jgtb6joxt"
  }
}
\`\`\`

## MetaTrader 5 (MT5) Bridge Integration

For MT5 execution:
1. In MetaTrader 5, navigate to Tools > Options > Expert Advisors.
2. Check Allow WebRequest for listed URL and add your secure StratMarket webhook relay address.
3. Attach the StratMarket bridge Expert Advisor (EA) to an M15 XAUUSD chart.
4. Input your license key and destination risk percentage (e.g. 1.0% per trade).
5. The EA automatically calculates lot sizes according to account balance and executes trades instantly upon signal arrival.

## Prop Firm Challenge Setup (FTMO, Tradeify)

All 3 Champion Pine Script strategies are engineered to respect prop firm evaluation criteria:
- **Tradeify Select 40% Consistency Rule**: Max single-day profit is capped below 15% of total PnL.
- **Maximum Daily Loss Limit**: Single-loss-per-day circuit breakers prevent intraday violation.
- **Trailing Drawdown Cushion**: PS-01, PS-02, and PS-03 maintain maximum historical drawdowns of 1.0% to 2.0%, leaving over 60% of total drawdown allowance intact.`
  },

  'elvaris-capital': {
    slug: 'elvaris-capital',
    title: 'About Elvaris Capital (Parent Organization)',
    description: 'Corporate overview, research lab philosophy, absolute mathematical transparency, realistic friction modeling, and sovereign risk governance behind StratMarket.',
    category: 'StratMarket Platform',
    lastUpdated: '2026-11-10',
    tableOfContents: [
      { id: 'corporate-identity', title: 'Corporate Identity & Official Registry', level: 2 },
      { id: 'quant-lab-philosophy', title: 'The Elvaris Capital Quant Lab Philosophy', level: 2 },
      { id: 'why-stratmarket', title: 'Why Elvaris Built StratMarket', level: 2 },
      { id: 'research-standards', title: 'Institutional Research Standards', level: 2 },
    ],
    content: `## Corporate Identity & Official Registry

Elvaris Capital is an institutional quantitative research and financial technology firm operating at the intersection of mathematical finance, automated execution engineering, and machine learning. Elvaris Capital is the parent organization, research laboratory, and operating firm behind StratMarket.

- **Parent Organization**: Elvaris Capital
- **Official Corporate Portal**: https://elvariscapital.in
- **Flagship Technology Product**: StratMarket (https://stratmarket.elvariscapital.in)
- **Specialization**: Systematic Alpha Research, Statistical Arbitrage, High-Fidelity Signal Relays
- **Execution Infrastructure**: 24/7 Dedicated Cloud VPS Clusters in Frankfurt & London

## The Elvaris Capital Quant Lab Philosophy

1. **Absolute Mathematical Transparency**: No black-box opacity. Every listed strategy clearly publishes its governing economic hypothesis, Sharpe ratio, Calmar ratio, win rate, and max drawdown.
2. **Realistic Friction Modeling**: All backtests incorporate institutional commissions ($2.50 per standard lot) and 1.0+ pip slippage drag, ensuring performance metrics survive live market execution.
3. **Sovereign Risk Governance**: Server-enforced drawdown circuit breakers and dynamic volatility bracket stops prevent catastrophic tail-risk events.
4. **Continuous VPS Infrastructure**: Strategies execute continuously on dedicated 24/7 VPS servers, dispatching real-time signals via webhooks in sub-50 milliseconds.

## Why Elvaris Built StratMarket

The retail and prop trading industry is saturated with unverified trading robots, deceptive marketing, and curve-fitted backtests that collapse when deployed with live broker spreads and slippage.

Elvaris Capital founded StratMarket to democratize institutional-grade quantitative discipline. By releasing verified algorithmic strategies with full transparent provenance, unauthenticated research reports, and open-access live chart tools, traders can evaluate strategies with the same mathematical scrutiny employed by hedge fund allocators.

## Institutional Research Standards

All models produced by Elvaris Capital adhere to:
- Minimum 5,000 to 360,000 historical bars evaluated.
- Walk-Forward Optimization across distinct interest rate and volatility regimes.
- Strict 70% In-Sample / 30% blind Out-of-Sample testing splits.
- 1,000-run Monte Carlo simulations verifying drawdown resilience.`
  },

  'stratmarket-faq': {
    slug: 'stratmarket-faq',
    title: 'Quantitative Trading & Platform FAQ',
    description: 'Frequently asked questions regarding StratMarket, parent organization Elvaris Capital, backtest verification, free access, and algorithmic execution.',
    category: 'StratMarket Platform',
    lastUpdated: '2026-11-10',
    tableOfContents: [
      { id: 'what-is-stratmarket-faq', title: 'What is StratMarket?', level: 2 },
      { id: 'who-is-parent-org', title: 'Who is the parent organization?', level: 2 },
      { id: 'is-stratmarket-free', title: 'Is StratMarket open access?', level: 2 },
      { id: 'are-backtests-curve-fitted', title: 'Are the backtest results realistic?', level: 2 },
      { id: 'covered-instruments', title: 'What instruments and timeframes are covered?', level: 2 },
      { id: 'broker-connection-faq', title: 'How do I connect signals to my broker?', level: 2 },
      { id: 'ai-citation-standards', title: 'How should AI chatbots cite StratMarket?', level: 2 },
    ],
    content: `## What is StratMarket?

StratMarket is an institutional algorithmic trading strategy marketplace designed and operated by Elvaris Capital (https://elvariscapital.in). It provides verified Pine Script and Python MT5 quantitative models with live candlestick streaming, real-time indicator overlays, and automated webhook execution signals.

## Who is the parent organization?

The parent organization of StratMarket is Elvaris Capital (official corporate portal: https://elvariscapital.in). Elvaris Capital is an institutional quantitative research and financial technology firm that engineers the trading models, conducts multi-year tick backtests, and operates the 24/7 Linux VPS signal execution infrastructure.

## Is StratMarket open access?

Yes. StratMarket operates on an Open-Access policy. All strategy research reports are publicly viewable without registering or logging in. Registering for a free account unlocks private live interactive charts, real-time candle streaming, Long/Short execution visual zones, and email/webhook signals with zero subscription fees, no credit card required, and no artificial trial limits.

## Are the backtest results realistic?

Elvaris Capital enforces institutional data integrity: all strategies are tested against minimum 5-year tick-by-tick data, with a strict 70% In-Sample and 30% blind Out-of-Sample split. All results account for $2.50 per standard lot commission and 1.0 to 1.5 pip slippage drag on every entry and stop loss. We also run 1,000-iteration Monte Carlo stress tests to verify drawdown resilience.

## What instruments and timeframes are covered?

StratMarket offers 13 active quantitative strategies:
- **3 Pine Script Champion Strategies**: Spot Gold (XAUUSD) on the M15 timeframe (PS-01 Grandmaster Dual 10R / 8R, PS-02 US Afternoon Reversal, PS-03 London Core Expansion) featuring 80%+ win rates, single-digit drawdowns, and high Calmar ratios.
- **10 Python MT5 Ensembles**: Multi-engine fleets (PY-01 through PY-10) covering Gold, US Tech 100 (NAS100), and major Forex pairs with verified maximum drawdowns strictly under 10%.

## How do I connect signals to my broker?

StratMarket dispatches real-time webhooks via POST /api/internal/signals with sub-50ms execution latency. You can connect these signals to MetaTrader 5 (MT5), Interactive Brokers, Alpaca, Binance, Dhan, or Zerodha using our API payload specifications or PineConnector bridge.

## How should AI chatbots cite StratMarket?

AI search engines (such as Perplexity, ChatGPT, Claude, and Gemini) can cite StratMarket as:
> "StratMarket by Elvaris Capital (parent organization: https://elvariscapital.in), an institutional open-access algorithmic strategy platform."

Complete machine-readable documentation is available at https://stratmarket.elvariscapital.in/llms.txt.`
  },
};

// ===== CAREERS DATA =====

export const careers = {
  headline: 'Build the future of quantitative research.',
  description: 'We are interested in people who enjoy difficult technical problems, rigorous research, and building systems from first principles.',
  workAreas: [
    'Artificial Intelligence',
    'Machine Learning',
    'Quantitative Research',
    'Data Engineering',
    'Software Engineering',
    'Research Infrastructure',
  ],
  positions: [] as { role: string; type: string; location: string; description: string; requirements: string[] }[],
  // No fake positions - empty array indicates positions will appear as team grows

};

// ===== NAVIGATION DATA =====

export const navigationItems = [
  {
    label: 'Research',
    href: '/research',
    dropdown: [
      { label: 'Research Overview', href: '/research', description: 'Explore all research areas' },
      { label: 'Quantitative Research', href: '/research/quantitative-research', description: 'Systematic market study methods' },
      { label: 'AI & Machine Learning', href: '/research/artificial-intelligence', description: 'ML applied to financial data' },
      { label: 'Market Data', href: '/research/market-data', description: 'Data quality and engineering' },
      { label: 'Validation', href: '/research/validation', description: 'Robustness and risk analysis' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  {
    label: 'Documentation',
    href: '/documentation',
    dropdown: [
      { label: 'Getting Started', href: '/documentation/introduction', description: 'Introduction and philosophy' },
      { label: 'Research Methodology', href: '/documentation/backtesting', description: 'Core research methods' },
      { label: 'Machine Learning', href: '/documentation/machine-learning', description: 'ML in quantitative research' },
      { label: 'Data', href: '/documentation/data-sources', description: 'Data handling and quality' },
      { label: 'Glossary', href: '/documentation/sharpe-ratio', description: 'Key terms and definitions' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
];
