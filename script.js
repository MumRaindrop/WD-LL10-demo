/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  const combinedComment = `${username}: ${comment}`;

  if (addToStart) {
    comments.unshift(combinedComment);
  } else {
    comments.push(combinedComment);
  }
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage(message) {
  const winnerDisplay = document.getElementById('winner-display');
  winnerDisplay.innerHTML = message;
}

/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  const winningEntry = comments[randomIndex];
  const message = `Winner: <strong class="text-success">${winningEntry}</strong>`;
  showWinnerMessage(message);
}

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const Emoji = emojis[randomIndex];
  const emojiDisplay = document.getElementById('emoji-display');
  emojiDisplay.innerHTML = Emoji;
}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {
  comments.reverse();
}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {
  comments.splice(index, 1);
}

/* Task 7 - Complete the function according to the TODO */
function contains_Emoji(comment) {
  // return true if any emoji from the emojis array appears in the comment
  for (let i = 0; i < emojis.length; i++) {
    if (comment.includes(emojis[i])) return true;
  }
  return false;
}

function filterEmojiComments() {
  // remove any comment that does NOT contain an emoji
  for (let i = comments.length - 1; i >= 0; i--) {
    if (!contains_Emoji(comments[i])) comments.splice(i, 1);
  }
}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {

}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */
