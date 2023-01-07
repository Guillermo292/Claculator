export default class Calculator{
    #screen
    #buttons
    constructor(){
        this.#screen;
        this.#buttons = new Array();
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
    getbuttons(){return
    this.#buttons;}

}