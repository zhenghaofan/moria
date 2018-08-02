function hasClass(ele, cls) {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    ele.className = ele.className.replace(new RegExp("(\\s|^)" + cls + "(\\s|$)"), "");
  };
};

function addAnimClass(args) {
  args.forEach((item, index) => {
    const el = document.getElementsByClassName(item)[0];
    addClass(el, item + '-anim');
    el.style.opacity = 1;
  })
}

window.onload = function () {
  addAnimClass(['text1', 'paint-man', 'paint-woman', 'paint-main'])
}

function isElementInViewport(el, offset = 0) {
  const box = el.getBoundingClientRect();
  // top = (box.top >= 0),
  // left = (box.left >= 0),
  // bottom = (box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset),
  // right = (box.right <= (window.innerWidth || document.documentElement.clientWidth) + offset);

  // return (top && left && bottom && right);

  const top = box.top;
  const bottom = box.bottom;
  const height = window.innerHeight || document.documentElement.clientHeight;
  return (top <= 0 && bottom > 0) || (top >= 0 && bottom <= height) || (top >= 0 && bottom >= 0 && top <= height)

}

function addClassOnScroll(ele, cls) {
  const el = document.getElementsByClassName(ele)[0];
  el.style.opacity = 0;
  removeClass(el, cls);
  const timer = setTimeout(() => {
    addClass(el, cls);
    el.style.opacity = 1;
    clearTimeout(timer)
  }, 500);
}

window.onscroll = function () {
  const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  const el1 = document.getElementsByClassName('paint1')[0];
  const height = el1.offsetTop + el1.clientHeight;
  if (!isElementInViewport(el1) && height < scrollY) {
    console.log('scroll1')
    addClassOnScroll('text1', 'text1-anim')
    addClassOnScroll('paint-woman', 'paint-woman-anim');
    addClassOnScroll('paint-man', 'paint-man-anim');
    addClassOnScroll('paint-main', 'paint-main-anim');
  }
  const el2 = document.getElementsByClassName('pros')[0];
  if (!isElementInViewport(el2)) {
    console.log('srcoll2')
    addClassOnScroll('pros', 'pros-anim');
  }
  const el3 = document.getElementsByClassName('sec3-wrapper')[0];
  if (!isElementInViewport(el3)) {
    console.log('scroll3')
    addClassOnScroll('sec3-wrapper', 'text1-anim');
    addClassOnScroll('devops', 'paint-main-anim');
  }

  const el4 = document.getElementsByClassName('monitor')[0];
  if (!isElementInViewport(el4)) {
    console.log('scroll4')
    addClassOnScroll('monitor', 'monitor-anim');
    addClassOnScroll('man', 'man-anim');
    addClassOnScroll('woman', 'woman-anim');
  }

  const el5 = document.getElementsByClassName('sec5-wrapper')[0];
  if (!isElementInViewport(el5)) {
    console.log('scroll5')
    addClassOnScroll('sec5-wrapper', 'text1-anim');
    addClassOnScroll('view', 'paint-main-anim');
  }

  const el6 = document.getElementsByClassName('sec6-wrapper')[0];
  if (!isElementInViewport(el6)) {
    console.log('scroll6')
    addClassOnScroll('joinus', 'text1-anim');
    addClassOnScroll('sec6-wrapper', 'paint-main-anim');
  }
}