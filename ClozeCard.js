
function ClozeCard(text, cloze) {
	
    this.fullText = text;
    this.cloze = cloze;
  if (this instanceof ClozeCard) {

    if (this.fullText.includes(this.cloze)){
      this.partial = this.fullText.replace(cloze, '...');
    } else {
      this.throwError();
    }

  } else {
    return new ClozeCard(text, cloze);
  }
}

ClozeCard.prototype.throwError = function() {
  console.log(`The string '${this.cloze}' does not exist in '${this.fullText}'`);
}

module.exports = ClozeCard;