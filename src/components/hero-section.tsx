import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const TrustBadge = ({ name }: { name: string }) => (
  <div className="glass-card p-4 h-12 flex items-center justify-center">
    <span className="text-muted-foreground text-sm font-medium">{name}</span>
  </div>
);

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Try the API endpoint first, fall back to mock if needed
      let response;
      try {
        response = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      } catch (fetchError) {
        // Fallback to mock API for development/static hosting
        if (window.mockSubscribeAPI) {
          await window.mockSubscribeAPI(email);
          response = { ok: true };
        } else {
          throw fetchError;
        }
      }
      
      if (response.ok) {
        toast({
          title: "Success! 🎉",
          description: "You're on the early access list. We'll be in touch soon!",
        });
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Futuristic AI fitness interface"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your <span className="gradient-text">AI Coach</span>
              <br />
              for Workouts & Meals.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Personalized training and nutrition plans in one app—crafted by AI, adapted to you.
            </p>

            {/* Email Signup Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 glass-card border-primary/30 focus:border-primary text-foreground"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="hero"
                disabled={isLoading}
                className="whitespace-nowrap"
              >
                {isLoading ? "Joining..." : "Get Early Access"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="demo" size="lg" asChild>
                <a href="#demo" className="inline-flex items-center">
                  Watch Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="animate-slide-in">
            <p className="text-sm text-muted-foreground mb-4">Trusted by fitness enthusiasts worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <TrustBadge name="TechCrunch" />
              <TrustBadge name="Product Hunt" />
              <TrustBadge name="Apple Featured" />
              <TrustBadge name="Google Play" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}