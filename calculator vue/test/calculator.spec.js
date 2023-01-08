import { mount } from "@vue/test-utils";
import { describe, expect, test, it } from "vitest";

import Calculator from "../src/components/MyCalculator/Calculator.vue";
import Button from "../src/components/MyCalculator/Button.vue"


describe('Calculator component', ()=>{
    test('should contain a button space',()=>{
        const wrapper = mount(Calculator);
        const spaceButton = wrapper.findAll('div');
        expect(spaceButton[3].attributes('class')).toBe('button-space');
    }),
    test('should contain 20 button components', async ()=>{
        const wrapper = mount(Calculator);
        const buttonComponent = wrapper.findAllComponents(Button);
        
        
        expect(buttonComponent.length).toEqual(20)
    })
    
})