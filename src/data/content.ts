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
