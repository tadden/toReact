export const javascriptCourse = {
  slug: "javascript",
  title: "JavaScript",
  description: "Изучение языка программирования JavaScript.",
  icon: "javascript", // Assuming 'javascript' icon exists, otherwise fallback or checking available icons would be good. 'planet-red' was used for HTML. Let's use 'code' or similar if unsure, generally icons are mapped in frontend. I'll stick to 'javascript' or 'js' if likely, but 'planet-red' suggests a specific set. I will check 'BonusIconMap' mentioned in history? Or just guess 'javascript'.
  order: 3,
  modules: [
    {
      slug: "module-1-js-intro",
      title: "1. Модуль - Переменные и типы, Разветвление, Циклы",
      description: "Знакомство с языком, переменные и типы данных.",
      order: 0,
      videoUrl: null,
      items: [], // Structure might be different? html-css.ts used 'resources' and 'topics'.
      resources: [
        {
          type: "video",
          title: "Циклы в JavaScript (часть 1)",
          url: "https://www.youtube.com/watch?v=IXagOIAGaGw",
        },
        {
          type: "video",
          title: "Циклы в JavaScript (часть 2)",
          url: "https://www.youtube.com/watch?v=6x_r2GUdzck",
        },
      ],
      homework: {
        id: "js-intro-hw",
        title: "Домашнє завдання: Змінні та типи",
        description:
          "Виконайте інтерактивні завдання для закріплення матеріалу.",
        acceptanceCriteria: [
          {
            type: "challenges",
            items: [
              "js-vars",
              "js-vars-reassignment",
              "js-types",
              "js-math-operators",
              "js-template-strings",
              "js-product-order",
              "js-function-declaration",
              "js-function-parameters",
              "js-function-return",
              "js-make-message",
              "js-calculate-total-price",
              "js-make-order-message",
              "js-is-adult",
              "js-is-valid-password",
              "js-check-age",
              "js-check-storage",
              "js-combined-assignment",
              "js-check-balance",
              "js-check-password",
              "js-check-storage-2",
              "js-is-number-in-range",
              "js-check-if-can-access-content",
              "js-is-number-not-in-range",
              "js-get-discount",
              "js-check-storage-ternary",
              "js-check-password-ternary",
              "js-get-subscription-price",
              "js-check-password-switch",
              "js-get-shipping-cost",
              "js-string-length",
              "js-string-indexing",
              "js-string-slice",
              "js-format-message",
              "js-normalize-input",
              "js-check-for-name",
              "js-check-for-spam",
            ],
          },
        ],
      },
      topics: [
        {
          id: "js-intro",
          title: "Знайомство с JavaScript",
          order: 0,
          content: `

<p>Когда мы говорим о программировании, первое, что приходит на ум - это набор инструкций в файле. Исходный код (source code) - это текст компьютерной программы на любом языке программирования, набор легких для чтения синтаксических конструкций, описывающих набор инструкций для компьютера.</p>

<p>Собственно сам исходный код непонятен для машины. Существует шаг, выполняемый после написания программы, который конвертирует исходный код в файле в набор инструкций, понятных компьютеру. Этим занимается специальная программа: компилятор или интерпретатор. Из этого можно сделать вывод - код пишется не для машин, а для разработчика. Исходный код должен не только правильно решать задачу, но и быть понятным.</p>

<h3>Логическое мышление</h3>

<p>В мире существует много языков программирования. Они не такие сложные, как человеческие, потому что состоят из довольно маленького набора синтаксических конструкций, а их принципы работы и базовые концепции похожи между разными языками.</p>

<p>Опытные разработчики рассматривают проблемы с точки зрения алгоритмов - набора шагов, которые нужно выполнить для достижения определенной цели. Мы постоянно используем алгоритмы в повседневной жизни. Например, процесс приготовления чая - это набор необходимых шагов (алгоритм) для достижения результата. Когда вы привыкнете выстраивать решение задачи в виде алгоритма, язык программирования будет всего лишь инструментом.</p>

<h3>JavaScript</h3>

<p><strong>JavaScript</strong> - реализация спецификации ECMAScript, высокоуровневый язык программирования, который поддерживается всеми современными веб-браузерами. В первую очередь предназначен для взаимодействия с элементами веб-страниц и добавления интерактивности.</p>

<div class="info-highlight">
  <p><strong>ИНТЕРЕСНО</strong></p>
  <p>JavaScript никоим образом не касается языка Java. Это два независимых языка программирования.</p>
</div>

<p>Во Front-end разработке, JavaScript используется вместе с HTML и CSS для обеспечения функциональности веб-страницы, а именно:</p>

<ul class="list-disc">
  <li>несложные вычисления</li>
  <li>проверка и манипуляция данными, введенными пользователем</li>
  <li>хранение информации в браузере пользователя</li>
  <li>динамическое изменение HTML-документа</li>
  <li>реакция на действия пользователя</li>
  <li>создание интерактивных элементов: галерей, графиков и т. п.</li>
  <li>взаимодействие с бэкендом</li>
</ul>

<div class="info-highlight">
  <p><strong>ИНТЕРЕСНО</strong></p>
  <p>Если JavaScript-код пишется для выполнения в браузере (Front-end), у разработчика отсутствуют инструменты и доступ к файловой или операционной системе из соображений безопасности.</p>
</div>

<h3>На сегодня, используя JavaScript, можно создавать:</h3>

<ul class="list-disc">
  <li>веб-приложения на фреймворках React, Vue, Angular и других</li>
  <li>бэкенд-приложения на Node.js</li>
  <li><strong>мобильные приложения на</strong> React Native или Ionic</li>
  <li><strong>десктоп-приложения, с помощью</strong> Electron</li>
  <li><strong>микроконтроллеры с</strong> Johnny-Five и Espruino</li>
</ul>

<p>Для реализации всех этих возможностей, необходимо хорошо знать синтаксис языка, его особенности и механизмы, тренироваться мыслить алгоритмически и решать как можно больше практических задач.</p>
`,
        },
        {
          id: "js-script-connection",
          title: "Подключение скрипта",
          order: 1,
          content: `
<p>Чтобы добавить скрипт на веб-страницу, в HTML-файле используется тег <code>script</code>, в атрибуте <code>src</code> которого указываем ссылку на внешний JavaScript-файл.</p>

<p>Чтобы подключить JavaScript из внешнего файла:</p>
<ul class="list-disc">
  <li>Создайте файл с расширением <code>.js</code> и поместите его в подпапку <code>js</code>.</li>
  <li>Затем укажите путь к файлу скрипта в атрибуте <code>src</code> тега <code>script</code>.</li>
</ul>

<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;title&gt;JavaScript is fun!&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- контент --&gt;
    &lt;script src="js/script.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

<div class="info-highlight">
  <p><strong>ИНТЕРЕСНО</strong></p>
  <p>Размещение JavaScript файла в папке js не требуется, однако, это хорошая практика.</p>
</div>

<p>Если скрипт подключен в <code>&lt;head&gt;</code>, рендеринг страницы останавливается до тех пор, пока скрипт не загрузится и полностью выполнится. Браузер загружает и отображает HTML постепенно. Если он видит тег <code>&lt;script&gt;</code> без дополнительных атрибутов, то сначала выполняется скрипт, и только потом обрабатывается другой код HTML-файла. Поэтому скрипт подключают перед закрывающим тегом <code>&lt;/body&gt;</code>, после всего контента, как в примере.</p>

<h3>Несколько скриптов</h3>

<p>Подключая несколько JavaScript-файлов к странице, интерпретатор обрабатывает их в том порядке, в котором они указаны в HTML-файле.</p>

<pre><code class="language-html">&lt;script src="js/script-1.js"&gt;&lt;/script&gt;
&lt;script src="js/script-2.js"&gt;&lt;/script&gt;</code></pre>
`,
        },
        {
          id: "js-output-data",
          title: "Вывод данных",
          order: 2,
          content: `
<p>Разработчику нужно проверять правильность работы программы в определенный момент времени и выводить информацию в определенном месте кода. Для этого есть консоль в инструментах разработчика браузера на вкладке <code>Console</code>.</p>

<div class="image-container">
  <img src="/images/javascript/console-empty.png" alt="Вкладка Console в инструментах разработчика" class="img-responsive img-rounded" />
</div>

<p>Следующие комбинации клавиш открывают инструменты разработчика на вкладке <code>Console</code>:</p>
<ul class="list-disc">
  <li>Windows и Linux — <code>Ctrl + Shift + J</code>;</li>
  <li>MacOS — <code>Command + Option + J</code>.</li>
</ul>

<h3>Метод <code>console.log()</code></h3>

<p>Чтобы вывести данные в консоль разработчика используется метод <code>console.log()</code>.</p>

<pre><code class="language-javascript">console.log(value);</code></pre>

<p>Значение <code>value</code>, которое указано в круглых скобках, будет выведено в консоль разработчика при выполнении программы.</p>

<pre><code class="language-javascript">console.log("JavaScript is awesome!");
console.log(10);</code></pre>

<p>При выполнении этого кода в консоль разработчика будут последовательно выведены строка и число.</p>

<div class="image-container">
  <img src="/images/javascript/console-output.png" alt="Результат вывода в консоль" class="img-responsive img-rounded" />
</div>

[QUIZ: js-output-quiz]

[NEXT]
`,
        },
        {
          id: "js-syntax-basics",
          title: "Основы синтаксиса",
          order: 3,
          content: `

<p>При написании кода важно не просто знать, какой символ или конструкцию можно использовать, но прежде всего необходимо понимать терминологию и составляющие исходного кода. В этой секции нам не важно понимание как это работает, мы только познакомимся с базовой терминологией и синтаксисом.</p>

<h3>Инструкция</h3>

<p><strong>Инструкция (statement)</strong> - это связанный набор слов и символов из синтаксиса языка, которые объединяются с целью выражения одной идеи, одной инструкции для машины.</p>

<pre><code class="language-javascript">a = b * 2;</code></pre>

<p>Инструкции в JavaScript завершаются точкой с запятой, которую можно сравнить с точкой в конце предложения вашего родного языка.</p>

<ul class="list-disc">
  <li><code>a</code> и <code>b</code> - переменные (как в алгебраическом уравнении), это хранилища данных, которые использует программа. Переменная состоит из идентификатора (имени) и связанного с ним значения.</li>
  <li><code>2</code> - просто число. Это называется значением литерала (literal value), потому что не хранится в переменной.</li>
  <li><code>=</code> и <code>*</code> - операторы, выполняют действия над значениями и переменными.</li>
</ul>

<p>Представьте, что переменная <code>b</code> уже хранит число 10. Тогда эта инструкция говорит машине:</p>
<ol>
  <li>Поди найди переменную с идентификатором <code>b</code> и спроси, какое у нее сейчас значение.</li>
  <li>Подставь значение переменной <code>b</code> (10), в утверждение на место <code>b</code>.</li>
  <li>Выполни операцию умножения <code>10</code> на <code>2</code>.</li>
  <li>Запиши результат вычисления выражения правой части в переменную <code>a</code>.</li>
</ol>

<div class="info-highlight">
  <p><strong>ИНТЕРЕСНО</strong></p>
  <p>Завершение инструкций точкой с запятой не требуется, однако, настоятельно рекомендуется всегда ее ставить. Это простое правило сделает код понятнее и поможет избежать неожиданных ошибок.</p>
</div>

<h3>Выражение</h3>

<p>Инструкции состоят из частей, как и в любом языке предложения состоят из фраз, и эти фразы называются выражениями.
<strong>Выражение (expression)</strong> - ссылка на переменную или значение, или на набор переменных и значений в сочетании с операторами.</p>

<pre><code class="language-javascript">a = b * 2;</code></pre>

<p>Инструкция в примере выше содержит 4 выражения:</p>
<ul class="list-disc">
  <li><code>2</code> - выражение значения литерала.</li>
  <li><code>b</code> и <code>a</code> - выражение переменной, означают необходимость подставить значение переменной, но только в том случае, если переменная находится в правой части выражения присваивания.</li>
  <li><code>b * 2</code> - арифметическое выражение умножения.</li>
  <li><code>a = b * 2</code> - выражение присваивания. В нашем случае указывает на необходимость вычисления правой части выражения и присвоение результата переменной в левой части выражения.</li>
</ul>

<p>Также существуют выражения вызова, сравнения и т.д. Мы не будем сейчас рассматривать их всех, нам важно понимать, из каких частей состоит исходный код и как правильно его читать.</p>

<h3>Интерфейс</h3>

<p>Когда мы подходим к автомобилю с ключом или садимся за руль автомобиля, существует определенный набор элементов управления, с которыми можно взаимодействовать. В программировании это называется интерфейс.
<strong>Интерфейс</strong> - это набор свойств и методов сущности, доступных для использования в исходном коде.</p>

<h3>Свойство</h3>

<p>У нас с вами есть свойства: рост, вес, цвет глаз, то есть какие-то описательные характеристики. Так же и у данных есть свойства, например у строки есть свойство её длины. Синтаксис обращения к свойству очень простой - через точку.</p>

<pre><code class="language-javascript">сущность.имя_свойства</code></pre>

<p>Для наглядности, обратимся к свойству строки <code>length</code>, которое содержит количество символов строки.</p>

<pre><code class="language-javascript">"JavaScript is awesome".length;</code></pre>

<h3>Метод</h3>

<p>Это действия, например присесть или плавать, то есть какая-то активная операция. Так же и у данных есть свои заранее определенные методы, например, можно добавить или удалить элементы в коллекции, перевести строку в другой регистр и т.д. Синтаксис вызова метода очень похож на обращение к свойству, но в конце добавляется пара круглых скобок.</p>

<pre><code class="language-javascript">сущность.имя_метода()</code></pre>

<p>Для примера обратимся к методу строки <code>toUpperCase()</code>, который делает все буквы заглавными.</p>

<pre><code class="language-javascript">"JavaScript is awesome".toUpperCase();</code></pre>

<h3>Строгий режим</h3>

<p>Новая возможность в спецификации ECMAScript 5, которая позволяет переводить скрипт в режим полного соответствия современному стандарту. Это предотвращает определенные ошибки, как-то использование небезопасных и устаревших конструкций.
Для того, чтобы перевести скрипт в строгий режим, достаточно указать директиву в начале js-файла. Всегда пишите код в строгом режиме.</p>
<p>script.js</p>

<pre><code class="language-javascript">"use strict";
// Это комментарий. Дальше идет весь код JS-файла</code></pre>

[NEXT]
`,
        },
        {
          id: "js-variables",
          title: "Переменные и типы данных",
          order: 4,
          content: `
<h3>Объявление переменных</h3>

<p>Переменная — это контейнер, который используется для хранения данных. Переменная состоит из:</p>

<ul class="list-disc">
  <li>идентификатора (уникального имени);</li>
  <li>области памяти, где хранится её значение.</li>
</ul>

<p>Переменную можно представить как коробку с надписью (именем), в которой что-то лежит (значение).</p>

<div class="image-container">
  <img src="/images/javascript/variables-box.png" alt="Визуализация переменных как коробок" class="img-responsive img-rounded" />
</div>

<p>Рассмотрим примеры объявления переменных.</p>

<pre><code class="language-javascript">const age = 20;
const username = "Mango";</code></pre>

<ul class="list-disc">
  <li>Объявление переменной начинается с ключевого слова (в примере: <code>const</code>). В современном синтаксисе JavaScript переменные лучше объявлять с помощью ключевых слов <code>const</code> и <code>let</code>. Создание переменных без ключевого слова может привести к ошибкам.</li>
  <li>После ключевого слова, через пробел, указывается имя переменной (в примере: <code>age</code> и <code>username</code>).</li>
  <li>Чтобы присвоить переменной значение, используется оператор присваивания <code>=</code>.</li>
  <li>Инструкция объявления переменной заканчивается точкой с запятой <code>;</code>.</li>
  <li>Для лучшей читабельности каждое новое объявление переменной рекомендуется начинать с новой строки.</li>
</ul>

<p>После объявления переменной к ней можно обратиться с помощью её имени далее в коде. Это необходимо для выполнения операций со значением переменной. Например, для вывода её значения в консоль инструментов разработчика.</p>

<pre><code class="language-javascript">const age = 20;
console.log(age); // 20

const username = "Mango";
console.log(username); // "Mango"</code></pre>

[QUIZ: js-variables-quiz]

[NEXT]

<h3>Переопределение значения</h3>

<p>Для переопределения значения ранее объявленной переменной нужно после имени такой переменной поставить оператор присваивания <code>=</code> и после него записать новое значение. Например:</p>

<pre><code class="language-javascript">let username = "Mango";
username = "Poly";</code></pre>

<p>Для объявления <strong>переменной, которой впоследствии можно задать новое значение</strong>, используется ключевое слово <code>let</code>.</p>

<pre><code class="language-javascript">let username = "Mango";
console.log(username); // "Mango"

username = "Poly";
console.log(username); // "Poly"</code></pre>

<p>Если переменная объявлена как <code>const</code>, <strong>переопределить её значение невозможно</strong>. При попытке задать ей новое значение будет ошибка, которую можно увидеть в инструментах разработчика.</p>

<pre><code class="language-javascript">const username = "Mango";
console.log(username); // "Mango"

// ❌ Неправильно, будет ошибка
username = "Poly"; // TypeError: Assignment to constant variable.</code></pre>

<p>Создание переменной без ключевого слова <code>let</code> или <code>const</code> в режиме "strict mode" приведет к ошибке.</p>

<p>Переменным, объявленным через <code>let</code>, необязательно сразу задавать значения. В случае объявления переменной без значения, переменная инициализируется специальным значением <code>undefined</code> (англ. не определено).</p>

<pre><code class="language-javascript">let username;
console.log(username); // undefined

username = "Mango";
console.log(username); // "Mango"</code></pre>

[NEXT]

<h3>Как выбрать между const и let</h3>

<p>Основное отличие между <code>const</code> и <code>let</code> заключается в возможности переопределения значения переменной после её объявления.</p>
<p>Ключевое слово <code>const</code> запрещает переопределение значения переменной.</p>
<p>Ключевое слово <code>let</code> позволяет изменять значение переменной после её объявления.</p>
<p>Большинство переменных не требуют переопределения значения. Следовательно, рекомендуется использовать <code>const</code> по умолчанию для объявления большинства переменных. Это способствует созданию кода, который легко понять и поддерживать, так как значения переменных не меняются.</p>

<pre><code class="language-javascript">// Если не нужно изменять значение
const username = "Mango";
console.log(username);</code></pre>

<p>Если тебе необходимо обновлять счетчик или сохранять временные значения — то есть нужно изменять значение переменной во время выполнения скрипта, <code>let</code> будет лучшим выбором.</p>

<pre><code class="language-javascript">// Если нужно изменять значение
let username = "Mango";
console.log(username);

username = "Poly";
console.log(username);</code></pre>

<div class="info-highlight">
  <p><strong>!</strong></p>
  <p>Правило использования const и let может быть таким: — Используй <code>const</code> по умолчанию для объявления переменных. — Используй <code>let</code>, если нужно изменять значение переменной во время выполнения скрипта. Это правило поможет писать более надежный, понятный код, который легко поддерживать.</p>
</div>

[QUIZ: js-const-let-quiz]

[NEXT]

<h3>Именование</h3>

<p>Существует несколько правил, как выбрать имя для переменной. Эти правила следует учитывать, чтобы имена были понятными и соответствовали общепринятым стандартам.</p>

<ol>
  <li>Имена переменных могут состоять из букв (a-z, A-Z), цифр (0-9), символов подчеркивания (_) и знака доллара ($).</li>
  <li>Первым символом в имени переменной должна быть буква латиницы, символ подчеркивания или знак доллара. Другие символы могут быть любыми из допустимых.</li>
  <li>Имена переменных чувствительны к регистру, то есть переменные <code>user</code>, <code>usEr</code> и <code>User</code> считаются разными переменными.</li>
</ol>

<p>Хорошее имя переменной должно быть понятным и описывать назначение или содержимое переменной.</p>

<pre><code class="language-javascript">// ❌ Плохо
chislo
korzina_tovariv
profil_koristuvacha

// ✅ Хорошо
number
cart
userProfile</code></pre>

<p>Хорошей практикой является использование <strong>camelCase нотации</strong> для именования переменных. При camelCase нотации первое слово пишется маленькими буквами, а каждое следующее начинается с большой буквы, например: <code>user</code>, <code>getUserData</code>, <code>isActive</code>, <code>activeGuestCount</code>. Не забывай про чувствительность имен переменных к регистру. Переменные <code>isActive</code> и <code>IsActive</code> — это разные переменные.</p>

<p>Стоит помнить, что существуют зарезервированные <strong>ключевые слова</strong>. Эти слова имеют специальное значение и используются для определенных конструкций в языке. Нельзя использовать ключевые слова как имена переменных, так как это приведет к ошибке в коде.</p>

<div class="image-container">
  <img src="/images/javascript/reserved-words.png" alt="Зарезервированные слова JavaScript" class="img-responsive img-rounded" />
</div>

[NEXT]

<h3>Инициализация переменных</h3>

<p>Объявление переменной начинается с ключевого слова <code>const</code>. Такая переменная должна быть сразу инициализирована значением, после чего её нельзя переопределить.</p>

<pre><code class="language-javascript">// Переменные, объявленные как const, обязательно должны быть
// инициализированы значением во время объявления, иначе возникнет ошибка.
const yearOfBirth = 2006;
console.log(yearOfBirth); // 2006

// Если переменная объявлена как const, перезаписать её значение нельзя.
// При попытке присвоить новое значение возникнет ошибка выполнения скрипта.
yearOfBirth = 2020; // ❌ Неправильно, возникнет ошибка</code></pre>

<p>Для того чтобы объявить переменную, которой в дальнейшем можно будет присвоить новое значение, используется ключевое слово <code>let</code>.</p>

<pre><code class="language-javascript">// Переменным, объявленным через let, не обязательно сразу
// присваивать значение.
let age;

// Если переменной, объявленной как let, не было присвоено значение,
// она инициализируется специальным значением undefined (не определено).
console.log(age); // undefined

// console.log() - это метод для вывода данных в консоль браузера,
// подробнее познакомимся с ним позже.

// Если переменная объявлена как let, её значение можно перезаписать.
age = 14;
console.log(age); // 14</code></pre>

<div class="info-highlight">
  <p><strong>ИНТЕРЕСНО</strong></p>
  <p>Объявление переменной без ключевого слова <code>let</code> или <code>const</code> приведет к ошибке, если скрипт выполняется в строгом режиме.</p>
</div>

[NEXT]

<h3>Константы и КОНСТАНТЫ</h3>

<p><strong>Имена КОНСТАНТ</strong> — переменных, значение которых никогда не меняется на протяжении работы всего скрипта, как правило, записываются в формате <code>UPPER_SNAKE_CASE</code>.</p>

<pre><code class="language-javascript">// Константа, хранящая значение цвета
const COLOR_TEAL = "#009688";

// Константа, хранящая сообщение о результате логина
const LOGIN_SUCCESS_MESSAGE = "Добро пожаловать!";</code></pre>

<p>Абсолютное большинство переменных — константы в другом смысле: они просто не меняют значения после присвоения. Но при разных запусках скрипта это значение может быть разным. Имена таких переменных записывают с помощью формата <code>camelCase</code>.</p>

<h3>Обращение к переменной</h3>

<p>Важно различать неопределенные и необъявленные переменные.</p>
<p><strong>Неопределенная (undefined)</strong> — это переменная, которая была объявлена ключевым словом <code>let</code>, но не инициализирована значением. По умолчанию ей присваивается начальное значение <code>undefined</code>.</p>

<pre><code class="language-javascript">let username;
console.log(username); // undefined</code></pre>

<p><strong>Необъявленная (undeclared или not defined)</strong> — это переменная, которая не была объявлена в доступной области видимости. Попытка обратиться к переменной до её объявления приведет к ошибке. Например, чтобы прочитать или изменить её значение.</p>

<pre><code class="language-javascript">// ❌ Неправильно, будет ошибка
age = 15; // ReferenceError: Cannot access 'age' before initialization
console.log(age); // ReferenceError: age is not defined

// Объявление переменной age
let age = 20;

// ✅ Правильно, обращаемся после объявления
age = 25;
console.log(age); // 25</code></pre>

[NEXT]

<h3>Типы данных</h3>

<p>Примитивные типы данных используются для хранения и обработки различных видов информации в программе. Они играют важную роль в выполнении арифметических операций, сравнений и логических проверок. Переменная в JavaScript не ограничена определенным типом данных, поэтому может хранить значения разных типов.</p>

<h4><span style="color: var(--color-accent);">Number</span></h4>

<p>Числа (<span style="color: var(--color-accent);">Number</span>) могут быть положительными или отрицательными, целыми или дробными. Целая и дробная части числа разделяются точкой.</p>

<pre><code class="language-javascript">const age = 20;
const salary = 3710.84;</code></pre>

<div class="info-highlight">
  <p>Обрати внимание, что если разделишь их запятой, то будет ошибка.</p>
</div>

<h4><span style="color: var(--color-accent);">String</span></h4>

<p>Строка (<span style="color: var(--color-accent);">String</span>) — это последовательность символов, заключенных в одинарные <code>' '</code> или двойные кавычки <code>" "</code>.</p>

<pre><code class="language-javascript">const username = 'Mango995';
const description = "JavaScript is awesome!";</code></pre>

<h4><span style="color: var(--color-accent);">Boolean</span></h4>

<p>Логический тип данных (<span style="color: var(--color-accent);">Boolean</span>) имеет только два значения: <code>true</code> и <code>false</code>.</p>
<p>В отличие от строк, логический тип данных пишется без кавычек. Сравни:</p>
<ul class="list-disc">
  <li><code>true</code> — это логическое значение;</li>
  <li><code>"true"</code> — это строка, содержащая слово true.</li>
</ul>

<p>Он используется для выполнения логических операций и проверок условий. Например, на вопрос "включен ли свет в комнате?" можно ответить "да" (true) или "нет" (false).</p>

<pre><code class="language-javascript">const isModalOpen = true;
const isLoggedIn = false;</code></pre>

<p>Обрати внимание, что имена переменных, содержащих логические значения, обычно звучат как вопрос, на который можно ответить "да" или "нет".</p>

[NEXT]

<h3>Специальные значения</h3>

<p>В JavaScript существуют два специальных значения: <code style="color: var(--color-accent);">null</code> и <code style="color: var(--color-accent);">undefined</code>. Оба означают отсутствие значения.</p>

<p><code style="color: var(--color-accent);">null</code> явно указывает на отсутствие значения и часто используется разработчиками для обозначения пустого значения. Это значение должно быть явно присвоено переменной, чтобы указать, что переменная не содержит никаких действительных данных.</p>

<pre><code class="language-javascript">let value = null;
console.log(value); // null</code></pre>

<p>Значение <code style="color: var(--color-accent);">undefined</code> автоматически присваивается переменной, если:</p>
<ul class="list-disc">
  <li>переменной было явно задано значение <code style="color: var(--color-accent);">undefined</code>;</li>
  <li>переменная была объявлена, но еще не была инициализирована значением.</li>
</ul>

<p>Значение <code style="color: var(--color-accent);">undefined</code> указывает на неопределенность значения переменной, то есть говорит нам, что значение на данный момент неизвестно или не определено.</p>

<pre><code class="language-javascript">let value;
console.log(value); // undefined</code></pre>

<div class="info-highlight">
  <p>Хотя оба значения <code style="color: var(--color-accent);">null</code> и <code style="color: var(--color-accent);">undefined</code> обозначают отсутствие значения, они имеют несколько разную семантику использования.</p>
  <p>— <code style="color: var(--color-accent);">null</code> используется для явного указания пустого значения (точно известно, что значения нет).</p>
  <p>— <code style="color: var(--color-accent);">undefined</code> указывает на неопределенность значения переменной.</p>
</div>

<h3>Прочитай пример кода</h3>

<pre><code class="language-javascript">let username;
console.log(username);</code></pre>

[QUIZ: js-null-undefined-quiz]

[NEXT]

<h3>Оператор <span style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">typeof</span></h3>

<p>Оператор <code style="color: var(--color-accent);">typeof</code> используется для определения типа данных значения или выражения.</p>

<pre><code style="background-color: rgba(255, 255, 255, 0.1); padding: 5px; border-radius: 4px;"> <span style="color: #c678dd;">typeof</span> operand</code></pre>

<p>Вместо <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">operand</code> ты указываешь переменную, литерал или выражение, тип которого хочешь определить. Результатом оператора <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">typeof</code> будет строка, указывающая тип данных.</p>

<pre><code class="language-javascript">const quantity = 17;
console.log(typeof quantity); // выведет "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // выведет "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // выведет "boolean"

let username;
console.log(typeof username); // выведет "undefined"

let status = null;
console.log(typeof status); // выведет "object"</code></pre>

<p>Обрати внимание на проверку типа значения <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">null</code>. Важно понимать, что <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">null</code> на самом деле является примитивным значением, а не объектом.</p>

<p>Когда мы используем оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">typeof</code> для проверки типа значения <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">null</code>, он возвращает строку <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">object</code>. Это может показаться странным, поскольку <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">null</code> — это фактически отсутствие значения, а не объект. Про это часто спрашивают на собеседованиях.</p>

<p>Причина этого заключается в том, что в ранних версиях JavaScript <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">null</code> рассматривался как специальный случай объекта. Это была ошибка в реализации языка, сохраненная для обеспечения обратной совместимости с существующим кодом. Поэтому, когда <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">typeof</code> применяется к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">null</code>, он возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">object</code>, чтобы сохранить эту совместимость.</p>

[QUIZ: js-typeof-quiz]

[NEXT]








`,
        },
        {
          id: "js-arithmetic-operators",
          title: "Арифметические операции",
          order: 5,
          content: `

<p>В JavaScript доступны различные математические операторы, которые позволяют выполнять арифметические вычисления.</p>

<div class="image-container">
  <img src="/images/javascript/operators.png" alt="Операнды и оператор" class="img-responsive" />
</div>

<p>Работая с этими операторами, необходимо учитывать правила порядка выполнения операций. Эти правила аналогичны тем, которые мы изучали в школьной алгебре: сначала действия в скобках, потом степени и корни, потом умножение и деление и т.д.</p>

<p>Результатом операции является значение, которое можно использовать дальше в выражениях или сохранить в переменных.</p>

<p>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">+</code> используется для сложения двух чисел.</p>

<pre><code class="language-javascript">const x = 8;
const y = 5;
console.log(x + y); // 13</code></pre>

<p>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">-</code> используется для вычитания одного числа из другого.</p>

<pre><code class="language-javascript">const x = 8;
const y = 5;
console.log(x - y); // 3</code></pre>

<p>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">*</code> используется для умножения двух чисел.</p>

<pre><code class="language-javascript">const x = 8;
const y = 5;
console.log(x * y); // 40</code></pre>

<p>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">/</code> используется для деления одного числа на другое.</p>

<pre><code class="language-javascript">const x = 8;
const y = 5;
console.log(x / y); // 1.6</code></pre>

<p>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">%</code> возвращает остаток от деления одного числа на другое.</p>

<pre><code class="language-javascript">const x = 8;
const y = 5;
console.log(x % y); // 3</code></pre>

<p>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">**</code> используется для возведения числа в степень.</p>

<pre><code class="language-javascript">const x = 8;
const y = 5;
console.log(x ** y); // 32768</code></pre>

[NEXT]

<h3>Комбинированные операторы</h3>

<p>Для всех арифметических операторов существуют эквивалентные комбинированные операторы. Они позволяют выполнять арифметические операции более компактно и одновременно обновлять значение переменной, исходя из её предыдущего значения.
Вот список арифметических операторов и их комбинированных эквивалентов:</p>

<ul class="list-disc">
  <li><strong>Сложение</strong>: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">+=</code>. Пример: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">x += y</code> эквивалентно <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">x = x + y</code></li>
  <li><strong>Вычитание</strong>: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">-=</code>. Пример: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">x -= y</code> эквивалентно <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">x = x - y</code></li>
  <li><strong>Умножение</strong>: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">*=</code>. Пример: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">x *= y</code> эквивалентно <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">x = x * y</code></li>
  <li><strong>Деление</strong>: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">/=</code>. Пример: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">x /= y</code> эквивалентно <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">x = x / y</code></li>
  <li><strong>Остаток от деления</strong>: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">%=</code>. Пример: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">x %= y</code> эквивалентно <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">x = x % y</code></li>
</ul>

<p>Давайте рассмотрим пример обновления возраста пользователя после дня рождения, увеличивая значение переменной <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">age</code> на единицу.</p>

<pre><code class="language-javascript">let age = 25;
age = age + 1;
console.log(age); // 26</code></pre>

<p>Сначала выполняется сложение в правой части выражения присваивания. Складывается текущее значение переменной <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">age</code>, которое равно <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">25</code>, и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">1</code>. Результат: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">26</code>. Затем этот результат присваивается как новое значение переменной <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">age</code>.</p>

<p>Однако, мы можем улучшить этот код, используя комбинированный оператор присваивания со сложением (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">+=</code>).</p>

<pre><code class="language-javascript">let age = 25;
age += 1;
console.log(age); // 26</code></pre>

[NEXT]

<h3>Операторы сравнения</h3>

<p>Операторы сравнения используются для сравнения двух значений и возвращают логическое значение (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code> или <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>) в зависимости от результата сравнения.</p>

<p>Вот некоторые основные операторы сравнения:</p>

<ul class="list-disc">
  <li>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">&gt;</code> (больше) — возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, если <strong>левый</strong> операнд <strong>больше</strong> правого. В противном случае возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>.</li>
  <li>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">&lt;</code> (меньше) — возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, если <strong>левый</strong> операнд <strong>меньше</strong> правого. В противном случае возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>.</li>
  <li>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">&gt;=</code> (больше или равно) — возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, если <strong>левый</strong> операнд <strong>больше или равен</strong> правому. Иначе возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>.</li>
  <li>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">&lt;=</code> (меньше или равно) — возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, если <strong>левый</strong> операнд <strong>меньше или равен</strong> правому. Иначе возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>.</li>
</ul>

<p>Давай рассмотрим примеры использования этих операторов:</p>

<pre><code class="language-javascript">const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false</code></pre>

<p>Основной принцип использования операторов сравнения заключается в том, чтобы сравнивать значения и получать логический результат. Логический результат (результат в виде <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code> или <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>) позволяет принимать определенные решения и контролировать поведение программы в соответствии с условиями.</p>

<p>Операторы сравнения часто используются в условных выражениях или циклах, о которых ты узнаешь позже, для проверки условий и выполнения определенных действий на основе результатов сравнения. Например, пользователи старше 18 лет получают доступ к определенной группе товаров.</p>

[NEXT]

<h3>Операторы равенства</h3>

<p>В JavaScript существуют операторы равенства, которые позволяют сравнивать значения и определять их равенство или неравенство.</p>

<h4>Операторы нестрогого равенства</h4>

<ul class="list-disc">
  <li>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">==</code> (равно) — сравнивает два значения на равенство и возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, если <strong>значения операндов равны</strong>. В противном случае возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>.</li>
  <li>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">!=</code> (не равно) — сравнивает два значения на неравенство и возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, если <strong>значения операндов не равны</strong>. В противном случае возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>.</li>
</ul>

<pre><code class="language-javascript">console.log(5 == 5); // true
console.log(5 == 3); // false
console.log(5 != 3); // true
console.log(5 != 5); // false</code></pre>

<h4>Но есть одна проблема</h4>

<p>Операторы нестрогого равенства могут приводить значения к разным типам в зависимости от контекста сравнения. Это может привести к неожиданным результатам, поэтому многие разработчики стараются избегать их использования.</p>

<pre><code class="language-javascript">// Плохо, так как выполняется неявное приведение строк и булевых значений к числу
console.log(5 == '5'); // true
console.log(5 != '5'); // false
console.log(1 == true); // true
console.log(1 != true); // false</code></pre>

<p>Рассмотрим эти примеры подробнее.</p>
<p>Выражение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">5 == '5'</code> вернет <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, хотя одно из значений — число, а другое — строка. Рядок <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">'5'</code> будет приведен к числу <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">5</code>, и сравнение будет выглядеть как <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">5 == 5</code>.</p>
<p>Аналогично, выражение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">1 == true</code> вернет <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, так как булево значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code> приводится к числу <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">1</code>.</p>

<p>На следующей иллюстрации показана таблица сравнения значений с использованием операторов нестрогого равенства.</p>

<div class="image-container">
  <img src="/images/javascript/equality-loose.png" alt="Таблица нестрогого равенства" class="img-responsive" />
</div>

<p>Неявное преобразование типов может приводить к ошибкам, особенно у начинающих разработчиков. Для избежания таких проблем рекомендуется использовать операторы строгого равенства, которые не выполняют преобразование типов операндов.</p>

<ul class="list-disc">
  <li>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">===</code> (строгое равенство) — сравнивает два значения на равенство, возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, только если <strong>значения операндов равны</strong> и имеют <strong>одинаковый тип данных</strong>. В противном случае возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>.</li>
  <li>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">!==</code> (строгое неравенство) — сравнивает два значения на неравенство, возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, если значения операндов <strong>не равны</strong> или имеют <strong>разные типы данных</strong>. В противном случае возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>.</li>
</ul>

<pre><code class="language-javascript">// Хорошо, приведение типов не выполняется
console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(5 !== '5'); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true</code></pre>

<p>В отличие от нестрогих операторов, выражения <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">5 === '5'</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">1 === true</code> вернут <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, так как операнды имеют разные типы.</p>

<p>На следующей иллюстрации показана таблица сравнения значений с использованием операторов строгого равенства. Все операнды равны лишь сами себе. Перед сравнением ничего не преобразуется в другой тип.</p>

<div class="image-container">
  <img src="/images/javascript/equality-strict.png" alt="Таблица строгого равенства" class="img-responsive" />
</div>

[QUIZ: js-strict-equality-quiz]

[QUIZ: js-loose-equality-quiz]

[NEXT]
`,
        },
        {
          id: "js-numbers",
          title: "Числа",
          order: 7,
          content: `

<p>Все числа в JavaScript, как целые, так и дробные, имеют тип <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Number</code> и их можно записывать не только в десятичной системе счисления.</p>

<h4>Приведение к числу</h4>

<p>Большинство арифметических операций и математических функций преобразуют значение в число автоматически. Для того чтобы сделать это явно, используйте функцию <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Number(val)</code>, передавая ей то, что нужно привести к числу. Если значение привести невозможно, результатом будет специальное числовое значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">NaN</code> (Not a Number). Аналогичным образом происходит преобразование и в других математических операторах и функциях.</p>

<pre><code class="language-javascript">const valueA = "5";
console.log(Number(valueA)); // 5
console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // "number"</code></pre>

<p>Методы <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Number.parseInt()</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Number.parseFloat()</code> преобразуют строку символ за символом, пока это возможно. В случае возникновения ошибки возвращается полученное число.</p>
<p>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Number.parseInt()</code> парсит из строки целое число.</p>

<pre><code class="language-javascript">console.log(Number.parseInt("5px")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("qweqwe")); // NaN</code></pre>

<p>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Number.parseFloat()</code> парсит из строки дробное число.</p>

<pre><code class="language-javascript">console.log(Number.parseFloat("5px")); // 5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("qweqwe")); // NaN</code></pre>

[NEXT]

<h3>Арифметические функции</h3>

<p>Класс <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math</code> является встроенным классом JavaScript. Этот класс предоставляет набор методов для выполнения математических операций и работы с числами. Вот несколько наиболее полезных методов, которые предоставляет класс <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math</code>:</p>

<p><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math.floor(num)</code>: возвращает ближайшее целое число, которое <strong>меньше или равно</strong> указанному числу <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">num</code>. Например:</p>

<pre><code class="language-javascript">console.log(Math.floor(1.3)); // 1
console.log(Math.floor(1.7)); // 1</code></pre>

<p><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math.ceil(num)</code>: возвращает ближайшее целое число, которое <strong>больше или равно</strong> указанному числу <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">num</code>. Например:</p>

<pre><code class="language-javascript">console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2</code></pre>

<p><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math.round(num)</code>: возвращает <strong>значение числа после округления</strong> до ближайшего целого. Округление происходит по математическим правилам, если дробная часть числа меньше 0.5, то округление будет в меньшую сторону, если 0.5 и больше — то в большую.
Например:</p>

<pre><code class="language-javascript">console.log(Math.round(1.3)); // 1
console.log(Math.round(1.7)); // 2</code></pre>

<p><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math.max(num1, num2, ...)</code>: возвращает <strong>наибольшее</strong> число из набора переданных чисел. Например:</p>

<pre><code class="language-javascript">console.log(Math.max(20, 10, 50, 40)); // 50</code></pre>

<p><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math.min(num1, num2, ...)</code>: возвращает <strong>наименьшее</strong> число из набора переданных чисел. Например:</p>

<pre><code class="language-javascript">console.log(Math.min(20, 10, 50, 40)); // 10</code></pre>

<p><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math.random()</code>: возвращает <strong>случайное</strong> число в диапазоне от 0 (включительно) до 1 (за исключением). Например:</p>

<pre><code class="language-javascript">console.log(Math.random()); // случайное число между 0 и 1,
// например 0.2 ... 0.9166353649342294</code></pre>

<p>Это лишь некоторые методы класса <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math</code>. Он также предоставляет методы для тригонометрических функций, логарифмов и других математических операций. Вы можете обратиться к документации JavaScript для получения полного списка методов <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math</code> и более детального описания каждого из них.</p>

[NEXT]

<h3>Дробные числа</h3>

<p>При выполнении операций с дробными числами могут возникать неточности из-за внутреннего представления чисел в памяти компьютера.</p>

<p>Например, результат <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0.1 + 0.2</code> не равен <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0.3</code>. Число <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0.1</code> в двоичной системе счисления, которую использует компьютер — это бесконечная дробь. Двоичное значение бесконечных дробей хранится лишь до определенного знака, поэтому возникает неточность. При сложении <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0.1</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0.2</code> две неточности складываются, выходит незначительная, но все же ошибка в вычислениях.</p>

<pre><code class="language-javascript">console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004</code></pre>

<p>Как исправить эту проблему?<br>
В зависимости от необходимой точности, можно использовать разные подходы.</p>

<h4>Подход 1</h4>

<ul class="list-disc">
  <li>Умножить числа на достаточно большое число (например, 10 или 100).</li>
  <li>Выполнить сложение.</li>
  <li>Разделить результат на то же самое число, чтобы вернуть его к начальному масштабу.</li>
</ul>

<pre><code class="language-javascript">console.log(0.1 * 10 + 0.2 * 10); // 3
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3</code></pre>

<h4>Подход 2</h4>

<p>Использовать метод числа <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">toFixed()</code> для округления результата до определенного количества знаков после точки.</p>

<pre><code class="language-javascript">console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2)); // "5.00"
console.log((8.762195).toFixed(4)); // "8.7622"</code></pre>

<p>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">toFixed()</code> возвращает строку, представляющую число с указанным количеством знаков после точки. Таким образом, мы можем получить округленный результат с необходимой точностью.</p>

[NEXT]
`,
        },
        {
          id: "js-strings",
          title: "Строки",
          order: 8,
          content: `

<p><strong>Строка</strong> — это индексированный набор из нуля или более символов, заключенных в одинарные или двойные кавычки.</p>

<pre><code class="language-javascript">const username = "Mango";</code></pre>

<h3>Конкатенация строк</h3>

<p>Если применить оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">+</code> к строке и любому другому типу данных, результатом будет новая строка, содержащая объединение исходных значений. Это называется конкатенация (склеивание).</p>

<pre><code class="language-javascript">const message = "Mango " + "is" + " happy";
console.log(message); // "Mango is happy"</code></pre>

<div class="info-note">
  <p><strong>Обрати внимание!</strong></p>
  <p>Строки "Mango " и " happy" содержат пробелы, чтобы текст сообщения был читабельным.</p>
</div>

<p>Во время конкатенации можно использовать значения переменных, чтобы составлять строки с динамическими значениями. Для этого необходимо указать имя переменной, и на это место будет подставлено её значение.</p>

<pre><code class="language-javascript">const age = 24;
const message = "Poly is " + age + " years old!";</code></pre>

<p>Во время конкатенации любой тип данных будет приведен к строке и объединен с другой строкой.</p>

<pre><code class="language-javascript">console.log("Mango" + 55); // "Mango55"
console.log("Mango" + true); // "Mangotrue"</code></pre>

<p>Однако порядок операндов имеет значение. Преобразование типов происходит только в момент операции сложения со строкой. До этого момента применяются обычные правила математики.</p>

<pre><code class="language-javascript">console.log(1 + "2"); // "12"
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"</code></pre>

<p>В последнем примере сначала выполняется математическое сложение первых двух чисел <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">1</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">2</code>, затем число <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">3</code> превращается в строку <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"3"</code> и объединяется со строкой <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"4"</code>.</p>

[NEXT]

<h3>Преобразование типов: строки</h3>

<p>Преобразование типов в JavaScript — это процесс изменения значения одного типа данных на другой тип данных. Преобразование типов может происходить в различных ситуациях, например, при выполнении арифметических операций с разными типами данных или сравнении значений. В JavaScript существуют два типа преобразования: явное и неявное.</p>

<h4>Явное преобразование типов</h4>

<p>Явное преобразование типов выполняется программистом и используется по необходимости. Для преобразования любого значения в строку можно использовать встроенную функцию <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">String()</code>, которая возвращает результат в виде строки.</p>

<pre><code class="language-javascript">console.log(String(5)); // "5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"</code></pre>

<h4>Неявное преобразование типов</h4>

<p>Неявное преобразование типов происходит автоматически во время выполнения операций или вычислений. Например, если выполняется операция сложения (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">+</code>) между строкой и иным типом данных, JavaScript автоматически преобразует значение операнда в строку и выполняет конкатенацию строк.
Вот примеры неявного преобразования всех примитивных типов при конкатенации строк:</p>

<pre><code class="language-javascript">console.log("5" + 3); // "53"
console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"</code></pre>

<p>Неявное преобразование — это удобный встроенный механизм JavaScript, но иногда может вызвать неожиданные результаты или ошибки. Поэтому важно быть внимательным при выполнении операций с разными типами данных и учиться контролировать и видеть преобразование типов в коде своих программ.</p>

[QUIZ: js-string-conversion-quiz]

[NEXT]

<h3>Шаблонные строки</h3>

<p>Шаблонные строки — это синтаксис, который облегчает объединение <strong>статичного</strong> текста с <strong>динамическим</strong> (то есть текстом, содержащим переменные, вычисления и т.д.). Шаблонные строки позволяют избежать использования запутанной конкатенации и делают код более читабельным.</p>

<h4>Синтаксис шаблонной строки</h4>

<p>Шаблонные строки оборачиваются обратными кавычками (англ. backticks) (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">\` \`</code>).</p>

<div class="info-note">
  <p><strong>Внимание!</strong></p>
  <p>Код не будет работать, если обернуть шаблонные строки обычными одинарными или двойными кавычками.</p>
</div>

<p>Для того чтобы добавить обратные кавычки <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">\` \`</code>, перейди в английскую раскладку и нажми:</p>
<ul class="list-disc">
  <li>клавишу <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">~</code> (см. 1-3 ниже)</li>
  <li>или сочетание клавиш (см. 4 ниже)</li>
</ul>

<p><img src="/images/javascript/backticks-keyboard.png" alt="Клавиша обратной кавычки на клавиатуре" /></p>

<p>Шаблонные строки позволяют подставлять значения переменных непосредственно внутри строки с помощью синтаксиса интерполяции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">\${variable}</code>.</p>

<pre><code class="language-javascript">const guestName = "Mango";
const roomNumber = 207;
const greeting = \`Welcome \${guestName}, your room number is \${roomNumber}!\`;
console.log(greeting); // "Welcome Mango, your room number is 207!"</code></pre>

<p>В примере выше мы использовали интерполяцию (конструкцию <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">\${}</code>) для того, чтобы подставить значения переменных <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">guestName</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">roomNumber</code> прямо в текст строки. Во время формирования этой строки значения переменных автоматически подставляются в местах, где есть соответствующая интерполяция.</p>

<h4>Сравнение конкатенации и шаблонных строк</h4>

<p>Код с конкатенацией, где:</p>
<ul class="list-disc">
  <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"Welcome "</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">", your room number is "</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"!"</code> — это статичный текст</li>
  <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">guestName</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">roomNumber</code> — имена переменных.</li>
</ul>

<pre><code class="language-javascript">const guestName = "Mango";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " +
  roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!"</code></pre>

<p>Код, где значения этих переменных подставляются в шаблонную строку.</p>

<pre><code class="language-javascript">const guestName = "Mango";
const roomNumber = 207;
const greeting = \`Welcome \${guestName}, your room number is \${roomNumber}!\`;
console.log(greeting); // "Welcome Mango, your room number is 207!"</code></pre>

<p>Код шаблонных строк более читабелен.</p>

[NEXT]

<h3>Длина строки</h3>

<p><strong>Свойства</strong> — это описательные характеристики сущности.</p>

<p>Для описания человека часто используются такие свойства, как рост, вес или цвет глаз.</p>
<p>Для описания данных также используются свойства. Давай разбираться, какие именно и как их описывать.</p>

<p>Для доступа к свойству (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">property</code>) сущности (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">objectName</code>) используется синтаксис с точкой:</p>

<pre><code class="language-javascript">сущность.свойство</code></pre>

<p>В программировании, например, у строки есть свойство <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">length</code>, которое возвращает длину строки.</p>

<p>Длина строки определяется количеством символов в ней. Чтобы узнать длину строки, используется встроенное свойство <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">length</code>. Чтобы получить значение этого свойства, необходимо обратиться к нему через точку после имени переменной или строкового литерала.</p>

<p>Например, чтобы получить длину строки, мы можем использовать свойство <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">length</code> таким образом:</p>

<pre><code class="language-javascript">const productName = "Repair droid";

// Если в переменной хранится строка
console.log(productName.length); // 12

// Если строковый литерал
console.log("Repair droid".length); // 12</code></pre>

<p>Использование свойства <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">length</code> позволяет легко определить длину любой строки и использовать эту информацию для выполнения различных операций и проверок.</p>

[NEXT]

<h3>Индексация строк</h3>

<p>Строки — это наборы символов, где каждый символ имеет свой порядковый номер (индекс). Индексация элементов строки начинается с нуля. Первый символ имеет индекс 0, второй — индекс 1, третий — 2 и так далее.</p>

<p><img src="/images/javascript/string-indexing.png" alt="Индексация строки" /></p>

<p>Например, в строке <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"JavaScript"</code> буква <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">J</code> стоит на позиции с индексом <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0</code>. Буква <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">t</code> идет под индексом <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">9</code>.</p>

<p>Общая длина строки <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"JavaScript"</code> равна <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">10</code>, то есть индекс последнего элемента строки всегда на единицу меньше её длины.</p>

<p>Для доступа к определенному символу строки мы используем синтаксис квадратных скобок, где указываем индекс нужного символа: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">string[index]</code>, то есть <strong>строка[индекс]</strong>.</p>

<pre><code class="language-javascript">const product = "Repair droid";
console.log(product[0]); // 'R'
console.log(product[5]); // 'r'
console.log(product[11]); // 'd'</code></pre>

<p>Получение последнего символа строки возможно за его индексом <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">string[lastIndex]</code>. Чтобы найти индекс последнего символа строки, нужно от длины этой строки отнять единицу <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">string.length - 1</code>.</p>

<pre><code class="language-javascript">const product = "Repair droid";
const lastElementIndex = product.length - 1;
console.log(product[lastElementIndex]); // 'd'</code></pre>

<p>Для доступа к последнему символу строки без создания промежуточной переменной мы можем вставить выражение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">product.length - 1</code> непосредственно в квадратные скобки при обращении к элементу.</p>

<pre><code class="language-javascript">const product = "Repair droid";
console.log(product[product.length - 1]); // 'd'</code></pre>

[QUIZ: js-string-index-quiz]

[NEXT]

<h3>Неизменяемость строк</h3>

<p>Когда строка создается, она сохраняет свое значение и становится неизменяемой. Это означает, что нельзя заменить отдельные символы внутри строки. Представь, что у нас есть строка "Droid". Мы не можем изменить отдельный символ в этой строке, например, заменить 'o' на 'O'. Попытка присвоения нового значения элементу строки не приведет к изменению исходной строки.</p>

<pre><code class="language-javascript">let product = "Droid";
console.log(product); // "Droid"

// Это не имеет никакого эффекта
product[2] = "O";
console.log(product); // "Droid"</code></pre>

<p>Вместо этого мы должны создать новую строку и присвоить ее переменной вместо старой строки. Рассмотрим пример, где изменено написание o —> O в строке "Droid".</p>

<pre><code class="language-javascript">let product = "Droid";
console.log(product); // "Droid"

product = "DrOid";
console.log(product); // "DrOid"</code></pre>

<p>Это свойство неизменяемости строк в JavaScript имеет важное значение для обеспечения надежности и предотвращения случайных изменений внутри строк.</p>

<h4>Прочитай фрагмент кода</h4>

<pre><code class="language-javascript">let username = "Poly";
username[3] = "a";</code></pre>

[QUIZ: js-string-immutability-quiz]

[NEXT]
`,
        },
        {
          id: "js-logical-operators",
          title: "Логические операторы",
          order: 9,
          content: `
<h3>Преобразование типов: логическое</h3>

<p>Логическое преобразование типов означает приведение значения любого типа данных в логическое (булево) значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code> или <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>. Существует несколько правил, определяющих, какие значения преобразуются в <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, а какие в <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>.</p>

<p>Эти правила работают:</p>
<ul class="list-disc">
  <li>как для <strong>явного</strong> преобразования типов с помощью функции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Boolean()</code>,</li>
  <li>так и для <strong>неявного</strong> в условных операциях, например, в конструкциях <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code> или логических операторах.</li>
</ul>

<h4>Логические значения</h4>

<p>Логические значения <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code> остаются неизменными.</p>

<pre><code class="language-javascript">console.log(Boolean(true)); // true
console.log(Boolean(false)); // false</code></pre>

<h4>Числа</h4>

<p>Число <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0</code>, значения <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">NaN</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">null</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">undefined</code> всегда преобразуются в <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>. Все остальные числа преобразуются в <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>.</p>

<pre><code class="language-javascript">console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true</code></pre>

<p>Рассмотрим эти примеры. Какой блок кода будет выполняться?</p>

<pre><code class="language-javascript">if (null) {
  console.log("Block if")
} else {
  console.log("Block else")
}

if (0) {
  console.log("Block if")
} else {
  console.log("Block else")
}</code></pre>

<p>Значение в условии инструкций <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code> приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>. Следовательно, выполняется код из блока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">else</code>.</p>

<p>А в этом примере какой код выполнится?</p>

<pre><code class="language-javascript">if (5) {
  console.log("Block if")
} else {
  console.log("Block else")
}</code></pre>

<p>Значение в условии инструкции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code> приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>. Следовательно, выполняется код из блока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code>.</p>

<h4>Строки</h4>

<p>Пустая строка (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">""</code>) приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>. Любые другие не пустые строки приводятся к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>.</p>

<pre><code class="language-javascript">console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true</code></pre>

<p>Прочитай пример ниже. Код из какого блока будет выполнен?</p>

<pre><code class="language-javascript">if ("") {
  console.log("Block if")
} else {
  console.log("Block else")
}</code></pre>

<p>В примере в условии инструкции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code> указана пустая строка. Пустая строка приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>. Следовательно, выполняется код из блока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">else</code>.</p>

<p>А в этом примере? Какой именно блок кода будет выполнен?</p>

<pre><code class="language-javascript">if ("batman") {
  console.log("Block if")
} else {
  console.log("Block else")
}</code></pre>

<p>В условии инструкции — строка <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"batman"</code>. Следовательно, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code> приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>. Выполняется код из блока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code>.</p>

<div class="info-note">
  <p><strong>Запомни 6 случаев, которые приводятся к false:</strong></p>
  <ol class="list-decimal">
    <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0</code></li>
    <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">""</code></li>
    <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">NaN</code></li>
    <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">null</code></li>
    <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">undefined</code></li>
    <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code></li>
  </ol>
</div>

<h4>Прочитай пример кода</h4>

<pre><code class="language-javascript">Boolean("false")</code></pre>

[QUIZ: js-logical-boolean-quiz]

[NEXT]

<h3>Логическое «И»</h3>

<p>Логические операторы используются для проверки условий с несколькими выражениями, например, в инструкции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code>.</p>

<p>Оператор "И" (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">&&</code>) приводит все операнды к логическому типу (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code> или <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>) и возвращает значение одного из них. Позволяет проверить, выполнены ли <strong>все условия</strong> в выражении.</p>

<img src="/images/javascript/logical-and-venn.png" alt="Диаграмма Венна для оператора И" width="100%" class="rounded-lg mb-4" />

<p>Вычисление оператора происходит слева направо.</p>

<pre><code class="language-javascript">expression1 && expression2</code></pre>

<p>Оператор "И" слева направо проверяет по очереди оба операнда на истинность и возвращает либо значение <strong>последнего истинного</strong> (only truthy) операнда, либо <strong>первого ложного</strong> (первого falsy), на котором он запнулся.</p>

<p>Давай рассмотрим это на простом примере. Представь, если человек пьет кофе с сахаром "И" молоком, то его не устроит кофе без одного из этих компонентов. Все компоненты являются обязательными, иначе человек его пить не будет.</p>

<p>В следующих примерах оба операнда преобразуются в <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>. Вычисление происходит слева направо, поэтому результатом будет значение правого операнда.</p>

<pre><code class="language-javascript">console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"

console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3</code></pre>

<p>А вот в этом примере один из операндов будет приведен к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, следовательно, результатом будет ложный операнд.</p>

<pre><code class="language-javascript">console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ""); // 0
console.log("" && 0); // ""</code></pre>

<ul class="list-disc">
  <li>В примере <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"hello" && 0</code> левый операнд приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, а правый к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, поэтому результатом выражения будет значение правого операнда, который первым был приведен к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, то есть <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0</code>.</li>
  <li>В примере <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0 && "hello"</code> левый операнд приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, поэтому правый операнд не будет вычисляться. Результатом выражения будет значение левого операнда, который первым был приведен к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, то есть <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0</code>.</li>
</ul>

<p>На практике логические операции часто применяются для проверки диапазона условий.</p>

<p>Стоит отметить, что если операндами являются выражения, то сначала будут вычислены они, а потом их результаты будут сравниваться оператором <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">&&</code>.</p>

<pre><code class="language-javascript">const a = 20;
console.log(a > 10 && a < 30); // true && true -> true

const b = 50;
console.log(b > 10 && b < 30); // true && false -> false
console.log(b > 80 && b < 120); // false && true -> false</code></pre>

<p>В примере выше переменная <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">a</code> должна одновременно удовлетворять двум условиям: быть больше 10, и («&&») меньше 30. Проверку одновременного выполнения двух условий мы делаем с помощью оператора <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">&&</code>. Сначала вычисляем выражения в операндах.</p>

<img src="/images/javascript/logical-and-steps.png" alt="Пошаговое вычисление" width="100%" class="rounded-lg mb-4" />

<h4>Прочитай пример кода</h4>

<pre><code class="language-javascript">null && true</code></pre>

[QUIZ: js-logical-and-null-quiz]

<pre><code class="language-javascript">"false" && 0</code></pre>

[QUIZ: js-logical-and-string-number-quiz]

<pre><code class="language-javascript">"Mango" && "Poly"</code></pre>

[QUIZ: js-logical-and-strings-quiz]

[NEXT]


<h3>Логическое «ИЛИ»</h3>

<p>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">||</code> приводит все операнды к логическому типу и возвращает значение одного из них.</p>
<p>Левый операнд - если его можно привести к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, и правый - в остальных случаях.</p>

<pre><code class="language-javascript">expression1 || expression2</code></pre>

<p>В следующем примере условие слева вернет <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, поэтому результатом всего выражения будет <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code> - вернется значение первого операнда, которое было приведено к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>.</p>

<pre><code class="language-javascript">const age = 5;
console.log(age < 10 || age > 30); // true || false -> true</code></pre>

<p>В этом случае результатом тоже будет <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, так как хотя бы один из операндов, в данном случае правый, был приведен к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>.</p>

<pre><code class="language-javascript">const age = 40;
console.log(age < 10 || age > 30); // false || true -> true</code></pre>

<p>А тут ни одно из условий не выполняется, поэтому получаем <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code> - значение последнего операнда.</p>

<pre><code class="language-javascript">const age = 20;
console.log(age < 10 || age > 30); // false || false -> false</code></pre>

<p>То есть, логическое «ИЛИ» запинается на истине и возвращает то, на чем остановилось, или последний операнд.</p>

<pre><code class="language-javascript">console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true</code></pre>

<div class="info-highlight">
  <p><strong>ИНТЕРЕСНО</strong></p>
  <p>При выполнении логического «ИЛИ», правый операнд может не вычисляться, если левый был приведен к true.</p>
</div>

<h4>Прочитай пример кода</h4>

<pre><code class="language-javascript">null || true</code></pre>

[QUIZ: js-logical-or-null-quiz]

<pre><code class="language-javascript">"false" || 0</code></pre>

[QUIZ: js-logical-or-string-number-quiz]

<pre><code class="language-javascript">"Mango" || "Poly"</code></pre>

[QUIZ: js-logical-or-strings-quiz]

[NEXT]

<h3>Логическое «НЕ»</h3>

<p>Все операторы, которые мы рассматривали до этого, были бинарными - содержали два операнда: левый и правый. Логическое «НЕ» - это унарный оператор, который выполняет операцию над одним операндом с правой стороны.</p>

<h4>Выражение</h4>

<p>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">!</code> приводит операнд к булевому типу, если необходимо, а затем делает инверсию - меняет его на противоположный <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true -> false</code> или <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false -> true</code>.</p>

<pre><code class="language-javascript">console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false</code></pre>

<h4>Прочитай пример кода</h4>

<pre><code class="language-javascript">!0</code></pre>

[QUIZ: js-logical-not-zero-quiz]

<pre><code class="language-javascript">!"Poly"</code></pre>

[QUIZ: js-logical-not-string-quiz]

[NEXT]
`,
        },
        {
          id: "js-branching",
          title: "Разветвления",
          order: 10,
          content: `
       
        <p>Разветвления используются для выполнения различного кода в зависимости от условия. Принцип работы прост - результат условия приводится к булю <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code> или <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, после чего поток программы направляется в ту или иную ветку.</p>

        <h3>Инструкция if</h3>

        <img src="/images/javascript/if-flowchart.png" alt="Блок-схема if" width="60%" class="rounded-lg mb-4 mx-auto" />

        <pre><code class="language-javascript">if (condition) {
  // body of if
}</code></pre>

        <p>Входные данные, которые приводятся к булю, называются условием. Условие ставится после оператора <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code> в круглых скобках. Если условие приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, выполняется код в фигурных скобках тела <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code>.</p>

        <pre><code class="language-javascript">let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 100</code></pre>

        <p>Если условие приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, код в фигурных скобках будет пропущен.</p>

        <pre><code class="language-javascript">let cost = 0;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
}

console.log(cost); // 0</code></pre>

        [NEXT]

        <h3>Инструкция if...else</h3>

        <img src="/images/javascript/if-else-flowchart.png" alt="Блок-схема if...else" width="60%" class="rounded-lg mb-4 mx-auto" />

        <pre><code class="language-javascript">if (condition) {
  // body of if
} else {
  // body of else
}</code></pre>

        <p>Расширяет синтаксис <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code> таким образом, что если условие приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, выполнится код в фигурных скобках после оператора <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">else</code>.</p>

        <pre><code class="language-javascript">let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0</code></pre>

        <p>Если условие приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, тело блока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">else</code> игнорируется.</p>

        <pre><code class="language-javascript">let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100</code></pre>

[NEXT]

        <h3>Инструкция else...if</h3>

        <img src="/images/javascript/else-if-flowchart.png" alt="Блок-схема else...if" width="60%" class="rounded-lg mb-4 mx-auto" />

        <pre><code class="language-javascript">if (condition_1) {
  // statement
} else if (condition_2) {
  // statements
} else if (condition_3) {
  // statements
} else {
  // statements
}</code></pre>

        <p>Конструкция <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if...else</code> может проверить и среагировать на выполнение или невыполнение только одного условия.</p>
        <p>Блок <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">else...if</code> позволяет добавить после <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">else</code> еще один оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code> с условием. В конце цепочки может быть классический блок <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">else</code>, который выполняется только в том случае, если ни одно из условий не приведется к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>.</p>

        <pre><code class="language-javascript">let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log("Invalid subscription type");
}

console.log(cost); // 500</code></pre>

        <p>При первом <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code> проверки прекращаются и выполняется только один сценарий, соответствующий этому <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>. Поэтому такую запись стоит читать как: «ищу первое совпадение условия, игнорирую все остальное».</p>

[NEXT]
      `,
        },
        {
          id: "js-ternary",
          title: "Тернарный оператор",
          order: 11,
          content: `

        <p>Тернарный оператор используется как более краткая синтаксическая замена инструкции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if...else</code>, когда одной и той же переменной необходимо присвоить разные значения по условию.</p>

        <pre><code class="language-javascript">&lt;условие&gt; ? &lt;выражение_если_условие_истинно&gt; : &lt;выражение_если_условие_ложно&gt;</code></pre>

        <p><strong>Работает по следующей схеме:</strong></p>
        <ul class="list-disc">
          <li>Вычисляется условие.</li>
          <li>Если условие истинно, то вычисляется выражение после <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">?</code>.</li>
          <li>Если условие ложно, то есть приводится к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, вычисляется выражение после <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">:</code>.</li>
          <li>Значение вычисленного выражения возвращается как результат работы тернарного оператора.</li>
        </ul>

        <pre><code class="language-javascript">let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"</code></pre>

        <p>Выполним рефакторинг, заменив <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if...else</code> на тернарный оператор.</p>

        <pre><code class="language-javascript">const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"</code></pre>

        <p>Запишем операцию поиска большего числа.</p>

        <pre><code class="language-javascript">const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10</code></pre>

        <p>Код работает правильно, получаем большее число из двух, но это решение кажется слишком громоздким, учитывая, насколько проста проблема. Используем тернарный оператор.</p>

        <pre><code class="language-javascript">const num1 = 5;
const num2 = 10;
const biggerNumber = num1 > num2 ? num1 : num2;

console.log(biggerNumber); // 10</code></pre>

        <div class="info-highlight">
          <p><strong>ИНТЕРЕСНО</strong></p>
          <p>Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Его использование для описания сложных разветвлений - плохая практика (антипаттерн).</p>
        </div>

        [NEXT]
      `,
        },
        {
          id: "js-switch",
          title: "Инструкция switch",
          order: 12,
          content: `

        <p>В некоторых случаях неудобство чтения сложных разветвлений <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if...else</code> можно избежать, используя более «плоский» синтаксис инструкции разветвления <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">switch</code>.</p>
        <p>Область применения <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">switch</code> ограничена задачами с одним общим вопросом (что сравнивать) и рядом вариантов ответов (с чем сравнивать).</p>

        <img src="/images/javascript/switch-flowchart.png" alt="Блок-схема switch" width="60%" class="rounded-lg mb-4 mx-auto" />

        <p>Его синтаксис состоит из блока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">switch(значение)</code> - что нужно сравнить и набора отдельных случаев <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">case значение</code> - с чем нужно сравнить. Для сравнения используется оператор строгого равенства <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">===</code>. То есть, нельзя сравнить на больше или меньше, только на равенство.</p>

        <pre><code class="language-javascript">switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;

  default:
    инструкции;
}</code></pre>

        <p>Значение в блоке <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">switch(значение)</code> - строка или число, которое сравнивается на строгое равенство со всеми значениями в блоках <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">case значение</code> по очереди, сверху вниз.</p>
        <p>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">break</code> в конце каждого блока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">case</code> необходим, чтобы прервать дальнейшие проверки и сразу перейти к коду за <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">switch</code> в том случае, когда проверка равенства вернула <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>.</p>
        <p>Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">else</code> для инструкции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if...else</code>. Для этого, после всех блоков <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">case</code> добавляется блок <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">default</code>. Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">break</code> после блока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">default</code> не нужен, так как это уже последняя операция, которая будет выполнена в <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">switch</code>, и управление будет передано коду после него.</p>

        <pre><code class="language-javascript">let cost;
const subscription = "premium";

switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "pro":
    cost = 100;
    break;

  case "premium":
    cost = 500;
    break;

  default:
    console.log("Invalid subscription type");
}

console.log(cost); // 500</code></pre>

        <div class="info-highlight">
          <p><strong>ИНТЕРЕСНО</strong></p>
          <p>Если оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">break</code> отсутствует, то после того как выполнится какое-либо условие <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">case</code>, все следующие за ним блоки кода будут выполняться один за одним, что может привести к нежелательным последствиям в случае неправильного использования.</p>
        </div>

        [NEXT]
      `,
        },
        {
          id: "js-scope",
          title: "Область видимости",
          order: 13,
          content: `
        <p>Область видимости переменных (variable scope) - это доступность переменных в определенном месте кода.</p>

        <p><strong>Глобальная область видимости</strong> используется по умолчанию. Каждый имеет доступ к переменным, объявленным в ней. Например, переменная <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">value</code> объявлена в глобальной области видимости, то есть вне какого-либо блока, и доступна в любом месте после объявления.</p>

        <pre><code class="language-javascript">const value = 5;

if (true) {
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // 5</code></pre>

        <p><strong>Блочная область видимости</strong>. Любая конструкция, использующая фигурные скобки <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">{}</code> (условия, циклы, функции и т.д.), создает новую локальную область видимости, и переменные, объявленные в этой области видимости с использованием <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">let</code> или <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">const</code>, недоступны за пределами этого блока.</p>

        <pre><code class="language-javascript">if (true) {
  const value = 5;
  console.log("Block scope: ", value); // 5
}

console.log("Global scope: ", value); // ReferenceError: value is not defined</code></pre>

        <p>Глубина вложенности областей видимости неограничена, и все они будут работать по одному принципу - область видимости имеет доступ ко всем переменным, объявленным выше по иерархии вложенности, но не может получить доступ к переменным, объявленным во вложенных областях видимости.</p>

        <img src="/images/javascript/scope-visual.png" alt="Визуализация областей видимости" width="80%" class="rounded-lg mb-4 mx-auto" />

        <h4>Цепочка областей видимости (Scope Chain)</h4>
        <p>Когда интерпретатор JavaScript пытается получить доступ к переменной, он сначала ищет её в <strong>текущей</strong> области видимости.</p>
        <ul class="list-disc">
          <li>Если переменная найдена, она используется.</li>
          <li>Если не найдена, поиск продолжается во <strong>внешней</strong> области видимости (родительской).</li>
          <li>Этот процесс повторяется, пока переменная не будет найдена или пока не будет достигнута <strong>глобальная</strong> область видимости.</li>
          <li>Если переменная не найдена даже в глобальной области, возникает ошибка <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">ReferenceError</code>.</li>
        </ul>

        <pre><code class="language-javascript">const globalVar = "Global";

if (true) {
  const outerVar = "Outer";

  if (true) {
    const innerVar = "Inner";
    console.log(innerVar); // Ищет в текущем блоке -> Находит "Inner"
    console.log(outerVar); // Ищет в текущем -> Нет -> Ищет во внешнем -> Находит "Outer"
    console.log(globalVar); // Ищет в текущем -> Нет -> ... -> Находит "Global"
  }
}</code></pre>

        <h4>Затенение переменных (Variable Shadowing)</h4>
        <p>Если объявить переменную с тем же именем внутри вложенной области видимости, она <strong>затенит</strong> переменную из внешней области видимости. Внутри этого блока будет использоваться именно локальная переменная, а внешняя станет временно недоступной (внутри этого блока).</p>

        <pre><code class="language-javascript">const value = "Global Value";

if (true) {
  const value = "Block Value"; // Эта переменная затеняет глобальную 'value'
  console.log(value); // "Block Value"
}

console.log(value); // "Global Value" - глобальная переменная не изменилась</code></pre>
        
        [NEXT]
      `,
        },
        {
          id: "js-loops",
          title: "Циклы",
          order: 14,
          content: `

        <p>Частая задача программирования - многократное выполнение однотипного действия. Например, вывести клиентов из списка один за одним, или перебрать суммы зарплат, и для каждой выполнить одинаковый код. Именно для таких целей - многократного повторения одной части кода, используются циклы.</p>

        <ul class="list-disc">
          <li><strong>Цикл</strong> - управляющая конструкция, предназначенная для организации многократного выполнения набора инструкций.</li>
          <li><strong>Тело цикла</strong> - последовательность инструкций, предназначенная для многократного выполнения.</li>
          <li><strong>Итерация</strong> - однократное выполнение тела цикла.</li>
          <li><strong>Условие выхода</strong> - выражение, определяющее, будет ли в очередной раз выполняться итерация, или цикл завершится.</li>
          <li><strong>Счетчик</strong> - переменная, хранящая текущий номер итерации.</li>
        </ul>

        <h4>Цикл while</h4>
        <p><strong>Цикл с предусловием</strong> — цикл, который выполняется, пока истинно какое-то условие, указанное до его начала. Это условие проверяется до выполнения тела цикла, поэтому тело может не выполниться ни разу, если условие с самого начала ложно.</p>

        <pre><code class="language-javascript">while (condition) {
  // код, тело цикла (statement)
}</code></pre>

        <pre><code class="language-javascript">let counter = 0;

while (counter < 5) {
  console.log("counter: ", counter);
  counter += 1;
}</code></pre>

        <h4>Цикл do...while</h4>
        <p><strong>Цикл с постусловием</strong> — цикл, в котором условие проверяется после выполнения тела цикла. Это гарантирует, что тело цикла выполнится хотя бы один раз.</p>

        <pre><code class="language-javascript">do {
  // statement
} while (condition);</code></pre>

        <pre><code class="language-javascript">let password = "";

do {
  password = "password123"; // Запрос ввода пароля
} while (password !== "password123");</code></pre>

        <h4>Цикл for</h4>
        <p><strong>Цикл со счетчиком</strong>. Наиболее распространенный цикл, который позволяет выполнить код заданное количество раз.</p>

        <pre><code class="language-javascript">for (initialization; condition; post-expression) {
  // statements
}</code></pre>

        <ul class="list-disc">
          <li><strong>Инициализация</strong>: выполняется один раз перед началом цикла. Обычно используется для создания счетчика.</li>
          <li><strong>Условие</strong>: проверяется перед каждой итерацией. Если true - цикл продолжается, false - останавливается.</li>
          <li><strong>Пост-выражение</strong>: выполняется после каждой итерации. Обычно используется для изменения счетчика.</li>
        </ul>

        <pre><code class="language-javascript">for (let i = 0; i < 5; i += 1) {
  console.log(i); // 0, 1, 2, 3, 4
}</code></pre>

        <h3>Управление циклами</h3>

        <p>Иногда необходимо прервать выполнение цикла или пропустить итерацию. Для этого используются операторы <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">break</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">continue</code>.</p>

        <h4>Оператор break</h4>
        <p>Прервать выполнение цикла можно в любой момент. Для этого существует оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">break</code>, который полностью прекращает выполнение цикла и передает управление на строку после его тела.</p>
        <p>Найдем число 3. Как только выполнится условие <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code>, цикл прекратит свое выполнение (будет прерван).</p>

        <pre><code class="language-javascript">for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}

console.log("Лог после цикла");</code></pre>

        <h4>Оператор continue</h4>
        <p>Прерывает не весь цикл, а только выполнение текущей итерации. Его используют, если понятно, что на текущей итерации цикла больше нечего делать или вообще не нужно ничего делать, и пора переходить к следующей итерации.</p>
        <p>Используем цикл для вывода только нечетных чисел. Для четных <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">i</code> срабатывает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">continue</code>, выполнение тела прекращается и управление передается к следующей итерации.</p>

        <pre><code class="language-javascript">const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}</code></pre>


        [NEXT]
      `,
        },
      ],
    },
  ],
};
