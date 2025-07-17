import Navigation from "@/components/navigation";
import Link from "next/link";

export default function CVPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">My CV</h1>
        
        <p className="text-lg text-center mb-8 text-foreground/80">
          You can download my CV in English version by clicking the button below.
        </p>
        
        <a 
          href="/images/cv-english-version.pdf" 
          download="Leon_de_Ryckel_CV_English.pdf"
          className="px-8 py-4 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors text-lg font-semibold shadow-md"
        >
          Download my CV (PDF)
        </a>
      </div>
    </div>
  );
} 