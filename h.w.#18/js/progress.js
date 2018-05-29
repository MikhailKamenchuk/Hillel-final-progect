let HideElements = function(main, method){
  let self = this;
  let container = document.querySelector(main);
  let seriatim = method;
  this.btn = container.querySelector('.btn-for-promise');
  this.indicator = container.querySelector('.my-bar');
  this.imagesInPromise = container.querySelectorAll('.for-image');
  this.textInPromise = container.querySelectorAll('.content-in-progressbar');
  this.headsInPromise = container.querySelectorAll('.article-ptomise');
  
  this.hideProgress = function(){
  self.indicator.style.width = "0";
  }
  
  this.hideEl = function(el){
        el.style.width = "0";
    el.style.padding = "0";
    el.style.height = "0";
  }
  
  this.hideImages = function(){
    if(seriatim === true){
      for(let i = 0; i < self.imagesInPromise.length; i++){
          self.hideEl(self.imagesInPromise[i]);
      }
    }    
  }
  
  this.hideText = function(){
    if(seriatim === true){
      for(let i = 0; i < self.textInPromise.length; i++){
          self.hideEl(self.textInPromise[i]);
      }
    } 
  }
  
  this.hideHeders = function(){
    if(seriatim === true){
      for(let i = 0; i < self.headsInPromise.length; i++){
          self.hideEl(self.headsInPromise[i]);
      }
    }
}
  
  
  let promise = new Promise((resolve, reject) => {
  resolve(self.btn.addEventListener('click', self.hideProgress))
  });
  promise.then(function(){
  return Promise.resolve(self.indicator.addEventListener('transitionend', function(event){
    event.stopPropagation();
    self.hideImages();
  }))
  }).then(function(){
  return Promise.resolve(self.imagesInPromise[self.imagesInPromise.length - 1].addEventListener('transitionend', function(event){
    event.stopPropagation();
    self.hideText();
  }))
}).then(function(){
  return Promise.resolve(self.textInPromise[self.textInPromise.length - 1].addEventListener('transitionend', function(event){
    event.stopPropagation();
    self.hideHeders();
  }))
})
  

};

let forFirstProgressbar = new HideElements('.first-progressbar', true);
let forSecondProgressbar = new HideElements('.second-progressbar', false);
