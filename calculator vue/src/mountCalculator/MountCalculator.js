import Calculator from "../class/Calculator";
import Button from "../class/Button";
import Screen from "../class/Screen";

export default function MountCalculator(){
    let MyScreen = new Screen("");
    let MyKeyboard = MountKeyboard();
    
    let MyCalculator = new Calculator(MyScreen,MyKeyboard);
    return MyCalculator;
}
export function MountKeyboard(){
    let temporalkeyboard = new Array();
    let itemButtons = ["1","2","3","+","4","5","6","-","7","8","9","*", "0","/",".", "CE","="];
    for (let index = 0;  temporalkeyboard.length <= 16; index++){
        
        temporalkeyboard.push(new Button(itemButtons[index]))
    }
    return temporalkeyboard;
}