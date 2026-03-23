window.RGM_SELF_ASSESSMENT_DATA = {
  title: "T1-T5 Self-Assessment Hub",
  subtitle:
    "Use the original certification question bank and stage criteria to check how ready you are across Foundation, Diagnosis, Pack Design, Execution, and end-to-end certification.",
  storageKey: "rgm-t1-t5-self-assessment-v2",
  stages: [
    {
      id: "stage-1",
      label: "Stage 1",
      title: "Foundation",
      audience: "Associate / Analyst",
      passMark: 75,
      duration: "45 minutes",
      description:
        "Covers the baseline language, framework logic, and non-negotiable principles behind Recruitment and Affordability Packs.",
      sources: [
        "Training Programme T1-T5: Stage 1 Sample Questions",
        "Assessment Question Bank Full Bank - Stage 1",
      ],
      objectiveQuestions: [
        {
          id: "s1q1",
          prompt:
            "Which of the following best describes the PRIMARY purpose of a Recruitment Pack?",
          options: {
            A: "To protect existing heavy buyers from trading down during inflationary periods",
            B: "To acquire new or lapsed consumers by removing the trial barrier through price or portion",
            C: "To drive frequency among existing light buyers by offering a larger pack at lower price per liter",
            D: "To differentiate portfolio presentation between Modern Trade and General Trade channels",
          },
          answer: "B",
          source: "Ch.0 / Ch.1",
          rationale:
            "A Recruitment Pack is built to remove the trial barrier for non-buyers and lapsed buyers, not to defend current heavy buyers or simply differentiate channels.",
        },
        {
          id: "s1q2",
          prompt: "The Affordability Index formula is defined as:",
          options: {
            A: "DDI divided by Current Pack Price multiplied by 100",
            B: "Current Pack Price divided by Local Magic Price Point multiplied by 100",
            C: "NSR per case divided by GP per case multiplied by 100",
            D: "Penetration Rate divided by Category Average multiplied by 100",
          },
          answer: "B",
          source: "Ch.2 / Ch.8",
          rationale:
            "The Affordability Index compares the current entry pack price against the market Magic Price Point to show whether affordability stress exists.",
        },
        {
          id: "s1q3",
          prompt:
            "A market team identifies that category penetration is 65% but brand penetration is only 38%, with no price-sensitivity signal in consumer research. The most likely problem classification is:",
          options: {
            A: "Pack Problem - the wrong format is blocking recruitment",
            B: "Execution Problem - distribution is insufficient",
            C: "Brand Problem - consumers are buying the category but not the brand",
            D: "Price Problem - the brand is priced above the affordability threshold",
          },
          answer: "C",
          source: "Ch.2",
          rationale:
            "Consumers are active in the category but are choosing another brand, which points to a brand issue rather than price or pack architecture.",
        },
        {
          id: "s1q4",
          prompt:
            "Which of the following is a BLOCKING FACTOR in the 6-Dimension Evaluation Framework, regardless of total score?",
          options: {
            A: "A Consumer Fit score of 3 without conjoint validation",
            B: "An Operational Fit score of 4 requiring moderate supply chain investment",
            C: "Any single dimension scoring 1",
            D: "An Economic Fit score below 4",
          },
          answer: "C",
          source: "Ch.3",
          rationale:
            "A score of 1 on any dimension is an explicit blocking factor even if the overall weighted total looks acceptable.",
        },
        {
          id: "s1q5",
          prompt:
            'The "Five Non-Negotiable Execution Conditions" for a Recruitment Pack launch are:',
          options: {
            A: "Right Outlet, Right Price, Right Visibility, Right Incentive, Right Replenishment",
            B: "Right Brand, Right Pack, Right Channel, Right Consumer, Right Occasion",
            C: "Right Distribution, Right POSM, Right Trade Investment, Right Timing, Right Message",
            D: "Right Target, Right Metric, Right Timeline, Right Owner, Right Budget",
          },
          answer: "A",
          source: "Ch.4",
          rationale:
            "These five conditions govern whether the pack is actually available and functioning correctly in-market.",
        },
        {
          id: "s1q6",
          prompt: 'The "Two-Engine Growth Model" in RGM refers to:',
          options: {
            A: "Volume growth and value growth as dual metrics",
            B: "Recruitment and Retention as dual growth engines",
            C: "Modern Trade growth and General Trade growth as parallel channels",
            D: "On-invoice discounts and off-invoice rebates as the two levers of trade spend",
          },
          answer: "B",
          source: "Ch.1",
          rationale:
            "The model balances new-consumer recruitment with deeper value from existing consumers.",
        },
        {
          id: "s1q7",
          prompt:
            "Under the RGMX framework, a Recruitment Pack is approved when:",
          options: {
            A: "It generates incremental volume regardless of margin impact",
            B: "It grows market share above the competitor's entry-price share position",
            C: "It delivers incremental volume and a credible path to positive system economics",
            D: "It receives sign-off from the Country GM and CFO simultaneously",
          },
          answer: "C",
          source: "Ch.1",
          rationale:
            "RGMX requires volume growth and margin expansion to work together at the system level.",
        },
        {
          id: "s1q8",
          prompt:
            "A Recruitment Pack that scores well on Consumer Fit and Channel Fit but has a GP percent below the market threshold should:",
          options: {
            A: "Be approved with a 12-month monitoring condition",
            B: "Be blocked at Economic Fit because any dimension scoring 1 is a blocker",
            C: "Be submitted to Regional RGM for special approval",
            D: "Be launched in a limited pilot without a formal business case",
          },
          answer: "B",
          source: "Ch.3",
          rationale:
            "A failed economic threshold stops the pack regardless of strength elsewhere.",
        },
        {
          id: "s1q9",
          prompt: "The correct sequence in the OBPPC logic tree is:",
          options: {
            A: "Pack Format to Brand to Price to Channel to Consumer Insight to Execution",
            B: "Consumer Insight to Brand Role to Pack Role to Pack Format to Price Architecture to Channel to Execution to Measurement",
            C: "Price Architecture to Consumer Insight to Pack Role to Brand Role to Channel to Execution",
            D: "Channel to Consumer Insight to Pack Format to Price to Brand to Execution to Measurement",
          },
          answer: "B",
          source: "Ch.1",
          rationale:
            "The playbook starts with insight, not with pack format or channel mechanics.",
        },
        {
          id: "s1q10",
          prompt: 'A "Magic Price Point" is best defined as:',
          options: {
            A: "The lowest price at which a pack can be produced and still yield positive GP",
            B: "A psychologically significant price threshold that lifts transaction propensity disproportionately",
            C: "The price where 50 percent of consumers say they are willing to buy",
            D: "The price at which the pack becomes the cheapest option in channel",
          },
          answer: "B",
          source: "Ch.0 / Ch.2",
          rationale:
            "Magic Price Points are anchored in behavior and market psychology, not just cost or survey averages.",
        },
        {
          id: "s1q11",
          prompt: "Which statement about cannibalization is CORRECT?",
          options: {
            A: "Cannibalization must be zero for approval",
            B: "A standard threshold of less than 30 percent usually applies, though context matters",
            C: "Cannibalization only matters if the affected pack has higher GP percent",
            D: "Cannibalization is acceptable up to 50 percent in any context",
          },
          answer: "B",
          source: "Ch.0 / Ch.5",
          rationale:
            "Cannibalization is expected and must be modelled, but it needs to stay within contextually acceptable bounds.",
        },
        {
          id: "s1q12",
          prompt:
            'The primary difference between an "Entry Pack" and a "Frequency Pack" in OBPPC architecture is:',
          options: {
            A: "Entry Packs always have lower GP percent",
            B: "Entry Packs recruit new or lapsed consumers, while Frequency Packs drive repeat among existing buyers",
            C: "Entry Packs are always physically smaller",
            D: "Entry Packs only sell in General Trade and Frequency Packs only in Modern Trade",
          },
          answer: "B",
          source: "Ch.1",
          rationale:
            "Pack role is defined by strategic consumer intent, not simply by pack size or channel.",
        },
        {
          id: "s1q13",
          prompt:
            'Which of the following best describes "Daily Disposable Income" (DDI) as used in RGM?',
          options: {
            A: "Total annual household income divided by 365",
            B: "The discretionary amount a consumer has available to spend per day after fixed costs",
            C: "The median daily income of the lowest income quintile",
            D: "The amount required to buy the brand's current entry pack",
          },
          answer: "B",
          source: "Ch.0 / Ch.2",
          rationale:
            "DDI is the realistic affordability ceiling for discretionary FMCG choices after essentials are covered.",
        },
        {
          id: "s1q14",
          prompt: 'The primary reason to "define exit criteria before launch" is:',
          options: {
            A: "To satisfy Finance requirements for budget approval",
            B: "To prevent teams from extending a failing pack beyond its useful diagnostic window",
            C: "To let Regional RGM override the market later",
            D: "To satisfy Stage 4 certification rules",
          },
          answer: "B",
          source: "Ch.1 / Ch.7",
          rationale:
            "Pre-defined exit rules protect the business from drifting into 'launch and hope' governance behavior.",
        },
        {
          id: "s1q15",
          prompt:
            "Should a market launch a Recruitment Pack to solve an Execution Problem such as poor POSM compliance and distributor stockouts?",
          options: {
            A: "Yes, because a lower-price pack will still drive trial",
            B: "No, because the new pack will fail for the same execution reasons unless execution is fixed first",
            C: "Possibly, if the market pilots only in well-executed outlets",
            D: "Yes, but only in Modern Trade",
          },
          answer: "B",
          source: "Ch.2",
          rationale:
            "A new pack cannot compensate for broken execution fundamentals.",
        },
        {
          id: "s1q16",
          prompt:
            "In the five-step diagnosis process, which step should always be completed before channel diagnosis?",
          options: {
            A: "Problem Classification",
            B: "Price-Pack Ladder Mapping",
            C: "Affordability Context and Category and Brand Participation",
            D: "Go/No-Go Decision",
          },
          answer: "C",
          source: "Ch.2",
          rationale:
            "The affordability baseline and participation view set up the logic for later channel and ladder analysis.",
        },
        {
          id: "s1q17",
          prompt:
            "A market has DDI of approximately USD 6 per day. Category DDI range for an affordable single-serve IC pack is 3 to 5 percent of DDI. What is the target EPP range?",
          options: {
            A: "USD 0.06 to 0.10",
            B: "USD 0.18 to 0.30",
            C: "USD 0.30 to 0.60",
            D: "USD 0.60 to 1.20",
          },
          answer: "B",
          source: "Ch.2 / Ch.3",
          rationale:
            "Applying the DDI benchmark produces an entry price band of USD 0.18 to 0.30.",
        },
        {
          id: "s1q18",
          prompt: 'The "Opportunity Heatmap" framework in Chapter 2 is used to:',
          options: {
            A: "Map competitor pack distribution by channel and segment",
            B: "Summarize findings across segments and channels to identify priority areas for intervention",
            C: "Track 90-day KPI performance",
            D: "Assign RACI responsibilities across launch functions",
          },
          answer: "B",
          source: "Ch.2",
          rationale:
            "It is a diagnosis prioritization tool, not a KPI tracker or governance document.",
        },
        {
          id: "s1q19",
          prompt:
            "In building a business case, which of the following is the correct volume estimation approach for a Recruitment Pack?",
          options: {
            A: "Total category volume multiplied by target market share gain",
            B: "Penetration uplift target multiplied by average purchase frequency multiplied by average pack size",
            C: "Competitor entry-pack volume multiplied by your distribution advantage",
            D: "Category growth rate multiplied by number of target outlets",
          },
          answer: "B",
          source: "Ch.3",
          rationale:
            "The business case must be grounded in recruitment logic, not broad category shortcuts.",
        },
        {
          id: "s1q20",
          prompt:
            "A pack design starting from an existing 500ml format with a 10 percent price reduction is an example of:",
          options: {
            A: "Good pack design because it minimizes production cost and capex",
            B: "A common design error because it starts from the existing pack instead of the target transaction price",
            C: "A Frequency Pack strategy by default",
            D: "An always-correct Affordability Pack approach that is always correct for retention",
          },
          answer: "B",
          source: "Ch.3",
          rationale:
            "Recruitment Pack design should start from the target transaction price and work backward to pack format.",
        },
      ],
      reflections: [
        "I can clearly explain the difference between Recruitment, Affordability, Entry, and Frequency Packs.",
        "I understand how DDI, Magic Price Point, and the Affordability Index connect to one another.",
        "I can describe the 6-Dimension Evaluation Framework and the role of blocking factors.",
        "I can explain why execution readiness matters as much as pack design for launch success.",
      ],
    },
    {
      id: "stage-2",
      label: "Stage 2",
      title: "Market Diagnosis and Analytics",
      audience: "Manager / Senior Analyst",
      passMark: 70,
      duration: "30 minutes test plus 45 minutes written analysis",
      description:
        "Tests whether the learner can diagnose the problem correctly before jumping to a pack solution.",
      sources: [
        "Training Programme T1-T5: Stage 2 Sample Questions",
        "Assessment Question Bank Full Bank - Stage 2",
      ],
      objectiveQuestions: [
        {
          id: "s2q1",
          prompt:
            "A market shows category penetration of 45 percent, brand penetration of 42 percent, brand entry-pack price index versus DDI of 128, and lapsed buyer rate up 8 percent. What is the most likely diagnosis?",
          options: {
            A: "Brand problem",
            B: "Execution problem",
            C: "Price problem",
            D: "Pack problem",
          },
          answer: "C",
          source: "Ch.2",
          rationale:
            "The brand gap is small, but affordability stress is high and lapsed buyer behavior is worsening, which points to a price issue.",
        },
        {
          id: "s2q2",
          prompt:
            "In a price-pack ladder mapping exercise, a gap at the 3 to 4 percent DDI range with no own or competitive pack present is most likely to represent:",
          options: {
            A: "A premiumization opportunity",
            B: "An Entry Price Point white space",
            C: "A cannibalization risk",
            D: "A distribution problem",
          },
          answer: "B",
          source: "Ch.2",
          rationale:
            "A missing pack at that affordability band suggests unmet entry-point demand.",
        },
        {
          id: "s2q3",
          prompt:
            "Which data source is most appropriate for measuring household penetration growth after a Recruitment Pack launch?",
          options: {
            A: "Nielsen Retail Measurement Service",
            B: "Distributor sell-in data",
            C: "Kantar or Nielsen household panel data",
            D: "Internal shipment data",
          },
          answer: "C",
          source: "Ch.2 / Ch.5",
          rationale:
            "Penetration requires household-level purchase behavior, not shipment or store-level movement.",
        },
        {
          id: "s2q4",
          prompt:
            "In the five-step diagnosis process, which step should always be completed before channel diagnosis?",
          options: {
            A: "Problem Classification",
            B: "Price-Pack Ladder Mapping",
            C: "Affordability Context and Category and Brand Participation",
            D: "Go/No-Go Decision",
          },
          answer: "C",
          source: "Ch.2",
          rationale:
            "The macro affordability and participation picture sets the baseline for everything that follows.",
        },
        {
          id: "s2q5",
          prompt:
            "A market has DDI of approximately USD 6 per day and an affordable single-serve target of 3 to 5 percent of DDI. What is the target EPP range?",
          options: {
            A: "USD 0.06 to 0.10",
            B: "USD 0.18 to 0.30",
            C: "USD 0.30 to 0.60",
            D: "USD 0.60 to 1.20",
          },
          answer: "B",
          source: "Ch.2 / Ch.3",
          rationale:
            "Applying the DDI benchmark produces an entry price band of USD 0.18 to 0.30.",
        },
        {
          id: "s2q6",
          prompt: 'The "Opportunity Heatmap" framework is used to:',
          options: {
            A: "Map competitor pack distribution by channel and segment",
            B: "Summarize findings across segments and channels to identify priority areas for intervention",
            C: "Track 90-day KPI performance",
            D: "Assign RACI responsibilities",
          },
          answer: "B",
          source: "Ch.2",
          rationale:
            "It is a prioritization tool at the end of diagnosis, not a governance or launch scorecard.",
        },
        {
          id: "s2q7",
          prompt:
            "An Affordability Index above 110 generally signals:",
          options: {
            A: "The current entry pack is well aligned with the market Magic Price Point",
            B: "Meaningful affordability stress that may require intervention",
            C: "The market has a Brand Problem rather than a Price Problem",
            D: "The category should be solved through trade execution only",
          },
          answer: "B",
          source: "Ch.2",
          rationale:
            "The playbook uses 110 as the threshold above which affordability pressure is meaningful enough to investigate action.",
        },
        {
          id: "s2q8",
          prompt:
            "If category penetration and brand penetration are both low, while price stress is not evident and distribution is uneven, which problem type should be tested first?",
          options: {
            A: "Execution Problem",
            B: "Price Problem",
            C: "Magic Price Point failure",
            D: "Cannibalization problem",
          },
          answer: "A",
          source: "Ch.2",
          rationale:
            "When distribution or execution is visibly weak, the diagnosis should not jump straight to a pack answer before execution basics are tested.",
        },
        {
          id: "s2q9",
          prompt:
            "Which of the following belongs to channel and occasion diagnosis rather than affordability context?",
          options: {
            A: "Income segments and inflation pressure",
            B: "Daily Disposable Income benchmark",
            C: "Consumer mission and cash-in-hand analysis",
            D: "Magic Price Point threshold",
          },
          answer: "C",
          source: "Ch.2",
          rationale:
            "Mission and cash-in-hand analysis are part of understanding how the consumer shops in a specific channel and occasion context.",
        },
        {
          id: "s2q10",
          prompt:
            "The main purpose of the Go/No-Go decision logic in diagnosis is to:",
          options: {
            A: "Guarantee that every diagnosed gap becomes a new pack proposal",
            B: "Decide whether the root cause should be solved by a pack or by another commercial lever",
            C: "Set the final launch KPI targets",
            D: "Approve the business case before pack design begins",
          },
          answer: "B",
          source: "Ch.2",
          rationale:
            "The Go/No-Go logic protects teams from solving the wrong problem with a new pack.",
        },
      ],
      reflections: [
        "I can distinguish a Brand Problem, Price Problem, Pack Problem, and Execution Problem using evidence.",
        "I can calculate and interpret an Affordability Index without support.",
        "I can explain where the white space sits in a price-pack ladder and why it matters.",
        "I can tell when the correct answer is 'do not solve this with a pack'.",
      ],
      scenario: {
        prompt:
          "Market X: Category penetration 52%. Brand penetration 44%. Current entry pack PET 330ml at USD 0.45. Local DDI USD 8 per day. Magic Price Point for IC beverages USD 0.25. Competitive local pack 250ml at USD 0.25. Lapsed buyer rate is up 12 percent and brand equity is stable. Write your diagnosis before opening the model answer.",
        guidance: [
          "Complete the Affordability Index calculation.",
          "Classify the problem type.",
          "State whether a pack intervention is warranted and why.",
        ],
        modelAnswer:
          "Affordability Index = 0.45 / 0.25 x 100 = 180. This indicates severe affordability stress. Because brand equity is stable and the brand penetration gap is not the main issue, the more likely classification is a Price Problem. A pack intervention is warranted because the current entry price sits well above the Magic Price Point while a local competitor is winning at the entry threshold.",
      },
    },
    {
      id: "stage-3",
      label: "Stage 3",
      title: "Pack Design and Business Case",
      audience: "Senior Manager",
      passMark: 70,
      duration: "Structured pack selection plus business case build",
      description:
        "Focuses on whether a learner can convert diagnosis into a sound pack recommendation with defensible economics.",
      sources: [
        "Training Programme T1-T5: Stage 3 Sample Questions",
        "Assessment Question Bank Full Bank - Stage 3",
      ],
      objectiveQuestions: [
        {
          id: "s3q1",
          prompt:
            'The design principle "start from the target transaction price, not from the pack" means:',
          options: {
            A: "Always design the smallest possible pack",
            B: "Set the Entry Price Point first, then determine the best format and size at that price",
            C: "Set the RSP equal to the DDI benchmark before thinking about format",
            D: "Price the pack 10 percent below the nearest competitive entry pack",
          },
          answer: "B",
          source: "Ch.3",
          rationale:
            "The playbook explicitly warns against starting from an existing pack and simply discounting it.",
        },
        {
          id: "s3q2",
          prompt:
            "A pack scores 4 out of 5 on Consumer Fit, Channel Fit, and Brand Fit, but 1 out of 5 on Economic Fit because GP percent is below threshold. What is the correct action?",
          options: {
            A: "Proceed because the weighted total is still strong",
            B: "Block and redesign because an Economic Fit score of 1 is a blocker",
            C: "Approve with a monitoring condition",
            D: "Escalate to Regional RGM for a final decision",
          },
          answer: "B",
          source: "Ch.3",
          rationale:
            "A single score of 1 blocks the pack regardless of strong scores elsewhere.",
        },
        {
          id: "s3q3",
          prompt:
            "In building a business case, which is the correct volume estimation approach for a Recruitment Pack?",
          options: {
            A: "Total category volume multiplied by target market share gain",
            B: "Penetration uplift target multiplied by average purchase frequency multiplied by average pack size",
            C: "Competitor entry-pack volume multiplied by your distribution advantage",
            D: "Category growth rate multiplied by target outlets",
          },
          answer: "B",
          source: "Ch.3",
          rationale:
            "The business case must be grounded in recruitment logic, not broad category shortcuts.",
        },
        {
          id: "s3q4",
          prompt:
            "A pack design starting from an existing 500ml format with a 10 percent price reduction is an example of:",
          options: {
            A: "Good pack design because it minimizes capex",
            B: "A common design error because it starts from the pack instead of the EPP",
            C: "A Frequency Pack strategy by default",
            D: "An always-correct Affordability Pack approach",
          },
          answer: "B",
          source: "Ch.3",
          rationale:
            "The Recruitment Pack logic starts from the target transaction and works backward.",
        },
        {
          id: "s3q5",
          prompt:
            "Which of the following best reflects a sound Entry Price Point derivation?",
          options: {
            A: "Use the lowest price operations can produce and present that as the EPP",
            B: "Anchor on DDI, Magic Price Point, and competitive context before selecting pack format",
            C: "Price 10 percent below the nearest competitor and treat that as the EPP",
            D: "Use the current pack price if distribution is already high",
          },
          answer: "B",
          source: "Ch.3",
          rationale:
            "The playbook defines EPP from market affordability and shopper behavior, not from production convenience.",
        },
        {
          id: "s3q6",
          prompt:
            "In the 6-Dimension Evaluation Framework, which dimension checks whether the pack can actually be supplied and supported in-market?",
          options: {
            A: "Brand Fit",
            B: "Consumer Fit",
            C: "Operational Fit",
            D: "Occasion Fit",
          },
          answer: "C",
          source: "Ch.3",
          rationale:
            "Operational Fit tests whether supply chain, capacity, and market execution requirements can be met.",
        },
        {
          id: "s3q7",
          prompt:
            "What is the most important reason to include cannibalization explicitly in the Stage 3 business case?",
          options: {
            A: "Because all new packs should assume zero incrementality until proven otherwise",
            B: "Because gross volume alone can overstate value if existing profitable packs are being displaced",
            C: "Because finance requires cannibalization to exceed 30 percent for approval",
            D: "Because cannibalization only affects modern trade economics",
          },
          answer: "B",
          source: "Ch.3 / Ch.5",
          rationale:
            "A pack that looks strong on headline volume can still destroy value if it mostly shifts demand from a better existing pack.",
        },
        {
          id: "s3q8",
          prompt:
            "If the strategic objective is repeat purchase among existing lighter buyers rather than first-time trial, the pack role is more likely to be:",
          options: {
            A: "Recruitment or Entry Pack",
            B: "Frequency Pack",
            C: "Execution-only intervention",
            D: "Brand blocking pack",
          },
          answer: "B",
          source: "Ch.1 / Ch.3",
          rationale:
            "Frequency Packs are designed to increase repeat behavior among existing consumers rather than recruit new ones.",
        },
      ],
      reflections: [
        "I can build a business case from reach, trial, repeat, and economics instead of using top-down shortcuts.",
        "I can explain why a pack that looks attractive to consumers can still fail on Economic or Operational Fit.",
        "I can defend why an EPP-led design sequence is better than discounting an existing pack.",
        "I can explain a recommendation using the 6-Dimension framework without losing the commercial narrative.",
      ],
      scenario: {
        prompt:
          "Before scoring yourself, write a short note: if your recommended pack had strong Consumer Fit but weak GP percent, what redesign levers would you explore before asking for approval?",
        guidance: [
          "Consider format or size redesign.",
          "Revisit the target EPP and system economics.",
          "Think about value-chain costs, customer economics, and channel deployment.",
        ],
        modelAnswer:
          "The correct move is redesign, not exception approval. Typical levers include resizing the pack, adjusting format or material cost, reworking customer economics, or refining channel strategy so the target EPP can be met without breaking minimum GP percent thresholds.",
      },
    },
    {
      id: "stage-4",
      label: "Stage 4",
      title: "Commercialization and Execution",
      audience: "RGM Lead",
      passMark: 70,
      duration: "Launch plan design plus 90-day action plan",
      description:
        "Assesses whether the learner can turn a good pack into a launch that actually works in-market.",
      sources: [
        "Training Programme T1-T5: Stage 4 Sample Questions",
        "Assessment Question Bank Full Bank - Stage 4",
      ],
      objectiveQuestions: [
        {
          id: "s4q1",
          prompt:
            "A pack launched 30 days ago. Numeric distribution is 75 percent vs. target 80 percent. EPP compliance is 92 percent, POSM compliance 88 percent, stockout rate 3 percent, and repeat purchase among trial buyers 22 percent. What is the correct action?",
          options: {
            A: "Exit",
            B: "Scale immediately",
            C: "Fix the numeric distribution gap while preserving current momentum",
            D: "Hold and wait for the 60-day review",
          },
          answer: "C",
          source: "Ch.4 / Ch.5",
          rationale:
            "Most metrics are healthy, so the correct move is a targeted fix rather than scale, hold, or exit.",
        },
        {
          id: "s4q2",
          prompt:
            'Which of the following is the correct "Scale / Fix / Exit" trigger at the 90-day review?',
          options: {
            A: "Scale if volume is at least 50 percent of target and any two non-negotiables are met",
            B: "Fix if volume is 50 to 80 percent of target and one or two specific failure modes are identified",
            C: "Exit if volume is below 80 percent of target regardless of the reason",
            D: "Scale if NSR per case is above forecast even if volume is below target",
          },
          answer: "B",
          source: "Ch.5",
          rationale:
            "The playbook distinguishes diagnostic, fixable underperformance from structural failure.",
        },
        {
          id: "s4q3",
          prompt:
            'A distributor prices the new entry pack 15 percent above the defined EPP "because transport cost is higher." What is the correct response?',
          options: {
            A: "Accept the premium because transport economics justify it",
            B: "Escalate to Country GM because pricing needs executive sign-off",
            C: "Address immediately because EPP compliance is a non-negotiable and the deviation destroys the recruitment mechanic",
            D: "Monitor only if stockout rate is still below 5 percent",
          },
          answer: "C",
          source: "Ch.4",
          rationale:
            "If the pack misses the designed transaction threshold, the core recruitment mechanic breaks down.",
        },
        {
          id: "s4q4",
          prompt: "Why is the first 90-day launch window so significant?",
          options: {
            A: "Because Finance requires quarterly review cycles",
            B: "Because trial velocity is highest early, and stockouts or execution gaps can permanently damage momentum",
            C: "Because it aligns with annual planning",
            D: "Because consumer research is not valid after 90 days",
          },
          answer: "B",
          source: "Ch.4",
          rationale:
            "The early launch window is where visibility, novelty, and repeat formation are most fragile.",
        },
        {
          id: "s4q5",
          prompt:
            "Which of the following is most clearly a pre-launch readiness item rather than a post-launch KPI?",
          options: {
            A: "Repeat purchase rate",
            B: "Household penetration uplift",
            C: "Pricing architecture and commercial policy alignment",
            D: "Incremental NSR after 6 months",
          },
          answer: "C",
          source: "Ch.4",
          rationale:
            "Pre-launch readiness ensures the pricing and commercial rules are aligned before the pack reaches the market.",
        },
        {
          id: "s4q6",
          prompt:
            "Which statement best describes the sell-in to sell-out closed loop?",
          options: {
            A: "Once the distributor accepts the pack, the market can move immediately to scale",
            B: "Distributor briefing, outlet compliance tracking, early-read monitoring, and corrective action are connected as one loop",
            C: "Sell-in is owned by sales and sell-out is owned by marketing, so the loop is intentionally separate",
            D: "The loop mainly exists to justify post-launch media spend",
          },
          answer: "B",
          source: "Ch.4",
          rationale:
            "The playbook treats distributor readiness, outlet execution, and rapid correction as one connected operating system.",
        },
        {
          id: "s4q7",
          prompt:
            "Which of the following is the best example of a leading KPI in the launch architecture?",
          options: {
            A: "Household penetration after 6 months",
            B: "Numeric distribution and EPP compliance in the first weeks",
            C: "Year 1 NPV",
            D: "Long-term brand equity shift",
          },
          answer: "B",
          source: "Ch.4 / Ch.5",
          rationale:
            "Leading KPIs are the immediate operational signals that tell the team whether the launch mechanic is functioning.",
        },
        {
          id: "s4q8",
          prompt:
            "Why is replenishment treated as one of the Five Non-Negotiables?",
          options: {
            A: "Because replenishment only matters for finance reporting accuracy",
            B: "Because a stockout during early trial can break repeat formation and waste recruitment momentum",
            C: "Because distributors prefer larger case orders during launch",
            D: "Because it reduces the need for POSM",
          },
          answer: "B",
          source: "Ch.4",
          rationale:
            "If consumers trial the pack but cannot find it again, the recruitment mechanic collapses before repeat behavior forms.",
        },
      ],
      reflections: [
        "I can diagnose whether a launch issue is a Scale, Fix, or Exit problem.",
        "I can explain why EPP compliance and replenishment are commercial mechanics, not just operations details.",
        "I can build a 90-day KPI view with leading, mid-term, and lagging indicators.",
        "I can translate a strategy deck into outlet-level execution requirements.",
      ],
      scenario: {
        prompt:
          "Think through your first 30-day review cadence. If ND is below target but trial and repeat are strong, what is the one operational question you would ask first?",
        guidance: [
          "Look for specific failure modes, not generic explanations.",
          "Check where the gap sits: outlet type, distributor, region, or RTM issue.",
          "Define the fix owner and the time window for correction.",
        ],
        modelAnswer:
          "The first question should isolate the exact source of the ND gap: which priority outlets or territories are missing and why. That makes the issue diagnostic and fixable instead of turning a healthy launch into a vague performance debate.",
      },
    },
    {
      id: "stage-5",
      label: "Stage 5",
      title: "Certification Readiness",
      audience: "All levels (cumulative)",
      passMark: 70,
      duration: "60-minute written assessment plus case preparation and panel defense",
      description:
        "Built from the Stage 5 case brief and certification weighting. This stage is a readiness check for end-to-end capability rather than a pure MCQ test.",
      sources: [
        "Training Programme T1-T5: Composite Scoring Model",
        "Assessment Question Bank Full Bank - Stage 5 Certification Market Case Brief",
      ],
      objectiveQuestions: [],
      reflections: [
        "I can diagnose a market using affordability, participation, and competitive signals without jumping to a solution too early.",
        "I can turn diagnosis into a pack recommendation with a defendable EPP, format choice, and 6-Dimension logic.",
        "I can build a Year 1 to Year 3 business case and explain key assumptions such as trial, cannibalization, and NPV.",
        "I can present a 90-day launch plan with clear KPIs, stage gates, and governance owners.",
        "I can defend my recommendation under challenge from senior RGM and finance stakeholders.",
      ],
      caseBrief: {
        market: "Bangladesh",
        context:
          "Population 170M. GDP per capita about USD 2,800. Urban grocery DDI approximately BDT 400 to 600 per day. Food inflation remains elevated. GT accounts for roughly 90 percent of NARTD volume and cold chain is constrained outside major cities.",
        category:
          "SSD category penetration is 28 percent and brand penetration is 19 percent. Current entry pack is PET 250ml at BDT 20. Magic Price Point in GT is BDT 10 to 15. A local competitor offers 200ml at BDT 12. Lapsed buyer rate is up 18 percent.",
        task:
          "Produce a complete Recruitment Pack proposal covering market diagnosis, pack recommendation, business case, launch plan, and governance. Prepare to defend it in a 10 to 15 minute panel presentation followed by challenge questions.",
      },
      weighting: [
        { label: "Knowledge", weight: 20 },
        { label: "Analytics", weight: 25 },
        { label: "Pack Design and Business Case", weight: 25 },
        { label: "Execution Plan", weight: 20 },
        { label: "Presentation Defense", weight: 10 },
      ],
      challengeQuestions: [
        "What evidence supports your assumed trial rate?",
        "How will you win if the local competitor is still cheaper at the entry point?",
        "How do you defend Year 1 trade investment if NPV only turns positive later?",
        "What is your Exit trigger and how would you explain that Exit to the trade?",
      ],
    },
  ],
};
