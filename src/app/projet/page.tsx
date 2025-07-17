import Navigation from "@/components/navigation";
// MovingBorder is not used in this new structure
// import { MovingBorder } from "@/components/ui/aceternity/moving-border";

export default function ProjetPage() {
  // strengths and weaknesses arrays are not needed as the content is narrative within sections

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">My Professional Project</h1>
        
        {/* Introductory paragraph */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-center text-foreground/80">
            My name is Léon de Ryckel, a computer science student at EPHEC. I want to work in the development of secure and high-performance digital solutions. My professional project is clear: to establish myself in Cape Town, South Africa, to create my own company or work as a freelancer, designing web applications and custom IT services, with a focus on data security and user satisfaction. Here is my journey, my ambitions, and the strategy I am implementing to achieve these goals.
          </p>
        </div>

        {/* Section: My Background and Ambitions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">My Background and Ambitions</h2>
          <div className="bg-background/50 p-8 rounded-xl border border-foreground/10 max-w-4xl mx-auto space-y-6">
            <p className="text-lg">
              I think my journey at EPHEC has allowed me to build a solid foundation in almost all areas of computer science. I believe I have acquired varied skills: web development (front-end and back-end), networks, servers, cloud computing, and hardware. This knowledge gives me a global view of IT systems, essential for my future projects.
            </p>
            <p className="text-lg">
              Currently, I am doing an internship at Bitrix IT, an IT company in Cape Town, where I put my skills to the test in a professional B2B context. In the field, I accompany Mr. Philip Theunissen for troubleshooting at clients: resolving database problems for a clinic, installing Cisco routers and smart switches, repairing defective screens or hard drives, updating operating systems, configuring network printers, and resolving DNS or DHCP issues. These varied and often urgent missions have taught me to combine technical rigor with client communication.
            </p>
            <p className="text-lg">
              In parallel, I am developing a web application for my final project (TFE), which also serves Bitrix IT. This ticket management tool includes an automated calendar, a billing module, secure password storage, remote access, and interactive network diagrams to optimize client intervention management. This project allows me to combine my technical skills with strategic thinking about a company's needs, while leaving a concrete contribution to the team.
            </p>
            <p className="text-lg">
              My ambition is to become an expert full-stack developer, capable of creating complete web applications, from user interface to back-end infrastructure. In the medium term, I want to work as a freelancer in Cape Town, collaborating with local companies like Bitrix IT. In the long term, I aim to launch my own startup, specialized in secure and innovative digital solutions, in a market where demand for reliable tools is strong.
            </p>
          </div>
        </section>

        {/* Section: My short and long term objectives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">My Short and Long Term Objectives</h2>
          <div className="bg-background/50 p-8 rounded-xl border border-foreground/10 max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">Short term (1-2 years)</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Complete my TFE with a functional application, adopted by Bitrix IT, to demonstrate my skills.</li>
              <li>Deepen my knowledge in back-end development and obtain a cloud certification.</li>
              <li>Contribute to an open source project and expand my network.</li>
              <li>Market an IT project</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-secondary">Long term (3-5 years)</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Become an expert in an emerging technology, such as AI for personalized applications or blockchain.</li>
              <li>Launch an innovative digital product, such as a solution for B2B companies.</li>
              <li>Settle permanently in Cape Town, with a solid professional network and an established career as a freelancer.</li>
            </ul>
          </div>
        </section>

        {/* Section: Personal analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Personal Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background/50 p-8 rounded-xl border border-foreground/10">
              <h3 className="text-2xl font-semibold mb-6 text-secondary text-center">My Strengths</h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li><span className="font-medium">Versatility:</span> My skills allow me to understand different IT sectors with a global vision.</li>
                <li><span className="font-medium">Clear objectives:</span> I know I want to settle in Cape Town and create a company, which guides my training and project choices.</li>
                <li><span className="font-medium">Technical curiosity:</span> I constantly train myself on new technologies, which is crucial in a fast-evolving field.</li>
              </ul>
            </div>
            <div className="bg-background/50 p-8 rounded-xl border border-foreground/10">
              <h3 className="text-2xl font-semibold mb-6 text-accent text-center">Areas for Improvement</h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li><span className="font-medium">Business skills:</span> I need to train in marketing and strategy to successfully market a product as I have no skills in this area.</li>
                <li><span className="font-medium">Professional communication:</span> I want to improve my communication in the professional environment especially with people without IT skills to explain my ideas.</li>
                <li><span className="font-medium">Visibility:</span> My network and online presence (GitHub, LinkedIn) are still limited; I need to make myself more known.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: My professional development strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">My Professional Development Strategy</h2>
          <div className="bg-background/50 p-8 rounded-xl border border-foreground/10 max-w-4xl mx-auto space-y-6">
          
            <ol className="list-decimal list-inside space-y-3 text-lg">
              <li><span className="font-medium">Continuous training:</span> Dedicate 5 to 10 hours per week to learning, whether through online courses, personal projects, or certifications. Currently, for example on back-end and cloud.</li>
              <li><span className="font-medium">Practical experience:</span> After EPHEC, I will look for freelance missions to diversify my projects and finance my future projects. My internship is a stepping stone, but I want to multiply concrete experiences.</li>
              <li><span className="font-medium">Technology watch:</span> I follow blogs (like Dev.to), posts on tech trends, and I test new tools to stay up to date. This helps me anticipate market needs.</li>
            </ol>
          </div>
        </section>

      </div>
    </div>
  );
} 