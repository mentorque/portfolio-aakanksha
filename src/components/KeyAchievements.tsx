import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, DollarSign, Clock, Users, Zap, Target } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "[Achievement Title 1]",
      description: "[Describe the achievement and its impact.]",
      icon: <DollarSign className="w-8 h-8" />,
      company: "[Company 1]",
      category: "[Category]",
      gradient: "from-green-500 to-emerald-500",
      metrics: ["[Metric 1]", "[Metric 2]", "[Metric 3]"]
    },
    {
      title: "[Achievement Title 2]",
      description: "[Describe the achievement and its impact.]",
      icon: <TrendingUp className="w-8 h-8" />,
      company: "[Company 1]",
      category: "[Category]",
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["[Metric 1]", "[Metric 2]", "[Metric 3]"]
    },
    {
      title: "[Achievement Title 3]",
      description: "[Describe the achievement and its impact.]",
      icon: <Zap className="w-8 h-8" />,
      company: "[Company 1]",
      category: "[Category]",
      gradient: "from-purple-500 to-pink-500",
      metrics: ["[Metric 1]", "[Metric 2]", "[Metric 3]"]
    },
    {
      title: "[Achievement Title 4]",
      description: "[Describe the achievement and its impact.]",
      icon: <Clock className="w-8 h-8" />,
      company: "[Company 2]",
      category: "[Category]",
      gradient: "from-orange-500 to-red-500",
      metrics: ["[Metric 1]", "[Metric 2]", "[Metric 3]"]
    },
    {
      title: "[Achievement Title 5]",
      description: "[Describe the achievement and its impact.]",
      icon: <Target className="w-8 h-8" />,
      company: "[Company 2]",
      category: "[Category]",
      gradient: "from-indigo-500 to-blue-500",
      metrics: ["[Metric 1]", "[Metric 2]", "[Metric 3]"]
    },
    {
      title: "[Achievement Title 6]",
      description: "[Describe the achievement and its impact.]",
      icon: <Users className="w-8 h-8" />,
      company: "[Company 2]",
      category: "[Category]",
      gradient: "from-teal-500 to-green-500",
      metrics: ["[Metric 1]", "[Metric 2]", "[Metric 3]"]
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
            Measurable impact delivered through innovative technical solutions.
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
                <div><div className="text-3xl font-bold text-primary mb-2">[X]</div><div className="text-sm text-muted-foreground">[Stat Label 1]</div></div>
                <div><div className="text-3xl font-bold text-accent mb-2">[X%]</div><div className="text-sm text-muted-foreground">[Stat Label 2]</div></div>
                <div><div className="text-3xl font-bold text-primary mb-2">[X%]</div><div className="text-sm text-muted-foreground">[Stat Label 3]</div></div>
                <div><div className="text-3xl font-bold text-accent mb-2">[X]</div><div className="text-sm text-muted-foreground">[Stat Label 4]</div></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
