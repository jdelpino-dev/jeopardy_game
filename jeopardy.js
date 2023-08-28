// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

// Global variables
let categories = [];

// Dom elements
const $gameButton = $("#game-button");
const $gameBoard = $(".game-board");

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */
function getCategoryIds() {}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */
function getCategory(catId) {}

/** Fill the HTML jeopardy board with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */
async function fillBoard() {}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */
function handleClick(evt) {}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */
function showLoadingView() {}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {}

/** Create HTML board using divs and put it in the DOM. */
function createJeopardyBoard(columns, rows) {
  $gameBoard.hide().empty();

  // create the header row and append it to the game board
  $gameBoard.append($("<div>").addClass("category-row"));
  // create the category rows and append them to the game board
  for (let column = 1; column < columns + 1; column++) {
    const $category = $("<div>").addClass("category");
    $category.attr("id", `category-${column}`);
    $gameBoard.append($category);
  }

  // create the questions/clue rows and append them to the game board
  for (let row = 1; row < rows + 1; row++) {
    // create the question row and append it to the game board
    const $questionRow = $("<div>").addClass("question-row");
    $questionRow.attr("id", `question-row-${row}`);
    $gameBoard.append($questionRow);

    // create the question/clue cells and append them to the question row
    for (let column = 1; column < 7; column++) {
      const $questionCell = $("<div>").addClass("question");
      $questionCell.attr("id", `question-${column}-${row}`);
      $questionRow.append($questionCell);
    }
  }
  $gameBoard.show();
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - fill the board
 * */
async function setupAndStart() {}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO

// Setup and start the game when the DOM is ready
$(setupAndStart);
