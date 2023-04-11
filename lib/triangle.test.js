const {Triangle} = require("./shapes.js")

let t = new Triangle("red","green","abc");

test("Testing a circle", ()=>{
    expect(t.render()).toBe(`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 280,150 20,150"  fill="green"  /><text x="140" y="105" fill="red">abc</text></svg>`)
})
