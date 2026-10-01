export type ServiceGroup = {
  title: string;
  items: string[];
};

export type Media = {
  src: string;
  alt: string;
};

export type Terminal = {
  number: string;
  name: string;
  city: string;
  location: string;
  description: string;
  capabilities: string[];
  image: Media;
};

export type Company = {
  slug: string;
  number: string;
  shortName: string;
  fullName: string;
  tagline: string;
  summary: string;
  description: string[];
  serviceGroups: ServiceGroup[];
  note?: string;
  heroImage?: Media;
};

export const companies: Company[] = [
  {
    slug: "clearing-forwarding",
    number: "01",
    shortName: "Clearing & Forwarding",
    fullName: "Maxima Clearing & Forwarding Ltd",
    tagline: "Customs. Freight. Logistics. One Integrated Solution.",
    summary:
      "Customs clearance, freight forwarding and international logistics — the Group's core logistics business since 2011.",
    description: [
      "Maxima Clearing & Forwarding Ltd is the Group's core logistics business, providing customs clearance, freight forwarding and supply-chain services to businesses involved in international and domestic trade.",
      "The company supports customers throughout the cargo journey, coordinating documentation, regulatory requirements, transportation and logistics activities.",
    ],
    serviceGroups: [
      {
        title: "Customs Clearance",
        items: [
          "Import customs clearance",
          "Export customs clearance",
          "Customs documentation",
          "Regulatory & compliance coordination",
          "Cargo processing",
          "Customs procedures management",
        ],
      },
      {
        title: "Freight Forwarding",
        items: [
          "Ocean freight",
          "Air freight",
          "Road freight",
          "Multimodal logistics",
          "Shipment coordination",
          "International cargo movement",
        ],
      },
      {
        title: "Import & Export Logistics",
        items: [
          "Import cargo handling",
          "Export cargo coordination",
          "Containerized cargo",
          "General cargo",
          "Agricultural commodities",
          "Industrial & commercial cargo",
        ],
      },
      {
        title: "Integrated Logistics",
        items: [
          "Inland transportation",
          "CFS coordination",
          "Cargo handling",
          "Warehousing & distribution",
          "Port & terminal coordination",
          "Shipment tracking & customer support",
        ],
      },
    ],
    note: "The company also supports specialized logistics requirements, including perishable and temperature-sensitive cargo.",
    heroImage: {
      src: "/media/truck-loading.webp",
      alt: "Truck being loaded in an industrial cargo yard",
    },
  },
  {
    slug: "transport",
    number: "02",
    shortName: "Transport",
    fullName: "Maxima Transport",
    tagline: "Moving Cargo. Connecting Destinations.",
    summary:
      "Inland and regional transportation connecting ports, terminals, warehouses and final destinations.",
    description: [
      "Maxima Transport provides inland and regional transportation solutions supporting the movement of cargo between ports, terminals, customers, warehouses and inland destinations.",
      "The transportation business forms an important part of Maxima's integrated logistics model, enabling customers to coordinate their cargo movement through a single logistics partner.",
    ],
    serviceGroups: [
      {
        title: "Container Transportation",
        items: [
          "Port-to-destination transportation",
          "Terminal-to-destination transportation",
          "CFS-related transportation",
          "Empty container movements",
        ],
      },
      {
        title: "General Cargo Transportation",
        items: [
          "Containerized cargo",
          "General cargo",
          "Import cargo",
          "Export cargo",
        ],
      },
      {
        title: "Distribution & Long-Haul",
        items: [
          "Inland cargo transportation",
          "Regional transportation",
          "Distribution & delivery",
          "Long-distance cargo movement",
        ],
      },
    ],
    note: "Maxima Transport focuses on standard containerized, general and commercial cargo movements. The company does not currently provide abnormal/oversized machinery transportation or fuel-tanker transportation.",
    heroImage: {
      src: "/media/maxima-fleet-port.webp",
      alt: "Maxima branded truck fleet lined up at an industrial port",
    },
  },
  {
    slug: "terminal",
    number: "03",
    shortName: "Terminal",
    fullName: "Maxima Terminal Ltd",
    tagline: "Infrastructure for Modern Cargo Operations.",
    summary:
      "Container Freight Station, container handling and terminal operations across Dar es Salaam and Mtwara.",
    description: [
      "Maxima Terminal Ltd provides the physical infrastructure and operational capabilities required for container and cargo handling within the Maxima logistics network.",
      "The terminal business operates Container Freight Station (CFS) and related cargo-handling facilities strategically positioned in Dar es Salaam and Mtwara — forming an important connection between the port, customs processes, transportation network and final cargo destination.",
    ],
    serviceGroups: [
      {
        title: "Container Operations",
        items: [
          "Container receiving & release",
          "Container stuffing & stripping",
          "Container inspection",
          "Container storage",
          "Empty container handling",
          "Container dispatch",
        ],
      },
      {
        title: "Cargo Operations",
        items: [
          "Cargo receiving & storage",
          "Cargo consolidation",
          "Cargo deconsolidation",
          "Cargo inspection",
          "Export cargo preparation",
          "Import cargo handling",
        ],
      },
      {
        title: "Export Operations",
        items: [
          "Cargo receiving & preparation",
          "Container stuffing & weighing",
          "Inspection coordination",
          "Container sealing",
          "Export documentation coordination",
          "Dispatch to port",
        ],
      },
    ],
    heroImage: {
      src: "/media/port-yard-stacker.webp",
      alt: "Maxima terminal yard with reach stacker handling containers",
    },
  },
  {
    slug: "solutions",
    number: "04",
    shortName: "Solutions",
    fullName: "Maxima Solutions Ltd",
    tagline: "Technology That Moves Business Forward.",
    summary:
      "ICT infrastructure, software and digital solutions — the technology arm of the Maxima Group.",
    description: [
      "Maxima Solutions Ltd is the technology and digital solutions arm of the Maxima Group, providing information technology, ICT infrastructure, software and digital solutions designed to help businesses improve their operations, productivity and information management.",
      "Maxima Solutions builds on the Group's practical understanding of logistics and business operations to develop technology solutions that address real operational requirements.",
    ],
    serviceGroups: [
      {
        title: "Software Development",
        items: [
          "Custom business applications",
          "Web-based & enterprise systems",
          "Logistics management systems",
          "CFS & terminal systems",
          "Customer portals",
          "Systems integration",
        ],
      },
      {
        title: "IT Infrastructure",
        items: [
          "Network infrastructure & LAN/WAN",
          "Wireless networks",
          "Server infrastructure",
          "Structured cabling",
          "IT hardware",
          "Office technology infrastructure",
        ],
      },
      {
        title: "Digital Transformation",
        items: [
          "Business process automation",
          "Digital document management",
          "Data management",
          "Workflow automation",
          "Business intelligence",
          "Systems integration",
        ],
      },
      {
        title: "Security & Monitoring",
        items: [
          "CCTV systems",
          "Access control",
          "Attendance systems",
          "Network security",
          "Backup & disaster recovery",
          "Business continuity support",
        ],
      },
      {
        title: "IT Consultancy & Support",
        items: [
          "IT consulting",
          "Systems administration",
          "Technical support",
          "Infrastructure management",
          "IT strategy",
          "Technology deployment",
        ],
      },
    ],
    note: "Maxima Solutions' strategic advantage is its understanding of logistics from within the Group — enabling logistics technology including cargo management, ERP, CFS and terminal operations systems, gate management, container tracking, VGM and weighbridge integration, OCR and smart-gate technologies, and customer portals.",
  },
];

export const terminals: Terminal[] = [
  {
    number: "T1",
    name: "Kurasini — Police Ufundi",
    city: "Dar es Salaam",
    location: "Kurasini Police Quarters / Police Ufundi, Dar es Salaam, Tanzania",
    description:
      "Supports Maxima's CFS and cargo-handling operations within the Dar es Salaam logistics environment. Its strategic location within Kurasini provides access to the major port and logistics ecosystem of Dar es Salaam.",
    capabilities: [
      "CFS operations",
      "Import & export cargo handling",
      "Container stuffing & stripping",
      "Cargo receiving & storage",
      "Consolidation & deconsolidation",
      "Weighbridge operations",
      "Container inspection",
      "Gate operations",
      "Customs & inspection coordination",
      "Transportation coordination",
    ],
    image: {
      src: "/media/stacker-port.webp",
      alt: "Reach stacker lifting a container at the Kurasini terminal",
    },
  },
  {
    number: "T2",
    name: "Mtepwezi",
    city: "Mtwara",
    location: "Mtepwezi Area, Mtwara, Tanzania",
    description:
      "Extends the Group's physical logistics footprint beyond Dar es Salaam, providing CFS and cargo-handling capabilities in the southern Tanzania trade corridor — particularly relevant to cargo moving through surrounding production and export areas.",
    capabilities: [
      "CFS operations",
      "Container handling",
      "Import & export cargo handling",
      "Container stuffing & stripping",
      "Cargo storage",
      "Empty-container operations",
      "Export cargo preparation",
      "Weighbridge services",
      "Gate operations",
      "Transportation coordination",
    ],
    image: {
      src: "/media/container-handler.webp",
      alt: "Container handler working the Mtwara terminal yard",
    },
  },
  {
    number: "T3",
    name: "Kurasini — Baraza la Maaskofu",
    city: "Dar es Salaam",
    location:
      "Kurasini, Dar es Salaam — near Baraza la Maaskofu, opposite the MSC Empty Depot",
    description:
      "Another important component of Maxima's Dar es Salaam terminal network, providing additional physical infrastructure for container and cargo operations.",
    capabilities: [
      "CFS operations",
      "Container handling",
      "Import & export cargo handling",
      "Container stuffing & stripping",
      "Cargo storage",
      "Consolidation & deconsolidation",
      "Empty-container operations",
      "Weighbridge & cargo measurement",
      "Gate operations",
      "Inspection coordination",
    ],
    image: {
      src: "/media/stacker-yard.webp",
      alt: "Reach stacker moving containers in a bright container yard",
    },
  },
];

export const industries = [
  {
    name: "Agriculture & Agro-commodities",
    description:
      "Supporting the movement and export of agricultural products — cashew, coffee, beans, pigeon peas, chickpeas, timber, avocado — from production areas to international markets.",
  },
  {
    name: "Mining & Minerals",
    description:
      "Logistics and cargo-handling support for mineral and mining-related supply chains, including copper and graphite.",
  },
  {
    name: "Manufacturing",
    description:
      "Importation of machinery, equipment, raw materials and other manufacturing inputs.",
  },
  {
    name: "FMCG",
    description:
      "Logistics support for fast-moving consumer goods and commercial products.",
  },
  {
    name: "Construction",
    description:
      "Transportation and logistics support for construction materials, equipment and supplies.",
  },
  {
    name: "Pharmaceuticals & Healthcare",
    description:
      "Specialized logistics support for sensitive and time-critical healthcare-related cargo.",
  },
  {
    name: "Industrial & Commercial Cargo",
    description:
      "Supporting businesses moving equipment, materials, products and general commercial cargo.",
  },
];

export const supplyChainSteps = [
  {
    step: "01",
    title: "International Freight",
    text: "Cargo moves from the origin country toward Tanzania.",
  },
  {
    step: "02",
    title: "Freight Forwarding",
    text: "Maxima coordinates the international movement and associated logistics requirements.",
  },
  {
    step: "03",
    title: "Customs Clearance",
    text: "Maxima Clearing & Forwarding manages customs processes and documentation.",
  },
  {
    step: "04",
    title: "Terminal / CFS",
    text: "Cargo and containers are handled through Maxima's terminal network.",
  },
  {
    step: "05",
    title: "Transportation",
    text: "Maxima Transport moves cargo from the port or terminal to its destination.",
  },
  {
    step: "06",
    title: "Final Delivery",
    text: "Cargo reaches the customer's warehouse, facility or designated destination.",
  },
  {
    step: "07",
    title: "Technology",
    text: "Digital systems provide visibility, tracking, automation and operational control throughout.",
  },
];

export const coreValues = [
  {
    name: "Integrity",
    text: "We conduct our business with honesty, transparency and accountability.",
  },
  {
    name: "Customer First",
    text: "We design our services around the needs and expectations of our customers.",
  },
  {
    name: "Reliability",
    text: "We strive to deliver consistently and keep our commitments.",
  },
  {
    name: "Excellence",
    text: "We continuously improve our people, processes, infrastructure and technology.",
  },
  {
    name: "Safety",
    text: "We place the safety of people, cargo, equipment and the environment at the center of our operations.",
  },
  {
    name: "Innovation",
    text: "We embrace technology and new ideas that improve the way logistics and business are delivered.",
  },
  {
    name: "Teamwork",
    text: "We believe strong collaboration creates better outcomes for our customers and our business.",
  },
];

export const whyMaxima = [
  {
    title: "Integrated Capability",
    text: "Customers can access multiple logistics services through one Group.",
  },
  {
    title: "Local Expertise",
    text: "Operations built around a deep understanding of the Tanzanian logistics and trade environment.",
  },
  {
    title: "Physical Infrastructure",
    text: "A terminal network providing dedicated cargo and container-handling facilities.",
  },
  {
    title: "End-to-End Coordination",
    text: "Clearing, forwarding, terminal operations and transportation coordinated as one logistics process.",
  },
  {
    title: "Technology-Enabled",
    text: "Through Maxima Solutions, technology is increasingly integrated into logistics operations.",
  },
  {
    title: "Customer Focus",
    text: "Simplifying cargo movement with reliable support throughout the logistics process.",
  },
];
