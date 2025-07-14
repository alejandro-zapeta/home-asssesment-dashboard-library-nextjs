export const randomBusinessQuestions = [
  "What drives growth?",
  "Where are we losing customers?",
  "Which products are most profitable?",
  "How is our market share evolving?",
  "What channels deliver the best ROI?",
  "Are customer satisfaction scores improving?",
  "What trends are emerging in sales data?",
  "How effective are our campaigns?"
];


export const mockUsers = [
  {
    "idUser": "72f61634-5b22-4b46-ae8f-453949d81686",
    "nameArea": "Sales",
    "name": "john",
    "email": "john@example.com",
    "pwd": "password",
    "hasAccess": true,
    "layouts": [
      {
        "id": "5d712e15-1adb-4e26-8087-b2d326268703",
        "title": "Layout 1",
        "description": "Weekly daily metric weekly revenue weekly.",
        "isFavorite": false,
        "amountOfPages": 1,
        "kpisBeingUsed": [
          "1fdba000-06e5-4481-a002-7289f177d3cd"
        ]
      }
    ],
    "kpis": [
      {
        "id": "1fdba000-06e5-4481-a002-7289f177d3cd",
        "title": "KPI 1",
        "description": "Revenue trend analysis analysis daily metric.",
        "isFavorite": false,
        "businessQuestions": [
          "What drives growth?"
        ],
        "metricIds": [
          "M4"
        ],
        "calculation": 74,
        "visualsAvailable": [
          "bar",
          "line",
          "pie"
        ],
        "affiliateApplicability": [
          "Global"
        ]
      }
    ],
    "storyboards": [
      {
        "id": "7cd71a6a-a4e9-4a66-aa92-aedc988ff9e6",
        "title": "Storyboard 1",
        "description": "Analysis analysis metric trend weekly trend.",
        "isFavorite": true,
        "coupledKpisFilters": [
          "1fdba000-06e5-4481-a002-7289f177d3cd",
          "07ef2bc1-77a1-40e7-bd0b-c0bd062a32b5",
          "c2f425d2-de8a-4bc9-a04d-9be2b9849adf"
        ],
        "applicableAffiliates": [
          "North America",
          "LATAM"
        ]
      }
    ]
  },
  {
    "idUser": "a4cca5ed-02b8-4d02-ac46-94e6327bdcaf",
    "nameArea": "Marketing",
    "name": "peter",
    "email": "peter@example.com",
    "hasAccess": true,
    "layouts": [
      {
        "id": "573b77c1-41ea-42d3-8fe1-f24a2a734bf4",
        "title": "Layout 1",
        "description": "Insight daily analysis weekly metric trend.",
        "isFavorite": false,
        "amountOfPages": 6,
        "kpisBeingUsed": [
          "92bb683a-ccd3-49d8-bedb-f6ea46410036",
          "1d7c65a4-908c-4c8f-8f1e-47965c07139e",
          "05eb46a2-b558-4d4e-b4d3-fbb3aea17cba",
          "fb9615e3-de7f-4a70-b4d8-a09b45b2133c"
        ]
      }
    ],
    "kpis": [
      {
        "id": "1d7c65a4-908c-4c8f-8f1e-47965c07139e",
        "title": "KPI 2",
        "description": "Trend insight trend analysis metric analysis.",
        "isFavorite": false,
        "businessQuestions": [
          "What drives growth?"
        ],
        "metricIds": [
          "M94"
        ],
        "calculation": "SUM(value) / COUNT(distinct users)",
        "visualsAvailable": [
          "pie"
        ],
        "affiliateApplicability": [
          "Global"
        ]
      }
    ],
    "storyboards": [
      {
        "id": "4a0aee6b-d97e-4ec3-8d57-6c42b6a0ef07",
        "title": "Storyboard 1",
        "description": "Weekly growth growth analysis metric analysis.",
        "isFavorite": false,
        "coupledKpisFilters": [
          "92bb683a-ccd3-49d8-bedb-f6ea46410036",
          "1d7c65a4-908c-4c8f-8f1e-47965c07139e",
          "05eb46a2-b558-4d4e-b4d3-fbb3aea17cba",
          "fb9615e3-de7f-4a70-b4d8-a09b45b2133c"
        ],
        "applicableAffiliates": [
          "North America",
          "LATAM"
        ]
      }
    ]
  },
  {
    "idUser": "0037f472-14f0-48e1-b55d-82c95742c158",
    "nameArea": "Finance",
    "name": "casey",
    "email": "casey@example.com",
    "pwd": "password",
    "hasAccess": false,
    "layouts": [
      {
        "id": "c1f58c12-3784-4751-8f61-13fa105f93a5",
        "title": "Layout 1",
        "description": "Weekly daily insight trend metric daily.",
        "isFavorite": false,
        "amountOfPages": 3,
        "kpisBeingUsed": [
          "d679dcca-a076-45be-9083-7cef345b9a40",
          "ede4fb41-1b35-47be-a904-7dfb27bb2fd0",
          "e42902d9-a31e-455a-a75f-c7449af86e08",
          "b0827500-c5c7-49c0-88fb-1452a77dc5eb",
          "132ab90d-98df-4bf5-be3d-5174ca359539"
        ]
      },
      {
        "id": "a6522d6c-610d-4ab5-b20e-280cce993488",
        "title": "Layout 2",
        "description": "Analysis weekly analysis insight revenue metric.",
        "isFavorite": false,
        "amountOfPages": 3,
        "kpisBeingUsed": [
          "d679dcca-a076-45be-9083-7cef345b9a40",
          "ede4fb41-1b35-47be-a904-7dfb27bb2fd0"
        ]
      },
      {
        "id": "907c15b4-39fb-4018-9f05-2194e04aa6f1",
        "title": "Layout 3",
        "description": "Metric metric metric trend weekly insight.",
        "isFavorite": false,
        "amountOfPages": 5,
        "kpisBeingUsed": [
          "d679dcca-a076-45be-9083-7cef345b9a40",
          "ede4fb41-1b35-47be-a904-7dfb27bb2fd0"
        ]
      }
    ],
    "kpis": [
      {
        "id": "d679dcca-a076-45be-9083-7cef345b9a40",
        "title": "KPI 1",
        "description": "Insight metric daily growth weekly insight.",
        "isFavorite": false,
        "businessQuestions": [
          "What drives growth?"
        ],
        "metricIds": [
          "M39"
        ],
        "calculation": 40,
        "visualsAvailable": [
          "bar",
        ],
        "affiliateApplicability": [
          "Global"
        ]
      },
      {
        "id": "132ab90d-98df-4bf5-be3d-5174ca359539",
        "title": "KPI 5",
        "description": "Revenue revenue growth revenue growth growth.",
        "isFavorite": false,
        "businessQuestions": [
          "What drives growth?"
        ],
        "metricIds": [
          "M78"
        ],
        "calculation": 30,
        "visualsAvailable": [

          "pie"
        ],
        "affiliateApplicability": [
          "Global"
        ]
      }
    ],
    "storyboards": [
      {
        "id": "a0c3d8fc-a529-4616-9072-86466aa7f983",
        "title": "Storyboard 1",
        "description": "Revenue growth trend daily metric insight.",
        "isFavorite": true,
        "coupledKpisFilters": [
          "d679dcca-a076-45be-9083-7cef345b9a40",
          "ede4fb41-1b35-47be-a904-7dfb27bb2fd0"
        ],
        "applicableAffiliates": [
          "North America",
          "LATAM"
        ]
      }
    ]
  }
] as const;
