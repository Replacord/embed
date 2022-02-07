export var stats = {

ver : '1.0',
author : 'Zombiefied Gaming YT',
lang : 'JavaScript',
all : 'Version : 1.0, ' + 'Author : Zombiefied Gaming YT, ' + 'language : JavaScript'
}

export var html = {
  // append, title, url params  and more
  
  
  newdoc : function(title, h1){
    if (h1 == undefined || title == undefined || h1 == null || title == null || h1 == '' || title == '' || title == '' && h1 == '' || title == undefined && h1 == undefined | title == null && h1 == null){
    }
    else {
      
      this.h1(h1)
    this.title(title)
      
    }
    document.write(`
    
    
    <html>
    <head>
</head>    
    <body>
    </body>
    </html>
    
    
    
    
    
    
    
    
    
    `)
  },
  
  getelementvalue : function(id) {
  var element = document.getElementById(id).value
    return element
  },
    
  href : function(url) {
    
    window.location.href = url
    
  },
  
  delete : function(id) {
    
    document.deleteElement(id)
    
    
    
  }, 
  
  
  
  contains : function(string, find){
    
    return string.includes(find)
    
    
  },
  
  geturlparams: function(find){

// grabs paramiters from the url

var queryString = window.location.search
  
  var urlParams = new URLSearchParams(queryString);
   
  return urlParams.get(find)

},
  
  urlparamsis: function(find, need){

    var result = this.geturlparams(find, need)
  if (result == need){
    
    return true
    
  }

},
  
  title : function(text, id) {
  var element = document.createElement("title");
          element.setAttribute('id', id)
          element.textContent = text;
          document.body.append(element)
  
  
},
  textarea: function(text, id, classs) {
  var element = document.createElement("textarea");
          element.setAttribute('id', id)
          element.setAttribute('class', classs)
          element.textContent = text;
          document.body.append(element)
  
  
},
  
  append : function(element1, element2) {
    

  var element11 = document.getElementById(element1)
  var element22 = document.getElementById(element2)
          element22.append(element11)
  
},
  // links href, buttons
    a : function(text, link, id, clas) {
var element = document.createElement('a')
  element.setAttribute('href', link)
  element.setAttribute('id', id)
  element.setAttribute('class', clas)
  element.textContent = text
  document.body.append(element)
  
},
  
  newtab_a : function(text, link, id, clas) {
var element = document.createElement('a')
    element.setAttribute('href', link)
    element.setAttribute('target', '_blank')
      element.setAttribute('id', id)
  element.setAttribute('class', clas)
  element.textContent = text
  document.body.append(element)



},
  
  button : function(text, link, id, clas) {
    var element = document.createElement('button')
      element.setAttribute('id', id)
  element.setAttribute('class', clas)
  element.textContent = text
    
    var element2 = document.createElement('a')
          element2.setAttribute('id', id)
  element2.setAttribute('class', clas)
    element2.setAttribute('href', link)
    
  
    
    element2.append(element)
    document.body.append(element2)
    
  
    

},
  
  buttononclick : function(text, functionn, id, clas) {
    var element = document.createElement('button')
      element.setAttribute('id', id)
  element.setAttribute('class', clas)
  element.setAttribute('onclick', functionn)
  element.textContent = text
    
    document.body.append(element)
    
  
    

},
  
  newtab_button : function(text, link, id, clas) {
    var element = document.createElement('button')
      element.setAttribute('id', id)
  element.setAttribute('class', clas)
  element.textContent = text
    
    var element2 = document.createElement('a')
    element2.setAttribute('href', link)
    element2.setAttribute('target', '_blank')
    
  
    
    element2.append(element)
    document.body.append(element2)
    
  
    

},
  
  // headers
  
h1 : function(text, id, clas) {
  var element = document.createElement("h1");
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
  
  
},
  
  h2 : function(text, id, clas) {
  var element = document.createElement("h2");
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
  
  
},
  
  h3 : function(text, id, clas) {
  var element = document.createElement("h3");
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
  
  
},
  
  h4 : function(text, id, clas) {
  var element = document.createElement("h4");
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
  
  
},
  
  h5 : function(text, id, clas) {
  var element = document.createElement("h5");
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
  
  
},
  
  h6 : function(text, id, clas) {
  var element = document.createElement("h6");
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
  
  
},
  
  // p and span, 
   p : function(text, id, clas) {
  var element = document.createElement("hp");
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
  
  
},
   span : function(text, id, clas) {
  var element = document.createElement("span");
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
  
  
},
  // inputs
   input_submit : function(value, id, clas, text) {
  var element = document.createElement("input");
          element.setAttribute('value', value)
          element.setAttribute('type', 'submit')
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
  
},
  
  input_file : function(id, clas) {
  var element = document.createElement("input");
          element.setAttribute('type', 'file')
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          document.body.append(element)
  
},
  
  input_text : function(value, placeholder, maxlength, id, clas, ) {
  var element = document.createElement("input");
          element.setAttribute('value', value)
          element.setAttribute('placeholder', placeholder)
          element.setAttribute('type', 'text')
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.setAttribute('maxlength', maxlength)
          document.body.append(element)
    
  },
  input_button : function(value, id, clas, text) {
  var element = document.createElement("input");
          element.setAttribute('value', value)
          element.setAttribute('type', 'button')
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
    
  },
  
  input_color : function(value, id, clas, text) {
  var element = document.createElement("input");
    element.setAttribute('value', value)
          element.setAttribute('type', 'color')
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.textContent = text;
          document.body.append(element)
    
  },
  input : function(type, value, placeholder, maxlength, id, clas, ) {
  var element = document.createElement("input");
          element.setAttribute('value', value)
          element.setAttribute('placeholder', placeholder)
          element.setAttribute('type', type)
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.setAttribute('maxlength', maxlength)
          document.body.append(element)
  },
  
  // progress
   progress : function(value, maxvalue, id, classs) {
    
    let element = document.createElement('progress')
    element.setAttribute('value', value)
    element.setAttribute('max', maxvalue)
    element.setAttribute('id', id)
    element.setAttribute('class', classs)
    document.body.append(element)
    
    
  },
  
  // div
  div : function(id, classs) {
    
    let element = document.createElement('div')
    element.setAttribute('id', id)
    element.setAttribute('class', classs)
    document.body.append(element)
  },
  // label

 label : function(text, forr, id, clas) {
  var element = document.createElement("label");
          element.setAttribute('for', forr)
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
   
   element.textContent = text
   
   let p = document.getElementById('forr')
          document.body.append(element)
 },
  
  img : function(bg, id, clas) {
  var element = document.createElement("img");
          element.setAttribute('id', id)
          element.setAttribute('class', clas)
          element.style.backgroundImage = `url(${bg})`
          document.body.append(element)
  
  
},
  

}

export var css = {

textcolor: function( id, color ){

document.getElementById(id).style.color = color

  
},
  
  backgroundcolor: function( id, color ){

document.getElementById(id).style.backgroundColor = color

  
},
}

export var id = {
  
  generate() 
	{
		var ran = Math.random().toString().substr(10) + '' + Math.random().toString().substr(10)
    var ran1 = Number(ran)
    var id = ran1 + ran1
    return id.toString(36)
  }
}