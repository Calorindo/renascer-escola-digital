import { Heart, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 gradient-hero rounded-2xl flex items-center justify-center">
                <span className="text-primary-foreground font-display text-xl font-bold">R</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Escola Renascer</h3>
                <p className="text-sm opacity-70">Educação Infantil</p>
              </div>
            </div>
            <p className="opacity-70 max-w-md mb-6">
              formando cidadãos felizes e preparados para o futuro. 
              Um ambiente de amor, respeito e aprendizado.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="opacity-70 hover:opacity-100 transition-opacity">
                  Início
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="opacity-70 hover:opacity-100 transition-opacity">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#equipe" className="opacity-70 hover:opacity-100 transition-opacity">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#onde-estamos" className="opacity-70 hover:opacity-100 transition-opacity">
                  Onde Estamos
                </a>
              </li>
              <li>
                <a href="#contato" className="opacity-70 hover:opacity-100 transition-opacity">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 opacity-70">
              <li>Rua Castro Alves, 97</li>
              <li>Bairro Sulbrasileiro</li>
              <li>Osório - RS</li>
              <li className="pt-2">(51) 99635-5808</li>
              <li>associacaoculturalmarias@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-70 text-sm text-center md:text-left">
              © {currentYear} Escola de Educação Infantil Renascer. Todos os direitos reservados.
            </p>
            <p className="opacity-70 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> para nossas crianças
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
