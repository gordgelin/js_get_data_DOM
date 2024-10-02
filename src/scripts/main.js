'use strict';

const spans = document.querySelectorAll("[class='population']");

let sum = 0;

for (const span of spans) {
  sum += Number(span.textContent.replaceAll(',', ''));
}

document.querySelector("[class='total']").innerHTML =
  'Total: ' + sum.toLocaleString('en-US');

document.querySelector("[class='average']").innerHTML =
  'Average: ' + Math.round(sum / spans.length).toLocaleString('en-US');
