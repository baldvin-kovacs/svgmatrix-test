const group = document.getElementById("group");
console.log(group);
const m = group.getScreenCTM();
console.log(m);
const mi = m.inverse();
const dmi = new DOMMatrix([mi.a, mi.b, mi.c, mi.d, mi.e, mi.f]);

console.log("mi: ", mi, dmi);

const doboz = document.getElementById("doboz");
doboz.addEventListener('click', (e) => {
  console.log("click event: ", e.x, e.y);
  const mpt = new DOMPoint(e.x, e.y);
  const local = dmi.transformPoint(mpt);
  console.log(local);
});
