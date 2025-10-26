import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gradient">АВТОТЮНИНГ PRO</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">ГЛАВНАЯ</button>
              <button onClick={() => scrollToSection('wrapping')} className="hover:text-primary transition-colors">ОКЛЕЙКА</button>
              <button onClick={() => scrollToSection('painting')} className="hover:text-primary transition-colors">ПОКРАСКА</button>
              <button onClick={() => scrollToSection('guides')} className="hover:text-primary transition-colors">ГАЙДЫ</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">КОНТАКТЫ</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">
              ПРЕОБРАЗИМ<br />ВАШ АВТОМОБИЛЬ
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональная оклейка плёнкой и покраска с использованием передовых технологий и материалов премиум-класса
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('wrapping')} className="hover-lift">
                <Icon name="Layers" size={20} className="mr-2" />
                ОКЛЕЙКА ПЛЁНКОЙ
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('painting')} className="hover-lift">
                <Icon name="Sparkles" size={20} className="mr-2" />
                ПОКРАСКА КУЗОВА
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <Card className="hover-lift metallic-gradient">
              <CardHeader>
                <Icon name="Shield" size={40} className="text-primary mb-4" />
                <CardTitle>ГАРАНТИЯ 5 ЛЕТ</CardTitle>
                <CardDescription>На все виды работ и материалы</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-lift metallic-gradient">
              <CardHeader>
                <Icon name="Zap" size={40} className="text-primary mb-4" />
                <CardTitle>БЫСТРО</CardTitle>
                <CardDescription>Оклейка за 1-3 дня, покраска за 5-7 дней</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover-lift metallic-gradient">
              <CardHeader>
                <Icon name="Star" size={40} className="text-primary mb-4" />
                <CardTitle>ПРЕМИУМ МАТЕРИАЛЫ</CardTitle>
                <CardDescription>3M, Avery Dennison, KPMF</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="wrapping" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">ОКЛЕЙКА ПЛЁНКОЙ</h2>
          <p className="text-center text-muted-foreground mb-12">Защита и стиль вашего автомобиля</p>

          <Tabs defaultValue="types" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="types">ВИДЫ ПЛЁНОК</TabsTrigger>
              <TabsTrigger value="prices">ЦЕНЫ</TabsTrigger>
              <TabsTrigger value="stages">ЭТАПЫ РАБОТЫ</TabsTrigger>
            </TabsList>

            <TabsContent value="types" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-lift">
                  <CardHeader>
                    <Icon name="CircleDot" size={32} className="text-primary mb-2" />
                    <CardTitle>МАТОВАЯ ПЛЁНКА</CardTitle>
                    <CardDescription>Элегантный матовый финиш</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Устойчивость к царапинам
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Широкая цветовая гамма
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Легко моется
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <Icon name="Sparkles" size={32} className="text-primary mb-2" />
                    <CardTitle>ГЛЯНЦЕВАЯ ПЛЁНКА</CardTitle>
                    <CardDescription>Яркий блеск и насыщенность</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Как новая краска
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Защита от УФ
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Глубокий цвет
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <Icon name="Gem" size={32} className="text-primary mb-2" />
                    <CardTitle>ХРОМ И МЕТАЛЛИК</CardTitle>
                    <CardDescription>Зеркальный эффект</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Уникальный вид
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Зеркальное покрытие
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Премиум сегмент
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <Icon name="Shield" size={32} className="text-primary mb-2" />
                    <CardTitle>ЗАЩИТНАЯ ПЛЁНКА</CardTitle>
                    <CardDescription>Антигравийная защита</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Защита от сколов
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Самовосстановление
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        Прозрачная
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="prices" className="mt-8">
              <div className="grid gap-6 max-w-4xl mx-auto">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>ПОЛНАЯ ОКЛЕЙКА КУЗОВА</span>
                      <span className="text-primary">от 120 000 ₽</span>
                    </CardTitle>
                    <CardDescription>Седан, хэтчбек</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>ОКЛЕЙКА КРЫШИ</span>
                      <span className="text-primary">от 15 000 ₽</span>
                    </CardTitle>
                    <CardDescription>Контрастная крыша</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>ОКЛЕЙКА КАПОТА</span>
                      <span className="text-primary">от 18 000 ₽</span>
                    </CardTitle>
                    <CardDescription>Защита или декор</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>АНТИГРАВИЙНАЯ ЗАЩИТА</span>
                      <span className="text-primary">от 35 000 ₽</span>
                    </CardTitle>
                    <CardDescription>Передняя часть, фары, зеркала</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="stages" className="mt-8">
              <div className="max-w-3xl mx-auto space-y-4">
                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">1</div>
                      <div>
                        <CardTitle>ДИАГНОСТИКА И ЗАМЕРЫ</CardTitle>
                        <CardDescription>Осмотр автомобиля, выбор материала</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">2</div>
                      <div>
                        <CardTitle>ПОДГОТОВКА ПОВЕРХНОСТИ</CardTitle>
                        <CardDescription>Мойка, обезжиривание, демонтаж элементов</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">3</div>
                      <div>
                        <CardTitle>РАСКРОЙ ПЛЁНКИ</CardTitle>
                        <CardDescription>Точная нарезка по лекалам</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">4</div>
                      <div>
                        <CardTitle>НАНЕСЕНИЕ ПЛЁНКИ</CardTitle>
                        <CardDescription>Профессиональная оклейка с прогревом</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">5</div>
                      <div>
                        <CardTitle>КОНТРОЛЬ КАЧЕСТВА</CardTitle>
                        <CardDescription>Проверка, сборка, финальная полировка</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="painting" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">ПОКРАСКА КУЗОВА</h2>
          <p className="text-center text-muted-foreground mb-12">Полная трансформация автомобиля</p>

          <Tabs defaultValue="types" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="types">ВИДЫ</TabsTrigger>
              <TabsTrigger value="prices">ЦЕНЫ</TabsTrigger>
              <TabsTrigger value="stages">ЭТАПЫ</TabsTrigger>
              <TabsTrigger value="comparison">СРАВНЕНИЕ</TabsTrigger>
            </TabsList>

            <TabsContent value="types" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover-lift">
                  <CardHeader>
                    <Icon name="Droplet" size={32} className="text-primary mb-2" />
                    <CardTitle>АКРИЛОВАЯ ЭМАЛЬ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-muted-foreground">Быстросохнущая, яркие цвета</p>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Срок службы:</span>
                      <span className="text-primary font-semibold">3-5 лет</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <Icon name="Sparkle" size={32} className="text-primary mb-2" />
                    <CardTitle>МЕТАЛЛИК / ПЕРЛАМУТР</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-muted-foreground">Эффектное покрытие с блеском</p>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Срок службы:</span>
                      <span className="text-primary font-semibold">5-7 лет</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <Icon name="Diamond" size={32} className="text-primary mb-2" />
                    <CardTitle>CERAMIC PRO</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-muted-foreground">Керамическое покрытие премиум</p>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Срок службы:</span>
                      <span className="text-primary font-semibold">7-10 лет</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <Icon name="Palette" size={32} className="text-primary mb-2" />
                    <CardTitle>CANDY / ХАМЕЛЕОН</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="text-muted-foreground">Уникальные спецэффекты</p>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Срок службы:</span>
                      <span className="text-primary font-semibold">5-8 лет</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="prices" className="mt-8">
              <div className="grid gap-6 max-w-4xl mx-auto">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>ПОЛНАЯ ПОКРАСКА (АКРИЛ)</span>
                      <span className="text-primary">от 80 000 ₽</span>
                    </CardTitle>
                    <CardDescription>Седан, включая все работы</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>ПОЛНАЯ ПОКРАСКА (МЕТАЛЛИК)</span>
                      <span className="text-primary">от 120 000 ₽</span>
                    </CardTitle>
                    <CardDescription>С эффектом металлик/перламутр</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>ПОКРАСКА ЭЛЕМЕНТА</span>
                      <span className="text-primary">от 8 000 ₽</span>
                    </CardTitle>
                    <CardDescription>Дверь, крыло, капот</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>CERAMIC PRO</span>
                      <span className="text-primary">от 180 000 ₽</span>
                    </CardTitle>
                    <CardDescription>Премиум керамика с гарантией</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="stages" className="mt-8">
              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  { title: 'РАЗБОРКА И ПОДГОТОВКА', desc: 'Снятие бамперов, фар, молдингов' },
                  { title: 'ШЛИФОВКА И ГРУНТОВКА', desc: 'Удаление старого покрытия, выравнивание' },
                  { title: 'БАЗОВЫЙ СЛОЙ', desc: 'Нанесение основного цвета в несколько слоев' },
                  { title: 'ЛАКИРОВАНИЕ', desc: 'Защитный лак в 2-3 слоя' },
                  { title: 'ПОЛИРОВКА И СБОРКА', desc: 'Финальная доводка, установка деталей' }
                ].map((stage, index) => (
                  <Card key={index} className="hover-lift">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle>{stage.title}</CardTitle>
                          <CardDescription>{stage.desc}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="mt-8">
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle>ОКЛЕЙКА VS ПОКРАСКА</CardTitle>
                  <CardDescription>Что выбрать для вашего автомобиля?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                        <Icon name="Layers" size={24} />
                        ОКЛЕЙКА ПЛЁНКОЙ
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={16} className="text-green-500 mt-1" />
                          <span>Быстрый монтаж (1-3 дня)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={16} className="text-green-500 mt-1" />
                          <span>Обратимость - снимается</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={16} className="text-green-500 mt-1" />
                          <span>Защита родной краски</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={16} className="text-green-500 mt-1" />
                          <span>Огромный выбор цветов и текстур</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Minus" size={16} className="text-red-500 mt-1" />
                          <span>Срок службы 3-7 лет</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Minus" size={16} className="text-red-500 mt-1" />
                          <span>Видны стыки на сложных деталях</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                        <Icon name="Sparkles" size={24} />
                        ПОКРАСКА КУЗОВА
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={16} className="text-green-500 mt-1" />
                          <span>Долговечность (5-10+ лет)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={16} className="text-green-500 mt-1" />
                          <span>Идеальное бесшовное покрытие</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={16} className="text-green-500 mt-1" />
                          <span>Возможность полировки</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Plus" size={16} className="text-green-500 mt-1" />
                          <span>Устранение дефектов кузова</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Minus" size={16} className="text-red-500 mt-1" />
                          <span>Дольше по времени (5-7 дней)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Minus" size={16} className="text-red-500 mt-1" />
                          <span>Необратимый процесс</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="guides" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4">ПРАКТИЧЕСКИЕ ГАЙДЫ</h2>
          <p className="text-center text-muted-foreground mb-12">Полезная информация для владельцев</p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="color" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-bold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="Palette" size={24} className="text-primary" />
                  КАК ВЫБРАТЬ ЦВЕТ
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-muted-foreground pt-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">1. Учитывайте форму кузова</h4>
                  <p>Тёмные цвета подчёркивают линии, светлые визуально увеличивают автомобиль. Матовые покрытия скрывают мелкие дефекты.</p>
                  
                  <h4 className="font-semibold text-foreground">2. Практичность</h4>
                  <p>Белый, серебристый, серый - менее маркие. Чёрный и тёмно-синий требуют частой мойки.</p>
                  
                  <h4 className="font-semibold text-foreground">3. Стиль жизни</h4>
                  <p>Яркие цвета (оранжевый, жёлтый, зелёный) - для тех, кто не боится выделяться. Классика (чёрный, белый, серый) - универсальны.</p>
                  
                  <h4 className="font-semibold text-foreground">4. Ликвидность</h4>
                  <p>При перепродаже популярнее нейтральные цвета: белый, серый, чёрный, серебристый.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prep" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-bold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="Wrench" size={24} className="text-primary" />
                  КАК ПОДГОТОВИТЬ АВТОМОБИЛЬ
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-muted-foreground pt-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Перед оклейкой/покраской:</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                      <span>Тщательно вымойте автомобиль, включая колёсные арки</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                      <span>Удалите все наклейки, значки, антенны (если планируете)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                      <span>Проверьте состояние ЛКП - сообщите о сколах и царапинах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                      <span>Заправьте полный бак (для взвешивания при покраске)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-primary mt-1" />
                      <span>Уберите все личные вещи из салона</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="care" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-bold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="Droplets" size={24} className="text-primary" />
                  УХОД ПОСЛЕ РАБОТ
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-muted-foreground pt-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Первые 7 дней:</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <Icon name="X" size={16} className="text-red-500 mt-1" />
                      <span>Не мойте автомобиль (особенно под давлением)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" size={16} className="text-red-500 mt-1" />
                      <span>Избегайте автомоек с щётками</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="X" size={16} className="text-red-500 mt-1" />
                      <span>Не используйте агрессивную химию</span>
                    </li>
                  </ul>
                  
                  <h4 className="font-semibold text-foreground mt-4">Постоянный уход:</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-1" />
                      <span>Бесконтактная мойка с мягкой химией</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-1" />
                      <span>Регулярная обработка воском (для плёнки и краски)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-1" />
                      <span>Удаляйте птичий помёт и битум сразу</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-1" />
                      <span>Избегайте царапающих губок и щёток</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warranty" className="border border-border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-xl font-bold hover:text-primary">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" size={24} className="text-primary" />
                  ГАРАНТИЯ И СРОКИ
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4 text-muted-foreground pt-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Гарантия на оклейку плёнкой:</h4>
                  <p>5 лет на отслоение и выцветание при правильном уходе. Не распространяется на механические повреждения.</p>
                  
                  <h4 className="font-semibold text-foreground">Гарантия на покраску:</h4>
                  <p>3 года на материалы и работу. Покрывает дефекты ЛКП, вздутия, отслоения. Требуется соблюдение рекомендаций по уходу.</p>
                  
                  <h4 className="font-semibold text-foreground">Сроки выполнения:</h4>
                  <ul className="space-y-2 ml-4">
                    <li>• Оклейка плёнкой: 1-3 дня</li>
                    <li>• Покраска кузова: 5-7 дней</li>
                    <li>• Покраска элемента: 1-2 дня</li>
                    <li>• Защитная плёнка: 1 день</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4">КОНТАКТЫ</h2>
          <p className="text-center text-muted-foreground mb-12">Свяжитесь с нами удобным способом</p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <Icon name="MapPin" size={32} className="text-primary mb-4" />
                <CardTitle>АДРЕС</CardTitle>
                <CardDescription className="text-base">
                  г. Москва, ул. Автомобильная, 15<br />
                  Промзона "Тюнинг Центр"
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Icon name="Clock" size={32} className="text-primary mb-4" />
                <CardTitle>РЕЖИМ РАБОТЫ</CardTitle>
                <CardDescription className="text-base">
                  Пн-Пт: 9:00 - 20:00<br />
                  Сб-Вс: 10:00 - 18:00
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Icon name="Phone" size={32} className="text-primary mb-4" />
                <CardTitle>ТЕЛЕФОН</CardTitle>
                <CardDescription className="text-base">
                  +7 (495) 123-45-67<br />
                  +7 (916) 765-43-21
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Icon name="Mail" size={32} className="text-primary mb-4" />
                <CardTitle>EMAIL</CardTitle>
                <CardDescription className="text-base">
                  info@autotuning-pro.ru<br />
                  order@autotuning-pro.ru
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="mt-8 hover-lift">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</h3>
                  <p className="text-muted-foreground">Оставьте заявку, и мы свяжемся с вами в течение 15 минут</p>
                </div>
                <Button size="lg" className="hover-lift">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  НАПИСАТЬ НАМ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 АВТОТЮНИНГ PRO. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
