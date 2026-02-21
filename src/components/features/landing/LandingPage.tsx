"use client";

import { useState } from "react";
import { LoginModal } from "@/components/features/auth/LoginModal";
import styles from "./Landing.module.scss";
import { Logo } from "@/components/ui/Logo";
import {
  Code2,
  Braces,
  Rocket,
  Layout,
  ArrowRight,
  Gamepad2,
  Users,
  Trophy,
  Target,
  Mail,
  Lightbulb,
} from "lucide-react";

export function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.container}>
        {/* Navigation / Header */}
        <header className={styles.header}>
          <nav className={styles.navLinks}>
            <a href="#features" onClick={(e) => scrollToSection(e, "features")}>
              О курсе
            </a>
            <a href="#audience" onClick={(e) => scrollToSection(e, "audience")}>
              Для кого
            </a>
            <a href="#mission" onClick={(e) => scrollToSection(e, "mission")}>
              Программа
            </a>
            <a href="#process" onClick={(e) => scrollToSection(e, "process")}>
              Как проходит
            </a>
            <a href="#faq" onClick={(e) => scrollToSection(e, "faq")}>
              FAQ
            </a>
            <a href="#reviews" onClick={(e) => scrollToSection(e, "reviews")}>
              Отзывы
            </a>
          </nav>
          <button
            onClick={() => setIsLoginOpen(true)}
            className={styles.loginButton}
          >
            Войти
          </button>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroLogo}>
            <Logo size="xl" />
          </div>
          <h1>Запусти свою карьеру во фронтенде</h1>
          <p>
            Изучай HTML, CSS, JavaScript и React в геймифицированной космической
            среде. Твоя миссия стать Senior Frontend разработчиком начинается
            здесь.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => (window.location.href = "tel:+37127748229")}
          >
            Начать Обучение <ArrowRight size={24} />
          </button>
        </section>

        {/* Tech Stack Grid */}
        <section className={styles.techGrid}>
          <div className={styles.techCard}>
            <Layout className={styles.icon} />
            <h3>HTML & CSS</h3>
            <p className="text-dim">Структура и Стиль</p>
          </div>
          <div className={styles.techCard}>
            <Braces className={styles.icon} />
            <h3>JavaScript</h3>
            <p className="text-dim">Логика и Интерактив</p>
          </div>
          <div className={styles.techCard}>
            <Code2 className={styles.icon} />
            <h3>React</h3>
            <p className="text-dim">Компонентная Архитектура</p>
          </div>
          <div className={styles.techCard}>
            <Rocket className={styles.icon} />
            <h3>Next.js</h3>
            <p className="text-dim">Фреймворк для Продакшена</p>
          </div>
        </section>

        {/* Why ToReact? (Features) */}
        <section id="features" className={styles.featuresSection}>
          <h2>Почему стоит выбрать ToReact?</h2>
          <p className="text-dim">
            Не просто курсы, а полноценная симуляция работы в продуктовой
            команде.
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <Gamepad2 size={24} />
              </div>
              <h3>Геймификация</h3>
              <p className="text-dim">
                Превращаем обучение в увлекательную миссию. Получай опыт,
                повышай уровень и открывай новые модули.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <Users size={24} />
              </div>
              <h3>Code Review</h3>
              <p className="text-dim">
                Твой код проверяют реальные менторы. Ты научишься писать чисто,
                понятно и профессионально.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <Trophy size={24} />
              </div>
              <h3>Гарантированная трудоустройство</h3>
              <p className="text-dim">
                После прохождения курса ты получишь поддержку в соствлении CV и
                прохождении собеседования.
              </p>
            </div>
          </div>
        </section>

        {/* Who is this for? */}
        <section id="audience" className={styles.targetAudienceSection}>
          <h2>Для кого этот курс?</h2>
          <p className="text-dim">Программа адаптируется под твой уровень.</p>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <div className={styles.iconWrapper}>
                <Target size={24} />
              </div>
              <h3>Новички с нуля</h3>
              <p className="text-dim">
                Никогда не писал код? Мы начнем с самых основ и постепенно
                доведем до уровня Junior.
              </p>
            </div>
            <div className={styles.audienceCard}>
              <div className={styles.iconWrapper}>
                <Lightbulb size={24} />
              </div>
              <h3>Студенты и выпускники</h3>
              <p className="text-dim">
                Получи актуальные навыки, которые реально нужны работодателям, и
                начни карьеру еще во время учебы.
              </p>
            </div>
            <div className={styles.audienceCard}>
              <div className={styles.iconWrapper}>
                <Rocket size={24} />
              </div>
              <h3>Свичары</h3>
              <p className="text-dim">
                Хочешь сменить профессию на IT? Наш курс — это прямой путь к
                первой работе разработчиком.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Map (Curriculum) */}
        <section id="mission" className={styles.missionSection}>
          <h2>Твоя Карта Полета</h2>
          <p className="text-dim">От новичка до Senior Frontend Developer</p>
          <div className={styles.missionMap}>
            <div className={styles.missionItem}>
              <div className={styles.planetPoint}>1</div>
              <h3>Основы</h3>
              <p>HTML & CSS. Верстка макетов, Flexbox, Grid, Анимации.</p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.planetPoint}>2</div>
              <h3>Логика</h3>
              <p>JavaScript. Алгоритмы, DOM, Async/Await, API.</p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.planetPoint}>3</div>
              <h3>Интерфейс</h3>
              <p>React. Компоненты, Hooks, State Management, Router.</p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.planetPoint}>4</div>
              <h3>Продакшен</h3>
              <p>Next.js. SSR, Optimization, Deployment, CI/CD.</p>
            </div>
          </div>
        </section>

        {/* How it works (Process) */}
        <section id="process" className={styles.processSection}>
          <h2>Как проходит обучение?</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Изучай теорию</h3>
                <p>
                  Короткие и понятные уроки без воды, доступные 24/7. Вся теория
                  закрепляется квизами.
                </p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Выполняй практику</h3>
                <p>
                  Пиши код прямо в браузере. Решай реальные задачи и собирай
                  портфолио в процессе.
                </p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Получай фидбек от ментора</h3>
                <p>
                  Каждое задание проходит строгий Code Review. Ментор укажет на
                  ошибки и поможет улучшить код.
                </p>
              </div>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Готовься к трудоустройству</h3>
                <p>
                  Помогаем составить резюме, оформляем GitHub и проводим
                  тестовые собеседования.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews (Cadet Logs) */}
        <section id="reviews" className={styles.reviewsSection}>
          <h2>Бортовой Журнал Кадетов</h2>
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <p className="quote">
                &quot;Я пытался учить React по видео на YouTube, но только здесь
                понял как это работает на самом деле. Ментор Илья — топ!&quot;
              </p>
              <div className={styles.author}>
                <div className={styles.avatar}>A</div>
                <div>
                  <strong>Роман</strong>
                </div>
              </div>
            </div>
            <div className={styles.reviewCard}></div>
            <div className={styles.reviewCard}></div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={styles.faqSection}>
          <h2>Часто задаваемые вопросы</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Нужны ли базовые знания?</h3>
              <p>
                Нет, курс рассчитан на обучение с полного нуля. Главное —
                желание учиться и компьютер с интернетом.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Сколько времени нужно уделять?</h3>
              <p>
                Мы рекомендуем выделять 1-2 часа в день. Вы учитесь в своем
                темпе, без жестких дедлайнов.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Есть ли помощь с трудоустройством?</h3>
              <p>
                Да, мы помогаем с резюме, портфолио и подготовкой к
                собеседованиям. Лучших студентов рекомендуем партнерам.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Что делать, если я застряну?</h3>
              <p>
                У тебя будет доступ к ментору и закрытому чату студентов, где
                всегда можно задать вопрос и получить помощь.
              </p>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section className={styles.contactSection}>
          <h2>Готов к запуску?</h2>
          <p>
            Места в шаттле ограничены. Запишись на вводное собеседование или
            задай свой вопрос ментору напрямую.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className={styles.ctaButton}
              onClick={() => (window.location.href = "tel:+37127748229")}
            >
              Связаться с Ментором <Mail size={24} />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} ToReact. Все системы в норме.</p>
        </footer>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
