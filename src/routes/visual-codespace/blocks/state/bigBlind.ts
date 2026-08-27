import newBlock from "../newBlock";

//big_blind (int): The current big blind.
newBlock({
  definition: {
    type: "big_blind",
    message0: "Big Blind",
    output: "Number",
  },
  codeGenerator: () => "obs.big_blind",
});
