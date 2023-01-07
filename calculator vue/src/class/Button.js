export default class Button{
    #Key;
    constructor(key){
        this.#Key=key;

    }
    setKey(key){
        this.#Key = key;
    }
    get Key(){
        return this.#Key;
    }
}


    
