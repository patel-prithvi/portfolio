export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "meal-planner",
    title: "Meal Planner",
    subtitle: "Personalized Meal Planning Web Application",
    description:
      "Full-stack Flask web application that generates customized weekly meal plans using BMR-based calorie calculations, macro-nutrient distribution, and interactive nutrition tracking.",
    highlights: [
      "BMR-based calorie calculation with activity-level adjustments, macro-nutrient (Protein, Carbs, Fats) distribution, and AI-powered health tips with interactive charts.",
      "Session-based authentication with hashed password storage, protected routes, and an admin dashboard for user management & platform analytics.",
      "Responsive Bootstrap UI with dynamic JavaScript charts and CRUD operation handling with PostgreSQL.",
    ],
    techStack: [
      "Python",
      "Flask",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],
    githubUrl: "https://github.com/patel-prithvi/meal-prep",
    liveUrl: "https://flask-demoenv.onrender.com/",
    image: "/images/projects/meal-planner.svg",
    featured: true,
  },
  {
    id: "altura-coffee",
    title: "ALTURA Coffee",
    subtitle: "Modern Coffee E-Commerce Platform",
    description:
      "Multi-page coffee e-commerce storefront featuring product menu filtering, an interactive real-time shopping cart, user checkout flows, and client-side session management.",
    highlights: [
      "Built multi-page coffee storefront featuring a modern landing page, product menu with filtering, real-time cart management, and structured checkout flow — deployed on Vercel.",
      "Implemented client-side login/signup flows with form validation, session persistence via localStorage, and smooth UI transitions.",
      "Crafted a fully responsive design with custom CSS and vanilla JavaScript ensuring consistent layout across all viewports.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/patel-prithvi/ALTURA-Coffee",
    liveUrl: "https://altura-coffee.vercel.app/",
    image: "/images/projects/altura-coffee.svg",
    featured: true,
  },
  {
    id: "carverse",
    title: "CarVerse",
    subtitle: "Console-Based Car Rental Platform",
    description:
      "Feature-rich car rental platform with stored-procedure billing, late-fee calculations, multi-mode payment, automated email receipts, and fleet administration.",
    highlights: [
      "Console-based car rental platform with filter-based car search, trip booking, real-time billing with late-fee calculations via MySQL stored procedures.",
      "Multi-mode payment handling (Cash, Card, UPI) and automated email bill delivery using Jakarta Mail API.",
      "Admin module manages fleet inventory & generates revenue reports via stored procedures; customer records maintained via custom linked list with hashed passwords.",
    ],
    techStack: ["Java 17", "JDBC", "MySQL", "Jakarta Mail API"],
    githubUrl: "https://github.com/patel-prithvi",
    image: "/images/projects/carverse.svg",
    featured: true,
  },
  {
    id: "mood-detector-bytext",
    title: "Mood Detector by Text AI",
    subtitle: "NLP-Based Emotion Classification",
    description:
      "Real-time emotion detection app that analyzes free-text input using a Hugging Face Transformer model, surfacing the dominant mood with confidence scoring and a full probability breakdown.",
    highlights: [
      "Built an NLP pipeline using Hugging Face Transformers to classify text into 8 emotion categories (joy, sadness, anger, love, surprise, fear, disgust, neutral).",
      "Displayed the top predicted emotion with its confidence score, matching emoji, and color-coded label for quick readability.",
      "Visualized the full emotion probability distribution using Pandas and Altair bar charts within an interactive Streamlit interface.",
    ],
    techStack: [
      "Python",
      "Streamlit",
      "PyTorch",
      "Hugging Face",
      "Transformers",
      "Pandas",
      "Altair",
    ],
    githubUrl: "https://github.com/patel-prithvi/mood-detector",
    image: "/images/projects/mood-detector-bytext.svg",
    featured: true,
  },
  {
    id: "ai-document-analyzer",
    title: "AI Document Analyzer",
    subtitle: "Classification & Intelligent Indexing",
    description:
      "Document ingestion pipeline extracting text from PDF/DOCX/TXT files with Hugging Face Transformer models for automatic classification and abstractive summarization.",
    highlights: [
      "Document ingestion pipeline extracting text from PDF, DOCX, and TXT files using Transformer models for automatic classification (Finance, HR, Legal) and abstractive summarization.",
      "Enforced Role-Based Access Control (Admin, HR, Finance, Legal) so users access department-relevant documents.",
      "Implemented keyword-based ranked search across the indexed corpus with a Streamlit interface and MySQL backend.",
    ],
    techStack: [
      "Python",
      "Streamlit",
      "PyTorch",
      "Hugging Face",
      "Transformers",
      "MySQL",
    ],
    githubUrl: "https://github.com/patel-prithvi",
    image: "/images/projects/ai-document-analyzer.svg",
    featured: true,
  },
];
