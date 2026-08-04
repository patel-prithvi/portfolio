export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export const educationList: Education[] = [
  {
    id: "ljiet-btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering (Cyber Security)",
    institution: "LJ Institute of Engineering and Technology",
    location: "Ahmedabad, Gujarat",
    period: "Sep 2024 – Present",
    highlights: [
      "Specializing in Cyber Security, Data Structures, Relational & Non-Relational Databases, and Full-Stack Software Engineering.",
      "Hands-on application development using Django, Flask, React, Node.js, and Java.",
      "Active participant in technical projects and system design architecture.",
    ],
  },
];
