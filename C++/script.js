let currentLessonIndex = -1;
let isNextButtonHidden = false;
let isPreviousButtonHidden = true;
let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');
let lesson = document.getElementById('lesson');

function showBothButtons() {
  if(!isPreviousButtonHidden && !isNextButtonHidden) return;
  nextButton.style.visibility = 'visible';
  nextButton.style.marginLeft = '1%';
  previousButton.style.visibility = 'visible';
  previousButton.style.marginLeft = '40%';
  isNextButtonHidden = false;
  isPreviousButtonHidden = false;
}

function onlyShowNextButton() {
  if(!isNextButtonHidden && isPreviousButtonHidden) return;
  nextButton.style.visibility = 'visible';
  nextButton.style.marginLeft = '35%';
  previousButton.style.visibility = 'hidden';
  previousButton.style.marginLeft = '0%';
  isNextButtonHidden = false;
  isPreviousButtonHidden = true;
}

function onlyShowPreviousButton() {
  if(!isPreviousButtonHidden && isNextButtonHidden) return;
  previousButton.style.visibility = 'visible';
  previousButton.style.marginLeft = '45%';
  nextButton.style.visibility = 'hidden';
  nextButton.style.marginLeft = '0%';
  isPreviousButtonHidden = false;
  isNextButtonHidden = true;
}

function buttons() {
  if(currentLessonIndex === 0) onlyShowNextButton();
  else if(currentLessonIndex === lessons.length - 1) onlyShowPreviousButton();
  else showBothButtons();
}

function toggleFade() {
  lesson.classList.toggle('fadeOut');
  nextButton.classList.toggle('fadeOut');
  previousButton.classList.toggle('fadeOut');
}

function updateLesson(newLessonIndex) {
  toggleFade();
  newLesson = lessons[newLessonIndex];
  setTimeout(() => {
    lesson.innerHTML = newLesson;
    buttons();
    lesson.scrollIntoView({behavior: 'smooth', block: 'start'});
    toggleFade();
  }, 500);
}

function nextLesson() {
  if(currentLessonIndex < lessons.length - 1) updateLesson(++currentLessonIndex);
}

function previousLesson() {
  if(currentLessonIndex > 0) updateLesson(--currentLessonIndex);
}

var lessons = [
`
      <div class=\"headings\">
        <h1>1. GETTING STARTED.</h1>
        <h2>In this program we will learn about the C++ language.</h2>
        <h2>Why C++, despite it\'s age, it is still one of the most powerful and widely used languages.</h2>
        <h2>If you need one example of what is made in C++, take Minecraft BE as an example.</h2>
      </div><br>

      <div class=\"headings\">
        <h2>One thing that should be always included in a cpp file is the <span class=\"blue\">int</span> <span class=\"orange\">main()</span> function.</h2>
      </div>
      <div class=\"information\">
        <ul>
          <li>
            Int is the data type that the function returns, we will study about it in the next chapter.
          </li><br>
          <li>
            The name \"main\" signals to the program that this is our main file where all the <span class=\"green\">functions</span> and <span class=\"green\">algorithms</span> will be executed.
          </li><br>
        </ul>
      </div>
      <div class=\"headings\">
        <h2>Let\'s say you want to print something, that is done using the <span class=\"orange\">cout</span> function.</h2>
      </div>
      <div class=\"information\">
        <ul>
          <li>
            To use the cout function, we have to <span class=\"blue\">#include</span> a file named <span class=\"orange\">&lt;iostream&gt;</span>(which means input/output stream).
          </li><br>
          <li>
            For the ease of creating and understanding in the start, we will also write <span class=\"green\">using namespace std;</span> below our include line.
            <ul><br>
              <li>
                The simplest way to understand what namespace is to think of it this way: There is a Tom in your city but there is also a tom in the neighbouring city.
              </li><br>
              <li>
                And when you want to save both of there numbers you save them like <span class=\"orange\">City2 Tom</span>.
              </li><br>
              <li>
                That is exactly what we do in C++, to use that function <span class=\"orange\">cout</span> we have to call it using the city name <span class=\"green\">std</span> like <span class=\"blue\">std::cout</span>.
              </li><br>
              <li>
                But what if you only want to save the cout(other city Tom) and you don\'t have it locally(your city Tom), well in that situation, you can write <span class=\"green\">using namespace std;</span> and use <span class=\"orange\">cout</span> freely!
              </li>
            </ul>
          </li>
        </ul>
      </div><br>

      <div class=\"headings\">
        <h2>So here is what the most basic program would look like: </h2>
      </div>
      <div class=\"information highlight\">
        <div>
          <span class=\"orange\">#include</span> <span class=\"blue\">&lt;iostream&gt;</span><br>
          <span class="orange">using namespace std</span><span>;</span><br>
          <br>
          <span class=\"blue\">int</span> <span class=\"orange\">main()</span> <span>{</span><br>
          <span style=\"white-space: pre-wrap;\"><span class=\"orange\">    cout</span></span> <span>&lt;&lt;</span> <span class="green">\"Hello World\"</span><span>;</span><br>
          <span>}</span>
        </div>
      </div>
`,
`
      <div class=\"headings\">
        <h1>2. DATA TYPES.</h1>
        <h2>Today we will learn about data types, shall we? :)</h2>
        <h2>There are several data types but we will focus only on a few here, okay?</h2>
        <h2>Nice, Let\'s start: </h2>
      </div><br>
  
      <div class=\"information\">
        <ol>
          <li>
            <span class=\"orange\">Int:</span> This data type is used to store integers.<br>
            <em>Example:</em> <span class=\"blue\">5</span>, <span class=\"blue\">-10</span>, <span class=\"blue\">102489074</span>, <span class=\"blue\">0</span>....These are all ints!
          </li><br>
          <li>
            <span class=\"orange\">Float:</span> This data type is used to store floating point numbers, or what you might call them: decimal number.<br>
            <em>Example:</em> <span class=\"blue\">9.01</span>, <span class=\"blue\">5.5</span>, <span class=\"blue\">-0.9</span>, <span class=\"blue\">-100.001</span>....These are all floats!
          </li><br>
          <li>
            <span class=\"orange\">Char:</span> This data type is used to store characters.<br>
            <em>Example:</em> <span class=\"green\">\'1\'</span>, <span class=\"green\">\'a\'</span>, <span class=\"green\">\'*\'</span>, <span class=\"green\">\'(\'</span>....These are all chars!
          </li><br>
          <li>
            <span class=\"orange\">Bool:</span> This data type is used to store boolean values or what you might call them True/False.<br>
            <em>Example:</em> <span class=\"blue\">True</span>, <span class=\"blue\">False</span>, <span class=\"blue\">1</span>(1 is also true), <span class\"blue\">0</span>(and so 0 is false)....These are all bools!
          </li><br>
          <li>
            <span class=\"orange\">String:</span> This data type is used to store strings or what you might call them: Sentences.<br>
            <em>Example:</em> <span class=\"green\">\"hello\"</span>, <span class=\"green\">\"name a thing\"</span>, <span class=\"green\">\"1234Woah\"</span>, <span class=\"green\">\"3423\"</span>....These are all strings!
          </li>
        </ol>
      </div><br>
  
      <div class=\"headings\">
        <h2>Now, there are 3 main ways you can create variables in C++: </h2>
      </div><br>
      <div class=\"information\">
        <ol>
          <li>
            <span class=\"orange\">Variable_Type</span> <span class=\"purple\">Variable_Name</span>;<br>
            <em>Variable_Name</em> = Information;
          </li><br>
          <li>
            <span class=\"orange\">Variable_Type</span> <span class=\"purple\">Variable_Name</span> = Information;
          </li><br>
          <li>
            <span class=\"orange\">Variable_Type</span> <span class=\"purple\">Variable_Name</span>;<br>
            cin >> <em>Variable_Name</em>;
          </li>
        </ol>
      </div><br>
  
      <div class=\"headings\">
        <h2>Here are some correct examples: </h2>
      </div><br>
      <div class=\"information\">
        <ol class=\"correct\">
          <li>
            <span class=\"orange\">int</span> <span class=\"purple\">number</span> = <span class=\"blue\">678</span>;
          </li><br>
          <li>
            <span class=\"orange\">char</span> <span class=\"purple\">letter</span> = <span class=\"green\">\'a\'</span>;
          </li><br>
          <li>
            <span class=\"orange\">bool</span> <span class=\"purple\">youAreSmall</span> = <span class=\"purple\">true</span>;
          </li><br>
          <li>
            <span class=\"orange\">float</span> <span class=\"purple\">negativePi</span> = <span class=\"blue\">-3.141526</span>;
          </li><br>
          <li>
            <span class=\"orange\">string</span> <span class=\"purple\">yourName</span> = <span class=\"green\">\"Donkey number 1\"</span>;
          </li>
        </ol>
      </div><br>
  
      <div class=\"headings\">
        <h2>Here are some incorrect examples: </h2>
      </div><br>
      <div class=\"information\">
        <ol class=\"incorrect\">
          <li>
            <span class=\"orange\">int</span> <span class=\"purple\">number</span> = <span class=\"green\">\"1234\"</span>; <span class=\"grey\">// Because of the (\") around the number.</span>
          </li><br>
          <li>
            <span class=\"orange\">string</span> <span class=\"purple\">id</span> = <span class=\"blue\">678</span>; <span class=\"grey\">// Because (\") is missing.</span>
          </li><br>
          <li>
            <span class=\"orange\">bool</span> <span class=\"purple\">isNight</span> = <span class=\"green\">True</span>; <span class=\"grey\">// Because <span class=\"green\">\'T\'</span> is capital.</span>
          </li><br>
          <li>
            <span class=\"orange\">char</span> <span class=\"purple\">letterB</span> = b; <span class=\"grey\">// Because (\') is missing.</span>
          </li><br>
          <li>
            <span class=\"orange\">float</span> <span class=\"purple\">bankBalance</span> = $<span class=\"blue\">678.457</span>; <span class=\"grey\">// Because of the <span class=\"green\">\'$\'</span> character.</span>
          </li>
        </ol>
      </div><br>
`
];
