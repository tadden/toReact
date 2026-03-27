export const javascriptCourse = {
  slug: "javascript",
  title: "JavaScript",
  description: "Изучение языка программирования JavaScript.",
  icon: "javascript", // Assuming 'javascript' icon exists, otherwise fallback or checking available icons would be good. 'planet-red' was used for HTML. Let's use 'code' or similar if unsure, generally icons are mapped in frontend. I'll stick to 'javascript' or 'js' if likely, but 'planet-red' suggests a specific set. I will check 'BonusIconMap' mentioned in history? Or just guess 'javascript'.
  order: 3,
  modules: [
    {
      slug: "module-1-js-intro",
      title: "Модуль 1. Переменные и типы, Разветвление, Циклы",
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
        title: "Домашнее задание: Переменные и типы",
        description:
          "Выполните интерактивные задания для закрепления материала.",
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
    {
      slug: "module-2-arrays-functions",
      title: "Модуль 2. Массивы и Функции",
      description: "Массивы, функции, функциональные выражения",
      order: 1,
      videoUrl: null,
      resources: [
        {
          type: "video",
          title: "Модуль 2. Занятие 3. Массивы",
          url: "https://www.youtube.com/watch?v=gi-YyrxjXqk",
        },
        {
          type: "video",
          title: "Модуль 2. Занятие 4. Функции",
          url: "https://www.youtube.com/watch?v=TkV_O-hsU5w",
        },
      ],
      homework: {
        id: "js-arrays-functions-hw",
        title: "Домашнее задание: Массивы и Функции",
        description:
          "Выполните интерактивные задания для закрепления материала.",
        acceptanceCriteria: [
          {
            type: "challenges",
            items: [
              "js-check-age-early-return",
              "js-check-password-early-return",
              "js-check-storage-early-return",
              "js-array-fruits",
              "js-array-access",
              "js-array-assignment",
              "js-array-length",
              "js-array-last-element",
              "js-get-extreme-elements",
              "js-split-message",
              "js-calculate-engraving-price",
              "js-make-string-from-array",
              "js-slugify",
              "js-slice",
              "js-concat",
              "js-make-array",
              "js-for-loop-base",
              "js-calculate-total",
              "js-iterate-array",
              "js-calculate-total-price",
              "js-find-longest-word",
              "js-create-array-of-numbers",
              "js-filter-array",
              "js-check-fruit-includes",
              "js-get-common-elements-some",
              "js-calculate-total-price-for-of",
              "js-filter-array-for-of",
              "js-modulo",
              "js-get-even-numbers",
              "js-break",
              "js-find-number",
              "js-function-includes",
            ],
          },
        ],
      },
      topics: [
        {
          id: "js-arrays",
          title: "Массивы",
          order: 0,
          content: `
<p><strong>Массив</strong> - структура данных для хранения и манипулирования коллекцией индексированных значений. Используется для хранения упорядоченных коллекций данных, например, списка курортов, товаров, клиентов в отеле и т.д.</p>

<h3>Создание</h3>
<p>Массив объявляется и берется в квадратные скобки <code>[]</code> - литералом массива. Внутри скобок каждый элемент массива разделяется запятой.</p>

<pre><code class="language-javascript">const clients = ["Mango", "Poly", "Ajax"];</code></pre>

[QUIZ: js-array-literal-syntax]
<h3>Доступ к элементам</h3>

<p>Массив — это упорядоченная коллекция элементов, где каждый элемент имеет свой порядковый номер, который называется индексом. Индексация элементов массива начинается с нуля, то есть первый элемент имеет индекс 0, второй элемент — индекс 1 и так далее.</p>

<div class="image-container">
  <img src="/images/javascript/array-access.png" alt="Доступ к элементам массива" class="img-responsive img-rounded" />
</div>

<p>Чтобы получить доступ к значению элемента массива, мы используем синтаксис квадратных скобок:</p>

<pre><code class="language-javascript">arrayName[index]</code></pre>

<p>Между именем переменной, которая хранит массив, и квадратными скобками не должно быть пробела. Указываем индекс элемента внутри квадратных скобок.</p>

<pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];
console.log(planets[0]); // "Earth"
console.log(planets[1]); // "Mars"
console.log(planets[2]); // "Venus"</code></pre>

<p>В этом примере мы создали массив строк <code>planets</code>, содержащий названия планет. Затем мы обращаемся к элементам массива, указывая соответствующий индекс в квадратных скобках.</p>

<p>Результат обращения к элементу массива можно сохранить в переменную и использовать его в дальнейшем.</p>

<pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];
const firstElement = planets[0];
console.log(firstElement); // "Earth"</code></pre>

<p>Теперь значение первого элемента массива "Earth" сохранено в переменной <code>firstElement</code>, и мы можем использовать это значение для других операций или выражений в коде.</p>

<p>Попытка доступа к несуществующему индексу вернет значение <code>undefined</code>.</p>

<pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];
console.log(planets[3]); // undefined
console.log(planets[999]); // undefined</code></pre>

[QUIZ: js-array-first-element-index]

[NEXT]

<h3>Переопределение</h3>
<p>В отличие от строк, элементы массива можно изменять, обратившись к ним по индексу и присвоив другое значение.</p>

<pre><code class="language-javascript">const clients = ["Mango", "Poly", "Ajax"];
clients[0] = "Kiwi";
clients[1] = "Pango";
console.log(clients); // ["Kiwi", "Pango", "Ajax"]</code></pre>

<h3>Длина массива</h3>
<p>Длина массива, то есть количество его элементов, хранится в свойстве <code>length</code>. Это динамическая величина, которая изменяется автоматически во время добавления или удаления элементов.</p>

<pre><code class="language-javascript">const clients = ["Mango", "Poly", "Ajax"];
console.log(clients.length); // 3</code></pre>

<h3>Индекс последнего элемента</h3>
<p>Чаще всего мы заранее не знаем какая будет длина массива в коде. Для того, чтобы получить значение последнего элемента, применяется следующий подход - длина массива всегда на единицу больше, чем индекс последнего элемента. Используя формулу <code>длина_массива - 1</code>, можно получить значение последнего элемента массива произвольной длины.</p>

<pre><code class="language-javascript">const clients = ["Mango", "Poly", "Ajax"];
const lastElementIndex = clients.length - 1;


console.log(lastElementIndex); // 2
console.log(clients[lastElementIndex]); // "Ajax"</code></pre>


`,
        },
        {
          id: "js-arrays-iteration",
          title: "Итерация по массиву",
          order: 1,
          content: `
        <p>Итерация по массиву с использованием цикла <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for</code> позволяет перебрать элементы массива и выполнить определенное действие для каждого элемента.</p>

        <p>В примере ниже массив <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets</code> содержит названия планет, и цикл <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for</code> используется для выведения каждого элемента в консоль.</p>

        <pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}</code></pre>

        <ul class="list-disc">
          <li>Начальное значение счетчика <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">i</code> устанавливается как 0 и цикл продолжается, пока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">i</code> меньше длины массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets.length</code></li>
          <li>На каждой итерации цикла используется <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets[i]</code> для доступа к элементам массива по их индексу <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">i</code></li>
          <li>Значение счетчика <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">i</code> с каждой итерацией увеличивается на 1 (выражение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">i += 1</code>)</li>
          <li>Условие <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">i < planets.length</code> будет возвращать <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code> для значений счетчика 0, 1 и 2. Когда <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">i</code> достигнет значения 3, условие станет <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code> и цикл остановится</li>
        </ul>

        <p>Таким образом, на каждой итерации цикла будет выполняться блок кода внутри фигурных скобок, где мы выводим текущий элемент массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets[i]</code> в консоль. Результатом работы цикла будет выведение названий планет одна за другой.</p>

        [QUIZ: js-arrays-loop-condition]

        [NEXT]

        <h3>Цикл for...of</h3>
        <p>Цикл <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code> - это удобный способ перебора массива. Тело цикла будет выполняться на каждом элементе массива. Это хорошая замена циклу <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for</code>, если не нужен доступ к счетчику.</p>

        <p>Синтаксис цикла <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code> выглядит так:</p>

        <pre><code class="language-javascript">for (const element of array) {
  // тело цикла
}</code></pre>

        <p>Где:</p>
        <ul class="list-disc">
          <li><strong>element</strong> — это переменная, в которую на каждой итерации будет записываться текущий элемент массива.</li>
          <li><strong>array</strong> — это исходный массив, который мы хотим перебрать.</li>
        </ul>

        <p>Пример использования цикла <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code> для массива:</p>

        <pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}</code></pre>

        <p>В примере мы объявляем массив <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets</code>.</p>
        <p>Затем используем цикл <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code>, в котором объявляем переменную <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planet</code>, которая будет принимать значение текущего элемента массива на каждой итерации. Внутри тела цикла мы выводим значение переменной <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planet</code> с помощью <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">console.log()</code>. Результатом выполнения кода будет последовательное выведение каждого элемента массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets</code>.</p>

        <p>Цикл <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code> всегда перебирает массив от первого и до последнего элемента, задать условие прекращения цикла нельзя. Если необходимо закончить выполнение цикла преждевременно, используется уже знакомый оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">break</code>.</p>

        [QUIZ: js-arrays-for-of-counter]

        [NEXT]

        <h3>Метод includes()</h3>
        <p>Метод массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">includes()</code> используется для проверки наличия определенного элемента в массиве. Он возвращает логическое значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, если элемент найден в массиве, и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, если элемент отсутствует.</p>

        <p>Синтаксис метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">includes()</code> выглядит так:</p>

        <pre><code class="language-javascript">array.includes(element)</code></pre>

        <p>где:</p>
        <ul class="list-disc">
          <li><strong>array</strong> — это исходный массив, в котором осуществляется поиск элемента;</li>
          <li><strong>element</strong> — это элемент, наличие которого нужно проверить.</li>
        </ul>

        <p>Пример использования метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">includes()</code>:</p>

        <pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false</code></pre>

        <p>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">includes()</code> можно сочетать с разветвлениями для проверки условий. Например, выполнить разный код в зависимости от наличия значения в массиве.</p>

        <pre><code class="language-javascript">const fruits = ["apple", "banana", "orange"];

if (fruits.includes("banana")) {
  console.log("The array has an element banana");
} else {
  console.log("Array does not contain banana element");
}</code></pre>

        <p>Код примера выше проверяет наличие элемента "banana" в массиве fruits и выводит соответствующее сообщение в зависимости от результата проверки.</p>

        <p>Мы используем метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">includes()</code> для проверки наличия элемента "banana" в массиве. Для этого в <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code> мы вызываем метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">includes("banana")</code> на массиве fruits.</p>

        <ul class="list-disc">
          <li>Если метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">includes()</code> возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, значит элемент "banana" найден в массиве, и выполняется код внутри блока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code>.</li>
          <li>Если метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">includes()</code> возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, значит элемент "banana" отсутствует в массиве, и выполняется код внутри блока <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">else</code>.</li>
        </ul>

        [QUIZ: js-arrays-includes]
          `,
        },
        {
          id: "js-arrays-methods",
          title: "Методы массива",
          order: 2,
          content: `
        
        <p>У массивов есть встроенные методы, которые позволяют выполнять удобные операции для работы с элементами массива. Методы массива позволяют добавлять, удалять, изменять и выполнять другие операции над элементами массива.</p>

        <h3>Метод join()</h3>
        <p>Метод массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">join(delimiter)</code> позволяет объединить элементы массива в строку. В результирующей строке элементы будут разделены символом или группой символов, указанных в <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">delimiter</code>.</p>

        <p>Примеры использования метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">join()</code>:</p>

        <pre><code class="language-javascript">const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'</code></pre>

        <p>Результат работы метода можно сохранить в переменную для дальнейшего использования.</p>

        <p>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">join()</code> полезен при необходимости преобразования массива в строку с определенными разделителями между элементами. Например, нам нужно написать функцию, которая преобразует строки из snake_case (змеиной нотации с подчеркиваниями) в kebab-case (нотацию с тире).</p>

        <pre><code class="language-javascript">function transformString(string) {
  const words = string.split("_");
  return words.join("-");
}

transformString("user_age"); // "user-age"
transformString("price_per_droid"); // "price-per-droid"</code></pre>

        [NEXT]

        <h3>Метод split()</h3>
        <p>Метод строк <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">split(delimiter)</code> выполняет обратную операцию по сравнению с методом массивов <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">join(delimiter)</code>. Он позволяет превратить строку в массив, разбив ее по указанному разделителю <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">delimiter</code>.</p>

        <p>Если разделитель является пустой строкой (строкой, в которой нет символов), то получится массив отдельных символов строки. Разделителем может быть один или несколько символов. Результат работы метода можно сохранить в переменную для дальнейшего использования.</p>

        <p>Примеры использования метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">split()</code>:</p>

        <pre><code class="language-javascript">const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words = message.split(" ");
console.log(words); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]</code></pre>

        <ul class="list-disc">
          <li>В первом примере строка <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"Mango"</code> была преобразована в массив, где каждая буква стала отдельным элементом массива. Разделителем была указана пустая строка.</li>
          <li>Во втором примере строка <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"JavaScript essentials"</code> была разделена на два элемента массива, используя пробел как разделитель.</li>
          <li>В третьем примере строка <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"amazing-french-recipes"</code> была разделена на три элемента массива, используя тире как разделитель.</li>
        </ul>

        [NEXT]

        <h3>Метод slice()</h3>
        <p>Метод массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">slice(begin, end)</code> возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия создается от индекса <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">begin</code> до, но не включая индекс <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">end</code>.</p>

        <img src="/images/javascript/slice-diagram.png" alt="Диаграмма работы метода slice" class="img-responsive img-rounded" />

        <p>Примеры использования метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">slice()</code>:</p>

        <pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']</code></pre>

        <ul class="list-disc">
          <li>В первом примере метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">slice(0, 2)</code> создает новый массив, содержащий элементы с индексами от 0 до 2 (не включая 2) исходного массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets</code>. Результатом будет <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">['Earth', 'Mars']</code>.</li>
          <li>Во втором примере метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">slice(0, 4)</code> создает новый массив, содержащий элементы с индексами от 0 до 4 (не включая 4) исходного массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets</code>. Результатом будет <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">['Earth', 'Mars', 'Venus', 'Jupiter']</code>.</li>
          <li>В третьем примере метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">slice(1, 3)</code> создает новый массив, содержащий элементы с индексами от 1 до 3 (не включая 3) исходного массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets</code>. Результатом будет <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">['Mars', 'Venus']</code>.</li>
        </ul>

        <p>Результат работы метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">slice()</code> можно сохранить в переменную для дальнейшего использования:</p>

        <pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
const result = planets.slice(1, 3);
console.log(result); // ["Mars", "Venus"]</code></pre>

        <p>Если не указать параметры <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">begin</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">end</code>, будет создана полная копия исходного массива:</p>

        <pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]</code></pre>

        <p>Если не указать <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">end</code>, копирование будет происходить от <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">begin</code> до конца массива:</p>

        <pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]</code></pre>

        <p>Если значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">begin</code> негативное, а <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">end</code> не указано, будут скопированы последние <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">begin</code> элементов (то есть столько элементов с конца, сколько указано в параметре <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">begin</code>):</p>

        <pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]</code></pre>

        <p>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">slice()</code> полезен, когда необходимо получить подмассив из исходного массива или создать его копию для дальнейшей работы с ним.</p>

        [NEXT]

        <h3>Метод concat()</h3>
        <p>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">concat(arr1, arr2, ..., arrN)</code> используется для объединения двух или более массивов.</p>

        <pre><code class="language-javascript">const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);

console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];</code></pre>

        <p>Обратите внимание, что исходные массивы <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">firstArray</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">secondArray</code> остаются неизменными после вызова <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">concat()</code>. Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">concat()</code> создает и возвращает новый массив, содержащий все элементы объединенных массивов.</p>

        <pre><code class="language-javascript">const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);

console.log(firstArray); // ["Mercury", "Venus"];
console.log(secondArray); // ["Mars", "Jupiter"];
console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];</code></pre>

        <p>Порядок аргументов метода определяет порядок расположения элементов в новом массиве.</p>

        <pre><code class="language-javascript">const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Neptune"];

console.log(firstArray.concat(secondArray, thirdArray));
// ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Neptune"];

console.log(firstArray.concat(thirdArray, secondArray));
// ["Mercury", "Venus", "Saturn", "Neptune", "Mars", "Jupiter"];</code></pre>

        [NEXT]

        <h3>Метод indexOf()</h3>
        <p>Метод массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">indexOf(elem)</code> используется для определения индекса первого вхождения элемента <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">elem</code> в массиве. Он возвращает индекс элемента, если он найден, или -1, если элемент не найден. Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">indexOf()</code> выполняет строгое равенство (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">===</code>) при сравнении элементов.</p>

        <p>Синтаксис метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">indexOf()</code> имеет следующий вид:</p>

        <pre><code class="language-javascript">array.indexOf(elem)</code></pre>

        <ul class="list-disc">
          <li><strong>array</strong> — массив, в котором осуществляется поиск.</li>
          <li><strong>elem</strong> — элемент, индекс которого нужно найти в массиве.</li>
        </ul>

        <p>Пример использования метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">indexOf()</code>:</p>

        <pre><code class="language-javascript">const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1</code></pre>

        <p>В этом примере массив <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">clients</code> содержит имена клиентов. Вызов <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">indexOf("Poly")</code> возвращает индекс первого вхождения строки "Poly" в массиве, который равен 2, все последующие вхождения (индекс 4) уже не будут анализироваться. Вызов <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">indexOf("Monkong")</code> возвращает -1, поскольку элемент "Monkong" не найден в массиве.</p>

        [NEXT]

        <h3>Метод push()</h3>
        <p>Метод массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">push()</code> используется для добавления одного или более элементов в конец массива.</p>

        <img src="/images/javascript/push-diagram.png" alt="Диаграмма работы метода push" class="img-responsive img-rounded" />

        <p>Синтаксис метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">push()</code> имеет такой вид:</p>

        <pre><code class="language-javascript">array.push(element1, element2, ..., elementN);</code></pre>

        <p>где:</p>
        <ul class="list-disc">
          <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">array</code> — это исходный массив, до которого нужно добавить элементы;</li>
          <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">element1, element2, ..., elementN</code> — элементы, которые необходимо добавить в конец массива.</li>
        </ul>

        <p>Пример использования метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">push()</code>:</p>

        <pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus"];

planets.push("Jupiter");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

planets.push("Saturn", "Neptune");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Neptune']</code></pre>

        <p>У примере мы создаем массив <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets</code> з исходными элементами "Earth", "Mars" i "Venus". Потом за помощью метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">push()</code> последовательно добавляем элементы "Jupiter", "Saturn" i "Neptune" у конец массива. После выполнения <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">push()</code> массив <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">planets</code> будет содержать все добавленные элементы.</p>

        <p>За помощью цикла мы можем выполнять повторяющиеся операции i использовать метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">push</code> для добавления новых элементов у массив на каждой итерации. Це очень полезно, коли нам нужно создать массив з элементами, которые можно динамично добавлять.</p>

        <pre><code class="language-javascript">const tags = [];

for(let i = 0; i < 3; i += 1) {
  tags.push(\`tag-\${i}\`);
}

console.log(tags); // ["tag-0", "tag-1", "tag-2"]</code></pre>

        <p>Код приклада создает пустой массив <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">tags</code> i за помощью цикла <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for</code> добавляет строки вида <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"tag-0"</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"tag-1"</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"tag-2"</code> до массива. Кожен рядок формируется за помощью шаблонного рядка, де значения <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">i</code> в цикле используется для создания уникального тега на каждой итерации. У результате ми отримаємо массив <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">tags</code>, що містить усі додані значення.</p>
          `,
        },
        {
          id: "js-functions-basics",
          title: "Функции",
          order: 3,
          content: `
        <h3>Основы функций</h3>
        <h4 class="small-title">Объявление и вызов функции</h4>

        <p>Функция — это независимый блок кода, который выполняет определенную задачу с разными начальными значениями. Функцию можно представить как черный ящик, который принимает данные на входе и возвращает результат на выходе после выполнения кода внутри функции.</p>

        <img src="/images/javascript/function-diagram.png" alt="Диаграмма функции" class="img-responsive img-rounded" />

        <h4 class="small-title">Объявление функции</h4>
        <p>Объявление функции имеет следующую структуру:</p>
        <ol>
          <li>Ключевое слово <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">function</code></li>
          <li>Имя функции — это глагол, отвечающий на вопрос "Что сделать?"</li>
          <li>Пара круглых скобок <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">()</code></li>
          <li>Тело функции в фигурных скобках <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">{}</code></li>
        </ol>

        <pre><code class="language-javascript">function doStuff() {
  // Тело функции
  console.log('Log inside multiply function');
}</code></pre>

        <p>Тело функции находится в фигурных скобках <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">{}</code>. Оно содержит инструкции, которые нужно выполнить во время вызова функции. Эти инструкции могут включать операторы, условные конструкции, циклы и другие функции.</p>

        <h4 class="small-title">Вызов функции</h4>
        <p>Когда функцию нужно выполнить, она вызывается с помощью её имени и пары круглых скобок.</p>

        <pre><code class="language-javascript">// Объявление функции doStuff
function doStuff() {
  // Тело функции
  console.log('Log inside multiply function');
}

// Вызовы функции doStuff
doStuff(); // 'Log inside multiply function'
doStuff(); // 'Log inside multiply function'
doStuff(); // 'Log inside multiply function'</code></pre>

        <p>Если при вызове функции аргументов будет передано больше, чем объявлено параметров, лишние значения будут проигнорированы.</p>

        [QUIZ: js-functions-call]

        [NEXT]

        <h3 class="small-title">Параметры и аргументы</h3>
        <p>В круглых скобках после имени функции указываются параметры. Параметры — это перечисление данных, которые функция ожидает при вызове.</p>

        <pre><code class="language-javascript">// Объявление параметров x, y, z
function multiply(x, y, z) {
  console.log(\`Result: \${x * y + z}\`);
}</code></pre>

        <p><strong>Параметры</strong> — это локальные переменные, доступные только внутри тела функции.</p>

        <p>Параметры разделяются запятыми. Функция может иметь любое количество параметров или не иметь их вовсе, в таком случае указываются пустые круглые скобки.</p>

        <p>При вызове функции в круглых скобках можно передать <strong>аргументы</strong>, которые являются значениями для объявленных параметров функции.</p>

        <pre><code class="language-javascript">// Объявление параметров x, y, z
function multiply(x, y, z) {
  console.log(\`Result: \${x * y + z}\`);
}

// Передача аргументов
multiply(2, 3, 5); // Result: 11
multiply(4, 8, 12); // Result: 44
multiply(17, 6, 25); // Result: 127</code></pre>

        <p>Итак, в примере выше мы имеем параметры x, y, z.</p>
        <p>При каждом вызове функции мы передаем ей новые аргументы. Например, параметр x получит значение 2, затем 4, затем 17.</p>

        <img src="/images/javascript/function-params-diagram.png" alt="Диаграмма параметров функции" class="img-responsive img-rounded" />

        <p>При передаче аргументов во время вызова функции необходимо соблюдать порядок, соответствующий порядку объявления параметров. Значение первого аргумента будет присвоено первому параметру, второго аргумента — второму параметру и так далее.</p>

        <p>Если при вызове функции аргументов будет передано больше, чем объявлено параметров, лишние значения будут проигнорированы.</p>

        <p>Прочитай пример кода</p>

        <pre><code class="language-javascript">function calculate(x, y) {} 
        calculate(5, 8);</code></pre>
        [QUIZ: js-functions-params]

        [NEXT]

        <h3 class="small-title">Возврат значения</h3>
        <p>Оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">return</code> используется для возврата значения из тела функции назад в место её вызова. Когда интерпретатор встречает оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">return</code>, он немедленно выходит из функции (прекращает её выполнение) и возвращает указанное значение в место вызова функции.</p>

        <pre><code class="language-javascript">function multiply(x, y, z) {
  const product = x * y * z;
  // Возвращаем результат выражения умножения
  return product;
}

// Результат работы функции можно сохранить в переменную
const result = multiply(2, 3, 5);
console.log(result); // 30</code></pre>

        <p>Чтобы избежать объявления лишней переменной в теле функции, можно сразу же <strong>возвращать результат выражения</strong>. Так, нет необходимости создавать отдельную переменную для хранения результата выражения.</p>

        <pre><code class="language-javascript">function multiply(x, y, z) {
  return x * y * z;
}

const result = multiply(2, 3, 5);
console.log(result); // 30</code></pre>

        <p>Если в теле функции отсутствует оператор <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">return</code> или он не указывает на конкретное значение, функция вернет специальное значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">undefined</code>.</p>

        <pre><code class="language-javascript">function multiply(x, y, z) {
  const product = x * y * z;
}

const result = multiply(2, 3, 5);
console.log(result); // undefined</code></pre>

        <p>При использовании оператора <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">return</code> все инструкции, идущие на строках после него, в теле функции не выполняются, так как выполнение функции прекращается сразу после встречи оператора <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">return</code>.</p>

        <pre><code class="language-javascript">function multiply(x, y, z) {
  console.log('The code before return is executed as usual');

  return x * y * z;

  console.log('This code is never executed because it is after return');
}

console.log(multiply(2, 3, 5)); // 30</code></pre>

        <p>Прочитай пример кода</p>

        <pre><code class="language-javascript">function makeMessage(username) {
  console.log(\`Hello \${username}\`);
}

makeMessage("Jacob")</code></pre>

        [QUIZ: js-functions-implicit-return]

        [NEXT]

        <h3 class="small-title">Порядок выполнения кода</h3>
        <p>Когда интерпретатор встречает вызов функции, он приостанавливает выполнение текущего кода и начинает выполнять код из тела функции.</p>

        <p>После того, как весь код в функции будет выполнен, интерпретатор возвращает управление в то место, откуда был совершен вызов функции, и продолжает выполнение оставшегося кода программы.</p>

        <pre><code class="language-javascript">function multiply(x, y, z) {
  console.log(\`Result: \${x * y * z}\`);
}

console.log("Log before multiply execution");
multiply(2, 3, 5); // "Result: 30"
console.log("Log after multiply execution");</code></pre>

        <p>Последовательность логов в консоли будет такой:</p>

        <ol>
          <li>"Log before multiply execution"</li>
          <li>"Result: 30"</li>
          <li>"Log after multiply execution"</li>
        </ol>

        <p>Прочитай фрагмент кода</p>

        <pre><code class="language-javascript">console.log("A");

function logStuff() {
  console.log("B");
}

console.log("C");

logStuff();

console.log("D");</code></pre>

        [QUIZ: js-functions-execution-order]

        [NEXT]

        <h3 class="small-title">Область видимости функции</h3>
        <p>Область видимости определяет, где и какие переменные и функции могут быть доступны в твоем коде. Когда ты объявляешь переменную или функцию, она становится «видимой» только в определенной части кода. Это влияет на то, где и как ты можешь использовать их в своем коде.</p>

        <p>Переменные или функции, объявленные за пределами любых блоков кода — то есть в глобальной области видимости, будут доступны в любой части кода. Они являются <strong>глобальными переменными</strong>.</p>

        <pre><code class="language-javascript">// Глобальная переменная
const value = "I'm a global variable";

function foo() {
  // Можно обратиться к глобальной переменной
  console.log(value); // "I'm a global variable"
}

foo();
// Можно обратиться к глобальной переменной
console.log(value);
// "I'm a global variable"</code></pre>

        <p>Переменная <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">value</code> объявлена в глобальной области видимости, то есть за пределами любого блока кода, в нашем случае — за пределами тела функции, и доступна в любом месте после объявления.</p>

        <p>Любая конструкция, которая использует фигурные скобки <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">{}</code> (условия, циклы, функции и т.д.) создает новую <strong>локальную область видимости</strong>. Переменные, объявленные в локальной области видимости, могут быть использованы только внутри этого блока кода.</p>

        <pre><code class="language-javascript">function foo() {
  // Локальная переменная
  const value = "I'm a local variable";
  // Можно обратиться к локальной переменной
  console.log(value); // "I'm a local variable"
}

foo();

console.log(value); // ReferenceError: value is not defined
                    // Ошибка: локальную переменную не видно за
                    // пределами функции</code></pre>

        <p>Переменная <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">value</code> объявлена в теле функции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">foo</code>, то есть в локальной области видимости функции, ограниченной телом функции. Эта переменная будет доступна лишь внутри функции, и попытка обращения к ней за пределами тела функции вызовет ошибку.</p>

        [NEXT]

        <h3 class="small-title">Псевдомассив arguments</h3>
        <p>Доступ к списку всех аргументов можно получить с помощью специальной переменной <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">arguments</code>. Когда ты вызываешь функцию с аргументами, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">arguments</code> автоматически создается внутри этой функции и заполняется переданными значениями аргументов.</p>

        <pre><code class="language-javascript">function sum(a, b) {
  console.log(arguments);
  return a + b;
}

sum(2, 5);</code></pre>

        <p>В этом примере при вызове функции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">sum(2, 5)</code> сохраняются все переданные аргументы (числа 2 и 5) и записываются как элементы коллекции псевдомассива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">arguments</code>.</p>

        <p>Эта коллекция похожа на массив, но на самом деле является <strong>псевдомассивом</strong>, то есть:</p>

        <ul>
          <li>у нее есть некоторые свойства массива, например <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">length</code>;</li>
          <li>у нее есть возможность обратиться к элементу по индексу;</li>
          <li>у нее нет методов для работы с массивом;</li>
          <li>ее можно перебирать с помощью цикла.</li>
        </ul>

        <p>Рассмотрим пример использования <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">arguments</code> в функции, которая возвращает результат умножения любого количества аргументов.</p>

        <pre><code class="language-javascript">function multiply() {
  let total = 1;

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); // 6
console.log(multiply(1, 2, 3, 4)); // 24
console.log(multiply(1, 2, 3, 4, 5)); // 120</code></pre>

        <p>Если при работе с <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">arguments</code> нужно использовать методы массива, тогда псевдомассив необходимо преобразовать в массив, используя метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Array.from()</code>, который создаст массив из псевдомассива.</p>

        <pre><code class="language-javascript">function foo() {
  // В переменной args будет полноценный массив из всех аргументов
  const args = Array.from(arguments);
  return args.join("-");
}

foo(1, 2, 3); // Вернет "1-2-3"</code></pre>

        [QUIZ: js-functions-arguments]

        [NEXT]

        <h3 class="small-title">Параметры по умолчанию</h3>
        <p>Функции могут иметь параметры со значениями по умолчанию, то есть необязательные параметры. Эти значения используются в том случае, если функция вызывается без передачи соответствующего аргумента для этого параметра. Значением по умолчанию может быть любой тип данных.</p>

        <p>Вот пример:</p>

        <pre><code class="language-javascript">function greet(username = "Guest") {
  console.log(\`Hello, \${username}!\`);
}

greet("Jacob"); // "Hello, Jacob!"
greet();        // "Hello, Guest!"</code></pre>

        <p>В этом примере функция <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">greet</code> имеет параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">username</code>, который имеет значение по умолчанию <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"Guest"</code>. Если аргумент не передан во время вызова функции, будет использовано значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"Guest"</code>. Если передан аргумент, этот аргумент заменит значение по умолчанию.</p>

        <p>Пример с несколькими параметрами.</p>

        <pre><code class="language-javascript">function count(from, to, step = 1) {
  console.log(\`from: \${from}, to: \${to}, step: \${step}\`);

  for (let i = from; i <= to; i += step) {
    // ...
  }
}

count(1, 15, 4); // "from: 1, to: 15, step: 4"
count(1, 15);    // "from: 1, to: 15, step: 1"</code></pre>

        [NEXT]

        <h3 class="small-title">Функциональный выраз</h3>
        <p><strong>Функциональный выраз</strong> (function expression) — обычное объявление переменной, значением которой будет функция. Это альтернативный способ объявления функции. Синтаксис объявления функции, который ты уже знаешь (<strong>function declaration</strong>):</p>

        <pre><code class="language-javascript">function multiply(x, y, z) {
  console.log(x * y * z);
}</code></pre>

        <p>Синтаксис функционального выраза (<strong>function expression</strong>):</p>

        <pre><code class="language-javascript">const multiply = function (x, y, z) {
  console.log(x * y * z);
};</code></pre>

        <p>Разница в том, что функциональный выраз (<strong>function expression</strong>) нельзя вызывать до места его создания, только после, потому что это буквально объявление <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">const</code> переменной.</p>

        <pre><code class="language-javascript">// ❌ Ошибка! Не работает вызов до объявления
multiply(1, 2, 3);

const multiply = function (x, y, z) {
  console.log(x * y * z);
};

// ✅ Работает вызов после объявления
multiply(4, 5, 6);</code></pre>

        <p>А объявление функции (<strong>function declaration</strong>) можно вызывать до места её создания в коде.</p>

        <pre><code class="language-javascript">// ✅ Работает вызов перед объявлением
multiply(1, 2, 3);

function multiply(x, y, z) {
  console.log(x * y * z);
}

// ✅ Работает вызов после объявления
multiply(4, 5, 6);</code></pre>

        <p>Не важно, какой синтаксис использовать, главное, чтобы код у проекте был однородным. Тебе необходимо стараться не смешивать объявления функций (<strong>function declaration</strong>) с функциональными выразами (<strong>function expression</strong>), чтобы писать более стандартизированный и понятный код.</p>

        [QUIZ: js-functions-expression]
          `,
        },
        {
          id: "js-scope",
          title: "Область видимости",
          order: 4,
          content: `
        <h3>Область видимости</h3>
        <p><strong>Область видимости (scope)</strong> — механизм, который определяет доступность переменных в коде, где они используются.</p>

        <p>Вложенные области видимости (scope chain) — область видимости утроенно иерархически, за каждый дочерний объем имеет доступ до значений в батьковських областях, но не наоборот.</p>

        <blockquote style="border-left: 4px solid #4fc3f7; padding: 10px 15px; margin: 16px 0; background-color: rgba(79, 195, 247, 0.1);">
          <strong>🧠 ИНТЕРЕСНО</strong><br/>
          Значение видно для кода, который выполняется, если оно есть в глобальной области видимости или в локальной области видимости.
        </blockquote>

        [NEXT]

        <h3 class="small-title">Глобальная область видимости</h3>
        <p>Значения, объявленные на наивысшем уровне, то есть за пределами каких-либо конструкций (за пределами <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">while</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for</code> и функций), находятся в <strong>глобальной области видимости</strong> и доступны всегда после их объявления.</p>

        <pre><code class="language-javascript">const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  console.log(globalValue); // 10
}

for (let i = 0; i < 5; i++) {
  console.log(globalValue); // 10
}

if (5 === 5) {
  console.log(globalValue); // 10
}</code></pre>

        [NEXT]

        <h3 class="small-title">Блочная область видимости</h3>
        <p>Значения, объявленные внутри инструкций <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for</code>, функций и других блоков кода, взятых в фигурные скобки <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">{}</code>, находятся в блочной области видимости и доступны только внутри этого блока кода или в блоках, вложенных в него.</p>

        <pre><code class="language-javascript">function foo() {
  const a = 20;
  console.log(a); // 20

  for (let i = 0; i < 5; i++) {
    console.log(a); // 20
  }

  if (5 === 5) {
    console.log(a); // 20
  }
}

// ❌ Ошибка! Значение a — недоступно в глобальной области
// видимости
console.log(a);

for (let i = 0; i < 5; i++) {
  // ❌ Ошибка! Значение a — недоступно в этой области видимости
  console.log(a);
}</code></pre>

        <p>Это можно увидеть в примере с будинком и комнатами. Будинок находится в глобальной области видимости. Каждая функция / блок создает свою «комнату», внутри которой эти значения доступных. Только тогда, если что-то находится «за пределами» будинка, оно доступно везде. За границами комнаты (т.е. блока) — недоступно.</p>

        <pre><code class="language-javascript">for (let i = 0; i < 5; i++) {
  const a = 10;
  console.log(a); // 10
}

if (5 === 5) {
  const b = 30;
  console.log(a); // ❌
  console.log(b); // 30
}

if (5 === 5) {
  // ❌ Ошибка! Значение b — отсутствует в этой области
  // видимости
  console.log(b);
}</code></pre>

        [NEXT]

        <h3 class="small-title">Поиск по цепочке областей видимости</h3>
        <p>Интерпретатор начнет искать значение сначала в той области видимости, в которой к нему обращаются. Если такого значения в локальной области видимости нет, то он поднимется на один уровень за пределы данного блока и начнет искать значение в нем, и так далее до наинаивысшей области видимости (глобальной). Поэтому, если в глобальной области видимости есть две переменные с одинаковым именем и в другой (дочерней) области видимости объявлена переменная с таким же именем, то используется ближайшая в цепочке, те что выше по цепи могут не использоваться.</p>
          `,
        },

        {
          id: "js-call-stack",
          title: "Стек вызовов",
          order: 5,
          content: `
        <p>На каждую вложенную функцию, которая в теле может вызывать нашу функцию, в коде — что только JavaScript — однопоточный язык, то есть за одну единицу часу может одновременно только одну команду. Это означает, что при вызове функции, если она не завершила свое выполнение, должна «помнить» каждую вложенную функцию, включительно вкладенні все для того, чтобы продолжить свою работу.</p>

        <pre><code class="language-javascript">function fn1() {
  console.log("Где вызывается функция? fn1 до вызова fn2");
  fn2();
  console.log("Где вызывается функция? fn1 после вызова fn2");
}

function fn2() {
  console.log("Где до вызова fn3");
}

console.log("Где до вызова fn1");
fn1();
console.log("Где после вызова fn1");

// "Где до вызова fn1"
// "Где вызывается функция? fn1 до вызова fn2"
// "Где до вызова fn3"
// "Где вызывается функция? fn1 после вызова fn2"
// "Где после вызова fn1"</code></pre>

        <p>Необходимо каждый раз сохранять стопку функций, они были вызваны, при этом ещё не завершили своё выполнение, — механизм хранения и предопределения последовательности выполнения этих функций — сама это и есть коллекция стэка викликов (call stack).</p>

        [NEXT]

        <h3 class="small-title">Стек</h3>
        <p><strong>Стек</strong> — структура данных, которая работает по принципу LIFO (Last In First Out), то есть «последний пришёл — первый ушёл». Означает, что добавленный позже стек, будет извлечён в первую очередь — тебе можно добавить или удалить только верхний элемент стека в каждой момент.</p>

        <p>Увижь стек в виде маски, в мне с точки методов <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">pop</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">push</code>, то есть можно добавить или удалить только элемент в конце коллекции.</p>

        [NEXT]

        <h3 class="small-title">Стек выполнения</h3>
        <p><strong>Стек вызовов (call stack)</strong> — это механизм для отслеживания текущего местоположения интерпретатора в коде, который вызывает несколько функций. Мы знаем, какая функция выполняется сейчас, и какие функции вызываются из внутри этой функции, и в случае, если функция, что вызывается, если функция будет выполнена наступает то:</p>

        <ul>
          <li>Когда происходит вызов функции, интерпретатор добавит её в стек выполнения и начинает выполнение.</li>
          <li>Любые функции, вызываемые функцией, что выполняется, добавляются у стек выполнения и выполняются, как только начинается их вызов.</li>
          <li>Когда выполнение функции завершается, интерпретатор убирает её из стека и возобновляет выполнение кода с той точки, где остановился до этого. То есть начинает выполняться функция, запись которой наступает на стеку.</li>
        </ul>

        <blockquote style="border-left: 4px solid #4fc3f7; padding: 10px 15px; margin: 16px 0; background-color: rgba(79, 195, 247, 0.1);">
          <strong>🧠 ИНТЕРЕСНО</strong><br/>
          Stack frame (кадр стека, запись стека) — структура, которая добавляется у стек на каждый вызов функции. Хранит следующую информацию — например, какая функция и номер строки, в каком была вызвана.
        </blockquote>

        <pre><code class="language-javascript">function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();</code></pre>

        <p>Когда выполняется данный код, сперва вызывается <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">foo()</code>, потом вызывается <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">bar()</code> и выполняется <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">bar()</code>, а потом — <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">baz()</code>. Вызовы <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">console.log()</code> тоже считаются вызовами функции, но в этот момент для простоты пусть мы их пока что игнорируем.</p>

        [NEXT]

        <h3 class="small-title">Переполнение стека выполнения</h3>
        <p>Стек вызовов — не бесконечный. Если вызывается какая-то однажды объем памяти, в каком и можно попабить ошибку "Uncaught RangeError: Maximum call stack size exceeded" — переполнение стека (stack overflow).</p>

        <p>Это может случиться в случае непрямого бесконечною вызова рекурсивной обо актуальною вызов функции, то есть когда вызывается вложенная или вставленна функцию  — закрытие на таку системну — это обязательно. Тоткі самі случай вот  когда должно подключенных позначень того, що значення не отвечает.</p>
          `,
        },
      ],
    },
    {
      slug: "module-3-objects",
      title: "Модуль 3. Объекты",
      description: "Объекты, свойства, методы, перебор.",
      order: 2,
      videoUrl: null,
      resources: [
        {
          id: "res-module-3-1",
          title: "Объекты",
          type: "video",
          url: "https://www.youtube.com/watch?v=LP6KAq0-9Ho",
        },
        {
          id: "res-module-3-2",
          title: "Массив объектов",
          type: "video",
          url: "https://www.youtube.com/watch?v=4FHukJT_3Rs",
        },
      ],
      homework: {
        id: "js-objects-hw",
        title: "Домашнее задание: Объекты",
        description: `<h2 style="margin-bottom: 1.5rem;">Критерии приема</h2>

<p>Время быстро летит, правда же?</p>

<p>Недавно ты и представления не имел, что такое объекты, а теперь уже знаешь как:</p>

<ul class="list-disc">
  <li>создать объект в JavaScript</li>
  <li>добавить и изменить значения свойств объекта</li>
  <li>реализовать перебор объекта</li>
  <li>работать с массивом однотипных объектов</li>
  <li>обращаться к свойству объекта в его методах</li>
  <li>использовать spread и rest</li>
</ul>

<p>Самое время выполнить задания и окончательно закрепить эти умения!</p>

<h2 style="margin-bottom: 1.5rem;">Домашнее задание №3</h2>

<ul class="list-disc">
  <li>Создай репозиторий <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">goit-js-hw-03</code> и склонируй его себе на компьютер.</li>
  <li>В папке <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">goit-js-hw-03</code> создай структуру проекта, как показано на схеме ниже.</li>
</ul>

<div class="attention-block" style="background-color: rgba(255, 0, 0, 0.1); padding: 10px; border-left: 5px solid red;">
  <p><strong>🔥 ОБРАТИ ВНИМАНИЕ!</strong></p>
  <p>Имена файлов и папок, а также их структура вложенности, должны соответствовать указанной схеме. В противном случае работа не будет принята.</p>
</div>

<img src="/images/module-3/hw-04-tree.png" alt="Структура файлов" class="img-responsive" style="max-width: 500px; margin: 2rem auto; display: block;" />

<ul class="list-disc">
  <li>Прочитай каждое задание и выполни его в соответствующем файле.</li>
  <li>Убедись, что код отформатирован с помощью <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Prettier</code>, а в консоли отсутствуют ошибки и предупреждения при открытии живой страницы задания.</li>
  <li>Сдай домашнее задание на проверку.</li>
</ul>

<p><strong>Формат сдачи:</strong> Домашняя работа содержит две ссылки: на исходные файлы и рабочую страницу на <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">GitHub Pages</code>.</p>

<h2 style="margin-bottom: 1.5rem;">Задача 1. Упаковка товаров</h2>

<div class="info-block" style="background-color: rgba(0, 150, 255, 0.1); padding: 10px; border-left: 5px solid #0096FF;">
  <p><strong>ℹ️ ВЫПОЛНЯЙ ЭТО ЗАДАНИЕ В ФАЙЛЕ task-1.js</strong></p>
</div>

<p>Напиши функцию <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">isEnoughCapacity(products, containerSize)</code>, которая вычисляет, поместятся ли все товары в контейнер при упаковке.</p>

<p>Функция оглашает два параметра:</p>

<ul class="list-disc">
  <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">products</code> — объект, в котором ключи содержат названия товаров, а их значения — количество этих товаров. Например, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">{ apples: 2, grapes: 4 }</code>.</li>
  <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">containerSize</code> — число, максимальное количество единиц товаров, которое может вместить контейнер.</li>
</ul>

<p>Функция должна вернуть результат проверки, поместятся ли все товары в контейнер. Для этого нужно подсчитать общее количество товаров в объекте <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">products</code> и вернуть <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>, если оно меньше или равно <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">containerSize</code>, и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code>, если нет.</p>

<p>Возьми код ниже и вставь после оглашения своей функции для проверки корректности её работы. В консоль будут выведены результаты и вызовы.</p>

<pre><code class="language-javascript">console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false</code></pre>

<p>Запиши этот код для проверки ментором.</p>

<h4>На что будет обращать внимание ментор при проверке:</h4>

<ul class="list-disc">
  <li>Объявлена функция <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">isEnoughCapacity(products, containerSize)</code></li>
  <li>Вызов <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)</code> возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code></li>
  <li>Вызов <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)</code> возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code></li>
  <li>Вызов <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)</code> возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code></li>
  <li>Вызов <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)</code> возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">false</code></li>
</ul>

<h2 style="margin-bottom: 1.5rem;">Задача 2. Расчет калорий</h2>

<div class="info-block" style="background-color: rgba(0, 150, 255, 0.1); padding: 10px; border-left: 5px solid #0096FF;">
  <p><strong>ℹ️ ВЫПОЛНЯЙ ЭТО ЗАДАНИЕ В ФАЙЛЕ task-2.js</strong></p>
</div>

<p>Напиши функцию <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">calcAverageCalories(days)</code>, которая возвращает среднедневное значение количества калорий, на основании сложения калорий за каждый день. Функция ожидает один параметр: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">days</code> — массив объектов. Каждый объект описывает день и количество калорий <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">{ day, calories }</code>.</p>

<p>Возьми код ниже и вставь после оглашения своей функции для проверки корректности её работы. В консоль будут выведены результаты 3 вызовов.</p>

<pre><code class="language-javascript">console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0</code></pre>

<p>Запиши этот код для проверки ментором.</p>

<h4>На что будет обращать внимание ментор при проверке:</h4>

<ul class="list-disc">
  <li>Объявлена функция <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">calcAverageCalories(days)</code></li>
  <li>Вызов функции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">calcAverageCalories</code> с массивом из 7 дней (~3000 калорий) возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">3180</code></li>
  <li>Вызов функции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">calcAverageCalories</code> с массивом из 7 дней (~2000 калорий) возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">2270</code></li>
  <li>Вызов функции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">calcAverageCalories([])</code> без переданных калорий возвращает <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">0</code></li>
</ul>

<h2 style="margin-bottom: 1.5rem;">Задача 3. Профиль игрока</h2>

<div class="info-block" style="background-color: rgba(0, 150, 255, 0.1); padding: 10px; border-left: 5px solid #0096FF;">
  <p><strong>ℹ️ ВЫПОЛНЯЙ ЭТО ЗАДАНИЕ В ФАЙЛЕ task-3.js</strong></p>
</div>

<p>Объект <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">profile</code> описывает профиль пользователя на игровой платформе. У него свойства хранят имя в профиле <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">username</code> и количество активного игрового времени <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">playTime</code>, проведённого в игре.</p>

<pre><code class="language-javascript">const profile = {
  username: "Jacob",
  playTime: 300,
};</code></pre>

<p>Дополни объект <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">profile</code> методами для работы с его свойствами.</p>

<ul class="list-disc">
  <li>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">changeUsername(newName)</code> должен принимать строку (новое имя) в параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">newName</code> и заменять значение свойства <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">username</code> на новое. Ничего не возвращает.</li>
  <li>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">updatePlayTime(hours)</code> должен принимать число (количество часов) в параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">hours</code> и обновлять на нового значение свойства <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">playTime</code>. Ничего не возвращает.</li>
  <li>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getInfo()</code> должен возвращать строку формата <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"&lt;username&gt; has &lt;quantity&gt; active hours!"</code>, где <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">&lt;username&gt;</code> — имя профиля, а <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">&lt;quantity&gt;</code> — количество игровых часов.</li>
</ul>

<p>Возьми код ниже и вставь после оглашения своей функции для проверки корректности её работы.</p>

<pre><code class="language-javascript">console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"</code></pre>

<p>Запиши этот код для проверки ментором.</p>

<h4>На что будет обращать внимание ментор при проверке:</h4>

<ul class="list-disc">
  <li>Объявлена переменная <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">profile</code></li>
  <li>Значение переменной <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">profile</code> — это объект со свойствами <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">username</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">playTime</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getInfo</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">changeUsername</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">updatePlayTime</code></li>
  <li>Значение свойства <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getInfo</code> — это функция</li>
  <li>Значение свойства <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">changeUsername</code> — это функция</li>
  <li>Значение свойства <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">updatePlayTime</code> — это функция</li>
  <li>Для обращения к свойствам объекта внутри его методов используется <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">this</code></li>
</ul>`,
      },
      topics: [
        {
          id: "js-objects-program",
          title: "Программа модуля",
          order: 0,
          content: `
<p>Привет! В этом модуле мы разберем одно из важнейших понятий в JavaScript — объекты. Не сомневайся, будет интересно!</p>

<h3>Цели модуля 3:</h3>

<ul class="list-disc">
  <li>понять, что такое объект в JavaScript и как его создать;</li>
  <li>научиться добавлять и изменять значения свойств объекта;</li>
  <li>узнать о доступных способах перебора объекта;</li>
  <li>уметь работать с массивом однотипных объектов;</li>
  <li>научиться обращаться к свойству объекта в его методах;</li>
  <li>использовать современный синтаксис spread и rest и понимать его функционал.</li>
</ul>
`,
        },
        {
          id: "js-objects-intro",
          title: "Объекты",
          order: 1,
          content: `
<h2>Создание объекта</h2>

<p>Объекты позволяют описать и сгруппировать характеристики объектов реального мира, например, пользователь, книга, продукт магазина — что угодно. Объекты еще называют словарями, то есть они содержат <strong>термины</strong> (свойства) и их <strong>определения</strong> (значения).</p>

<pre><code class="language-javascript">const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};</code></pre>

<ul class="list-disc">
  <li>Для объявления объекта используются фигурные скобки <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">{}</code> — литерал объекта.</li>
  <li>При создании объекта в него сразу можно добавить <strong>свойства</strong>, но это не обязательно. Каждое свойство обязательно состоит из пары <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">ключ: значение</code>.</li>
  <li><strong>Ключ</strong> также называют именем свойства и это обычно <strong>строка</strong>.</li>
  <li><strong>Значениями</strong> свойства могут быть <strong>любые типы</strong>: примитивы, массивы, объекты, були, функции и т.д.</li>
  <li>Свойства между собой разделяются <strong>запятой</strong>.</li>
</ul>

[QUIZ: js-object-literal-quiz]

[QUIZ: js-object-property-separator-quiz]

[NEXT]

<h3>Вложенные свойства</h3>

<p>Значением свойства может быть другой объект. Это используется для хранения вложенных и сгруппированных данных.</p>

<pre><code class="language-javascript">const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};</code></pre>

<p>Например, статистика пользователя социальной сети <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">stats</code> состоит из количества подписчиков, просмотров и лайков, и хранить эти данные удобнее всего в виде объекта. То же самое с местоположением <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">location</code>, отдельно страна и город.</p>

<p>В будущем это можно будет использовать для поиска пользователей по стране, городу, минимальному или максимальному количеству подписчиков и т.д.</p>

[QUIZ: js-object-property-type-quiz]

[NEXT]

<h3>Доступ к свойствам через точку</h3>

<p>Первый способ получить доступ к свойству объекта — это синтаксис <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">objectName.key</code>.</p>

<ul class="list-disc">
  <li>На место обращения будет возвращено значение свойства с таким ключом.</li>
  <li>Если в объекте отсутствует свойство с таким ключом, на место обращения вернется <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">undefined</code>.</li>
</ul>

<p>В большинстве случаев синтаксис «через точку» используется тогда, когда мы заранее знаем имя (ключ) свойства, к которому хотим получить доступ.</p>

<pre><code class="language-javascript">const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined</code></pre>

<h4>Прочитай пример кода</h4>

<pre><code class="language-javascript">const user = {
  firstName: "Jacob",
  lastName: "Mercer"
}</code></pre>

[QUIZ: js-object-dot-notation-quiz]

[NEXT]

<h3>Доступ к вложенным свойствам</h3>

<p>Для доступа к вложенным свойствам используется цепочка обращений «через точку».</p>

<p><strong>Значение свойства — это вложенный объект.</strong></p>

<p>Если необходимо получить значение страны пользователя, записываем <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">user.location.country</code>, где:</p>

<ul class="list-disc">
  <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">user.location</code> — это обращение (путь) к объекту в свойстве <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">location</code>,</li>
  <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">user.location.country</code> — обращение к свойству <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">country</code> в этом объекте.</li>
</ul>

<p>То есть «точка» указывает следующую вложенность.</p>

<pre><code class="language-javascript">const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"</code></pre>

<p><strong>Значение свойства — это массив.</strong></p>

<p>Если значение свойства — это массив, то в нашем примере выше обращение к этому массиву будет: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">user.hobbies</code></p>

<pre><code class="language-javascript">const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]</code></pre>

<p>Получить доступ к <strong>элементам массива</strong> можно через квадратные скобки и индекс: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">user.hobbies[0];</code></p>

<pre><code class="language-javascript">const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"</code></pre>

<p>Также можно использовать свойства и <strong>методы массива</strong>, например получить значение его длины со свойством length: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">user.hobbies.length;</code></p>

<pre><code class="language-javascript">const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3</code></pre>

[NEXT]

<h3>Доступ к свойствам через квадратные скобки</h3>

<p>Второй способ получить доступ к свойству объекта — это синтаксис <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">objectName["key"]</code>.</p>

<p>Похоже на обращение к элементу массива с отличием. Отличие заключается в том, что в квадратных скобках указывается не индекс элемента, а строка с ключом (именем свойства).</p>

<p>Синтаксис «квадратных скобок» используется значительно реже. Как правило, в случаях, когда имя свойства заранее не известно или оно хранится в переменной, например, как значение параметра функции.</p>

<ul class="list-disc">
  <li>На место обращения будет возвращено значение свойства с таким именем.</li>
  <li>Если в объекте отсутствует свойство с таким именем, на место обращения вернется <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">undefined</code>.</li>
</ul>

<pre><code class="language-javascript">const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book.title); // "The Last Kingdom"
console.log(book["title"]); // "The Last Kingdom"

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book.propKey); // undefined
console.log(book[propKey]); // "Bernard Cornwell"</code></pre>

<p>В примере выше:</p>

<ul class="list-disc">
  <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">console.log(book.propKey);</code> — это <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">undefined</code>, поскольку в объекте <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">book</code> нет свойства с ключом <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">propKey</code>.</li>
  <li><code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">console.log(book[propKey]);</code> — это <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"Bernard Cornwell"</code>, поскольку значением переменной <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">propKey</code> является строка <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">"author"</code>, и в объекте <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">book</code> есть свойство с ключом <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">author</code>, то эта запись вернет значение свойства author.</li>
</ul>

<h4>Прочитай фрагмент кода</h4>

<pre><code class="language-javascript">const user = {
  firstName: "Jacob",
  lastName: "Mercer"
}</code></pre>

[QUIZ: js-object-bracket-notation-quiz]

[NEXT]

<h3>Изменение значения свойств</h3>

<p>После того как объект создан, значение его свойств можно изменить. Для этого необходимо обратиться к ним по ключу, например, «через точку», и присвоить новое значение.</p>

<pre><code class="language-javascript">const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]</code></pre>

[NEXT]

<h3>Добавление свойств</h3>

<p>Операция добавления нового свойства после создания объекта ничем не отличается от изменения значения уже существующего свойства.</p>

<p>Если во время записи значения по ключу такое свойство отсутствует в объекте, оно будет создано.</p>

<pre><code class="language-javascript">const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]</code></pre>

[NEXT]

<h3>Короткие свойства</h3>

<p>Иногда при создании объекта значение свойства необходимо взять из переменной или параметра функции с таким же именем, как и само свойство.</p>

<p>Синтаксис в следующем примере слишком громоздкий, ведь приходится дублировать имя свойства и имя переменной, в которой хранится необходимое значение: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">name: name</code>, и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">age: age</code>.</p>

<pre><code class="language-javascript">const name = "Henry Sibola";
const age = 25;

const user = {
  name: name,
  age: age,
};

console.log(user.name); // "Henry Sibola"
console.log(user.age); // 25</code></pre>

<p>Синтаксис <strong>коротких свойств</strong> (shorthand properties) решает эту проблему, позволяя использовать имя переменной как имя свойства, а ее значение как значение свойства.</p>

<pre><code class="language-javascript">const name = "Henry Sibola";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Henry Sibola"
console.log(user.age); // 25</code></pre>

<p>Вместо <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">name: name</code>, использовали <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">name</code>.</p>
<p>А вместо <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">age: age</code> — <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">age</code>.</p>

<p>То есть во время объявления объекта достаточно указать только имя свойства, а значение будет взято из переменной с аналогичным именем.</p>

[NEXT]

<h3>Вычисляемые свойства</h3>

<p>Бывают ситуации, когда во время объявления объекта необходимо добавить свойство с именем, которое мы заранее не знаем, потому что оно хранится как значение переменной или как результат выполнения функции.</p>

<p>Раньше для этого необходимо было сначала создать объект, а потом добавлять свойства через квадратные скобки, что не совсем удобно.</p>

<pre><code class="language-javascript">const propName = "name";
const user = {
  age: 25,
};

user[propName] = "Henry Sibola";
console.log(user.name); // "Henry Sibola"</code></pre>

<p>Синтаксис <strong>вычисляемых свойств</strong> (computed properties) помогает избежать лишнего кода и в некоторых случаях упростить его.</p>

<p>Значением вычисляемого свойства может быть любое валидное выражение.</p>

<pre><code class="language-javascript">const propName = "name";
const user = {
  age: 25,
  // ключ этого свойства будет взят из значения переменной propName
  [propName]: "Henry Sibola",
};

console.log(user.name); // "Henry Sibola"</code></pre>

[NEXT]
`,
        },
        {
          id: "js-objects-iteration",
          title: "Перебор объекта",
          order: 2,
          content: `
<h3>Цикл for...in</h3>

<p>В отличие от массива или строки, объект — это <strong>не итерируемая сущность</strong>, то есть его нельзя перебрать циклами <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for</code> или <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code>.</p>

<p>Для перебора объектов используется специальный цикл <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...in</code>, который перебирает ключи объекта <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">object</code>.</p>

<pre><code class="language-javascript">for (key in object) {
  // инструкции
}</code></pre>

<p>Переменная <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">key</code> доступна только в теле цикла. На каждой итерации в нее будет записано значение ключа (имени) свойства.</p>

<p>Для того чтобы получить значение свойства с таким ключом (именем), используется синтаксис квадратных скобок.</p>

<pre><code class="language-javascript">const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  console.log(key); // Ключ
  console.log(book[key]); // Значение свойства с таким ключом
}</code></pre>

[QUIZ: js-for-in-quiz]

[NEXT]

<h3>Метод Object.keys()</h3>

<p>У встроенного класса <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Object</code> есть несколько полезных методов для работы с объектами. Первый из них — это <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Object.keys(object)</code>, который принимает объект и возвращает массив ключей его свойств. Если в объекте нет свойств, метод вернет пустой массив.</p>

<pre><code class="language-javascript">const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']</code></pre>

<p>Скомбинировав результат <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Object.keys()</code> и цикл <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code>, можно удобно перебрать свойства объекта, не прибегая к использованию цикла <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...in</code>.</p>

<pre><code class="language-javascript">const book = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  console.log(key); // Ключ
  console.log(book[key]); // Значение свойства
}</code></pre>

<p>Мы перебираем массив ключей объекта и на каждой итерации получаем ключ и значение свойства.</p>

[QUIZ: js-object-keys-quiz]

[NEXT]

<h3>Метод Object.values()</h3>

<p>Если метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Object.keys(object)</code> возвращает массив имен свойств объекта (т.е. ключи), то метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Object.values(object)</code> возвращает <strong>массив значений его свойств</strong>.</p>

<p>Если в объекте отсутствуют свойства, метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Object.values(object)</code> вернет пустой массив.</p>

<pre><code class="language-javascript">const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]</code></pre>

<p>Массив значений свойств также можно перебрать циклом <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code>, например для получения общей суммы числовых значений.</p>

[QUIZ: js-object-values-quiz]

[NEXT]
`,
        },
        {
          id: "js-objects-array",
          title: "Массив объектов",
          order: 3,
          content: `
<p>Объекты позволяют сгруппировать описательные характеристики сущности, например, пользователя, книги, автомобиля, шоколадного батончика и т.д.</p>

<p>Для описания группы сущностей используется <strong>массив объектов</strong>.</p>

<p>Представь, что нужно описать библиотеку. Каждая книга — это отдельный объект, который содержит информацию о названии, авторе, количестве страниц, рейтинге и т.д. Если книга — это один объект, то библиотека — это коллекция книг, то есть массив объектов.</p>

<pre><code class="language-javascript">const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Tell-Tale Heart",
    author: "Edgar Allan Poe",
    rating: 7.75,
  }
];</code></pre>

<p>В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. Это означает, что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.</p>

<p>Для перебора такого массива используется стандартный цикл <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code>. Значения свойств каждого объекта можно получить, используя синтаксис «через точку» (см. тему <strong>Объекты</strong>. <em>Доступ к свойствам через точку</em>), поскольку в каждом объекте набор свойств и их имена будут одинаковыми, отличаться будут только значения.</p>

<pre><code class="language-javascript">for (const book of books) {
  console.log(book); // Объект книги
  console.log(book.title); // Название
  console.log(book.author); // Автор
  console.log(book.rating); // Рейтинг
}</code></pre>

[NEXT]

<h3>Поиск объекта по значению свойства</h3>

<p>Стандартная задача при работе с массивом объектов — это поиск объекта по значению свойства. Например, нужно найти книгу по ее автору. Для этого необходимо:</p>

<ul class="list-disc">
  <li>перебрать массив в цикле;</li>
  <li>добавить условие, выполнение которого будет означать успешный результат поиска.</li>
</ul>

<pre><code class="language-javascript">const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Tell-Tale Heart", author: "Edgar Allan Poe" }
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
  if (book.author === authorToSearchFor) {
    console.log(book);
    console.log(book.title);
    console.log(book.rating);
  }
}</code></pre>

<p>В примере выше цикл <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for</code> перебирает объекты в массиве, пока не найдет тот, у которого сравнение значения свойства <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">author</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">authorToSearchFor</code> вернет <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">true</code>. Как только объект с нужным автором найден, выполняется тело <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code>, где мы уже можем работать с найденным объектом.</p>

[NEXT]

<h3>Коллекция значений свойства</h3>

<p>Типичная задача при работе с конлекцией объектов — это получение массива всех значений определенного свойства объектов. Например, взять из массива объектов, которые описывают книги, все названия или рейтинг.</p>

<p>Для этого необходимо:</p>

<ol class="list-decimal">
  <li>Создать новый пустой массив для хранения значений свойств.</li>
  <li>Перебрать массив объектов в цикле.</li>
  <li>На каждой итерации добавлять в новый массив значение необходимого свойства.</li>
</ol>

<p>Например, получим список названий всех книг в коллекции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">books</code>.</p>

<pre><code class="language-javascript">const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 6.8 }
];

const titles = [];

for (const book of books) {
  titles.push(book.title)
}

console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Tell-Tale Heart"]</code></pre>

<p>В результате получится массив значений определенного свойства из всех объектов.</p>

<p>Узнаем средний рейтинг всей нашей коллекции. Для этого надо сложить все рейтинги и разделить полученное значение на количество книг.</p>

<pre><code class="language-javascript">const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 6.8 }
];

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = totalRating / books.length;
console.log(averageRating); // 8</code></pre>

[NEXT]
`,
        },
        {
          id: "js-objects-methods",
          title: "Методы объекта",
          order: 4,
          content: `
<p>До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных (например, данные о книге). <strong>Объекты-хранилища</strong> обычно содержатся в массиве таких же объектов. Этот массив является коллекцией однотипных элементов.</p>

<p>А что, если нам нужно создать функции для выполнения операций над массивом данных? Например, добавление или удаление книги. И эти функции должны выполняться много раз.</p>

<pre><code class="language-javascript">// ❌ Слабосвязанные, независимые сущности
const books = ["The Last Kingdom", "Dream Guardian"];
function getBooks() {}
function addBook() {}</code></pre>

<p>Один из вариантов — объявить переменную <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">books</code> и две функции <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getBooks()</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">addBook(bookName)</code>.</p>

<p>Этот способ имеет недостатки. Ведь мы имеем три независимые сущности без явной синтаксической связи и со слабой логической связью. Есть решение лучше. Объекты могут хранить не только данные, но и функции для работы с этими данными. Если значение свойства — это функция, такое свойство называется <strong>методом объекта</strong>.</p>

<pre><code class="language-javascript">const obj = {
  method(value) {
    console.log(\`I'm a method with \${value}!\`);
  }
};

obj.method(5); // "I'm a method with 5!"
obj.method(10); // "I'm a method with 10!"</code></pre>

<ul class="list-disc">
  <li>Метод — это обычная функция, объявленная как свойство объекта (см. пример выше), а не как отдельная переменная (см. первый пример в разделе).</li>
  <li>Для обращения к методу объекта используется стандартный синтаксис с точкой.</li>
</ul>

<p>Объекты, которые связывают данные и методы для работы с этими данными, можно назвать «моделями».</p>

<p>Создадим объект <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">bookShelf</code> для коллекции книг <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">books</code> и методов взаимодействия с коллекцией <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getBooks</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">addBook</code>.</p>

<pre><code class="language-javascript">// ✅ Логически и синтаксически сгруппированные сущности
const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  // Это метод объекта
  getBooks() {
    return "Returning all books";
  },
  // Это метод объекта
  addBook(bookName) {
    return \`Adding book \${bookName}\`;
  },
};

// Вызовы методов
bookShelf.getBooks(); // вернет "Returning all books"
bookShelf.addBook("New book 1"); // вернет "Adding book New book 1"
bookShelf.addBook("New book 2"); // вернет "Adding book New book 2"</code></pre>

[NEXT]

<h3>Доступ к свойствам объекта</h3>

<p>Методы используются для работы со свойствами объекта и их изменения. Для <strong>доступа к объекту</strong> в методе используется не имя переменной этого объекта, например <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">bookShelf</code>, а ключевое слово <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">this</code>.</p>

<p>Ключевое слово <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">this</code> — это контекст выполнения функции.</p>

<pre><code class="language-javascript">const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    console.log(this);
  }
};

bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}</code></pre>

<p>Значением <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">this</code> будет ссылка на объект перед «точкой», то есть объект, который вызвал этот метод, в нашем случае — это ссылка на объект <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">bookShelf</code>.</p>

<img src="/images/module-3/this-arrow-1.png" alt="Доступ к this" class="img-responsive" />

<p>Для <strong>доступа к свойствам объекта</strong> в методах обращаемся к нему через <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">this</code> и дальше, стандартно, «через точку» к свойствам.</p>

<pre><code class="language-javascript">const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books;
  }
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]</code></pre>

<img src="/images/module-3/this-arrow-2.png" alt="Доступ к свойству через this" class="img-responsive" />

<p>Логично задуматься, почему бы не использовать имя объекта в обращении к свойствам?</p>

<p>Ведь мы явно не собираемся его менять.</p>

<p>Дело в том, что имя объекта — вещь ненадежная. Методы одного объекта можно копировать в другой (с другим именем), а в будущем узнаем, что часто при создании объекта мы заранее совсем не знаем имени. Использование <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">this</code> гарантирует, что метод работает именно с тем объектом, который его вызвал.</p>

[QUIZ: js-object-this-quiz]

[NEXT]

<h3>Изменение по ссылке</h3>

<p>В свойстве <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">books</code> объекта <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">bookShelf</code> хранится массив.</p>

<p>Следовательно, мы можем изменять массив по ссылке, обращаясь к свойству <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">bookShelf.books</code>, потому что это ссылка на массив.</p>

<pre><code class="language-javascript">const bookShelf = {
  books: ["The Last Kingdom"],
};

bookShelf.books.push("The Mist");
console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]</code></pre>

<p>В примере ниже в ключевом слове <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">this</code> хранится ссылка на объект, который вызвал соответствующий метод.</p>

<p>Во время обращения к <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">this.books</code> внутри метода, мы ссылаемся на массив, который хранится в свойстве <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">books</code>. Это значит, что его можно изменять по ссылке, например, использовав метод массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">push()</code> для добавления нового элемента.</p>

<pre><code class="language-javascript">const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  }
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]</code></pre>

<p>При этом из метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">addBook</code> не нужно ничего возвращать, если этого не требует задача. Во время его вызова мы просто меняем значение массива по ссылке — и элементы массива в свойстве <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">books</code> изменяются.</p>

[NEXT]

<h3>Массив объектов</h3>

<p>Вы уже знаете, что объект позволяет сгруппировать характеристики сущности, например, книги.</p>

<p>Поэтому чаще всего мы будем работать с массивом объектов. Для этого будем хранить в свойстве <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">books</code> не строки, а объекты с названием книги и рейтингом, а в будущем, возможно, и другими характеристиками.</p>

<pre><code class="language-javascript">const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 }
  ],
  getBooks() {
    return this.books;
  }
};</code></pre>

<p>Теперь метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getBooks</code> будет возвращать массив объектов. А метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">addBook</code> ожидает в параметре не строку, а объект книги и добавляет его в массив в свойстве <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">books</code>.</p>

<pre><code class="language-javascript">const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 }
  ],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  }
};

bookShelf.addBook({ title: "Dream Guardian", rating: 9 });</code></pre>

<p>При переборе массива в свойстве <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">books</code> надо помнить, что это массив объектов. Например, добавим метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getAverageRating()</code>, который будет возвращать средний рейтинг книг. Для этого:</p>

<ul class="list-disc">
  <li>Объявим новый метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getAverageRating</code> в объекте.</li>
  <li>Объявим переменную <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">totalRating</code> для хранения общего рейтинга.</li>
  <li>Переберем массив книг по ссылке <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">this.books</code> в цикле <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code>.</li>
  <li>На каждой итерации добавим к общему рейтингу — рейтинг книги.</li>
  <li>После завершения цикла вернем результат деления общего рейтинга на количество книг.</li>
</ul>

<pre><code class="language-javascript">const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getAverageRating() {
    let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }

    return totalRating / this.books.length;
  },
};

bookShelf.getAverageRating(); // 7</code></pre>

[NEXT]

<h3>Изменение объекта в массиве</h3>

<p>Целая группа задач сводится к изменению значения свойства определенного объекта в массиве. Например, изменение рейтинга книги. Поиск необходимого объекта в массиве выполняется по уникальному значению свойства, например, по названию книги.</p>

<pre><code class="language-javascript">const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  changeRating(bookName, newRating) {
  }
};</code></pre>

<p>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">changeRating</code> ожидает на название книги, которой необходимо изменить рейтинг, и новое значение рейтинга, которое нужно подставить в объект. Процесс изменения свойств объекта в массиве начинается со следующих шагов:</p>

<ul class="list-disc">
  <li>Перебор массива объектов в цикле, например <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">for...of</code>.</li>
  <li>Добавление проверки совпадения значения свойства объекта на текущей итерации и заданного значения.</li>
</ul>

<pre><code class="language-javascript">const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  changeRating(bookName, newRating) {
    for(const book of this.books) {
      if(book.title === bookName) {
        // Нашли необходимый объект по названию книги
      }
    }
  }
};</code></pre>

<p>При выполнении <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">if</code> мы можем быть уверены, что на данной итерации в переменной <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">book</code> находится ссылка на необходимый нам объект, поскольку объекты передаются по ссылке. Теперь достаточно обратиться к свойству этого объекта и присвоить ему новое значение.</p>

<pre><code class="language-javascript">const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  changeRating(bookName, newRating) {
    for(const book of this.books) {
      if(book.title === bookName) {
        book.rating = newRating;
      }
    }
  }
};

bookShelf.changeRating("The Mist", 9);
bookShelf.changeRating("The Last Kingdom", 4);</code></pre>

<p>После вызова метода <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">changeRating</code> свойство <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">rating</code> объекта с названием, которое совпадает с <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">bookName</code>, будет обновлено на <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">newRating</code>.</p>

[NEXT]
`,
        },
        {
          id: "js-spread-rest",
          title: "Синтаксис spread и rest",
          order: 5,
          content: `
<h3>Остаточные параметры</h3>

<p>Мы уже знаем, что вызвать функцию можно <strong>с любым количеством аргументов</strong> независимо от того, как она была определена. Лишние аргументы не вызовут ошибку.</p>

<pre><code class="language-javascript">function multiply(a, b) {
  console.log(a, b)
}

multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2
multiply(1, 2, 3, 4); // 1 2</code></pre>

<p>В примере выше проблема в том, что аргументов больше, чем параметров. И будут использованы только первые два аргумента — по количеству объявленных параметров.</p>

<p>Мы уже умеем решать такие задачи, используя псевдомассив <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">arguments</code>, в который собираются все переданные аргументы.</p>

<pre><code class="language-javascript">function multiply() {
  console.log(arguments)
}

multiply(1, 2); // псевдомассив [1, 2]
multiply(1, 2, 3); // псевдомассив [1, 2, 3]
multiply(1, 2, 3, 4); // псевдомассив [1, 2, 3, 4]</code></pre>

<p>Начиная со стандарта ES6, появилась концепция остаточных параметров (<code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">...rest</code>). Это специальный синтаксис, который позволяет собрать группу независимых элементов в массив.</p>

<pre><code class="language-javascript">function multiply(...args) {
  console.log(args);
}

multiply(1, 2); // [1, 2]
multiply(1, 2, 3); // [1, 2, 3]
multiply(1, 2, 3, 4); // [1, 2, 3, 4]</code></pre>

<p>Остаточные параметры могут быть обозначены через три точки <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">...</code>. Буквально это означает: "собери параметры, которые остались, и положи их в массив". Имя параметра может быть произвольным. Чаще всего его называют <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">args</code> или <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">rest</code>.</p>

[QUIZ: js-rest-parameters-quiz]

[NEXT]

<h3>Сбор части аргументов</h3>

<p>Операция <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">...rest</code> также позволяет собрать в массив только ту часть аргументов, которая необходима. Для этого нужно объявить параметры до "сбора". Можно положить первые несколько параметров в переменные, а остальные — собрать в массив.</p>

<pre><code class="language-javascript">function multiply(first, second, ...args) {
  console.log(first, second, args);
}

multiply(1, 2); // 1 2 []
multiply(1, 2, 3); // 1 2 [3]
multiply(1, 2, 3, 4); // 1 2 [3, 4]</code></pre>

<p>Все аргументы, для которых будут объявлены параметры, передадут им свои значения, остальные аргументы будут содержаться в массиве.</p>

<ul class="list-disc">
  <li>В параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">first</code> будет помещен первый аргумент.</li>
  <li>В параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">second</code> будет помещен второй аргумент.</li>
  <li>В параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">args</code> будет помещен массив из остальных аргументов.</li>
</ul>

<p>Операция <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">rest</code> собирает остаток всех аргументов, а потому должна всегда быть последней в подписи функции, иначе возникнет ошибка <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">SyntaxError: Rest parameter must be last formal parameter</code>.</p>

<p>Это вызовет ошибку:</p>

<pre><code class="language-javascript">function multiply(first, ...args, second) {
}</code></pre>

<p>Это также вызовет ошибку:</p>

<pre><code class="language-javascript">function multiply(...args, first, second) {
}</code></pre>

[NEXT]

<h3>Вхождение параметров</h3>

<p>Ты уже знаешь, как получить массив из списка аргументов.</p>

<p>Иногда нужно сделать обратное — передать массив поэлементно в функцию, которая вызывается. Например, есть встроенная функция <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math.max()</code>, которая ищет и возвращает наибольший из аргументов (чисел), то есть ожидает не массив значений, а произвольное количество аргументов.</p>

<pre><code class="language-javascript">Math.max(14, -4, 25, 8, 11);</code></pre>

<p>Представь, что есть массив температур в виде чисел <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">[14, -4, 25, 8, 11]</code>.</p>

<p>Как вызвать для него <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Math.max</code>? Ведь он ожидает получить список чисел, а не один массив.</p>

<pre><code class="language-javascript">const temps = [14, -4, 25, 8, 11];

console.log(temps); // [14, -4, 25, 8, 11]

// ❌ Так не сработает, потому что передаем целый массив
console.log(Math.max(temps)); // NaN</code></pre>

<p>Тут целесообразно использовать оператор распыления <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">...spread</code>.</p>

<p>Он похож на остаточные параметры — тоже использует <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">...</code>, но делает абсолютно противоположное. Когда функционал <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">...spread</code> используется при вызове функции, он преобразует массив в список аргументов.</p>

<pre><code class="language-javascript">const temps = [14, -4, 25, 8, 11];

console.log(...temps); // 14 -4 25 8 11 набор отдельных чисел

// ✅ Передаем коллекцию элементов в качестве отдельных аргументов
console.log(Math.max(...temps)); // 25</code></pre>

[NEXT]

<h3>Создание массива</h3>

<p>Операция <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">...spread</code> позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. До сих пор для этого использовались методы <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">slice()</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">concat()</code>, но операция распыления позволяет сделать то же самое в более короткой форме.</p>

<p>Рассмотрим пример ниже, где создана копия массива.</p>

<pre><code class="language-javascript">const temps = [14, -4, 25, 8, 11];

// Это точная, но независимая копия массива temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]</code></pre>

<p>Представь, что <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">temps</code> — это ящик яблок, и мы хотим создать его точную копию. Берем пустой ящик и пересыпаем в него яблоки из исходного ящика <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">temps</code> — распределяем его в другую коллекцию. При таком условии ящик <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">temps</code> не изменится, в нем все еще будут яблоки, а в новом ящике — их точные копии.</p>

<p>В следующем примере мы ссыпаем яблоки из двух ящиков в один новый.</p>

<p>Оригинальные ящики (массивы) не изменятся, а в новом будут копии всех их яблок (элементов). Порядок распределения важен — он влияет на порядок элементов в новой коллекции.</p>

<pre><code class="language-javascript">const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]</code></pre>

[NEXT]

<h3>Создание объекта</h3>

<p>Операция <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">spread</code> позволяет распылить свойства произвольного количества объектов в один новый.</p>

<pre><code class="language-javascript">const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }</code></pre>

<p>Порядок распределения имеет значение. Имена свойств объекта — уникальны, поэтому свойства объекта, которые распыляются, могут перезаписать значения уже существующего свойства, если их имена совпадают.</p>

<pre><code class="language-javascript">const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }</code></pre>

<p>Если бы яблоки в ящике имели наклейки с пометками, то в одном ящике не могло бы быть двух яблок с одинаковыми пометками. Поэтому, пересыпая второй ящик, все яблоки, метки которых будут совпадать с теми, что уже находятся в новом ящике, заменят существующие.</p>

<p>Во время распыления можно добавлять свойства в произвольное место. Главное помнить об уникальности имени свойства и о том, что его значение может быть перезаписано.</p>

<pre><code class="language-javascript">const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }</code></pre>

[QUIZ: js-spread-object-quiz]

[NEXT]
`,
        },
      ],
    },
    {
      slug: "module-4-array-methods",
      title: "Модуль 4. Перебирающие методы массивов",
      description:
        "Изучаем перебирающие методы массивов: forEach, map, filter, find, reduce и другие.",
      order: 3,
      videoUrl: null,
      resources: [
        {
          type: "video",
          title: "Модуль 4. Занятие 1. Перебирающие методы массивов",
          url: "https://www.youtube.com/watch?v=Tn0VcQLhR6g",
        },
        {
          type: "video",
          title: "Модуль 4. Занятие 2. Перебирающие методы массивов",
          url: "https://www.youtube.com/watch?v=tJjxVHDQuwQ",
        },
      ],
      homework: {
        id: "js-array-methods-hw",
        title: "Домашнее задание: Перебирающие методы массивов",
        description: `<h2 style="margin-bottom: 1.5rem;">Критерии приема</h2>

<p>Время быстро летит, не так ли?</p>

<p><strong>Модуль 4 почти пройден! 💪</strong></p>

<p>После изучения материалов этого модуля ты:</p>

<ul class="list-disc">
  <li>понимаешь принцип работы колбек-функций и стрелочных функций</li>
  <li>умеешь применять эти функции на практике</li>
  <li>знаешь, как работать с массивом объектов</li>
  <li>знаешь такие методы массивов, как: <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">forEach</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">map</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">flatMap</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">filter</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">find</code> и <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">every</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">some</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">reduce</code>, <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">toSorted</code></li>
  <li>умеешь настраивать свой порядок сортировки чисел и строк</li>
  <li>знаешь, как использовать методы массива в ланцюжках</li>
</ul>

<p>А теперь давай перейдем к практике!</p>
<p>На тебя чекают 4 задачи, в каждой из которых нужно использовать изученные методы массивов!</p>

<div class="attention-block" style="background-color: rgba(255, 165, 0, 0.1); padding: 10px; border-left: 5px solid orange;">
  <p>⚠️ После внесения изменений в свой репозиторий, подождите, пожалуйста, 5 минут перед отправкой работы на проверку. Ведь гитхабу необходимо время, чтобы обновить версию</p>
</div>

<h2 style="margin-bottom: 1.5rem;">Домашнее задание №4</h2>

<ul class="list-disc">
  <li>Создай репозиторий <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">goit-js-hw-04</code> та склонируй его себе на компьютер.</li>
  <li>В папке <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">goit-js-hw-04</code> создай структуру проекта, как показано на схеме ниже.</li>
</ul>

<ul class="list-disc">
  <li>Прочитай каждое задание и выполни его в соответствующем файле.</li>
  <li>Убедись, что код отформатирован с помощью <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">Prettier</code>, а в консоли отсутствуют ошибки и предупреждения при открытии живой страницы задания.</li>
  <li>Сдай домашнее задание на проверку.</li>
</ul>

<p><strong>Формат сдачи:</strong> Домашняя работа содержит два ссылки: на исходные файлы и рабочую страницу на <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">GitHub Pages</code>.</p>

<h2 style="margin-bottom: 1.5rem;">Задача 1. Имена пользователей</h2>

<div class="info-block" style="background-color: rgba(0, 150, 255, 0.1); padding: 10px; border-left: 5px solid #0096FF;">
  <p><strong>ℹ️ Выполняй это задание в файле task-1.js</strong></p>
</div>

<p>Напиши стрелочную функцию <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getUserNames(users)</code>, которая принимает один параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code> — массив объектов пользователей. Функция должна возвращать массив имён всех пользователей (свойство <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">name</code>) из массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code>.</p>

<p>Возьми код ниже и вставь после объявления своей функции для проверки корректности её работы. В консоль будут выведены результаты её вызовов.</p>

<pre><code class="language-javascript">console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]</code></pre>

<p>Запиши этот код для проверки ментором.</p>

<h4>На что будет обращать внимание ментор при проверке:</h4>

<ul class="list-disc">
  <li>Объявлена переменная <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getUserNames</code></li>
  <li>Значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getUserNames</code> — это присвоена стрелочная функция с параметром <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">(users)</code>.</li>
  <li>Для перебора параметра <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code> используется метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">map()</code></li>
  <li>Вызов функции из зазначению массива пользователей возвращает массив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]</li>
  <li>Вызов функции с випадковими, но валидными аргументами возвращает правильные значения</li>
</ul>

<h2 style="margin-bottom: 1.5rem;">Задача 2. Пользователь с другом</h2>

<div class="info-block" style="background-color: rgba(0, 150, 255, 0.1); padding: 10px; border-left: 5px solid #0096FF;">
  <p><strong>ℹ️ Выполняй это задание в файле task-2.js</strong></p>
</div>

<p>Напиши стрелочную функцию <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getUsersWithFriend(users, friendName)</code>, которая принимает два параметра:</p>

<ul class="list-disc">
  <li>первый параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code> — массив объектов пользователя</li>
  <li>второй параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">friendName</code> — имя друга для поиска</li>
</ul>

<p>Функция должна возвращать массив всех пользователей из массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code>, у которых есть друг с именем <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">friendName</code>. Друзья каждого пользователя хранятся в свойстве <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">friends</code>. Если пользователей с таким другом нет, функция должна возвращать пустой массив.</p>

<p>Подсказки:</p>
<ul class="list-disc">
  <li>Метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">filter()</code> можно использовать для создания нового массива с элементами, которые удовлетворяют нужному условию.</li>
  <li>Используй метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">includes()</code> для проверки, содержит ли массив <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">friends</code> значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">friendName</code>.</li>
</ul>

<p>Возьми код ниже и вставь после объявления своей функции для проверки корректности её работы. В консоль будут выведены результаты её вызовов.</p>

<pre><code class="language-javascript">const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// [{ name: "Sharlene Bush", ... }, { name: "Sheree Anthony", ... }]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [{ name: "Elma Head", ... }, { name: "Sheree Anthony", ... }]

console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []</code></pre>

<p>Запиши этот код для проверки ментором.</p>

<h4>На что будет обращать внимание ментор при проверке:</h4>

<ul class="list-disc">
  <li>Объявлена переменная <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getUsersWithFriend</code></li>
  <li>Значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getUsersWithFriend</code> — это стрелочная функция с параметрами <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">(users, friendName)</code></li>
  <li>Для перебора параметра <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code> используется метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">filter()</code></li>
  <li>Если значение параметра <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">friendName</code> — это строка "Briana Decker", функция возвращает массив объектов пользователей Sharlene Bush і Sheree Anthony</li>
  <li>Если значение параметра <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">friendName</code> — это строка "Goldie Gentry", функция возвращает массив объектов пользователей Elma Head і Sheree Anthony</li>
  <li>Если значение параметра <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">friendName</code> — это строка "Adrian Cross", функция возвращает пустой массив</li>
  <li>Вызов функции с випадковими, але валидными аргументами возвращает правильные значения</li>
</ul>

<h2 style="margin-bottom: 1.5rem;">Задача 3. Сортировка по количеству друзей</h2>

<div class="info-block" style="background-color: rgba(0, 150, 255, 0.1); padding: 10px; border-left: 5px solid #0096FF;">
  <p><strong>ℹ️ Выполняй это задание в файле task-3.js</strong></p>
</div>

<p>Напиши стрелочную функцию <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">sortByDescendingFriendCount(users)</code>, которая принимает один параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code> — массив объектов пользователя.</p>

<p>Функция должна полностью вернуть объекты из массива <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code>, отсортированные, но в убывающем порядке количества их друзей (свойство <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">friends</code>).</p>

<p>Возьми код ниже и вставь после объявления своей функции для проверки корректности её работы. В консоль будут выведены все рузультати её работы.</p>

<pre><code class="language-javascript">console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    },
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    }
  ])
);
// Результат: сортировка по убыванию числа друзей</code></pre>

<p>Запиши этот код для проверки ментором.</p>

<h4>На что будет обращать внимание ментор при проверке:</h4>

<ul class="list-disc">
  <li>Объявлена переменная <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">sortByDescendingFriendCount</code></li>
  <li>Значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">sortByDescendingFriendCount</code> — это стрелочная функция с параметром <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">(users)</code></li>
  <li>Для перебора параметра <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code> используется метод <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">toSorted()</code></li>
  <li>Вызов функции возвращает новый массив пользователей, отсортированных по убыванию количества их друзей</li>
  <li>Вызов функции с випадковими, але валидными аргументами возвращает правильные значения</li>
</ul>

<h2 style="margin-bottom: 1.5rem;">Задача 4. Общий баланс</h2>

<div class="info-block" style="background-color: rgba(0, 150, 255, 0.1); padding: 10px; border-left: 5px solid #0096FF;">
  <p><strong>ℹ️ Выполняй это задание в файле task-4.js</strong></p>
</div>

<p>Напиши стрелочную функцию <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getTotalBalanceByGender(users, gender)</code>, которая принимает два параметра:</p>

<ul class="list-disc">
  <li>первый параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code> — массив объектов пользователей,</li>
  <li>второй параметр <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">gender</code> — строка, что сохраняет стать.</li>
</ul>

<p>Функция должна использовать ланцюжок вызова методов и возвращать общий баланс пользователей (свойство <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">balance</code>), стать которых (свойство <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">gender</code>) сбігається со значением параметра <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">gender</code>.</p>

<p>Возьми код ниже и вставь после объявления своей функции для проверки корректности её работы. В консоль будут выведены результаты её вызовов.</p>

<pre><code class="language-javascript">const clients = [
  {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863</code></pre>

<p>Запиши этот код для проверки ментором.</p>

<h4>На что будет обращать внимание ментор при проверке:</h4>

<ul class="list-disc">
  <li>Объявлена переменная <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getTotalBalanceByGender</code></li>
  <li>Значение <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">getTotalBalanceByGender</code> — это стрелочная функция с параметрами <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">(users, gender)</code></li>
  <li>В теле функции используется ланцюжок методов в правильном порядке</li>
  <li>Значения параметра <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">users</code> не изменяются</li>
  <li>Если значение параметра <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">gender</code> — это строка "male", функция возвращает число 12053</li>
  <li>Если значение параметра <code style="background-color: rgba(255, 255, 255, 0.2); padding: 2px 5px; border-radius: 4px;">gender</code> — это строка "female", функция возвращает число 8863</li>
  <li>Вызов функции с випадковими, але валидными аргументами возвращает правильные значения</li>
</ul>`,
      },
      topics: [
        {
          id: "js-callback-functions",
          title: "Колбек-функции",
          order: 0,
          content: `

<p>Значение функции (ссылка на неё) можно хранить в переменной или передавать в качестве аргумента в другую функцию. В этом смысле функции не отличаются от чисел, строк или массивов.</p>

<pre><code class="language-javascript">function greet(name) {
  return \`Welcome \${name}!\`;
}

// Вызываем функцию greet и выводим результат в консоль
console.log(greet("Mango")); // "Welcome Mango!"

// Выводим функцию greet в консоль, не вызывая её
console.log(greet); // f greet() {return \`Welcome \${name}!\`}</code></pre>

<p>В первом логе мы вызываем функцию <code>greet</code> с помощью круглых скобок, и в консоль выводится результат её выполнения.</p>

<p>Во втором логе передаётся ссылка на функцию, а не результат её вызова (отсутствуют круглые скобки), поэтому в консоль выводится внутреннее представление нашей функции. Это означает, что ссылку на функцию можно записать в переменную или передать как аргумент другой функции.</p>

[NEXT]

<p>Объявим две функции <code>greet</code> и <code>notify</code>, которые принимают имя пользователя и выводят разные сообщения.</p>

<pre><code class="language-javascript">function greet(name) {
  console.log(\`Welcome \${name}!\`);
}

function notify(name) {
  console.log(\`Dear \${name}, your room will be ready in 30 minutes\`);
}</code></pre>

<p>Далее объявим еще одну функцию <code>registerGuest</code>, которая будет принимать два параметра.</p>

<pre><code class="language-javascript">function registerGuest(name, callback) {
  console.log(\`Registering \${name}!\`);
  callback(name);
}</code></pre>

<ul class="list-disc">
  <li><code>name</code> — имя пользователя</li>
  <li><code>callback</code> — ссылка на функцию, которую нужно вызвать в теле <code>registerGuest</code> и передать ей имя пользователя</li>
</ul>

<p>Теперь используем объявленные функции при вызове <code>registerGuest</code>.</p>

<pre><code class="language-javascript">function greet(name) {
  console.log(\`Welcome \${name}!\`);
}

function notify(name) {
  console.log(\`Dear \${name}, your room will be ready in 30 minutes\`);
}

function registerGuest(name, callback) {
  console.log(\`Registering \${name}!\`);
  callback(name);
}

registerGuest("Mango", greet);
// "Registering Mango!"
// "Welcome Mango!"

registerGuest("Mango", notify);
// "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"</code></pre>

<p>Мы передали ссылку на функцию <code>greet</code> или <code>notify</code> как аргумент, поэтому они будут присвоены в параметр <code>callback</code> и вызваны внутри функции <code>registerGuest</code> с помощью круглых скобок.</p>

<p><strong>Функция обратного вызова (callback, колбек)</strong> — это функция, которая передаётся другой функции как аргумент, а та в свою очередь использует переданную функцию.</p>
<p>В примере функции <code>greet</code> и <code>notify</code> — это колбек-функции, потому что мы передаем их как аргумент в функцию <code>registerGuest</code>. Имя параметра для колбека может быть произвольным, главное помнить, что значением будет функция.</p>

<p><strong>Функция высшего порядка (higher order function)</strong> — функция, которая принимает в качестве параметров другие функции или возвращает функцию в качестве результата.</p>
<p>В примере это функция <code>registerGuest</code>, потому что она ожидает другую функцию как параметр и вызывает её.</p>

[QUIZ: js-callback-syntax-quiz]

[NEXT]

<h3>Инлайн-колбеки</h3>

<p>Если колбек-функция маленькая и нужна только для передачи аргументом, её можно объявить непосредственно при вызове функции, в которую мы передаем колбек. Такие функции называются инлайн-колбеки. Они будут доступны только как значение параметра и больше нигде в коде.</p>

<pre><code class="language-javascript">function registerGuest(name, callback) {
  console.log(\`Registering \${name}!\`);
  callback(name);
}

// Передаем инлайн-функцию greet в качестве колбека
registerGuest("Mango", function greet(name) {
  console.log(\`Welcome \${name}!\`);
});

// Передаем инлайн-функцию notify в качестве колбека
registerGuest("Poly", function notify(name) {
  console.log(\`Dear \${name}, your room will be ready in 30 minutes\`);
});</code></pre>

[NEXT]

<h3>Метод forEach(callback)</h3>

<p>Метод <code>forEach(callback)</code> — это метод массива, который используется для замены циклов <code>for</code> и <code>for...of</code> при работе с коллекцией.</p>

<pre><code class="language-javascript">array.forEach(function callback(element, index, array) {
  // Тело колбек-функции
});</code></pre>

<ul class="list-disc">
  <li>Поэлементно перебирает массив <code>array</code>.</li>
  <li>Вызывает колбек-функцию для каждого элемента массива.</li>
  <li>Возвращает <code>undefined</code>, даже если явно задать выражение после <code>return</code>.</li>
</ul>

<p>Колбек-функция метода <code>forEach()</code> всегда получает такие параметры: значение текущего элемента массива <code>element</code>, его индекс <code>index</code> и собственно ссылку на исходный массив <code>array</code>. Обрати внимание, что имена параметров произвольные, но очень важна их <strong>последовательность(!)</strong>. Также не все параметры обязательно объявлять. Если тебе нужен только первый параметр <code>element</code> (это самый частый случай), то следующие параметры <code>index</code> и <code>array</code> можно не объявлять.</p>

<pre><code class="language-javascript">const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(\`Index \${i}, value \${numbers[i]}\`);
}

// Перебирающий метод forEach
numbers.forEach(function (number, index) {
  console.log(\`Index \${index}, value \${number}\`);
});</code></pre>

<p>Единственный случай, когда стоит использовать циклы <code>for</code> или <code>for...of</code> для перебора массива, — это задачи с прерыванием выполнения цикла. Прервать выполнение метода <code>forEach</code> нельзя, он всегда перебирает массив до конца.</p>

[QUIZ: js-foreach-return-quiz]
`,
        },
        {
          id: "js-arrow-functions",
          title: "Стрелочные функции",
          order: 1,
          content: `
<h3>Стрелочные функции: синтаксис</h3>

<p>Стрелочные функции (сленг — "стрелки") имеют укороченный, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или если она используется как колбек.</p>

<p>Все стрелки создаются как функциональное выражение, и их необходимо присваивать переменной.</p>

<pre><code class="language-javascript">// Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// То же самое стрелочной функцией
const arrowAdd = (a, b, c) => {
  return a + b + c;
};</code></pre>

<ul class="list-disc">
  <li>Ключевое слово <code>function</code> <strong>не используется</strong></li>
  <li>Сразу указывается объявление параметров</li>
  <li>После параметров используется символ <code>=&gt;</code> и тело функции в фигурных скобках</li>
</ul>

<p>Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаком равенства <code>=</code> и стрелкой <code>=&gt;</code>.</p>

<pre><code class="language-javascript">const add = (a, b, c) => {
  return a + b + c;
};</code></pre>

<p>Если параметр один, его можно объявлять без круглых скобок.</p>

<pre><code class="language-javascript">const add = a => {
  return a + 5;
};</code></pre>

<p>Если параметры отсутствуют, то обязательно должны быть пустые круглые скобки.</p>

<pre><code class="language-javascript">const greet = () => {
  console.log("Hello!");
};</code></pre>

[NEXT]

<h3>Неявный возврат</h3>

<p>В стрелочной функции после символа <code>=&gt;</code> находится её тело. Существует два способа записи: с фигурными скобками и без них.</p>

<h4>Запись с фигурными скобками</h4>

<p>Если есть фигурные скобки и функция должна возвращать какое-то значение, необходимо явно поставить <code>return</code>. Это называется <strong>явный возврат</strong> (explicit return).</p>

<pre><code class="language-javascript">const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};</code></pre>

<p>Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие-то инструкции, кроме возврата значения.</p>

<h4>Запись без фигурных скобок</h4>

<p>Если фигурные скобки отсутствуют, то возвращается результат выражения, которое стоит после <code>=&gt;</code>. Это называется <strong>неявный возврат</strong> (implicit return). В примере вернётся результат выражения сложения параметров <code>a, b и c</code>.</p>

<pre><code class="language-javascript">const add = (a, b, c) => a + b + c;</code></pre>

<p>Синтаксис неявного возврата существенно сокращает «шум» объявления функции с телом и возвращаемым выражением. Тем не менее, он уместен только тогда, когда в теле функции не нужно выполнять никаких дополнительных инструкций, кроме возврата значения.</p>

<pre><code class="language-javascript">// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// После
const arrowAdd = (a, b, c) => a + b + c;</code></pre>

[NEXT]

<h3>Псевдомассив arguments</h3>

<p>У стрелочных функций нет локальной переменной <code>arguments</code>, которая содержит все аргументы. Если необходимо собрать все аргументы в массив, используется операция <code>rest</code>.</p>

<pre><code class="language-javascript">const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]</code></pre>

[QUIZ: js-arrow-arguments-quiz]

[NEXT]

<h3>Колбеки</h3>

<p>Анонимные стрелочные функции отлично подходят для колбеков перебирающих методов массива благодаря краткому синтаксису объявления, особенно если код в теле функции не громоздкий.</p>

<pre><code class="language-javascript">const numbers = [5, 10, 15, 20, 25];

// Обычная анонимная функция
numbers.forEach(function (number, index) {
  console.log(\`Index \${index}, value \${number}\`);
});

// Стрелочная анонимная функция
numbers.forEach((number, index) => {
  console.log(\`Index \${index}, value \${number}\`);
});</code></pre>

<p>Стрелочную колбек-функцию также можно объявлять отдельно и передавать на неё ссылку. Это стоит делать, если одна функция используется в нескольких местах программы или если она громоздкая.</p>

<pre><code class="language-javascript">const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(\`Index \${index}, value \${number}\`);
};

numbers.forEach(logMessage);</code></pre>

[QUIZ: js-arrow-callbacks-quiz]
`,
        },
        {
          id: "js-map-and-flatmap-methods",
          title: "Методы map и flatMap",
          order: 2,
          content: `
<h3>Чистые функции</h3>

<p><strong>Функция с побочными эффектами</strong> — это функция, которая в процессе выполнения может:</p>

<ul class="list-disc">
  <li>изменять или использовать глобальные переменные</li>
  <li>изменять значения аргументов ссылочного типа</li>
  <li>выполнять операции ввода-вывода и т.д.</li>
</ul>

<pre><code class="language-javascript">const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Произошла мутация исходных данных - массива numbers
console.log(numbers); // [2, 4, 6, 8, 10]</code></pre>

<p>Функция <code>dirtyMultiply(array, value)</code> умножает каждый элемент массива <code>array</code> на число <code>value</code>. Она изменяет (мутирует) исходный массив по ссылке.</p>

<p><strong>Чистая функция (pure function)</strong> — это функция, результат которой зависит только от значений переданных аргументов. При условии одинаковых аргументов она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.</p>

<p>Напишем реализацию чистой функции умножения элементов массива, которая возвращает новый массив, не изменяя исходный.</p>

<pre><code class="language-javascript">const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Мутация исходных данных не произошла
console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с измененными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]</code></pre>

[NEXT]

<h3>Перебирающие методы</h3>

<p>В JavaScript есть методы массивов, которые пришли из функциональных языков. Большинство из перебирающих методов массивов — это чистые функции. Они создают новый массив, заполняют его, применяя к значению каждого элемента указанную колбек-функцию, после чего возвращают этот новый массив.</p>

<p>Все перебирающие методы массивов имеют схожий синтаксис. На исходном массиве <code>array</code> вызывается перебирающий метод <code>method</code>, в который аргументом передаётся колбек-функция <code>callback</code>.</p>

<pre><code class="language-javascript">array.method(callback(currentValue, index, array))</code></pre>

<p>У большинства методов колбек-функции, которые являются их аргументом, получают три следующих параметра:</p>

<ul class="list-disc">
  <li>первым параметром будет значение текущего элемента массива <code>currentValue</code></li>
  <li>вторым параметром будет индекс текущего элемента массива <code>index</code></li>
  <li>третьим параметром будет ссылка на сам исходный массив <code>array</code></li>
</ul>

<pre><code class="language-javascript">array.method((item, idx, arr) => {
  // логика, которая будет выполняться на каждой итерации
});</code></pre>

<p>Все параметры, кроме значения текущего элемента массива <code>item</code>, необязательны. Названия параметров могут быть любыми, главное, чтобы они были понятны тебе и другим разработчикам.</p>

<pre><code class="language-javascript">array.method(item => {
  // логика, которая будет выполняться на каждой итерации
});</code></pre>

[QUIZ: js-iterating-methods-params-quiz]

[NEXT]

<h3>Метод map()</h3>

<p>Большинство перебирающих методов массива — это чистые функции. Они создают новый массив, заполняют его, применяя к значению каждого элемента указанную колбек-функцию, после чего возвращают этот новый массив.</p>

<p>Метод <code>map(callback)</code> используется для трансформации массива. Он вызывает колбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.</p>

<pre><code class="language-javascript">array.map((element, index, array) => {
  // Тело колбек-функции
});</code></pre>

<ul class="list-disc">
  <li>Поэлементно перебирает оригинальный массив</li>
  <li>Не изменяет оригинальный массив</li>
  <li>Результат работы колбек-функции записывается в новый массив</li>
  <li>Возвращает новый массив такой же длины, как и массив, к которому он был применен</li>
</ul>

<p>Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный массив используется как эталон, на основе которого можно сделать другую коллекцию.</p>

<pre><code class="language-javascript">const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригинальный массив не изменился
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]</code></pre>

<p>Использование анонимных стрелочных функций с неявным возвратом существенно сокращает «шум» объявления колбек-функции, что делает код чище и проще для восприятия.</p>

[QUIZ: js-map-return-quiz]

[NEXT]

<h3>Массив объектов</h3>

<p>Мы уже знаем, что типичная задача — это манипуляция массивом объектов. Например, получить массив значений свойства из всех объектов. У нас есть массив студентов, а нужно получить отдельный массив их имен.</p>

<pre><code class="language-javascript">const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]</code></pre>

<p>Используя метод <code>map()</code>, можно перебрать массив объектов, и в колбек-функции вернуть значение свойства каждого из них.</p>

[NEXT]

<h3>Метод flatMap()</h3>

<p>Метод <code>flatMap(callback)</code> аналогичен методу <code>map()</code>, но применяется в случаях, когда результат — это многомерный массив, который необходимо «сгладить».</p>

<pre><code class="language-javascript">array.flatMap((element, index, array) => {
  // Тело колбек-функции
});</code></pre>

<p>В массиве <code>students</code> хранится коллекция студентов со списком предметов, которые посещает студент в свойстве <code>courses</code>. Несколько студентов могут посещать один и тот же предмет. Необходимо составить список всех предметов, которые посещает эта группа студентов, пока что даже повторяющихся.</p>

<pre><code class="language-javascript">const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map(student => student.courses);
console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"]</code></pre>

<p>Метод <code>flatMap</code> вызывает колбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив. Отличие от <code>map()</code> состоит в том, что новый массив «сглаживается» на глубину, равную единице (одна вложенность). Этот сглаженный (плоский) массив и является результатом работы <code>flatMap()</code>.</p>
`,
        },
        {
          id: "js-filter-and-find-methods",
          title: "Методы filter и find",
          order: 3,
          content: `
<h3>Метод filter()</h3>

<p>Метод <code>filter(callback)</code> используется для единственной операции — фильтрации массива. Под фильтрацией массива понимается отбор всех элементов из коллекции по определенному критерию.</p>

<pre><code class="language-javascript">array.filter((element, index, array) => {
  // Тело колбек-функции
});</code></pre>

<ul class="list-disc">
  <li>Не изменяет оригинальный массив.</li>
  <li>Поэлементно перебирает оригинальный массив.</li>
  <li>Возвращает новый массив.</li>
  <li>Добавляет в возвращаемый массив элементы, которые удовлетворяют условию колбек-функции.</li>
  <li>Если колбек вернул <code>true</code>, элемент добавляется в возвращаемый массив.</li>
  <li>Если колбек вернул <code>false</code>, элемент не добавляется в возвращаемый массив.</li>
  <li>Если ни один элемент не удовлетворил условию, возвращает пустой массив.</li>
</ul>

<pre><code class="language-javascript">const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// В positiveValues попали все элементы массива values, которые удовлетворили условию колбека, то есть были >= 0

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]
// В negativeValues попали все элементы массива values, которые удовлетворили условию колбека, то есть были < 0

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []
// В bigValues попали все элементы массива values, которые удовлетворили условию колбека, то есть были > 1000

console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригинальный массив values не изменился</code></pre>

<p>Итак, метод <code>filter</code> вызывает колбек-функцию для каждого элемента исходного массива. Если результат её выполнения <code>true</code>, текущий элемент добавляется в новый массив.</p>

[QUIZ: js-filter-return-quiz]

[QUIZ: js-filter-length-quiz]

[NEXT]

<h3>Метод filter() на массиве объектов</h3>

<p>При работе с массивом объектов выполняется фильтрация по значению определенного свойства. В результате получается новый массив отфильтрованных объектов.</p>

<p>Рассмотрим пример, где есть массив студентов с баллами за тест. Необходимо отфильтровать студентов, у которых:</p>

<ul class="list-disc">
  <li>высокие баллы (от 80 включительно)</li>
  <li>низкие баллы (ниже 50)</li>
  <li>средние баллы (от 50 включительно до 80)</li>
</ul>

<pre><code class="language-javascript">const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Mango и Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Ajax

const average = students.filter(
  (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
);
console.log(average); // Массив объектов с именами Poly и Houston</code></pre>

<p>В примере выше метод <code>filter()</code> создает новый массив с теми объектами из массива <code>students</code>, которые удовлетворяют условию, установленному на основе свойства <code>score</code>. Условия определяются в колбек-функции, которая передается в <code>filter()</code> как аргумент.</p>

<p>В переменную <code>best</code> отфильтрованы объекты, в которых значение свойства <code>score</code> больше или равно <code>HIGH_SCORE</code>. Результатом будет массив объектов с именами <code>"Mango"</code> и <code>"Kiwi"</code>.</p>

<p>В переменную <code>worst</code> — объекты, в которых значение свойства <code>score</code> меньше <code>LOW_SCORE</code>. Результатом будет массив с одним объектом с именем <code>"Ajax"</code>.</p>

<p>В переменную <code>average</code> — объекты, в которых значение свойства <code>score</code> больше или равно <code>LOW_SCORE</code> и меньше <code>HIGH_SCORE</code>. Результатом будет массив объектов с именами <code>"Poly"</code> и <code>"Houston"</code>.</p>

[NEXT]

<h3>Метод find()</h3>

<p>Ты уже знаешь, что метод <code>filter(callback)</code> используется для поиска всех элементов, которые удовлетворяют условию.</p>

<p>Метод <code>find(callback)</code> позволяет найти и вернуть первый подходящий элемент, после чего перебирание массива прекращается. То есть он, в отличие от метода <code>filter(callback)</code>, ищет <strong>до первого совпадения</strong>.</p>

<pre><code class="language-javascript">array.find((element, index, array) => {
  // Тело колбек-функции
});</code></pre>

<ul class="list-disc">
  <li>Не изменяет оригинальный массив</li>
  <li>Поэлементно перебирает оригинальный массив</li>
  <li>Возвращает первый элемент, который удовлетворяет условию, то есть когда колбек возвращает <code>true</code></li>
  <li>Если ни один элемент не удовлетворил условию, то есть для всех элементов колбек вернул <code>false</code>, метод возвращает <code>undefined</code></li>
</ul>

<p>Метод <code>find()</code> используется для одной задачи — поиска первого элемента, удовлетворяющего условию. Например, поиск пользователя по почте, автомобиля — по серийному номеру, книги — по названию и так далее.</p>

<pre><code class="language-javascript">const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue");
// { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink");
// { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white");
// undefined</code></pre>

[QUIZ: js-find-return-quiz]

[QUIZ: js-find-undefined-quiz]
`,
        },
        {
          id: "js-every-some-reduce-methods",
          title: "Методы every, some и reduce",
          order: 4,
          content: `
<h3>Метод every()</h3>

<p>Метод <code>every(callback)</code> проверяет, удовлетворяют ли <strong>все элементы</strong> условию колбек-функции.</p>

<pre><code class="language-javascript">array.every((element, index, array) => {
  // Тело колбек-функции
});</code></pre>

<ul class="list-disc">
  <li>Не изменяет оригинальный массив</li>
  <li>Поэлементно перебирает оригинальный массив</li>
  <li>Возвращает <code>true</code>, если все элементы массива удовлетворяют условию</li>
  <li>Возвращает <code>false</code>, если хотя бы один элемент массива не удовлетворяет условию</li>
  <li>Перебор массива прекращается, если колбек возвращает <code>false</code></li>
</ul>

<pre><code class="language-javascript">// Все элементы больше или равны нулю? - да
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Все элементы больше или равны нулю? - нет
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false</code></pre>

<p>При работе с массивом объектов проверяется значение какого-то их свойства. Например, перебирая массив объектов товаров, мы можем проверить, все ли товары есть в наличии.</p>

<pre><code class="language-javascript">const products = [
  { name: "apple", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "plum", quantity: 0 },
];

const hasEveryProduct = products.every(product => product.quantity > 0);
console.log(hasEveryProduct); // false</code></pre>

[NEXT]

<h3>Метод some()</h3>

<p>Метод <code>some(callback)</code> проверяет, удовлетворяет ли <strong>хотя бы один элемент</strong> условию колбек-функции.</p>

<pre><code class="language-javascript">array.some((element, index, array) => {
  // Тело колбек-функции
});</code></pre>

<ul class="list-disc">
  <li>Не изменяет оригинальный массив</li>
  <li>Поэлементно перебирает оригинальный массив</li>
  <li>Возвращает <code>true</code>, если хотя бы один элемент массива удовлетворяет условию</li>
  <li>Возвращает <code>false</code>, если ни один элемент массива не удовлетворяет условию</li>
  <li>Перебор массива прекращается, если колбек возвращает <code>true</code></li>
</ul>

<pre><code class="language-javascript">// Есть ли хотя бы один элемент, который больше или равен нулю? - да
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Есть ли хотя бы один элемент, который больше или равен нулю? - да
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Есть ли хотя бы один элемент, который меньше нуля? - нет
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Есть ли хотя бы один элемент, который меньше нуля? - да
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true</code></pre>

<p>Обрати внимание на отличие между методом <code>every</code> и методом <code>some</code>: метод <code>every()</code> проверяет, удовлетворяют ли все элементы условию колбек-функции. Метод <code>some()</code> проверяет, удовлетворяет ли хотя бы один элемент условию колбек-функции.</p>

[NEXT]

<h3>Метод reduce()</h3>

<p>Метод <code>reduce(callback, initialValue)</code> используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата. Немного сложнее других методов для усвоения, но результат того стоит.</p>

<pre><code class="language-javascript">array.reduce((previousValue, element, index, array) => {
  // Тело колбек-функции
}, initialValue);</code></pre>

<ul class="list-disc">
  <li>Не изменяет оригинальный массив</li>
  <li>Поэлементно перебирает оригинальный массив</li>
  <li>Возвращает все, что угодно (объект, массив, строку, число и т.д.)</li>
  <li>Может заменить функционал любого другого перебирающего метода массива и даже их комбинацию</li>
</ul>

<p>Метод <code>reduce()</code> ожидает 2 параметра:</p>
<p>1-й параметр (обязательный) — <strong>колбек-функция</strong>, которая "обрабатывает" каждый элемент массива;<br>
2-й параметр (не обязательный) — <code>initialValue</code> начальное значение аккумулятора.</p>

<p><strong>Колбек-функция</strong> из параметра редьюса ожидает в свою очередь четыре параметра. Эти параметры, так же как и в колбеках других перебирающих методов массива, можно не объявлять, если они вам не нужны, но нельзя нарушать их последовательность:</p>

<p>1-й параметр (<code>previousValue</code>) — это аккумулятор, то есть промежуточный результат. Значение, которое вернет колбек-функция на текущей итерации, будет значением этого параметра на следующей итерации;<br>
2-й параметр — текущий элемент массива;<br>
3-й параметр — индекс текущей итерации;<br>
4-й параметр — ссылка на исходный массив.<br>
Легче всего представить его работу на примере подсчета суммы элементов массива.</p>

<pre><code class="language-javascript">const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 12</code></pre>

<p>Рассмотрим детальнее работу редьюса в примере выше:</p>
<ul class="list-disc">
  <li>Начальное значение аккумулятора 0</li>
  <li>первая итерация колбек-функции 0 + 2 вернет 2</li>
  <li>вторая итерация колбек-функции 2 + 7 вернет 9</li>
  <li>третья итерация колбек-функции 9 + 3 вернет 12</li>
</ul>

<p>Результатом кода выше будет 12.</p>

<p>То есть метод <code>reduce()</code> используется, когда необходимо взять «много» и привести к «одному». В повседневных задачах его применение сводится к работе с числами.</p>

[NEXT]

<h3>Метод reduce() и массив объектов</h3>

<p>При работе с массивом объектов выполняется редуцирование по значению определенного свойства. Например, у нас есть массив студентов с баллами за тест. Необходимо получить средний балл.</p>

<pre><code class="language-javascript">const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

// Название аккумулятора может быть произвольным, это просто параметр функции
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;</code></pre>

<p>В примере выше метод <code>reduce()</code> используется для вычисления суммы значений свойства <code>score</code> для всех объектов массива <code>students</code>.</p>

<p>Начиная со значения <code>0</code>, колбек-функция вычисляет сумму значений свойства <code>score</code> для каждого объекта массива <code>students</code>. Результат (сумма) сохраняется в переменной <code>totalScore</code>.</p>

<p><code>const averageScore</code> вычисляет среднее значение <code>score</code> для всех объектов массива <code>students</code> путем деления суммы всех баллов на количество студентов.</p>
`,
        },
        {
          id: "js-sort-method",
          title: "Метод sort",
          order: 5,
          content: `
<h3>Метод sort()</h3>

<p>Метод <code>sort()</code> сортирует элементы массива <strong>на месте</strong>, то есть мутирует исходный массив, и возвращает его.</p>

<pre><code class="language-javascript">array.sort((a, b) => {
  // Тело функции сравнения
});</code></pre>

<ul class="list-disc">
  <li>Сортирует исходный массив (мутация)</li>
  <li>Возвращает отсортированный массив</li>
  <li>По умолчанию сортирует по Unicode (как строки)</li>
</ul>

<p>По умолчанию метод <code>sort()</code> приводит все элементы массива к строкам и сортирует их в лексикографическом (алфавитном) порядке Unicode. Из-за этого числовая сортировка без функции сравнения работает некорректно.</p>

<pre><code class="language-javascript">const scores = [61, 19, 74, 35, 92, 56];

// ❌ Без функции сравнения — лексикографический порядок
console.log(scores.sort()); // [19, 35, 56, 61, 74, 92]
// Может показаться правильным, но для чисел это не всегда так:

const scores2 = [27, 2, 61, 4, 7, 3, 75];
console.log(scores2.sort()); // [2, 27, 3, 4, 61, 7, 75] ❌</code></pre>

<p>При таком сортировании строки сравниваются посимвольно слева направо. Первый символ у 2 и у 27 одинаковый, но строка 2 содержит лишь 1 символ, поэтому она меньше, чем 27. Затем сравниваются строки 27 и 3. Первый символ «2» в строке 27 меньше, чем «3» в строке 3, поэтому 27 идёт перед 3.</p>

[NEXT]

<h3>Функция сравнения</h3>

<p>Для корректной сортировки чисел необходимо передать <strong>функцию сравнения</strong> (comparator). Она принимает два аргумента и должна вернуть:</p>

<ul class="list-disc">
  <li>отрицательное число, если первый аргумент должен идти <strong>раньше</strong> второго</li>
  <li>положительное число, если первый аргумент должен идти <strong>после</strong> второго</li>
  <li><code>0</code>, если порядок не важен</li>
</ul>

<pre><code class="language-javascript">const scores = [61, 19, 74, 35, 92, 56];

// ✅ По возрастанию
const ascending = [...scores].sort((a, b) => a - b);
console.log(ascending); // [19, 35, 56, 61, 74, 92]

// ✅ По убыванию
const descending = [...scores].sort((a, b) => b - a);
console.log(descending); // [92, 74, 61, 56, 35, 19]

// Оригинальный массив не трогаем — используем копию через spread
console.log(scores); // [61, 19, 74, 35, 92, 56]</code></pre>

<p>Чтобы не мутировать оригинальный массив, перед сортировкой создают его копию с помощью оператора <code>...spread</code> или метода <code>slice()</code>.</p>

[NEXT]

<h3>Массив строк</h3>

<p>Массив строк сортируется по алфавиту, но нужно учитывать регистр: стандартный Unicode-порядок ставит заглавные буквы раньше строчных.</p>

<pre><code class="language-javascript">const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

console.log(students.sort()); // ["Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon"]

const letters = ["b", "B", "a", "A", "c", "C"];
console.log(letters.sort()); // ["A", "B", "C", "a", "b", "c"]</code></pre>

<p>Порядковый номер заглавных букв меньше, чем у строчных, поэтому заглавные идут первее строчных.</p>

[NEXT]

<h3>Метод localeCompare()</h3>

<p>Для корректного сравнения строк с учётом языковых особенностей (например, кириллицы или диакритических знаков) используется метод <code>localeCompare()</code>.</p>

<pre><code class="language-javascript">string.localeCompare(compareString)</code></pre>

<ul class="list-disc">
  <li>Возвращает отрицательное число, если строка должна идти <strong>перед</strong> <code>compareString</code></li>
  <li>Возвращает положительное число, если строка должна идти <strong>после</strong> <code>compareString</code></li>
  <li>Возвращает <code>0</code>, если строки равны</li>
</ul>

<pre><code class="language-javascript">const students = ["Богдан", "Андрій", "Злата", "Іванна"];

// ✅ Корректная сортировка кириллицы
const sorted = [...students].sort((a, b) => a.localeCompare(b));
console.log(sorted); // ["Андрій", "Богдан", "Іванна", "Злата"]</code></pre>

<p>Метод <code>localeCompare()</code> возвращает результат, который функция сравнения <code>sort()</code> ожидает: отрицательное, нулевое или положительное число, поэтому его удобно использовать напрямую.</p>

[NEXT]

<h3>Метод toSorted()</h3>

<p>Метод <code>toSorted()</code> сортирует элементы массива.</p>

<pre><code class="language-javascript">array.toSorted();</code></pre>

<ul class="list-disc">
  <li>Сортирует исходный массив</li>
  <li>Возвращает новый массив</li>
  <li>По замовчуванню сортирует за зростанням</li>
</ul>

<p>В отличие от метода <code>sort()</code>, он <strong>не мутирует исходный массив</strong> — а возвращает новый отсортированный массив. Это делает его предпочтительным вариантом при работе с неизменяемыми данными.</p>

<pre><code class="language-javascript">const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted();

console.log(scores);          // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]</code></pre>

<p>Исходный массив <code>scores</code> остаётся неизменным. Новый массив <code>ascendingScores</code> содержит массив чисел, отсортированных по возрастанию.</p>

<p>Поскольку по умолчанию перед сортировкой метод <code>toSorted()</code> приводит все элементы массива к строкам, фактически элементы сортируются как строки, на основе кодов их символов в таблице Unicode. Стандартная сортировка чисел выглядит необычно, когда мы думаем о числах, но разумеется, если знать, что числа были преобразованы на строки.</p>

<pre><code class="language-javascript">const scores = [27, 2, 61, 4, 7, 3, 75];

console.log(scores.toSorted()); // [2, 27, 3, 4, 61, 7, 75]</code></pre>

<p>При таком сортировании строки сравниваются посимвольно слева направо, то есть сначала сравниваются строки 2 и 27. Первый символ у них одинаковый, но строка 2 содержит лишь 1 символ, поэтому она меньше, чем 27. Затем сравниваются строки 27 и 3. Первый символ «2» в строке 27 меньший, чем «3» в строке 3, поэтому 27 идёт перед 3.</p>

[NEXT]

<h3>Массив строк</h3>

<p>Массив строк сортируется по алфавиту.</p>

<pre><code class="language-javascript">const students = ["Jacob", "Artemis", "Solomon", "Adrian",
"Kai", "Ganymede"];

console.log(students.toSorted()); // [ "Adrian", "Artemis",
"Ganymede", "Jacob", "Kai", "Solomon" ]</code></pre>

<p>Водночас порядковий номер великих літер менший, ніж у малих.</p>

<pre><code class="language-javascript">const letters = ["b", "B", "a", "A", "c", "C"];

console.log(letters.toSorted()); // ["A", "B", "C", "a", "b",
"c"]</code></pre>

[NEXT]

<h3>Функция сравнения toSorted()</h3>

<p>Метод <code>toSorted()</code> также принимает необязательную функцию сравнения, которая позволяет задать собственный порядок сортировки.</p>

<pre><code class="language-javascript">array.toSorted((a, b) => {
  // Тело функции сравнения
});</code></pre>

<p>Функция сравнения принимает два параметра — два соседних элемента массива — и должна возвращать:</p>

<ul class="list-disc">
  <li>отрицательное число, чтобы <code>a</code> шёл перед <code>b</code></li>
  <li>положительное число, чтобы <code>b</code> шёл перед <code>a</code></li>
  <li><code>0</code>, если порядок не важен</li>
</ul>

<pre><code class="language-javascript">const scores = [61, 19, 74, 35, 92, 56];

// По возрастанию
const ascending = scores.toSorted((a, b) => a - b);
console.log(ascending); // [19, 35, 56, 61, 74, 92]

// По убыванию
const descending = scores.toSorted((a, b) => b - a);
console.log(descending); // [92, 74, 61, 56, 35, 19]

// Оригинальный массив scores не изменился
console.log(scores); // [61, 19, 74, 35, 92, 56]</code></pre>

<p>Если функция сравнения возвращает число меньше нуля, <code>a</code> будет стоять перед <code>b</code>. Если больше нуля — <code>b</code> перед <code>a</code>. Если ноль — порядок между ними не меняется.</p>

[NEXT]

<h3>Свой порядок сортировки чисел</h3>

<p>Для задания своего порядка сортировки методу <code>toSorted(compareFunction)</code> необходимо передать колбек-функцию с двумя параметрами.</p>

<p>Это функция сравнения (compare function), порядок сортировки зависит от её результата. Метод <code>toSorted()</code> будет вызывать её для двух произвольных элементов.</p>

<pre><code class="language-javascript">array.toSorted((a, b) => {
  // Callback function body
});</code></pre>

<ul class="list-disc">
  <li><code>a</code> — первый элемент для сравнения</li>
  <li><code>b</code> — второй элемент для сравнения</li>
</ul>

<h4>Сортировка по возрастанию</h4>

<p>Если вызов <code>compareFunction(a, b)</code> возвращает <strong>любое отрицательное значение</strong>, то есть <code>a</code> меньше <code>b</code>, сортировка поставит <code>a</code> перед <code>b</code>.</p>

<pre><code class="language-javascript">const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]</code></pre>

<h4>Сортировка по убыванию</h4>

<p>Если вызов <code>compareFunction(a, b)</code> возвращает любое положительное значение, то есть <code>b</code> больше <code>a</code>, сортировка поставит <code>b</code> перед <code>a</code>.</p>

<pre><code class="language-javascript">const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = scores.toSorted((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]</code></pre>

<p>Если вызов <code>compareFunction(a, b)</code> вернёт <code>0</code>, сортировка оставит <code>a</code> и <code>b</code> неизменными по отношению один к другому, но отсортирует их по отношению ко всем другим элементам.</p>

<p>Обрати внимание, что при сортировке массива чисел и передаче в метод <code>toSorted()</code> колбек-функции, числа уже не будут приводиться к строкам, то есть их сортировка будет ожидаемой и привычной.</p>

[NEXT]

<h3>Свой порядок сортировки строк</h3>

<p>Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк <code>localeCompare()</code>.</p>

<pre><code class="language-javascript">firstString.localeCompare(secondString)</code></pre>

<p>Он вызывается на строке, которую нужно сравнить (<code>firstString</code>) с тем, что было передано ему как аргумент (<code>secondString</code>).</p>

<pre><code class="language-javascript">"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0</code></pre>

<ul class="list-disc">
  <li>Возвращает отрицательное значение, если <code>firstString</code> должна быть перед <code>secondString</code></li>
  <li>Возвращает положительное значение, если <code>firstString</code> должна быть после <code>secondString</code></li>
  <li>Если строки одинаковы, возвращается ноль и их последовательность по отношению одна к другой не изменяется</li>
</ul>

<p>Метод <code>localeCompare()</code> удобно использовать для сортировки строк, поскольку метод <code>toSorted()</code> ожидает такие же значения от колбек-функции.</p>

<pre><code class="language-javascript">const students = ["Jacob", "Artemis", "Solomon", "Adrian",
"Kai", "Ganymede"];

const inAlphabetOrder = students.toSorted((a, b) =>
  a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis",
"Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students.toSorted((a, b) =>
  b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob",
"Ganymede", "Artemis", "Adrian" ]</code></pre>

[QUIZ: js-sort-comparator-quiz]

[NEXT]

<h3>Сортировка объектов</h3>

<p>При работе с массивом объектов сортировка выполняется по числовому или строковому значению определённого свойства. Например, у нас есть группа студентов с баллами за тест. Необходимо отсортировать массив объектов по трём разным сценариям:</p>

<ul class="list-disc">
  <li>по возрастанию количества баллов</li>
  <li>по убыванию количества баллов</li>
  <li>по имени студента в алфавитном порядке</li>
</ul>

<pre><code class="language-javascript">const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => firstStudent.score -
secondStudent.score
);

const inDescendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => secondStudent.score -
firstStudent.score
);

const inAlphabeticalOrder = students.toSorted((firstStudent,
secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);</code></pre>

[NEXT]

<h3>Цепочки методов</h3>

<p>У нас есть массив объектов с именами, баллами и посещаемыми предметами каждого студента.</p>

<pre><code class="language-javascript">const students = [
  { name: "Mango", score: 83, courses: ["mathematics",
"physics"] },
  { name: "Poly", score: 59, courses: ["science",
"mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] }
];</code></pre>

<p>Необходимо получить массив всех имён, отсортированных по возрастанию баллов за тест. Для этого:</p>

<ol>
  <li>Отсортируем массив методом <code>toSorted()</code>.</li>
  <li>После чего методом <code>map()</code> создадим массив значений свойства <code>name</code> из отсортированного массива.</li>
</ol>

<pre><code class="language-javascript">const sortedByAscendingScore = students.toSorted((a, b) =>
  a.score - b.score);
const names = sortedByAscendingScore.map(student =>
  student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]</code></pre>

<p>Проблема в том, что у нас появляются промежуточные переменные после каждой операции, кроме финальной. Переменная <code>sortedByAscendingScore</code> — лишняя. Она нужна только для хранения промежуточного результата.</p>

<p>Избавиться от таких «мёртвых» переменных можно при помощи группирования вызова методов в цепочки. Каждый следующий метод будет выполняться на основе результата работы предыдущего.</p>

<pre><code class="language-javascript">const names = students
  .toSorted((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]</code></pre>

<ol>
  <li>На массиве вызываем метод <code>toSorted()</code>.</li>
  <li>К результату работы метода <code>toSorted()</code> применяем метод <code>map()</code>.</li>
  <li>В переменной <code>names</code> присваивается результат работы метода <code>map()</code>.</li>
</ol>

<p>Получим массив уникальных посещаемых предметов, отсортированных по алфавиту.</p>

<pre><code class="language-javascript">const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) ===
index)
  .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science",
"literature", "mathematics", "physics"]</code></pre>

<ol>
  <li>На исходном массиве вызываем <code>flatMap()</code> и получаем сглаженный массив всех курсов.</li>
  <li>К результату метода <code>flatMap()</code> применяем метод <code>filter()</code> для фильтрации уникальных элементов.</li>
  <li>На результат метода <code>filter()</code> вызываем <code>toSorted()</code>.</li>
  <li>Переменной <code>uniqueSortedCourses</code> присваивается результат работы метода <code>toSorted()</code>.</li>
</ol>

<p>Цепочка методов может быть произвольной длины, но желательно не более 2-3 операций.</p>

<p>Во-первых, перебирающие методы используются для перебора простых операций над коллекцией. Во-вторых, вызов каждого следующего метода — это дополнительный перебор массива, что при большом количестве может сказаться на производительности.</p>
`,
        },
      ],
    },
    {
      slug: "module-5-oop-classes",
      title: "Модуль 5. ООП. Классы",
      description: "Объектно-ориентированное программирование. Классы, прототипы, наследование.",
      order: 4,
      videoUrl: null,
      items: [],
      resources: [],
      topics: [
        {
          id: "js-function-execution-context",
          title: "Контекст выполнения функции",
          order: 0,
          content: `
<h3>Ключевое слово this</h3>

<p>Контекст функции в JavaScript подобен контексту в предложении.<br>
Рассмотрим следующие примеры для лучшего понимания:</p>

<ol>
  <li>Виктор бежит быстро, потому что Виктор пытается поймать поезд.</li>
  <li>Виктор бежит быстро, потому что он пытается поймать поезд.</li>
</ol>

<p>Второе предложение звучит более лаконично и естественно, не так ли?</p>

<p>Использование местоимения «он» позволяет избежать повторения подлежащего «Виктор». Предложение задает контекст, в котором Виктор — это объект в центре внимания, который выполняет действия. Нет никаких сомнений, что местоимение «он» в рамках этого предложения указывает именно на подлежащее «Виктор», следовательно, нет смысла повторять имя еще раз.</p>

<p>Точно так же объект может быть текущим контекстом во время выполнения функции.</p>

<p>Использование имени самого объекта для доступа к его свойствам внутри методов является плохим подходом. Это то же самое, что и каждый раз повторять «Виктор» вместо «он» в предложении.</p>

<pre><code class="language-javascript">const user = {
  username: "Victor",
  showName() {
    // ❌ Виктор бежит быстро, потому что Виктор пытается поймать поезд
    console.log(user.username);
  },
};

user.showName();</code></pre>

<p>Вместо имени объекта мы используем зарезервированное ключевое слово <code>this</code>. Во время вызова функции в <code>this</code> записывается ссылка на объект, в контексте которого она была вызвана. Таким образом, в теле функции мы можем получить доступ к свойствам и методам этого объекта.</p>

<pre><code class="language-javascript">const user = {
  username: "Victor",
  showName() {
    // ✅ Виктор бежит быстро, потому что он (this) пытается поймать поезд.
    console.log(this.username);
  },
};

user.showName();</code></pre>

<p>Метод <code>showName</code> — это функция, которая вызывается в контексте объекта <code>user</code>. Во время ее вызова в <code>this</code> записывается ссылка на объект <code>user</code>, и мы можем обращаться к его свойствам и методам.</p>

[QUIZ: js-this-context-quiz]

[NEXT]

<h3>Глобальный контекст</h3>

<p>В определении значения <code>this</code> есть важный нюанс. Значение <code>this</code> определяется не на момент объявления функции (за исключением стрелочных функций), а <strong>на момент ее вызова</strong>. Иными словами, <code>this</code> определяется тем, <strong>как именно функцию вызвали</strong>, а не где она была объявлена.</p>

<pre><code class="language-javascript">function foo() {
  console.log(this);
}

foo(); // window</code></pre>

<p>В глобальном контексте, если функция выполняется <strong>не в строгом режиме</strong>, <code>this</code> ссылается на объект <code>window</code>. Объект <code>window</code> предоставляет доступ к браузерным свойствам и функциям и является глобальным контекстом выполнения для скриптов в браузере.</p>

<p><strong>В строгом</strong> режиме значение <code>this</code> в глобальном контексте всегда будет <code>undefined</code>.</p>

<pre><code class="language-javascript">"use strict";

function foo() {
  console.log(this);
}

foo(); // undefined</code></pre>

[QUIZ: js-this-determination-quiz]

[NEXT]

<h3>Контекст метода объекта</h3>

<p>Если функция была вызвана как метод объекта, то контекст будет указывать на сам объект, которому принадлежит этот метод.</p>

<pre><code class="language-javascript">const user = {
  username: "Poly",
  showThis() {
    console.log(this);
  }
};

user.showThis(); // {username: "Poly", showThis: f}</code></pre>

<p>Рассмотрим более сложный пример.</p>

<p>Сначала создаем функцию в глобальном контексте и вызываем её. Обрати внимание на использование строгого режима.</p>

<pre><code class="language-javascript">"use strict";

function showThis() {
  console.log("this in showThis: ", this);
}

// Вызываем в глобальном контексте
showThis(); // "this in showThis: undefined"</code></pre>

<p>Затем присваиваем эту функцию свойству объекта и вызываем её как метод этого объекта.</p>

<pre><code class="language-javascript">"use strict";

function showThis() {
  console.log("this in showThis: ", this);
}

const user = {
  username: "Poly",
};

user.showContext = showThis;

// Вызываем в контексте объекта
user.showContext(); // this in showThis: {username: "Poly", showContext: f}

// Вызываем в глобальном контексте
showThis(); // "this in showThis: undefined"</code></pre>

<ol>
  <li>Создали объект <code>user</code> со свойством <code>username</code></li>
  <li>Объекту <code>user</code> методу <code>showContext</code> присвоили значение функции <code>showThis</code>. Обрати внимание, что это не вызов — нет <code>()</code></li>
  <li>Теперь вызываем метод <code>showContext</code>, в котором находится ссылка на функцию <code>showThis</code>, то есть вызываем функцию в контексте объекта. <code>this</code> будет указывать на текущий объект, в котором осуществляется вызов</li>
</ol>

<p>Этот пример иллюстрирует, что контекст выполнения функции (<code>this</code>) определяется в момент ее вызова, а не в момент объявления.</p>

[NEXT]

<h3>Метод call()</h3>

<p>Бывают ситуации, когда функцию нужно вызвать в контексте объекта, даже если функция не является методом этого объекта. Для этого в JavaScript существуют специальные методы: <code>call</code>, <code>apply</code> и <code>bind</code>, которые позволяют указать контекст вызова функции.</p>

<p>Изучим сигнатуру этого метода. Сигнатура — это имя метода и его параметры. Сигнатура метода <code>call()</code> выглядит так:</p>

<pre><code class="language-javascript">foo.call(thisArg, arg1, arg2, ...)</code></pre>

<ul class="list-disc">
  <li><code>thisArg</code> — объект, который мы хотим установить как контекст (значение <code>this</code>) для функции</li>
  <li><code>arg1, arg2, ...</code> — необязательные аргументы, которые будут переданы функции</li>
</ul>

<p>Метод <code>call</code> вызывает функцию <code>foo</code> так, что значение <code>this</code> в функции будет ссылаться на объект <code>thisArg</code>, и также передает ей аргументы <code>arg1, arg2</code> и так далее.</p>

<p>Рассмотрим пример: давай создадим функцию <code>greet</code>, которая приветствует разных пользователей отеля, каждый из которых представлен объектом со свойствами <code>username</code> и <code>room</code>. Функция принимает один параметр, <code>str</code> — строку приветствия.</p>

<pre><code class="language-javascript">function greet(str) {
  console.log(\`\${str}, \${this.username}, your room is \${this.room}!\`);
}

const mango = {
  username: "Mango",
  room: 27
};

const poly = {
  username: "Poly",
  room: 191
};</code></pre>

<p>С помощью метода <code>call</code> мы можем вызвать функцию <code>greet</code> так, чтобы значение <code>this</code> указывало на нужный объект и использовало значения его свойств.</p>

<pre><code class="language-javascript">greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"</code></pre>

[QUIZ: js-call-method-quiz]
`,
        },
      ],
    },
  ],
};
