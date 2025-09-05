import { UserPlus, Brain, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Quick Onboarding",
    description: "Tell us about your fitness goals, preferences, and lifestyle in just 2 minutes."
  },
  {
    icon: Brain,
    title: "AI Creates Your Plans",
    description: "Our advanced AI generates personalized workout and meal plans tailored to you."
  },
  {
    icon: TrendingUp,
    title: "Track & Refine",
    description: "Log your progress and watch as AI continuously optimizes your plans for better results."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="gradient-text">Super Coach Pro</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our simple 3-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center hover:scale-105 transition-smooth group"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto glass-card rounded-full flex items-center justify-center group-hover:glow-primary transition-smooth">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}