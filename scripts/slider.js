class Slider {
  constructor(selector)
  {
    this.slider = document.querySelector(selector)
    this.sliding
    this.currentPosition=0
    this.sliderContainer
    // to know the width of a item
    this.sliderCardWidth=this.slider.querySelector('.card').offsetWidth;
    // to know how many items
    this.numberItems = this.slider.querySelectorAll('.card').length

    this.arrowNext
    this.arrowPrev
    this.arrowNav

    this.init()
    this.hideArrow()
  }

  init()
  {

    // add div
    this.sliderContainer= document.createElement('div')
    this.sliderContainer.classList.add('sliderContainer')
    this.sliderContainer.style.width= this.numberItems*this.sliderCardWidth +'px'
    this.sliderContainer.innerHTML = this.slider.innerHTML
    this.slider.innerHTML= '';
    this.slider.appendChild(this.sliderContainer)

    // add arrows

    this.arrowNav = document.createElement('div')
    this.arrowNav.classList.add('arrowNav')
    this.slider.appendChild(this.arrowNav)

    this.arrowNext = document.createElement('div')
    this.arrowNext.classList.add('arrowNext')
    this.arrowNext.innerHTML='>'
    this.arrowNav.appendChild(this.arrowNext)

    this.arrowPrev = document.createElement('div')
    this.arrowPrev.classList.add('arrowPrev')
    this.arrowPrev.innerHTML='<'
    this.arrowNav.appendChild(this.arrowPrev)

    this.arrowNext.addEventListener('click',()=>
    {
      if (window.innerWidth<960){
        this.sliding=1
      }
      else{
        this.sliding=2
      }
      this.currentPosition = this.currentPosition + this.sliding
      let toSlide = this.sliderCardWidth*this.currentPosition
      this.sliderContainer.style.transform= 'translateX(-'+toSlide+'px)'
      this.hideArrow()
    })

    this.arrowPrev.addEventListener('click',()=>
    {
      if (window.innerWidth<960){
        this.sliding=1
      }
      else{
        this.sliding=2
      }
      this.currentPosition = this.currentPosition - this.sliding
      let toSlide = this.sliderCardWidth*this.currentPosition
      this.sliderContainer.style.transform= 'translateX(-'+toSlide+'px)'
      this.hideArrow()
    })
  }

hideArrow()
  {
    if(this.currentPosition==0)
    {
      this.arrowPrev.classList.remove('is-visible')
    }
    else{
      this.arrowPrev.classList.add('is-visible')
    }

    if(this.currentPosition+this.sliding>=this.numberItems){
      this.arrowNext.classList.remove('is-visible')
    }
    else{
      this.arrowNext.classList.add('is-visible')
    }
  }
}

let mySlide = new Slider('.slider')
