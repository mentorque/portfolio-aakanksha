import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, Zap, BarChart2, Database, Trophy } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Campus Transaction Analytics Dashboard",
      description: "Built an end-to-end analytics solution at Changepay to track transaction volumes, revenue by campus, and vendor performance. Enabled leadership to identify underperforming campuses and make data-driven pricing and expansion decisions.",
      icon: <BarChart2 className="w-8 h-8" />,
      achievements: [
        { metric: "50k+ records processed", description: "Analysed order and payment records to identify transaction failure patterns and fulfilment issues." },
        { metric: "Zero critical errors", description: "Validated and cleaned merchant and delivery data, achieving zero critical errors in all senior stakeholder reports." }
      ],
      technologies: ["Power BI", "Advanced Excel", "SQL", "Data Validation", "KPI Dashboards"],
      category: "Data Analytics",
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/aakankshachourasiya"
    },
    {
      title: "Inventory & Stock Visibility Dashboard",
      description: "Developed dashboards at The Indaco Jeans Factory to consolidate ERP and HubSpot data, improving stock visibility and reducing inventory discrepancies. Presented findings to the team to support operational decisions.",
      icon: <Database className="w-8 h-8" />,
      achievements: [
        { metric: "18% discrepancy reduction", description: "Built dashboards that improved stock visibility and reduced inventory discrepancies by 18%." },
        { metric: "Centralised data view", description: "Consolidated ERP and supplier coordination data into structured Excel reports for production planning." }
      ],
      technologies: ["ERP Systems", "HubSpot", "Advanced Excel", "Dashboard Design", "Supplier Data"],
      category: "Inventory Analytics",
      gradient: "from-purple-500 to-pink-500",
      githubUrl: "https://github.com/aakankshachourasiya"
    },
    {
      title: "Salesforce CRM Data Quality Programme",
      description: "Led ongoing data quality improvement at Three Ireland for a public sector client. Resolved 80+ Salesforce data cases weekly, identified patterns in reporting trackers, and proposed process improvements to strengthen governance standards.",
      icon: <Zap className="w-8 h-8" />,
      achievements: [
        { metric: "80+ cases resolved weekly", description: "Ensured leadership had clean, reliable CRM data to support operational decisions." },
        { metric: "Improved governance standards", description: "Identified recurring data inconsistency patterns and proposed targeted process improvements." }
      ],
      technologies: ["Salesforce", "CRM Analysis", "Reporting Trackers", "Process Improvement", "Stakeholder Management"],
      category: "CRM & Data Quality",
      gradient: "from-green-500 to-emerald-500",
      githubUrl: "https://github.com/aakankshachourasiya"
    },
    {
      title: "Business Simulation — 1st Place",
      description: "Led a team to 1st place among 18 teams in a business simulation competition during the MSc Business Analytics programme at University of Limerick. Applied analytical and strategic decision-making skills in a competitive environment.",
      icon: <Trophy className="w-8 h-8" />,
      achievements: [
        { metric: "1st place out of 18 teams", description: "Led team strategy and data-driven decision-making throughout the simulation." },
        { metric: "MSc Business Analytics", description: "Applied coursework skills in a real-world competitive business scenario." }
      ],
      technologies: ["Business Strategy", "Data Analysis", "Team Leadership", "Decision Making"],
      category: "Academic Achievement",
      gradient: "from-orange-500 to-yellow-500",
      githubUrl: "https://github.com/aakankshachourasiya"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Data projects and analytical work that demonstrate turning complex data into actionable business insights.
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                  <div className="h-full min-h-[600px]">
                    <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <Badge variant="secondary" className="text-xs mb-2">{project.category}</Badge>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">{project.title}</h3>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-grow flex flex-col px-4 md:px-6">
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{project.description}</p>
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                          {project.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex gap-3 p-3 bg-background/50 rounded-lg border border-primary/10">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                  <Zap className="w-3 h-3 text-primary" />
                                </div>
                              </div>
                              <div>
                                <div className="text-primary font-semibold text-sm">{achievement.metric}</div>
                                <p className="text-xs text-muted-foreground">{achievement.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3 pt-4 mt-auto">
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                              View on GitHub
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Interested in <span className="text-gradient">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                I'm always excited to work on data challenges. Let's build something impactful together.
              </p>
              <div className="flex justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:aakankshachourasiya15@gmail.com">Get In Touch</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
