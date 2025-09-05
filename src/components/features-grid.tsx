import { 
  Dumbbell, 
  Utensils, 
  MessageCircle, 
  TrendingUp, 
  Smartphone, 
  Bell 
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "AI Workout Planner",
    description: "Personalized exercise routines that adapt to your progress, equipment, and schedule."
  },
  {
    icon: Utensils,
    title: "AI Meal Planner",
    description: "Custom nutrition plans with recipes, shopping lists, and macro tracking."
  },
  {
    icon: MessageCircle,
    title: "Coach Chat",
    description: "24/7 AI coaching support for motivation, tips, and instant answers to your questions."
  },
  {
    icon: TrendingUp,
    title: "Progress & Analytics",
    description: "Comprehensive tracking with insights, trends, and personalized recommendations."
  },
  {
    icon: Smartphone,
    title: "Smart Integrations",
    description: "Seamlessly connects with Apple Health, Google Fit, and your favorite fitness devices."
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Intelligent notifications for workouts, meals, and hydration based on your routine."
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need in <span className="gradient-text">One App</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Super Coach Pro combines AI-powered workout planning, nutrition guidance, 
            and coaching support for a complete fitness experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-smooth group cursor-pointer"
            >
              <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center mb-4 group-hover:glow-primary transition-smooth">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}