import { mount } from "@vue/test-utils";
import { describe, expect , test , it } from "vitest";

import HomeView from "../src/views/HomeView.vue"
import Calculator from "../src/components/MyCalculator/Calculator.vue"

describe("HomeView tets", ()=>{
    test("should exist a calculator",() =>{
        const wrapper= mount(HomeView);
        const findcalculator= wrapper.findComponent(Calculator);
        expect(findcalculator.exists()).toBeTruthy()
    })
})