// Supplied resume additions, kept independent of presentation until the existing
// portfolio is available. IDs identify entries, not proposed public URLs.
export const projectAdditions = [
  {
    id: "rf-spectrum-wireless",
    title: "RF Spectrum Analysis & Wireless Communication",
    categories: ["RF & Wireless", "Embedded Systems"],
    date: null,
    status: null,
    image: null,
    repository: null,
    measurements: null,
    details: [
      "Bidirectional RF communication using NRF24L01+ transceivers and Arduino microcontrollers over SPI.",
      "OLED display for transmission monitoring.",
      "RTL-SDR, Raspberry Pi 4 and Python for 2.4 GHz spectrum observation and visualization.",
      "Technical concepts: GFSK, interference, antenna fundamentals and ISM-band communications.",
    ],
    skills: ["NRF24L01+", "Arduino", "SPI", "OLED", "RTL-SDR", "Raspberry Pi", "Python", "GFSK", "RF spectrum analysis", "Antenna fundamentals", "ISM-band communications"],
  },
  {
    id: "neuromaker-robotic-hand",
    title: "NeuroMaker Robotic Hand",
    categories: ["Robotics", "Embedded Systems"],
    date: null,
    status: null,
    image: null,
    repository: null,
    measurements: null,
    details: [
      "High-school Computer Science Club project.",
      "Arduino Uno, servo motors, infrared sensor and remote.",
      "Implemented robotic hand movement and wireless IR control.",
    ],
    skills: ["Arduino Uno", "Servo motors", "Infrared sensors", "IR control", "Robotics"],
  },
] as const;

// Merge into the existing entry; do not replace its original details or dates.
export const activeNoiseCancellationExpansion = {
  title: "Active Noise Cancellation",
  categories: ["Analog Electronics", "Acoustics"],
  details: [
    "Analog phase-inversion circuit using op-amps, filters, microphones and speakers.",
    "LTspice simulation, oscilloscope waveform analysis and component tuning.",
    "Fusion 360 enclosure design and bench testing.",
  ],
  skills: ["Op-amps", "Analog filters", "LTspice", "Oscilloscope analysis", "Fusion 360", "Bench testing"],
  measurements: null,
} as const;

export const experienceAdditions = [
  {
    id: "takeda-automation",
    organization: "Takeda Pharmaceuticals",
    role: "Automation Engineering Intern",
    start: "2026-05",
    end: "2026-08",
    details: [],
    skills: [],
  },
  {
    id: "kraft-project-engineering",
    organization: "The Kraft Group / Gillette Stadium",
    role: "Project Engineering Intern",
    start: "2025-06",
    end: "2025-08",
    details: ["Electrical distribution, AutoCAD, equipment placement and infrastructure coordination."],
    skills: ["Electrical distribution", "AutoCAD", "Equipment placement", "Infrastructure coordination"],
  },
  {
    id: "dpr-project-management",
    organization: "DPR Construction / Prime Medicine",
    role: "Project Management Intern",
    start: "2023-07",
    end: null,
    details: ["Technical drawing coordination, Bluebeam Revu, Navisworks, Structionsite, RFIs and submittals."],
    skills: ["Technical drawing coordination", "Bluebeam Revu", "Navisworks", "Structionsite", "RFIs", "Submittals"],
  },
] as const;

export const missingInformationLabels = {
  date: "Date pending confirmation",
  end: "End date pending confirmation",
  status: "Project status pending confirmation",
  image: "Project image not provided",
  repository: "Code repository not provided",
  measurements: "Measurements not provided",
} as const;