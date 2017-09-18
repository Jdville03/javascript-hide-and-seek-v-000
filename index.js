function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + 3).toString()
  }
}

function deepestChild() {
  const lis = document.getElementById('grand-node').querySelectorAll('div')
  return lis[lis.length - 1]
}
