module.exports = function($scope) {

  $scope.shell = '';
  $scope.isDraggable = 'false';

  $scope.makeDraggable = function() {
    var body = document.getElementsByTagName('body')[0];
    var term = document.querySelector('.terminal');
    if ($scope.isDraggable) {
      $scope.isDraggable = false;
      body.classList.remove('sidebar-is-draggable');
    } else {
      $scope.isDraggable = true;
      body.classList.add('sidebar-is-draggable');
    }
  }

  $scope.focusInput = function() {
    document.querySelector('#terminal-input').focus();
    return false;
  }

  $scope.shellAccess = function(msg) {
    var dateTime = Date.now();
    var timeStamp = Math.floor(dateTime / 1000);
    var output = document.querySelector('.output');
    var outputChild = document.createElement('div');
    outputChild.className = 'terminal__block';
    var userInput = msg.toLowerCase();

    switch (userInput) {

      case 'help':

        outputChild.innerHTML = '<span class="terminal__timestamp">[' + timeStamp + ']</span>' + ' ' + msg + '<br>Usage: jay &lt;command&gt;<br><br>Where &lt;command&gt; is one of:<br><br>skills | experience';
        output.appendChild(outputChild);
        $scope.shell = '';

        break;

      case 'jay skills':

        outputChild.innerHTML = '<span class="terminal__timestamp">[' + timeStamp + ']</span>' + ' ' + msg + '<br><br><p>the following contains a list of skills i\'ve picked up over the years:<br><br><p class="terminal__secondary-color">javascript</p><br>MV* Architecture | Frameworks | NodeJS/NPM | Gulp | Webpack | Firebase/CLI | jQuery | ES6<br><br><p class="terminal__secondary-color">ui design/development</p><br>Sass | Sketch | Illustrator | SVG Creation | HTML5 | CSS3 | ARIA<br><br><p class="terminal__secondary-color">meta frameworks (best practices)</p><br>BEM | SMACSS | ITCSS<br><br><p class="terminal__secondary-color">utilities</p><br>Git | Bash | Oh My Zsh | Atom | t stream timeline (haha)';
        output.appendChild(outputChild);
        $scope.shell = '';

        break;

      case 'jay experience':

        outputChild.innerHTML = '<span class="terminal__timestamp">[' + timeStamp + ']</span>' + ' ' + msg + '<br><br><p>here\'s a bit of my experience:<br><br><p class="terminal__secondary-color">LEADPAGES</p><i>Front-end/UI Engineer</i><br>2014 - 2016<br><br><p>Worked with an incredible team in an astonishingly fast-paced environment to create modular front-end components in CSS, HTML, and javascript, utilizing cutting-edge front-end frameworks, task runners, and bundlers. Our work heavily leveraged internal and external API\'s from our python-based back-end.</p><br><p>I also worked closely with UX/UI designers to develop a framework to promote consistency. Components were placed in a "sticker-sheet", allowing cross-product teams to copy and paste HTML components in order to maintain a consistent branded design throughout the entirety of our product portfolio and increase release velocity to surpass quarterly goals.</p><br><p class="terminal__primary-color">WORK STREAM</p><p>Leadpages, which uses EmberJS, NodeJS, Sass and a python templating engine called Jinja. I refactored the application from its original UI to an updated, modular CSS skin. I also provided our marketing department with JSON-LD and open graph tags for marketing pages.</p><br><p class="terminal__primary-color">DESCRIPTION</p><p>Leadpages is a conversion optimization suite consisting of various tools used to grow mailing lists. It also offers a landing page builder.</p><br><p class="terminal__primary-color">WORK STREAM</p><p>Center, which uses AureliaJS, NodeJS, Webpack, Gulp, Sass, Firebase and a host of other items. I also utilized Protractor to create unit tests.</p><br><p class="terminal__primary-color">DESCRIPTION</p><p>Center is an event-based marketing command center, providing users with a way to unify their marketing stack and intelligently create and micro-manage automation flows. What makes Center unique is it\'s agnostic in its ability to gauge a lead\'s progress through a pipeline in multi-service campaigns.</p><br><p class="terminal__primary-color">WORK STREAM</p><p>Lego. We worked with our design team to create a CSS framework in order to promote consistency throughout our product portfolio, and increase our release velocity.</p><br><p class="secondary-color">Workflow: Agile</p>';
        output.appendChild(outputChild);
        $scope.shell = '';

        break;

      case 'clear':
        output.innerHTML = '';
        $scope.shell = '';

        break;

      default:
        outputChild.innerHTML = '<span class="terminal__timestamp">[' + timeStamp + ']</span>' + ' ' + msg + '<br><br><p>command not found: ' + msg + '</p>';
        output.appendChild(outputChild);
        $scope.shell = '';
    }
  }
};
