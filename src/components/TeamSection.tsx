import { Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Maria Silva",
    role: "Diretora Pedagógica",
    description: "Pedagoga com 20 anos de experiência em educação infantil.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ana Santos",
    role: "Coordenadora",
    description: "Especialista em desenvolvimento infantil e psicopedagogia.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Carla Oliveira",
    role: "Professora - Maternal",
    description: "Formação em pedagogia com foco em primeira infância.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Juliana Costa",
    role: "Professora - Jardim I",
    description: "Especialista em alfabetização e letramento infantil.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Patricia Lima",
    role: "Professora - Jardim II",
    description: "Pedagoga com especialização em educação lúdica.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Fernanda Alves",
    role: "Auxiliar de Educação",
    description: "Dedicada ao cuidado e bem-estar das crianças.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-4">
            Nossa Equipe
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Profissionais{" "}
            <span className="text-gradient">apaixonados</span> pela educação
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossa equipe é formada por educadores dedicados e apaixonados, comprometidos 
            com o desenvolvimento integral de cada criança.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group bg-card rounded-3xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 gradient-hero rounded-xl flex items-center justify-center shadow-soft">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
