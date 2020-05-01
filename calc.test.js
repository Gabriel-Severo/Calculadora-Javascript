const calculadora = require('./calc')

describe("calculadora", () => {
    describe('soma', () => {
        it("retorna 3 quanto 2 somado com 1", () => {
            const num1 = 2
            const num2 = 1
            expect(calculadora.soma(num1, num2)).toBe(3)
        })
    })

    describe('subtracao', () => {
        it("retorna 3 quanto 2 somado com 1", () => {
            const num1 = 2
            const num2 = 1
            expect(calculadora.subtracao(num1, num2)).toBe(1)
        })
    })

    describe('multiplicacao', () => {
        it("retorna 3 quanto 2 somado com 1", () => {
            const num1 = 2
            const num2 = 1
            expect(calculadora.multiplicacao(num1, num2)).toBe(2)
        })
    })

    describe('divisao', () => {
        it("retorna 3 quanto 2 somado com 1", () => {
            const num1 = 2
            const num2 = 1
            expect(calculadora.divisao(num1, num2)).toBe(2)
        })
    })

    describe('divisao', () => {
        it("retorna 0 quanto 2 dividido por 0", () => {
            const num1 = 2
            const num2 = 0
            expect(calculadora.divisao(num1, num2)).toBe(0)
        })
    })
})