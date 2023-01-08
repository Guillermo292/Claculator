import { mount } from "@vue/test-utils";
import { describe, expect , test , it } from "vitest";

import Button from "../src/components/MyCalculator/Button.vue"
import Calculator from "../src/components/MyCalculator/Calculator.vue"

describe("Button tets", ()=>{
    test("should correct props",() =>{
        const key = "+";
        const wrapper= mount(Button, {
            props: {Key: key},
        });
        expect(wrapper.find('h1').text()).toBe(key)
    })
})