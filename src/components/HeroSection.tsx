import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-2xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-secondary/40 rounded-full blur-xl animate-float" style={{ animationDelay: "0.5s" }} />
        
        {/* Decorative shapes */}
        <Star className="absolute top-32 right-[15%] w-8 h-8 text-secondary animate-wiggle" />
        <Heart className="absolute bottom-32 left-[10%] w-6 h-6 text-accent animate-wiggle" style={{ animationDelay: "1s" }} />
        <Sparkles className="absolute top-[60%] right-[8%] w-7 h-7 text-primary/60 animate-wiggle" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Onde o aprendizado floresce</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Escola de Educação Infantil Renascer
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Um ambiente acolhedor e estimulante onde cada criança é única e especial. 
              Desenvolvemos o potencial de cada pequeno através do amor, cuidado e aprendizado lúdico.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" onClick={() => scrollToSection("#contato")}>
                Agende uma Visita
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("#quem-somos")}>
                Conheça Nossa Escola
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-secondary">200+</p>
                <p className="text-sm text-muted-foreground">Famílias Atendidas</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Dedicação</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 gradient-hero rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-card rounded-3xl shadow-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=600&fit=crop"
                  alt="Crianças felizes aprendendo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-warm rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">Ensino com Amor</p>
                    <p className="text-xs text-muted-foreground">Metodologia afetuosa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
