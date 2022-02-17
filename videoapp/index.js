let $ = {
  set: function (key, val) {
  
  localStorage.setItem(key, val)
  
},

get: function(key) {
  
  return localStorage.getItem(key)
  
},
  
 ce: (element, element2a) => {
let el = document.createElement(element)
element2a.append(el)
return el
},

txtc: function(element, txt) {
  element.textContent = txt
},
  
getById: function(elementid) {
  return document.getElementById(elementid)
},
  
getByTag: function(elementtag) {
  return document.getElementsByTagName(elementtag)
},
  
att: function(element, att, val) {
  element.setAttribute(att, val)
},
  
dele: function(element) {
  element.parentNode.removeChild(element)
}
}

///////////////////////////////////

export { $ }
