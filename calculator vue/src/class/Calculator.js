export default class Calculator{
    #screen
    #buttons
    constructor(screen, buttons){
        this.#screen = screen;
        this.#buttons = buttons;
    }
    setScreen(screen){
        this.#screen = screen;
    }
    get Screen(){
        return this.#screen;
    }
    setbuttons(button){
        this.#buttons.push(button);
            
    }
    get buttons(){
        return this.#buttons;}

}