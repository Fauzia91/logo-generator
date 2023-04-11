const {Circle} = require("./shapes.js")

let c = new Circle("red","green","abc");

test("Testing a circle", ()=>{
    expect(c.render()).toBe(`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="50" fill="green" /><text x="140" y="105" fill="red">abc</text></svg>`)
})
