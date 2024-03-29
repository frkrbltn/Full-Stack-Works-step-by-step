document.addEventListener('DOMContentLoaded', () => {
    let check = document.querySelector("input");
    check.addEventListener('change', (e) => {
      console.log(e.target);
      let value = e.target.checked ? 1 : 0;
      //document.querySelector("html").style.filter = `invert(${value})`;
      document.querySelector('html').classList.toggle('invert');
    });
  
  });