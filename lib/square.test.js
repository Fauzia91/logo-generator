const {Square} = require("./shapes.js")

let c = new Square("red","green","abc");

test("Testing a Square", ()=>{
    expect(c.render()).toBe(`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" x="125" y="125" fill="green" /><text x="140" y="105" fill="red">abc</text></svg>`);
  
})
