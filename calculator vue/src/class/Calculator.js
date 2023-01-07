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
    getScreen(){
        return this.#screen;
    }
    setbuttons(button){
        this.#buttons.push(button);
            
    }
    getbuttons(){
        return this.#buttons;}

}