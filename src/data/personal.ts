export interface PersonalInfo {
  name: string;
  role: string;
  roles: string[];
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  bio: string;
  resumeUrl: string;
}

export const personalInfo: PersonalInfo = {
  name: "Prithvi Patel",
  role: "Full-Stack Software Developer",
  roles: [
    "Full-Stack Developer",
    "Django & React Engineer",
    "Python & Java Developer",
    "Cybersecurity Enthusiast",
  ],
  email: "prithvip1811@gmail.com",
  phone: "+91 7284879285",
  location: "Ahmedabad, Gujarat, India",
  github: "https://github.com/patel-prithvi",
  linkedin: "https://www.linkedin.com/in/prithvi-patel-925070353/",
  bio: "Software developer building scalable full-stack web applications with Django, Flask, React, and Node.js. Focused on clean REST APIs, modern UI/UX, and real-world problem solving.",
  resumeUrl: "/resume.pdf",
};
