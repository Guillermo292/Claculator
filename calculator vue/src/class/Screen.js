export default class Screen{
    #Content
    constructor(){
        this.#Content="";

    }
    setContent(content){
        this.#Content = content;
    }
    get Content(){
        return this.#Content;
    }
}