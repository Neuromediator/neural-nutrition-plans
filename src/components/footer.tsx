import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Testimonials", href: "#testimonials" }
    ]
  },
  {
    title: "Company", 
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press Kit", href: "/press" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" }
    ]
  }
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/supercoachpro", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/supercoachpro", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/supercoachpro", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/supercoachpro", label: "LinkedIn" }
];

export function Footer() {
  return (
    <footer className="bg-glass border-t border-border/30">
      {/* Cookie Notice */}
      <div className="glass-card mx-4 mb-6 mt-6 p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">Learn More</Button>
            <Button variant="outline" size="sm">Accept</Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Super Coach Pro</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Your AI-powered fitness companion for personalized workouts, nutrition plans, 
              and coaching support. Transform your health journey with intelligent technology.
            </p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@supercoachpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Super Coach Pro. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-primary transition-smooth"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}