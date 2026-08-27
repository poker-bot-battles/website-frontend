import newBlock from "./newBlock";

newBlock({
  definition: {
    type: "play_fold",
    message0: "Fold",
    previousStatement: null,
  },
  codeGenerator: () => "return 0",
});
