import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart2, MessageSquare, Wrench, Brain } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Business Analysis",
      skills: ["Requirements Gathering", "Process Improvement", "Stakeholder Management", "Gap Analysis", "Decision Support"]
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Data & Reporting",
      skills: ["Power BI", "Advanced Excel", "SQL", "KPI Dashboards", "Data Validation", "Operational Reporting"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: ["Salesforce", "JIRA", "Microsoft 365", "HubSpot", "Confluence"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Collaboration",
      skills: ["ChatGPT / Claude", "Prompt Engineering", "GitHub Copilot"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Business Analyst with 2+ years of experience across fintech, telecommunications and retail, backed by an MSc in Business Analytics with First Class Honours and a PL-300 certification.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I turn complex, unreliable data into clear insights that help businesses act with confidence on data they can trust.
                </p>
                <p>
                  Known for <span className="text-primary font-semibold">picking up new tools quickly</span>, translating complex data findings into simple clear language that non-technical stakeholders can understand and act on, and turning fragmented inconsistent data into a single source of truth across both startup and enterprise environments.
                </p>
                <p>
                  Experienced in resolving data quality issues, building interactive dashboards, and driving process improvements that reduce reporting risk and support operational decisions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Areas of <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Concepts */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Communication & Soft Skills</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Executive Reporting", "Data Storytelling", "Presentations", "Problem Solving", "Cross-functional Collaboration"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                {concept}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
