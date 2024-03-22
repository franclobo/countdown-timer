# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![image](https://github.com/franclobo/countdown-timer/assets/58642949/d71e8cce-e747-4627-809c-7cd04b3e02c3)


### Links

- Solution URL: [GitHub](https://github.com/franclobo/countdown-timer)
- Live Site URL: [Vercel](https://countdown-timer-nextjs.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind](https://tailwindui.com/) - For styles


### What I learned

```js
const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2024-03-31") - +new Date();
    let timeLeft: TimeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: formatTimeValue(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: formatTimeValue(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: formatTimeValue(Math.floor((difference / 1000 / 60) % 60)),
        seconds: formatTimeValue(Math.floor((difference / 1000) % 60)),
      };
    }

    return timeLeft;
  };
```

### Continued development

Add flip animation.

### Useful resources

- [Next docs](https://nextjs.org/docs/getting-started/installation) - This help me to use NextJS.
- [HyperUI](https://www.hyperui.dev/) - This could be helpfull for stylished projects.
- [Flip animation](https://www.youtube.com/watch?v=p_6IuhmBsfc&t=329s) - This is an amazing video that helped me to understand how to make a flip animation.

## Author

- Website - [WebMinds Studios](https://www.webmindsstudio.com/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- Twitter - [@yPancho2788](https://twitter.com/Pancho2788)

## Acknowledgments

I want to thank to Frontend Mentor for the opportunity to improve my skills.




