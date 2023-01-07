export default class Screen{
    #Content
    contructor(){
        this.#Content="";

    }
    setContent(content){
        this.#Content = content;
    }
    getContent(){
        return this.#Content;
    }
}