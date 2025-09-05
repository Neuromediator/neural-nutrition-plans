import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager",
    avatar: "/placeholder-avatar-1.jpg",
    rating: 5,
    quote: "Super Coach Pro completely transformed my approach to fitness. The AI meal plans are spot-on and the workout routines actually fit my busy schedule!"
  },
  {
    name: "Marcus Chen",
    role: "Software Engineer", 
    avatar: "/placeholder-avatar-2.jpg",
    rating: 5,
    quote: "As a developer, I love how the AI adapts to my preferences. The progress tracking is incredibly detailed and motivating."
  },
  {
    name: "Jennifer Adams",
    role: "College Student",
    avatar: "/placeholder-avatar-3.jpg", 
    rating: 5,
    quote: "Finally, an app that understands my student budget and dorm room limitations. The meal plans are affordable and the workouts need zero equipment!"
  }
];

const ratings = [
  { platform: "App Store", rating: 4.9, reviews: "12K+" },
  { platform: "Google Play", rating: 4.8, reviews: "8K+" },
  { platform: "Trustpilot", rating: 4.9, reviews: "3K+" }
];

export function SocialProof() {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Ratings Row */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            {ratings.map((rating, index) => (
              <div key={index} className="glass-card p-6 text-center min-w-[200px]">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(rating.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-foreground">{rating.rating}</div>
                <div className="text-sm text-muted-foreground">{rating.platform}</div>
                <div className="text-xs text-muted-foreground">{rating.reviews} reviews</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/30" />
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-muted-foreground leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}