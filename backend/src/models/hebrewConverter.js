// models/hebrewConverter.js
class HebrewConverter {
  constructor() {
    this.hebrewValues = {
      א: 1,
      ב: 2,
      ג: 3,
      ד: 4,
      ה: 5,
      ו: 6,
      ז: 7,
      ח: 8,
      ט: 9,
      י: 10,
      כ: 20,
      ל: 30,
      מ: 40,
      נ: 50,
      ס: 60,
      ע: 70,
      פ: 80,
      צ: 90,
      ק: 100,
      ר: 200,
      ש: 300,
      ת: 400,
      ך: 20,
      ם: 40,
      ן: 50,
      ף: 80,
      ץ: 90,
    };
  }

  getNumericValue(word) {
    return Array.from(word).reduce((sum, char) => {
      return sum + (this.hebrewValues[char] || 0);
    }, 0);
  }

  toBinary(number) {
    return number.toString(2).padStart(16, "0");
  }

  processText(text) {
    const words = text.trim().split(/\s+/);
    return words.map((word) => ({
      word,
      numericValue: this.getNumericValue(word),
      binaryValue: this.toBinary(this.getNumericValue(word)),
    }));
  }
}

module.exports = HebrewConverter;
