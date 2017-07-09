var button1, button2, button3;
var textBox1;
var count; // integer

function setup(){
  button1 = createButton("點我");
  button1.mousePressed(plus);
  count = 0;
  button2 = createButton("0");
}

function plus(){
  count += 1;
}

function draw(){
  button2 = createButton(count);
  button2.mousePressed(plus);
}
