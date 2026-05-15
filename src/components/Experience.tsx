import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Three Ireland",
      position: "Managed Service Executive",
      location: "Ireland",
      duration: "Feb 2026 – Present",
      logo: "3",
      achievements: [
        {
          impact: "80+ Salesforce data cases resolved weekly",
          description: "Public sector client reporting was at risk due to inaccurate CRM data. Analysed and resolved 80+ Salesforce data cases weekly, ensuring leadership had clean, reliable data to support operational decisions."
        },
        {
          impact: "Improved data consistency across teams",
          description: "Data discrepancies between onshore and offshore teams were causing recurring process delays. Worked with stakeholders to investigate issues and recommend targeted fixes, improving data consistency and keeping client operations on track."
        },
        {
          impact: "Strengthened governance standards",
          description: "Governance standards were being undermined by recurring data inconsistencies. Identified patterns across reporting trackers and proposed process improvements, strengthening data quality and reducing reporting risk for a public sector client."
        }
      ],
      technologies: ["Salesforce", "CRM Data Analysis", "Reporting Trackers", "Stakeholder Management", "Process Improvement"]
    },
    {
      company: "Changepay",
      position: "Junior Business Analyst",
      location: "Ireland",
      duration: "May 2023 – Aug 2024",
      logo: "CP",
      achievements: [
        {
          impact: "Analysed 50k+ order and payment records",
          description: "Transaction failure rates were going unnoticed and affecting student experience. Analysed 50k+ order and payment records to identify patterns, enabling leadership to resolve fulfilment issues and reduce failed transactions across campus operations."
        },
        {
          impact: "Interactive dashboards used weekly by leadership",
          description: "Senior stakeholders lacked visibility into daily revenue and order trends. Designed and maintained interactive dashboards tracking transaction volumes, peak order times and revenue by campus, used weekly by leadership to guide operational decisions."
        },
        {
          impact: "Zero critical errors across all reports",
          description: "Inconsistent data across vendors and campus locations was creating reporting gaps. Validated and cleaned merchant and delivery data to ensure accuracy, achieving zero critical errors across all reports presented to senior stakeholders."
        },
        {
          impact: "Influenced pricing and expansion decisions",
          description: "Leadership had no clear view of which campuses and vendors were underperforming. Generated insights on revenue trends and vendor performance, directly influencing pricing and expansion decisions across the business."
        }
      ],
      technologies: ["Power BI", "Advanced Excel", "SQL", "Data Validation", "Dashboard Design", "KPI Reporting"]
    },
    {
      company: "The Indaco Jeans Factory",
      position: "Data & Merchandising Analyst Intern",
      location: "India",
      duration: "Jan 2023 – Apr 2023",
      logo: "IJ",
      achievements: [
        {
          impact: "18% reduction in stock discrepancies",
          description: "Inventory data across ERP and HubSpot systems was inconsistent and hard to track. Extracted and analysed production and supplier datasets, building dashboards that improved stock visibility and reduced discrepancies by 18%."
        },
        {
          impact: "Centralised production planning data",
          description: "Production planning lacked a centralised view of data. Consolidated ERP and supplier coordination data into structured Excel reports, presenting findings to the team and supporting operational decisions during the internship period."
        }
      ],
      technologies: ["ERP Systems", "HubSpot", "Advanced Excel", "Dashboard Design", "Supplier Data Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            2+ years of delivering data-driven insights across fintech, telecommunications and retail environments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-2xl font-bold text-background shadow-lg">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{exp.duration}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="hidden md:block space-y-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-primary font-semibold text-lg">{achievement.impact}</div>
                        <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="md:hidden">
                  <Carousel opts={{ align: "start", loop: true }} className="w-full">
                    <CarouselContent className="-ml-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <CarouselItem key={achIndex} className="pl-2 basis-full">
                          <div className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 text-primary" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="text-primary font-semibold text-lg">{achievement.impact}</div>
                              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
