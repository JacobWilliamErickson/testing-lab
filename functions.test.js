const {
    add,greeting,returnTwo,sub,multiply,div
} = require('./functions')

test("returns 2",() =>{
  expect(returnTwo()).toBe(2)
})

test("returns hello greeting",() =>{
    expect(greeting('James')).toBe('hello, James')
    expect(greeting('Jill')).toBe('hello, Jill')
  })

  
  describe("math functions testing",()=>{
      test("adds two numbers",() =>{
        expect(add(1,2)).toBe(3)
        expect(add(5,9)).toBe(14)
      })
      test("subracts two numbers",() =>{
        expect(sub(5,2)).toBe(3)
        expect(sub(20,9)).toBe(11)
      })
      test("multiplies two numbers",() =>{
        expect(multiply(3,2)).toBe(6)
        expect(multiply(5,9)).toBe(45)
      })
      test("divides two numbers",() =>{
        expect(div(6,2)).toBe(3)
        expect(div(9,9)).toBe(1)
      })
  })