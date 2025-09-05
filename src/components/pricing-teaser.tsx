import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect to get started",
    features: [
      "Basic AI workout plans",
      "Simple meal suggestions", 
      "Progress tracking",
      "Community access"
    ],
    cta: "Get Started Free",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "Coming Soon",
    period: "",
    description: "Full AI coaching experience",
    features: [
      "Advanced AI workout & meal plans",
      "Personalized coach chat",
      "Full analytics dashboard",
      "Device integrations",
      "Premium recipes & workouts",
      "Priority support"
    ],
    cta: "Join Waitlist",
    variant: "hero" as const,
    popular: true
  }
];

export function PricingTeaser() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Fitness Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and unlock advanced AI features with Pro when it launches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card p-8 relative ${
                plan.popular ? 'ring-2 ring-primary glow-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-primary-foreground text-sm font-semibold flex items-center gap-1">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.variant} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include a 30-day money-back guarantee • No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
}