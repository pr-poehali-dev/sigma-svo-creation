import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-tricolor-blue to-tricolor-red rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl">117</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">СИГМА НА СВО</h1>
                <p className="text-xs text-muted-foreground">117 бригада</p>
              </div>
            </div>

            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('main')} className="text-sm font-semibold hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-semibold hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('symbolics')} className="text-sm font-semibold hover:text-primary transition-colors">Символика</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-semibold hover:text-primary transition-colors">Контакты</button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
              <button onClick={() => scrollToSection('main')} className="text-sm font-semibold hover:text-primary transition-colors text-left">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-semibold hover:text-primary transition-colors text-left">О нас</button>
              <button onClick={() => scrollToSection('symbolics')} className="text-sm font-semibold hover:text-primary transition-colors text-left">Символика</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-semibold hover:text-primary transition-colors text-left">Контакты</button>
            </div>
          )}
        </div>
      </nav>

      <section id="main" className="pt-24 pb-16 bg-gradient-to-b from-tricolor-blue via-white to-tricolor-red">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
                ЧЕСТЬ<br/>И ДОБЛЕСТЬ<br/>117 БРИГАДЫ
              </h2>
              <p className="text-xl text-white/90 mb-8 drop-shadow">
                Защищая Родину на передовой СВО
              </p>
              <Button size="lg" className="bg-tricolor-red hover:bg-tricolor-red/90 text-white font-bold text-lg px-8 py-6">
                ПОДДЕРЖАТЬ БОЙЦОВ
              </Button>
            </div>

            <div className="relative animate-slide-in">
              <div className="aspect-square rounded-lg overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://v3b.fal.media/files/b/kangaroo/28wo1EPGScRAcFp6fFtG-_output.png" 
                  alt="Боец 117 бригады с АК-12"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tricolor-blue rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                <span className="text-white font-black text-4xl">117</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-black text-center mb-4 text-foreground">О НАС</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-tricolor-blue via-white to-tricolor-red mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">ЗАЩИТА РОДИНЫ</h4>
                <p className="text-muted-foreground">Мы стоим на страже безопасности и суверенитета нашей страны</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">БРАТСТВО</h4>
                <p className="text-muted-foreground">Единство и взаимовыручка — основа нашей силы</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">ПРОФЕССИОНАЛИЗМ</h4>
                <p className="text-muted-foreground">Высочайший уровень подготовки и боевого мастерства</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="symbolics" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-black text-center mb-4 text-foreground">СИМВОЛИКА</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-tricolor-blue via-white to-tricolor-red mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-tricolor-blue to-tricolor-red rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-2xl">117</span>
                  </div>
                  <h4 className="text-2xl font-bold">ШЕВРОН 117</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Знак отличия бригады, символизирующий честь, отвагу и преданность своему долгу. Носится с гордостью каждым бойцом.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <Icon name="Flag" size={40} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold">ТРИКОЛОР</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Флаг России — наша святыня. Цвета триколора напоминают о великой истории и светлом будущем нашей страны.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <Icon name="Star" size={40} className="text-secondary" />
                  </div>
                  <h4 className="text-2xl font-bold">ЗВЕЗДА ДОБЛЕСТИ</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Красная звезда — символ воинской доблести и славных традиций русской армии.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">🇷🇺</span>
                  </div>
                  <h4 className="text-2xl font-bold">АК-12</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Надёжное оружие российского бойца — символ силы и технического превосходства.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-tricolor-blue to-tricolor-red">
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="text-4xl font-black text-center mb-4 text-white">КОНТАКТЫ</h3>
          <div className="w-24 h-1 bg-white mx-auto mb-12"></div>

          <Card className="border-2 border-white">
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Электронная почта</h4>
                    <p className="text-muted-foreground">info@117brigade.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (800) 117-00-00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Адрес</h4>
                    <p className="text-muted-foreground">Линия фронта СВО</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <Button className="w-full bg-tricolor-red hover:bg-tricolor-red/90 text-white font-bold" size="lg">
                  <Icon name="Heart" size={20} className="mr-2" />
                  ПОДДЕРЖАТЬ БОЙЦОВ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-tricolor-blue to-tricolor-red rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">117</span>
            </div>
            <p className="text-lg font-bold">СИГМА НА СВО</p>
          </div>
          <p className="text-sm text-white/60">© 2025 117 бригада. Честь и доблесть.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
