<template>
 <div>
<div id="homepage-slider" class="st-slider w-1/4  ml-[40%]">

    
      <input type="radio" class="cs_anchor radio" name="slider" id="slide1"/>
    <input type="radio" class="cs_anchor radio" name="slider" id="slide2"/>
    <input type="radio" class="cs_anchor radio" name="slider" id="slide3"/>
    <input type="radio" class="cs_anchor radio" name="slider" id="play1" checked/>
    

    <div class="images">
       <div class="images-inner">
        <div class="image-slide">
          <div class="image bg-gray-100">
            <img src="./bgp.png" class="justify-center w-56 ml-20"/>
          </div>
        </div>
        <div class="image-slide">
          <div class="image bg-gray-100">
            <img src="./mozfin.png" class="justify-center w-36 ml-28"/>
          </div>
        </div>
        <div class="image-slide">
          <div class="image bg-red" style="background-color:orange;">image slide 3</div>
        </div>
      </div>
    </div>
  
    <div class="labels text-gray-100 font-bold text-lg">
        <label for="slide1" class="label">RCCG Beautiful Gate Parish</label>
        <label for="slide2" class="label">Mozfin Micro Finance Bank</label>
        <label for="slide3" class="label">Worldsech</label>
      
        <div class="fake-radio">
          <label for="slide1" class="radio-btn"></label>
          <label for="slide2" class="radio-btn"></label>
          <label for="slide3" class="radio-btn"></label>
        </div>
    </div>
</div>
 </div>

</template>
<style scoped>
.image {
  width: 100%;
  height: 200px;
}
.radio {
  display: none;
}
.images {
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}
.images-inner {
  width: 500%;
  transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
}
.image-slide {
  width: 20%;
  float: left;
}
.image-slide,
.fake-radio,
.radio-btn {
  transition: all 0.5s ease-out;
}
.fake-radio {
  float: right;
}
/* Move slides overflowed container */
#slide1:checked ~ .images .images-inner {
  margin-left: 0;
}
#slide2:checked ~ .images .images-inner {
  margin-left: -100%;
}
#slide3:checked ~ .images .images-inner {
  margin-left: -200%;
}

/* Color of bullets */
#slide1:checked ~ div .fake-radio .radio-btn:nth-child(1),
#slide2:checked ~ div .fake-radio .radio-btn:nth-child(2),
#slide3:checked ~ div .fake-radio .radio-btn:nth-child(3) {
  background: rgb(20, 2, 122);
}
.radio-btn {
  width: 9px;
  height: 9px;
  border-radius: 5px;
  background: gray;
  display: inline-block !important;
  margin: 0 1px;
  cursor: pointer;
}
/* Color of bullets - END */




/* Text of slides */
#slide1:checked ~ .labels .label:nth-child(1),
#slide2:checked ~ .labels .label:nth-child(2),
#slide3:checked ~ .labels .label:nth-child(3) {
  opacity: 1;
}

.label {
  opacity: 0;
  position: absolute;
}
/* Text of slides - END */



/* Calculate AUTOPLAY for BULLETS */
@keyframes bullet {
  0%, 33.32333333333334%	{
    background: rgb(4, 96, 112);
  }
  33.333333333333336%, 100% {
    background: gray;
  }
}


#play1:checked ~ div .fake-radio .radio-btn:nth-child(1) {
  animation: bullet 12300ms infinite -1000ms;
}

#play1:checked ~ div .fake-radio .radio-btn:nth-child(2) {
  animation: bullet 12300ms infinite 3100ms;	
}

#play1:checked ~ div .fake-radio .radio-btn:nth-child(3) {
  animation: bullet 12300ms infinite 7200ms;	
}
/* Calculate AUTOPLAY for BULLETS - END */




/* Calculate AUTOPLAY for SLIDES */
@keyframes slide {
  0%, 25.203252032520325%	{ margin-left: 0; }
  33.333333333333336%, 58.53658536585366%	{ margin-left: -100%; }
  66.66666666666667%, 91.869918699187%	{ margin-left: -200%; }
}


.st-slider > #play1:checked ~ .images .images-inner {
  animation: slide 12300ms infinite;	
}
/* Calculate AUTOPLAY for SLIDES - END */





/* Calculate AUTOPLAY for CAPTION */
@keyframes caption {
  0%, 33.32333333333334%	{
    opacity: 1;
  }
  33.333333333333336%, 100% {
    opacity: 0;
  }
}


#play1:checked ~ .labels .label:nth-child(1) {
  animation: caption 12300ms infinite -1000ms;
}

#play1:checked ~ .labels .label:nth-child(2) {
  animation: caption 12300ms infinite 3100ms;	
}

#play1:checked ~ .labels .label:nth-child(3) {
  animation: caption 12300ms infinite 7200ms;	
}
/* Calculate AUTOPLAY for CAPTION - END */
</style>