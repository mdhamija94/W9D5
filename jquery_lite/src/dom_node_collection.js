class DomNodeCollection {
  constructor(htmlArr){
    this.htmlArr = htmlArr;
    this.callback = "" ;
  }

  html(str) {
    if (str === undefined) {
      return this.htmlArr[0].innerHTML;
    } else {
      for (let i = 0; i < this.htmlArr.length; i++) {
        this.htmlArr[i].innerHTML = str;
      }
    }
  }

  empty() {
    for (let i = 0; i < this.htmlArr.length; i++) {
      this.htmlArr[i].innerHTML = "";
    }
  }

  append(value) {
    for (let i = 0; i < this.htmlArr.length; i++) {
      if (typeof value === "string") this.htmlArr[i].innerHTML += value;

      if (value instanceof HTMLElement) this.htmlArr[i].appendChild(value);

      if  (value instanceof DomNodeCollection) {
        for (let j = 0; j < value.htmlArr.length; j++) {

        this.htmlArr[i].appendChild(value.htmlArr[j]);
        } 
      }
    }  
  }

  children() {
    let childrenArr = [];
    for (let i = 0; i < this.htmlArr.length; i++) {
      childrenArr.push(this.htmlArr[i].children);
    }

    return new DomNodeCollection(childrenArr);
  }

  parent() {
    let parentArr = [];
    for (let i = 0; i < this.htmlArr.length; i++) {
      if (!parentArr.includes(this.htmlArr[i].parentNode))
      parentArr.push(this.htmlArr[i].parentNode);
    }

    return new DomNodeCollection(parentArr);
  }

  remove() {
    for (let i = 0; i < this.htmlArr.length; i++) {
      this.htmlArr[i].remove();
  } }

  on(event, callback){
    for (let i = 0; i < this.htmlArr.length; i++) {
      this.htmlArr[i].addEventListener(event, callback);
      this.htmlArr[i][event] = callback;
    }
    this.callback = callback;
  }

  off(event) {
    for (let i = 0; i < this.htmlArr.length; i++) {
      this.htmlArr[i].removeEventListener(event, this.htmlArr[i][event]);
      this.htmlArr[i][event] = [];
    }
  }
}



module.exports = DomNodeCollection;