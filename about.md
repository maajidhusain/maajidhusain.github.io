---
layout: single
title: About
permalink: /about/
author_profile: true
---
## Table of Contents
1. [My Life](#1-my-life)
2. [About Me](#2-about-my-life)
3. [Reading](#3-reading)
4. [Other Hobbies](#4-construction--manual-labor)

---------------------------

## 1.  My life

<!-- Slideshow container -->
<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="/assets/images/img5.jpeg" style="width:100%">
    <div class="text">Fireside Chat at Data Fest at UVA 2022</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="/assets/images/img1.jpeg" style="width:100%">
    <div class="text">Spending time with my brothers</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="/assets/images/img2.jpeg" style="width:100%">
    <div class="text">Events at UVA</div>
  </div>

<div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="/assets/images/img3.jpeg" style="width:100%">
    <div class="text">Being adventurous at America's National Parks</div>
  </div>

<div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="/assets/images/img4.jpeg" style="width:100%">
    <div class="text">Spending time with friends</div>
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>
<style>
    * {box-sizing:border-box}
div{
    border-radius: 10px
    color: #FFFF
}
/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}
{}
/* Hide the images by default */
.mySlides {
  display: none;
}
{}
/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}
/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active, .dot:hover {
  background-color: #717171;
}
/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}
@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>
<script>
    let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
</script>

## 2.  About my Life

I am a student first, but in my free time I really enjoy exploring nature, going longboarding, spending time with friends, and working towards my career and academic goals.

--------------------

## 3.  Reading

Leisurely reading is something I have always been interested in. Some of my favorite books include:
1. *The Bartimaeus Sequence* by Jonathan Stroud
2. *Great Expectations* by Charles Dickens
3. *The Autobiography of Malcom X* by Malcolm X and Alex Haley
4. *Hatchet* by Gary Paulsen

--------------------

## 4.  Construction + Manual Labor

During the COVID-19 Pandemic, I found myself having an abundance of free time with too much time spent on my phone, laptop, or TV. Trying to figure out what to do with my time, I decided to start as an apprectiece for a contracting company. On multiple residential and commercial jobs, I picked up many handyman skills including:
- Carpentry
- Tile work
- Electrician skills
- Masonry
- Drywall
Using these skills, I have completed many projects at home, from building a large fitpit/grill to renovating two of the bathrooms in my home.

<!-- Image Gallery -->
<div class="gallery">
  <a target="_blank" href="/assets/images/bathroombefore.png">
    <img src="/assets/images/bathroombefore.png" alt="Bathroom Before" width="600" height="400">
  </a>
  <div class="desc">Bathroom before renovation</div>
</div>

<div class="gallery">
  <a target="_blank" href="/assets/images/bathroomafter1.png">
    <img src="/assets/images/bathroomafter1.png" alt="Bathroom After" width="600" height="400">
  </a>
  <div class="desc">Image 1 of bathroom after renovation</div>
</div>

<div class="gallery">
  <a target="_blank" href="/assets/images/bathroomafter2.png">
    <img src="/assets/images/bathroomafter2.png" alt="Bathroom After" width="600" height="400">
  </a>
  <div class="desc">Image 2 of bathroom after renovation</div>
</div>
<!-- Image Gallery CSS styleaf -->
<style>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}
div.gallery:hover {
  border: 1px solid #777;
}
div.gallery img {
  width: 100%;
  height: 250px;
}
div.desc {
  padding: 15px;
  text-align: center;
}
</style>