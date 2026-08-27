import newBlock from "../newBlock";

//small_blind (int): The current small blind.
newBlock({
  definition: {
    type: "big_blind",
    message0: "Big Blind",
    output: "Number",
  },
  codeGenerator: () => "obs.big_blind",
});
