
# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This repository contains the source code for a "Coming Soon" landing page for a fictional fashion store called "Base Apparel." The landing page is designed as a part of a Frontend Mentor challenge.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- javascript

### What I learned

now, it looks easy but, I have no idea how google fonts integration works and how to link in my html.
```html
 <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
```
never knew that we can use more than one properties for background and gradients.
```css
body {
    height: 100vh;  /* Make sure the body takes up the full viewport height */
    width: 100%;
    margin: 0;
    padding: 0; 
    display: flex;
    flex-direction: column;
    background: 
    url('images/bg-pattern-desktop.svg') repeat,
    linear-gradient(135deg, hsla(0, 0%, 100%), hsla(0, 100%, 98%)),
    linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
}
```
Logic for function to validate an email.
```js
function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
}
```

## Author
- Frontend Mentor - [@leoemn](https://www.frontendmentor.io/profile/leoemn)
- Twitter - [@Leo_emx](https://www.twitter.com/Leo_emx)


## Acknowledgments
I was trying to teach myself programming for very long time but I really get to understand how to think like
programmer after taking CS50x by proffesor David.J.Malan.
