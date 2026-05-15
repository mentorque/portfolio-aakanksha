import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, Database, BarChart2, ShieldCheck, Target, Users } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "80+ Salesforce Cases Resolved Weekly",
      description: "Analysed and resolved 80+ Salesforce data cases weekly at Three Ireland, ensuring leadership had clean, reliable data to support operational decisions for a public sector client.",
      icon: <ShieldCheck className="w-8 h-8" />,
      company: "Three Ireland",
      category: "Data Quality",
      gradient: "from-green-500 to-emerald-500",
      metrics: ["80+ cases/week", "Public sector client", "CRM data accuracy"]
    },
    {
      title: "50k+ Records Analysed for Insights",
      description: "Analysed 50k+ order and payment records at Changepay to identify transaction failure patterns, enabling leadership to resolve fulfilment issues and reduce failed transactions across campus operations.",
      icon: <Database className="w-8 h-8" />,
      company: "Changepay",
      category: "Data Analysis",
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["50k+ records", "Transaction failure reduction", "Campus operations"]
    },
    {
      title: "Zero Critical Errors in Reporting",
      description: "Validated and cleaned merchant and delivery data at Changepay to ensure accuracy, achieving zero critical errors across all reports presented to senior stakeholders.",
      icon: <Target className="w-8 h-8" />,
      company: "Changepay",
      category: "Data Accuracy",
      gradient: "from-purple-500 to-pink-500",
      metrics: ["Zero critical errors", "Senior stakeholder reports", "Data validation"]
    },
    {
      title: "Leadership Dashboards Used Weekly",
      description: "Designed and maintained interactive Power BI dashboards tracking transaction volumes, peak order times and revenue by campus, used weekly by leadership to guide operational decisions.",
      icon: <BarChart2 className="w-8 h-8" />,
      company: "Changepay",
      category: "Dashboard Design",
      gradient: "from-orange-500 to-red-500",
      metrics: ["Weekly leadership use", "Revenue tracking", "Multi-campus visibility"]
    },
    {
      title: "18% Reduction in Stock Discrepancies",
      description: "Built dashboards at The Indaco Jeans Factory that improved stock visibility and reduced inventory discrepancies by 18% by extracting and analysing production and supplier datasets.",
      icon: <TrendingUp className="w-8 h-8" />,
      company: "Indaco Jeans Factory",
      category: "Process Improvement",
      gradient: "from-indigo-500 to-blue-500",
      metrics: ["18% discrepancy reduction", "ERP + HubSpot integration", "Stock visibility"]
    },
    {
      title: "Influenced Pricing & Expansion Decisions",
      description: "Generated insights on revenue trends and vendor performance at Changepay, directly influencing pricing and expansion decisions across the business.",
      icon: <Users className="w-8 h-8" />,
      company: "Changepay",
      category: "Business Impact",
      gradient: "from-teal-500 to-green-500",
      metrics: ["Pricing decisions", "Expansion strategy", "Vendor performance"]
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable impact delivered through data analysis, reporting and process improvement.
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {achievements.map((achievement, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">{achievement.category}</Badge>
                            <Badge variant="outline" className="text-xs">{achievement.company}</Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">{achievement.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Metrics</h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="outline" className="text-xs">{metric}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </div>

        <div className="mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div><div className="text-3xl font-bold text-primary mb-2">2+</div><div className="text-sm text-muted-foreground">Years Experience</div></div>
                <div><div className="text-3xl font-bold text-accent mb-2">50k+</div><div className="text-sm text-muted-foreground">Records Analysed</div></div>
                <div><div className="text-3xl font-bold text-primary mb-2">18%</div><div className="text-sm text-muted-foreground">Discrepancy Reduction</div></div>
                <div><div className="text-3xl font-bold text-accent mb-2">0</div><div className="text-sm text-muted-foreground">Critical Report Errors</div></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
