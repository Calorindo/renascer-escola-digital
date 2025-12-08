import { BookOpen, Users, Palette, Music } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Aprendizado Lúdico",
    description: "Metodologia baseada em brincadeiras e descobertas que estimulam a curiosidade natural das crianças.",
  },
  {
    icon: Users,
    title: "Turmas Reduzidas",
    description: "Atenção individualizada para cada aluno, respeitando o ritmo e as necessidades de cada criança.",
  },
  {
    icon: Palette,
    title: "Artes e Criatividade",
    description: "Atividades artísticas que desenvolvem a expressão, imaginação e habilidades motoras.",
  },
  {
    icon: Music,
    title: "Música e Movimento",
    description: "Aulas de musicalização que trabalham ritmo, coordenação e desenvolvimento socioemocional.",
  },
];

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
            Quem Somos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Uma escola que{" "}
            <span className="text-gradient">acolhe e transforma</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A Escola de Educação Infantil Renascer nasceu do sonho de criar um espaço onde cada criança 
            pudesse florescer em seu próprio tempo. Há mais de 15 anos, dedicamos nosso trabalho ao 
            desenvolvimento integral de nossos pequenos alunos.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-shadow duration-300">
            <div className="w-14 h-14 gradient-hero rounded-2xl flex items-center justify-center mb-6">
              <span className="text-primary-foreground font-display text-2xl font-bold">M</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Proporcionar um ambiente seguro, acolhedor e estimulante onde as crianças possam 
              desenvolver suas habilidades cognitivas, emocionais e sociais através de experiências 
              significativas e do brincar.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-glow transition-shadow duration-300">
            <div className="w-14 h-14 gradient-warm rounded-2xl flex items-center justify-center mb-6">
              <span className="text-secondary-foreground font-display text-2xl font-bold">V</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Amor, respeito, criatividade e compromisso são os pilares que guiam nossa prática 
              pedagógica. Acreditamos que cada criança é única e merece ser valorizada em sua 
              individualidade.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
