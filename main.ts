import inquirer from "inquirer";

let myPin: number = 6485;
let myBalance: number = 20000;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "please enter your pin",
    type: "number",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("coreect Pin!!");

  let opretionans = await inquirer.prompt([
    {
      name: "operation",
      message: "chose one of the option",
      type: "list",
      choices: ["cash withdraw", "balance inquiry","fast cash"],
    },
  ]);

  if (opretionans.operation === "balance inquiry")
    console.log("your balance amont is:" + myBalance);


    else if (opretionans.operation === "fast cash") {
        let fastCash = await inquirer.prompt([
          {
            name: "fast",
            messeage: "type your desire amount",
            type: "listumber",
            choices: ["1000","2000","3000","4000"]
          },
        ]);

        if (myBalance >= fastCash.fast ) {myBalance -= fastCash.fast}
      console.log("you remaining amount is" + myBalance );
    
    }





    else if (opretionans.operation === "cash withdraw") {
    let drawCash = await inquirer.prompt([
      {
        name: "requiredCash",
        messeage: "type your desire amount",
        type: "number",
      },
    ]);

    if (drawCash.requiredCash > myBalance)
      console.log("your have unsufficient balance");
    
      else myBalance -= drawCash.requiredCash;
    console.log("your balance amont is:" + myBalance);
  } }

  else {
    console.log("you enter wrong pin");
 }
