function calculate(input) {
  input = input.replace(/ /g,'');
  let frames = input.split(",");

  let groups = [];
  frames.forEach(element => {
    if (groups.length == 0) {
      groups.push([element]);
    }
    else {
      let len = groups.length;
      if (groups[len-1][groups[len-1].length - 1] == element - 1) {
        groups[len - 1].push(element);
      }
      else {
        groups.push([element]);
      }
    }
  })

  console.log(groups);

  let result = [];
  groups.forEach(element => {
    result.push(element[0] + "-" + element[element.length - 1]);
  })

  console.log(result);

  return result;
}

function execute() {
  let input = document.getElementById('framesInput').value;
  document.getElementById('output').innerHTML = calculate(input);
}
