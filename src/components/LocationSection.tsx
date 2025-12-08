import { MapPin, Clock, Phone, Car } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="onde-estamos" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground font-medium rounded-full text-sm mb-4">
            Onde Estamos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Venha nos{" "}
            <span className="text-gradient">conhecer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos localizados em um ambiente tranquilo e seguro, de fácil acesso para toda a comunidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-card bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139.79017021706767!2d-50.2600401!3d-29.8942443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95186f560bba6c09%3A0x84ae782752b187f!2sR.%20Castro%20Alves%2C%2097%20-%20Sulbrasileiro%2C%20Os%C3%B3rio%20-%20RS%2C%2095520-000!5e0!3m2!1spt-BR!2sbr!4v1733687999999"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Escola Renascer"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">Fácil Acesso</p>
                  <p className="text-xs text-muted-foreground">Estacionamento gratuito</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Castro Alves, 97<br />
                    Bairro Sul Brasileiro<br />
                    Osório - RS, 95520-000
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 7h às 18h<br />
                    Período Integral ou Meio Período<br />
                    Plantão de férias disponível
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">Contato Rápido</h3>
                  <p className="text-muted-foreground">
                    Telefone: (51) 996355808<br />
                    WhatsApp: (11) 99635-5808<br />
                    associacaoculturalmarias@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-warm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">Como Chegar</h3>
                  <p className="text-muted-foreground">
                    Próximo ao clube de piscina SulBrasileiro<br />
                    Estacionamento próprio gratuito
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
