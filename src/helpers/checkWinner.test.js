describe("Testing winning case", () => {
  describe("Testing horizontal winning cases", () => {
    it("Should be true if player has 3 X's or O's three in a row horizontaly", () => {
      const caseOne = [
        ["X", "X", "X"],
        ["O", "O", null],
        [null, null, null],
      ];
      const caseTwo = [
        ["X", null, null],
        ["O", "O", "O"],
        ["X", null, "X"],
      ];
      const caseThree = [
        [null, null, null],
        ["O", "O", null],
        ["X", "X", "X"],
      ];
      expect(checkRow(caseOne, 0)).toEqual(true);
      expect(checkRow(caseTwo, 1)).toEqual(true);
      expect(checkRow(caseThree, 2)).toEqual(true);
    });

    it("Should be false if player has not 3 X's or O's in a row horizontaly", () => {
      const possibleCase = [
        ["X", "O", null],
        ["X", null, null],
        ["O", null, null],
      ];
      expect(checkRow(possibleCase, 0)).toEqual(false);
    });
  });

  describe("Testing vertical winning cases", () => {
    it("Should be true if player has 3 X's or O's three in a row verticaly", () => {
      const caseOne = [
        ["X", "O", null],
        ["X", null, null],
        ["X", null, "O"],
      ];
      const caseTwo = [
        ["X", "O", "X"],
        [null, "O", null],
        [null, "O", "X"],
      ];
      const caseThree = [
        ["O", null, "X"],
        ["O", null, "X"],
        [null, null, "X"],
      ];
      expect(checkColumn(caseOne, 0)).toEqual(true);
      expect(checkColumn(caseTwo, 1)).toEqual(true);
      expect(checkColumn(caseThree, 2)).toEqual(true);
    });

    it("Should be false if player has not 3 X's or O's in a row verticaly", () => {
      const possibleCase = [
        [null, "X", null],
        [null, "O", "O"],
        [null, "X", null],
      ];
      expect(checkColumn(possibleCase, 0)).toEqual(false);
    });
  });

  describe("Testing diagonal winning cases", () => {
    it("Should be true if player has 3 X's or O's three in a row diagonaly", () => {
      const caseOne = [
        ["X", "O", null],
        ["O", "X", null],
        [null, null, "X"],
      ];
      const caseTwo = [
        ["X", "X", "O"],
        [null, "O", null],
        ["O", "X", null],
      ];

      expect(checkDiagonal(caseOne)).toEqual(true);
      expect(checkDiagonal(caseTwo)).toEqual(true);
    });

    it("Should be false if player has not 3 X's or O's in a row diagonaly", () => {
      const defaultCase = [
        ["X", null, null],
        [null, "X", null],
        ["O", null, "O"],
      ];
      expect(checkDiagonal(defaultCase)).toEqual(false);
    });
  });
});
