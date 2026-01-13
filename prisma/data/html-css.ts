export const htmlCssCourse = {
  slug: "html-css",
  title: "HTML & CSS",
  description: "Разработка структуры и стиля веб-страниц.",
  icon: "planet-red",
  order: 2,
  modules: [
    {
      slug: "module-1-html-basics",
      title: "Модуль 1. Основы HTML.",
      description: "Изучение основ языка гипертекстовой разметки.",
      videoUrl: null,
      resources: [] as any[],
      order: 0,
      homework: null as any,
      topics: [
        {
          id: "html-program",
          title: "Программа модуля",
          order: 0,
          videoUrl: null,
          content: `
<h3>Привет!</h3>
<p>Друг, ты начал первый модуль курса HTML + CSS.</p>
<p>Давай разберемся, чем мы будем заниматься на этой неделе.</p>

<h3>Цели Модуля 1:</h3>
<ul>
  <li>понять, как работает веб-страница</li>
  <li>научиться использовать базовые теги и их атрибуты</li>
  <li>познакомиться с принципами семантической разметки и применить их на практике</li>
  <li>узнать, что такое структурная разметка и как она соотносится со структурой HTML-документа</li>
  <li>определить алгоритм создания веб-страницы</li>
  <li>разобраться в форматах изображений и научиться переносить их из макета в проект</li>
</ul>

<h3>Как проходить интерактивные лонгриды?</h3>

<div style="background-color: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; padding: 1rem; margin: 1.5rem 0; border-radius: 4px;">
  <p style="margin: 0; color: #e2e8f0;">
    <strong>!</strong> В реальной жизни ты редко учишь теорию просто так. Обычно ты ищешь информацию, чтобы решить проблему или выполнить задачу, верно? Именно так построен этот модуль. Он состоит из серии сценариев решения задач, от самых простых до более сложных.
  </p>
</div>

<ol>
  <li><strong>Теория</strong> — это материалы, которые помогут тебе выполнить задачу.</li>
  <li><strong>Квизы</strong> — это интерактивные задания, проверяющие понимание важных моментов предоставленного материала. Результаты квизов не влияют на общую успеваемость студента. Не бойся ошибок в квизах, ведь это просто один из инструментов обучения!</li>
  <li><strong>Автопроверки</strong> — практика с автоматической проверкой, то есть решение задач в специальной среде программирования.</li>
</ol>

<p style="font-weight: bold; font-size: 1.2rem; margin-top: 2rem;">Поехали!</p>
`,
        },
        {
          id: "html-web-tech",
          title: "Веб-технологии",
          order: 1,
          videoUrl: null,
          content: `
<h3>Веб-технологии HTML, CSS, JS</h3>
<p>Веб-сайты — это фундамент, на котором построен Интернет. И все они строятся на трех базовых технологиях. Использование одной технологии не исключает остальные. Наоборот, они обычно используются вместе.</p>

<ul>
  <li><strong>HTML</strong> отвечает за наполнение веб-страницы контентом и структуру. Например, размещение статей, фотографий и видео на сайтах.</li>
  <li><strong>CSS</strong> используется для стилизации и позиционирования элементов. Разработчик использует CSS, чтобы добавлять различные шрифты, фоны или визуальные эффекты к отдельным блокам.</li>
  <li><strong>JavaScript</strong> — позволяет добавлять функциональность и реакцию на действия пользователя. Это уже не просто визуальные эффекты (как изменение цвета при наведении), а полноценная логика работы сайта. Например, обработка заполнения формы регистрации и т.д.</li>
</ul>

<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <img src="/images/html-css-js-diagram.png" alt="HTML, CSS, JS Diagram" style="max-width: 100%; height: auto;" />
</div>

[QUIZ: html-css-js-1]

<h3>Инструменты разработчика</h3>

<p>Разработчики могут видеть, как устроены сайты, которые они посещают.</p>

<p><strong>Developer tools</strong> — это встроенная в браузер функциональность, позволяющая получить информацию о коде страницы, стилях, сетевых запросах и многом другом.</p>

<div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1.5rem 0; color: #1e293b;">
  <p style="margin: 0;"><strong>!</strong> Developer tools можно вызвать следующими способами:</p>
  <ul style="margin-top: 0.5rem;">
    <li><strong>Ctrl+Shift+I</strong> для Windows</li>
    <li><strong>Cmd+Opt+I</strong> для macOS</li>
    <li>Нажать правой кнопкой мыши на веб-странице и выбрать пункт меню «Просмотреть код» — последняя опция в выпадающем списке.</li>
  </ul>
</div>

<div style="margin: 2rem 0;">
  <img src="/images/module-1/devtools.png" alt="Google Developer Tools" style="max-width: 100%; height: auto; border-radius: 8px;" />
</div>

<p>По умолчанию открывается вкладка <code>Elements</code>. Она отображает внутреннюю HTML-структуру документа. При наведении мыши на элемент он будет подсвечен в окне браузера (viewport).</p>

<p>Вкладка <code>Styles</code> отображает настройки стилей страницы: цвет фона, отступы и т.д.</p>

<p>Мы будем возвращаться к инструментам разработчика на разных этапах обучения. Сейчас вы можете заглянуть «под капот» вашего любимого сайта.</p>

<h3>Что такое HTML?</h3>

<p><strong>HyperText Markup Language</strong> (HTML) — это язык разметки веб-документов. Набор правил для структурирования (разметки) текстовой информации, добавления изображений, создания таблиц, форм, списков и т.д.</p>

<p><strong>HTML-документ</strong> — это текстовый файл с расширением <code>.html</code>.</p>

<p>Документ, размеченный с помощью HTML, интерпретируется браузером. В результате пользователи видят не исходный код с элементами разметки, а результат обработки этого файла — веб-страницу.</p>

<div style="margin: 2rem 0;">
  <img src="/images/module-1/html.png" alt="HTML Process Diagram" style="max-width: 100%; height: auto; border-radius: 8px;" />
</div>

<p>Популярность HTML и использование его в качестве основы веб-страниц привели к необходимости создания, поддержки и развития соответствующих стандартов. Сейчас этим занимается <a href="https://html.spec.whatwg.org/multipage/" target="_blank" style="color: #60a5fa;">рабочая группа Web Hypertext Application Technology Working Group (WHATWG)</a>.</p>

<div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1.5rem 0; color: #1e293b;">
  <p style="margin: 0;"><strong>!</strong> В данный момент вы просматриваете содержимое HTML-документа в вашем браузере. Этот интерактивный лонгрид — страница, размеченная на HTML.</p>
</div>

<h3>Посмотрите на скриншот редактора кода</h3>

<div style="margin: 2rem 0;">
  <img src="/images/module-1/vscode-screenshot.png" alt="VS Code Screenshot" style="max-width: 100%; height: auto; border-radius: 8px;" />
</div>

[QUIZ: html-file-example]
`,
        },
        {
          id: "html-tags-attributes",
          title: "Теги и атрибуты",
          order: 2,
          videoUrl: null,
          content: `
<h3>Есть задача!</h3>
<p>Твой хороший знакомый решил опубликовать любимый рецепт на сайт, который будут видеть люди по всему миру. Прежде всего нужно создать разметку страницы рецепта. И он просит тебя о помощи.</p>

<p>Тебе известно, что из 3 основных технологий (HTML, CSS и JS) именно HTML отвечает за добавление содержимого. А еще в твоем арсенале есть лучшие учебные материалы по HTML. Достаточно ли этого, чтобы сказать "Да" твоему знакомому? Для разработчиков, которые работают в динамичной IT сфере, — вполне достаточно.</p>

<p><strong>Tag (тег)</strong> - элемент языка разметки гипертекста. Теги являются наименьшими строительными блоками, из которых состоит любая веб-страница. Каждый тег обозначает отдельную сущность: заголовок, список, абзац текста, изображение. Для выделения тегов в тексте документа используются угловые скобки, в которых указывается имя тега и его атрибуты.</p>

<pre><code class="language-html">&lt;имя_тега&gt;...&lt;/имя_тега&gt;</code></pre>

<p>Открывающий тег указывает на начало элемента, закрывающий — на его окончание. Закрывающий тег образуется путем добавления слеша ( / ) перед именем тега. Между открывающим и закрывающим тегами находится контент тега. Смотри примеры тегов ниже.</p>

<div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1.5rem 0; color: #1e293b;">
  <p style="margin: 0;"><strong>!</strong> HTML элемент — это абзац, заголовок, список, ссылка и т.д. В HTML-документе элемент состоит из тега и контента тега.</p>
</div>

<pre><code class="language-html">&lt;section&gt;Секция&lt;/section&gt;
&lt;p&gt;Абзац&lt;/p&gt;
&lt;a&gt;Ссылка&lt;/a&gt;
&lt;button&gt;Кнопка&lt;/button&gt;</code></pre>

[QUIZ: html-tags-1]

[NEXT]

<h2>Тег &lt;p&gt;</h2>

<p>Тег <code>&lt;p&gt;</code> — универсальный контейнер для группировки мелких фразовых элементов, отделения их друг от друга и дальнейшей стилизации. По умолчанию тег абзаца <code>&lt;p&gt;</code> — это блочный элемент, то есть он начинается с новой строки и имеет вертикальные отступы, которые можно будет изменить с помощью CSS.</p>

<div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1.5rem 0; color: #1e293b;">
  <p style="margin: 0;"><strong>!</strong> В редакторе VSCode в HTML-документе можно набрать код <code>lorem10</code>, после чего нажать клавишу <code>Tab</code>. Это создаст массив текста из 10 слов. Вместо 10 можно установить любое число.</p>
</div>

<pre><code class="language-html">&lt;p&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Neque eligendi, a
  eaque, esse itaque porro non exercitationem odio earum quos 
  perferendis!
&lt;/p&gt;
&lt;p&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
  Illo, totam velit 
  asperiores non temporibus ut nisi minima?
&lt;/p&gt;</code></pre>

<p>Часто бывает необходимо заполнить тег текстом, но самого текста, который будет размещаться на сайте, еще нет. Для этого используют специальный заполнитель (текст-рыба).</p>

[CHALLENGE: html-p-tag]

<h2>Тег &lt;h&gt;</h2>

<p>Заголовок является инструментом структурирования текстового содержимого страницы. Для того, чтобы добавить самый важный заголовок, который описывает все содержимое страницы, используется тег <code>&lt;h1&gt;</code> — заголовок первого уровня. На практике тег <code>&lt;h1&gt;</code> используется лишь один раз как основной заголовок страницы.</p>

<pre><code class="language-html">&lt;h1&gt;О компании&lt;/h1&gt;
&lt;p&gt;
  Lorem ipsum dolor sit amet consectetur adipisicing.
  Maiores delectus, esse consectetur, commodi voluptate
  fuga ducimus eveniet sed debitis asperiores, corporis
&lt;/p&gt;
&lt;p&gt;
  Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Dolorem soluta officia hic voluptatibus
  impedit velit voluptate cum laboriosam quasi.
&lt;/p&gt;</code></pre>

<div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1.5rem 0; color: #1e293b;">
  <p style="margin: 0 0 0.5rem 0; font-weight: bold;"><strong>!</strong> Оформление кода</p>
  <p style="margin: 0 0 0.5rem 0;">Во фрагменте кода выше ты можешь увидеть несколько примеров корректного его оформления.</p>
  <p style="margin: 0 0 0.5rem 0;">Но запомни основное:</p>
  <ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc;">
    <li>каждый тег начинается с новой строки;</li>
    <li>если контент занимает несколько строк, открывающий и закрывающий теги расположены друг под другом (см. абзац);</li>
    <li>если контент занимает одну строку, открывающий и закрывающий теги расположены непосредственно до и после контента (см. заголовок).</li>
  </ul>
  <p style="margin: 0.5rem 0 0 0;">Это обеспечивает лучшую визуализацию начала и конца тега.</p>
</div>
[CHALLENGE: html-h1-tag]

[QUIZ: html-h1-limit]


<h2>Комментарии</h2>

<p><i>Почему разработчики пишут комментарии в коде?</i><br>
Комментарии важно оставлять, чтобы в будущем тебе или коллеге было понятно, что это за код.</p>

<p>Комментарии используются для того, чтобы:</p>
<ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc;">
  <li>оставить в исходном коде пояснение, заметку;</li>
  <li>визуально разделить код, обозначив, где начинается и заканчивается разметка шапки сайта, подвала, отдельной секции и т.д.;</li>
  <li>закомментировать участок кода, то есть временно скрыть часть HTML-кода, чтобы она не отображалась на странице в браузере.</li>
</ul>

<pre><code class="language-html">&lt;!-- Это комментарий, его содержимое не отобразится на странице --&gt;

&lt;p&gt;Это абзац текста, он отображается на странице.&lt;/p&gt;

&lt;!--
  Комментарий может быть многострочным.
  Это удобно для более емких описаний.
--&gt;

&lt;!--
  &lt;p&gt;Этот абзац текста закомментирован, поэтому он не
  отображается на странице.&lt;/p&gt;
--&gt;</code></pre>

[NEXT]

<h2>Тег &lt;a&gt;</h2>

<p><b>Атрибуты</b> — это дополнительные настройки тегов, с помощью которых можно изменять свойства и поведение элемента. Теги могут иметь обязательные и необязательные атрибуты. Их может быть несколько или не быть совсем.</p>

<p>Атрибуты записываются внутри открывающего тега, а их значения указываются внутри двойных кавычек. Несколько атрибутов разделяются пробелом.</p>

<pre><code class="language-html">&lt;a href="https://google.com" class="link"&gt;...&lt;/a&gt;
&lt;img src="cat.jpg" alt="cute cat" /&gt;
&lt;input type="text" name="user_name" /&gt;
&lt;button type="submit"&gt;...&lt;/button&gt;</code></pre>

<div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 1rem; margin: 1.5rem 0; color: #1e293b;">
  <p style="margin: 0 0 0.5rem 0; font-weight: bold;"><strong>!</strong> Полезно!</p>
  <p style="margin: 0;">Для того, чтобы узнать, какие атрибуты доступны для тега и назначение атрибутов, можно зайти в документацию или справочник, например <a href="https://htmlreference.io" target="_blank" rel="noopener noreferrer">htmlreference.io</a>.</p>
</div>

<p>Давай рассмотрим структуру тега с атрибутами на примере тега <code>&lt;a&gt;</code>. Он предназначен для создания ссылок или текста. Кликая по нему, мы переходим на другую страницу, загружаем файл и т.д. Текст ссылки отображается в браузере с подчеркиванием синим шрифтом. При наведении на ссылку курсор мыши меняет вид.</p>

<img src="/images/html-attributes-schema.png" alt="Схема атрибутов HTML тега" style="width: 100%; max-width: 600px; margin: 2rem 0; border: 1px solid #e2e8f0; border-radius: 8px;" />

<p>Адрес ссылки задается в обязательном атрибуте <code>href="адрес"</code>, где адрес — это URL, указывающий на страницу, файл или любой другой ресурс.</p>

<pre><code class="language-html">&lt;a href="https://google.com"&gt;Ссылка на главную страницу Google&lt;/a&gt;</code></pre>

<p>URL (сокращение от Uniform Resource Locator) — уникальная совокупность символов, в которой отображается путь к странице интернет-ресурса, например <a href="https://toReact/homepage" target="_blank" rel="noopener noreferrer">https://toReact/homepage</a>.</p>

<div class="info-block">
  <p>
    <span class="icon">!</span> Запомни основные характеристики атрибутов:
  </p>
  <ul>
    <li>Атрибуты меняют или предоставляют дополнительные свойства тегам.</li>
    <li>Несколько атрибутов у тега отделяются с помощью пробела.</li>
    <li>Атрибуты и их значения содержатся внутри открывающего тега.</li>
    <li>Знак "=" ставится между атрибутом и его значением.</li>
  </ul>
</div>

[CHALLENGE: html-tag-a]

[NEXT]

<h2>Атрибут target</h2>

<p>Если мы хотим, чтобы веб-страница, на которую ведет ссылка, открывалась в новой вкладке браузера, необходимо добавить тегу <code>&lt;a&gt;</code> атрибут <code>target="_blank"</code>.</p>

<p>По умолчанию ссылки открываются в текущей вкладке браузера, а значение атрибута <code>target</code> по умолчанию — <code>target="_self"</code>.</p>

<pre><code class="language-html">&lt;!--
  Ссылка на внешний ресурс, откроется в текущей
  вкладке
--&gt;
&lt;a href="https://toreact.com/"&gt;ToReact&lt;/a&gt;

&lt;!--
  Ссылка на внешний ресурс, откроется на новой вкладке
--&gt;
&lt;a href="https://toreact.com/" target="_blank"&gt;
  ToReact
&lt;/a&gt;</code></pre>

&lt;a href="https://toreact.com/" target="_blank"&gt;
  ToReact
&lt;/a&gt;</code></pre>

[QUIZ: html-target-attr]

[NEXT]

<h2>Тег &lt;img&gt; и его атрибут src</h2>

<p>Использование графики делает веб-страницы визуально привлекательными. Изображения помогают лучше передать суть и содержание документа.</p>

<p><b>Растровая графика (raster, bitmap)</b> — описание графического файла в виде массива с координатами каждого пикселя и описанием цвета этого пикселя. Это как карта цветов с фиксированным размером.</p>

<p>Два формата изображений, которые используются наиболее широко:</p>
<ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc;">
  <li><b>JPEG</b> — большие файлы, которые не требуют прозрачного фона или анимации. Этот формат идеален для ярких реалистичных фотографий, поскольку они могут содержать миллионы цветов.</li>
  <li><b>PNG</b> — в отличие от JPEG, подходит для изображений, фон которых должен быть прозрачным или содержать иконки и декоративные элементы. Также этот формат используется для изображений повышенной точности: скриншотов, чертежей, графиков и т.д.</li>
</ul>

<p>Тег <code>&lt;img&gt;</code> предназначен для разметки изображений в различных графических форматах.</p>

<pre><code class="language-html">&lt;img src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg" /&gt;</code></pre>

<p>Чтобы задать адрес изображения, используется обязательный атрибут <code>src="путь"</code>.</p>

[CHALLENGE: html-img-tag]

[NEXT]

<h2>Парные и одиночные теги</h2>

<p>В прошлом шаге мы добавили изображение, и вы могли заметить, что тег <code>&lt;img&gt;</code> синтаксически отличается от всех предыдущих. Тег <code>&lt;img&gt;</code> — одиночный, то есть он не требует одноименного закрывающего тега.</p>

<p>Парные теги:</p>
<ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc;">
  <li>состоят из открывающего и закрывающего тегов;</li>
  <li>открывающий и закрывающий теги оборачивают текстовое содержимое;</li>
  <li>позволяют группировать контент по смыслу и содержимому;</li>
  <li>внутри парных тегов могут быть вложены другие теги.</li>
</ul>

<p>Тему вложенности мы рассмотрим более подробно позже.</p>

<pre><code class="language-html">&lt;!-- Статья с заголовком и абзацем --&gt;
&lt;article&gt;
  &lt;h1&gt;Коротко о парных тегах&lt;/h1&gt;
  &lt;p&gt;
    Большинство тегов — парные. Их контент находится между
    открывающим и закрывающим тегами.
  &lt;/p&gt;
&lt;/article&gt;</code></pre>

<p>Одиночные теги:</p>
<ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc;">
  <li>состоят только из открывающего тега;</li>
  <li>не содержат текстового содержимого;</li>
  <li>получают содержимое или поведение через атрибуты;</li>
  <li>служат для изменения свойств документа, подключения файлов и т.д.</li>
</ul>

<p>Тег <code>&lt;img&gt;</code> — один из таких тегов, его содержимое указывается в атрибуте <code>src</code>.</p>

<pre><code class="language-html">&lt;!-- Метаинформация о кодировке --&gt;
&lt;meta charset="utf-8" /&gt;
&lt;!-- Поле ввода --&gt;
&lt;input type="text" /&gt;
&lt;!-- Изображение --&gt;
&lt;img src="cat.jpg" alt="cool cat" /&gt;</code></pre>

[NEXT]

<h2>Изображения: атрибут alt</h2>

<p>В случае если изображение не загрузилось, или для пользователей с ограниченным зрением следует добавлять значимую информацию об изображении.</p>

<pre><code class="language-html">&lt;img
  src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg"
  alt="Macbook Air на сером деревянном столе"
/&gt;</code></pre>

<p>Альтернативный текст должен быть у каждого тега <code>&lt;img&gt;</code>.</p>

<ul style="margin: 0; padding-left: 1.2rem; list-style-type: disc;">
  <li>В описании должно быть законченное, полностью сформулированное предложение.</li>
  <li>Альтернативный текст должен отвечать на вопрос «Что изображено на картинке?».</li>
  <li>Описание должно быть уникальным и не повторять то, что есть в тексте к этому изображению.</li>
  <li>В описании не нужно использовать слова «изображение», «картинка» или «иллюстрация», это само собой разумеется.</li>
</ul>

<img src="/images/module-1/kittens.png" alt="Котята" style="width: 100%; border-radius: 8px; margin: 1rem 0;" />

<p>Если в тексте страницы описывается история этих котят, достаточно будет такого описания.</p>

<pre><code class="language-html">&lt;img src="kittens.jpg" alt="Котята" /&gt;</code></pre>

<p>Если у нас просто галерея изображений без какого-либо текстового описания, необходимо уточнить, что именно изображено.</p>

<pre><code class="language-html">&lt;img
  src="kittens.jpg"
  alt="Пять котят играют на одеяле"
/&gt;</code></pre>

[CHALLENGE: html-img-alt]

[NEXT]

<h2>Изображения: атрибуты width и height</h2>

<p>По умолчанию браузер отображает любое изображение (картинки, фото, схемы) в оригинальном размере.</p>

<p>Для того чтобы изменить размеры картинки, тег <code>&lt;img&gt;</code> имеет атрибуты <code>width</code> и <code>height</code>. Они отвечают за ширину и высоту элемента изображения в браузере. Значения задаются в пикселях, то есть точках на экране. В коде указывается только число, без обозначения <code>px</code> (см. пример ниже).</p>

<p>Если установить только одну величину — ширину или высоту, браузер автоматически вычислит другую для сохранения пропорций.</p>

<pre><code class="language-html">&lt;img
  src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg"
  alt="Macbook Air на сером деревянном столе"
  width="400"
/&gt;</code></pre>

[CHALLENGE: html-img-width]

[NEXT]

<h2>Списки</h2>

<p>Списки позволяют упорядочивать коллекции и представлять их в наглядном и удобном для пользователя виде. Список — это контейнер, дочерними элементами которого могут быть только элементы списка, теги <code>&lt;li&gt;</code> (list item).</p>

<h3>Маркированный список</h3>

<p>Тег <code>&lt;ul&gt;</code> (unordered list) создает маркированный (неупорядоченный) список, каждый элемент которого начинается с небольшого символа (маркера). С помощью CSS маркер можно будет убрать или заменить.</p>

<p>Используется для перечисления набора в произвольном порядке. Например, список курортов:</p>

<pre><code class="language-html">&lt;h1&gt;Самые горячие курорты&lt;/h1&gt;
&lt;p&gt;В этом году эксперты советуют посетить следующие локации.&lt;/p&gt;

&lt;ul&gt;
  &lt;li&gt;Тунис&lt;/li&gt;
  &lt;li&gt;Турция&lt;/li&gt;
  &lt;li&gt;Греция&lt;/li&gt;
  &lt;li&gt;Египет&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<div class="alert alert-info">
  <p><strong>! Оформление кода</strong></p>
  <p>Обрати внимание, что вложенные элементы <code>&lt;li&gt;</code> расположены не прямо под тегом <code>&lt;ul&gt;</code>, а с отступом. Стандартный отступ — 2 или 4 пробела. Важно, чтобы отступ был одинаковым для всего проекта. Эта «елочка» визуально отображает вложенность элементов и улучшает читабельность кода.</p>
</div>

`,
        },
      ],
    },
    {
      slug: "module-2",
      title: "Модуль 2. Основы CSS",
      description: "Стилизация и базовые свойства.",
      videoUrl: null,
      resources: [] as any[],
      order: 1,
      homework: null as any,
      topics: [],
    },
    {
      slug: "module-3",
      title: "Модуль 3. Блочная модель",
      description: "Box Model, отступы и размеры.",
      videoUrl: null,
      resources: [] as any[],
      order: 2,
      homework: null as any,
      topics: [],
    },
    {
      slug: "module-4",
      title: "Модуль 4. Позиционирование",
      description: "Position, Float и верстка.",
      videoUrl: null,
      resources: [] as any[],
      order: 3,
      homework: null as any,
      topics: [],
    },
    {
      slug: "module-5",
      title: "Модуль 5. Flexbox",
      description: "Современная верстка на Flexbox.",
      videoUrl: null,
      resources: [] as any[],
      order: 4,
      homework: null as any,
      topics: [],
    },
    {
      slug: "module-6",
      title: "Модуль 6. Grid Layout",
      description: "Сетки и сложные макеты.",
      videoUrl: null,
      resources: [] as any[],
      order: 5,
      homework: null as any,
      topics: [],
    },
    {
      slug: "module-7",
      title: "Модуль 7. Адаптивность",
      description: "Медиа-запросы и отзывчивый дизайн.",
      videoUrl: null,
      resources: [] as any[],
      order: 6,
      homework: null as any,
      topics: [],
    },
    {
      slug: "module-8",
      title: "Модуль 8. Финальный проект",
      description: "Создание итогового проекта.",
      videoUrl: null,
      resources: [] as any[],
      order: 7,
      homework: null as any,
      topics: [],
    },
  ],
};
