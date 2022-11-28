'use strict';
// game.js здесь будут происходить действия игры

// 1) В функции game() реализуется сам механизм игры. - DONE
// 2) Результат поединка и выбранный язык должны храниться в замыкании и реализация данной игры
// должна быть сделана с помощью рекурсии без единого цикла - DONE

// Если пользователь нажимает "отмена" переспрашиваем его "точно ли он хочет выйти?" - DONE
// Если да то выводится результат всех игр (сколько очков у пользователя и у компьютера) - DONE
// Если пользователь передумал выходить, то игра продолжается дальше сохраняя прежние очки - DONE

// Усложненное: +1 Балл - DONE
// Функция game() принимает один параметр (language) с помощью которого в игре устанавливается язык
// Функция может принимать такие значения “ENG” или “EN”, если функция принимает пустой параметр,
// то устанавливается русский язык (по умолчанию)

// Усложненное 2: +1 Балл - DONE
// При выборе Английского языка, всё должно быть на английском, что возможно

( () => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper', 'Draw', 'You win', 'Computer wins', 'Computer', 'You', 'More?', 'Results'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага', 'Ничья', 'Вы выйграли', 'Компьютер выйграл', 'Компьютер', 'Вы', 'Еще?', 'Результат'];

    function getRandomAnswer(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const game = (language) => {
      const result = {
        playerScore: 0,
        pcScore: 0,
      };

      const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function start() {

      const gameCore = {
        get PlayerAnswer() {
          this.playerAnswer = prompt(`${lang.slice(0,3)}`, );
          if (this.playerAnswer === null) {
            return;
          } else if (this.playerAnswer[0].toLowerCase() === `${lang[0][0]}`
            || this.playerAnswer[0].toLowerCase() === `${lang[1][0]}`
            || this.playerAnswer[0].toLowerCase() === `${lang[2][0]}`) {
            return;
          }
          this.PlayerAnswer;
        },
        playerAnswer: '',
        get PcAnswer() {
          let result = getRandomAnswer(1, 3);
          if (result === 1) {
            return this.pcAnswer = `${lang[0]}`;
          } else if (result === 2) {
            return this.pcAnswer = `${lang[1]}`;
          } else if (result === 3) {
            return this.pcAnswer = `${lang[2]}`;
          }
        },
        pcAnswer: '',
        get SessionResult() {
          if (this.playerAnswer[0].toLowerCase() === this.pcAnswer[0]) {
            console.log(this.playerAnswer[0], this.pcAnswer[0])
            return `${lang[3]}`
          } else if (this.playerAnswer[0].toLowerCase() === `${lang[0][0]}` && this.pcAnswer[0] === `${lang[1][0]}` ||
            this.playerAnswer[0].toLowerCase() === `${lang[1][0]}` && this.pcAnswer[0] === `${lang[2][0]}` ||
            this.playerAnswer[0].toLowerCase() === `${lang[2][0]}` && this.pcAnswer[0] === `${lang[0][0]}`) {
            console.log(this.playerAnswer[0], this.pcAnswer[0])
            result.playerScore += 1;
            return `${lang[4]}`;
          }  else {
            console.log(this.playerAnswer[0], this.pcAnswer[0])
            result.pcScore += 1;
            return `${lang[5]}`;
          }
        },
        currentResult() {
          alert(`${lang[6]}: ${this.pcAnswer}.  \n${lang[7]}: ${this.playerAnswer} \n${this.SessionResult}`);
        },
      };

      gameCore.PcAnswer;
      gameCore.PlayerAnswer;

      if (gameCore.playerAnswer === null) {
        if (confirm(`${lang[8]}`)) {
          return start();
        } else {
          return alert(`${lang[9]}:\n${lang[7]}: ${result.playerScore} \n${lang[6]}: ${result.pcScore}`);
        }
      }

      gameCore.currentResult();

        return start();
    };
    };

    window.newGame = game;
    // export const newGame = window.newGame();
  }
)();



