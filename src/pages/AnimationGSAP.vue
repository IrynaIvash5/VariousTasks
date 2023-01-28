<template>
  <div class="container">
    <img class="img-sky" src="@/assets/img/sky.png">
    <!--    <img class="img-sky" src="@/assets/img/sky-2.jpg">-->
    <!--    <img src="@/assets/img/sky-3.jpg">-->
    <div class="img-flex">
      <img class="img-star-1 star" alt="star" src="@/assets/img/star-two.png" data-speed="0.15">
      <img class="img-star-2 star" alt="star" src="@/assets/img/star-two.png" data-speed="0.35">
      <img class="img-star-3 star" alt="star" src="@/assets/img/star-two.png" data-speed="0.55">
      <img class="img-star-4 star" alt="star" src="@/assets/img/star-two.png" data-speed="0.75">
      <img class="img-star-5 star" alt="star" src="@/assets/img/star-two.png" data-speed="0.95">
      <img class="img-star-6 star" alt="star" src="@/assets/img/star-two.png" data-speed="0.105">
      <img class="img-star-7 star" alt="star" src="@/assets/img/star-two.png" data-speed="0.115">
    </div>
    <section>
      <div class="header-block">
        <div class="logo">LIVINGEARTH</div>
        <div class="information">
          <div class="left">Countries</div>
          <div class="left">Featured Landcapes</div>
          <div class="left">Past&Current Landcapes</div>
          <div class="left">Tools</div>
          <div class="left">About</div>
        </div>
      </div>
    </section>

    <section>
      <div class="two-section">
        <p class="top-margin-p">ALl-IN-ONE</p>
        <h1 class="top-margin-h1">WELCOME TO UKRAINE</h1>
        <p class="top-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br>
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br>
          ad minim veniam</p>
        <div class="block-btn">
          <button class="btn btn-search">Search</button>
          <button class="btn btn-left">Get In Touch</button>
        </div>

      </div>
    </section>

    <div class="empty"></div>

    <section>
      <div class="tree-section">
        <div class="block-regions">
          <div class="region">
            <div class="country-img"><img src="@/assets/img/ukraine.png"></div>
            <div class="country">UKRAINE</div>
          </div>
          <div class="region">
            <div class="country-img"><img src="@/assets/img/usa.png"></div>
            <div class="country">USA</div>
          </div>
          <div class="region">
            <div class="country-img"><img src="@/assets/img/korea.png"></div>
            <div class="country">KOREA</div>
          </div>
          <div class="region">
            <div class="country-img"><img src="@/assets/img/poland.png"></div>
            <div class="country">POLAND</div>
          </div>
          <div class="region">
            <div class="country-img"><img src="@/assets/img/japan.png"></div>
            <div class="country">JAPAN</div>
          </div>

        </div>
      </div>
    </section>

    <div class="empty"></div>

    <section>
      <div class="for-section">
        <div class="nature-img"><img src="@/assets/img/nature.jpg" alt=""></div>
        <div class="block-text">
          <h4>Enjoy the journey</h4>
          <h1>How to travel properly</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </p>
          <button class="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
    <!--    <div class="empty"></div>-->

    <section>
      <div class="five-section">
        <div class="text-nature-ukraine">NATURE UKRAINE</div>
        <div class="block-img">
          <div class="img-block"><img src="@/assets/img/nature.jpg" alt=""></div>
          <div class="img-block"><img src="@/assets/img/nature.jpg" alt=""></div>
          <div class="img-block"><img src="@/assets/img/nature.jpg" alt=""></div>
<!--                    <div class="img-block"><img src="@/assets/img/nature.jpg" alt=""></div>-->
<!--                    <div class="img-block"><img src="@/assets/img/nature.jpg" alt=""></div>-->
        </div>

      </div>
    </section>

  </div>
</template>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>-->
<script>
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import 'bootstrap';

gsap.registerPlugin(ScrollTrigger)


export default {
  name: 'Animation-GSAP',
  data() {
    return {}
  },
  mounted() {
    // gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()
    tl.fromTo('.top-margin-p',
        {
          x: -100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          color: '#4545d2',
        }, 1
    ).fromTo('.top-margin-h1',
        {
          y: 70,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }, 0.4
    ).fromTo('.top-margin',
        {
          y: 70,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          color: '#ebeb98'
        }, 0.6
    ).fromTo('.btn-search',
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1
        }, .9
    ).fromTo('.btn-left',
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1
        }, 1.1
    ).fromTo('.logo',
        {
          y: -50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          color: '#4545d2',
        }, 2.4
    ).fromTo('.information .left',
        {
          y: -50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          color: '#4545d2',
        }, 2.4
    ).fromTo('.star',
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          color: '#4545d2',
        }, 3
    )
    ///scroll
    gsap.to('.two-section', {
      scrollTrigger: {
        trigger: '.two-section',
        start: 'top top',
        scrub: true
      },
      yPercent: 50,
      scale: 0.5,
      xPercent: -50,
      opacity: 0
    })

    gsap.timeline({
      scrollTrigger: {
        start: 'top top',
        trigger: '.two-section',
        scrub: true,
      }
    }).from('.star', {
      // opacity:0,
      xPercent: -50,
      yPercent: 50,
      scale: 0.5,
    })
    ///animation region
    gsap.from('.country-img', {
      scrollTrigger: {
        trigger: '.tree-section',
        start: '-30% center',
        end: '+=200px',
        scrub: true,
      },
      scale: 0,
      transformOrigin: 'top ',
      ease: 'none',
      stagger: 0.5,
      duration: 1
    })
    gsap.from('.country', {
      scrollTrigger: {
        trigger: '.tree-section',
        start: '-30% center',
        end: '+=200px',
        scrub: true,
      },
      scale: 0,
      transformOrigin: 'top ',
      ease: 'none',
      stagger: 0.75,
      duration: 1

    })
    //// animation nature
    gsap.to('.nature-img', {
      scrollTrigger: {
        trigger: '.for-section',
        scrub: true,
      },
      yPercent: -25,
    })
    gsap.to('.block-text', {
      scrollTrigger: {
        trigger: '.for-section',
        scrub: true
      },
      yPercent: 25,
    })
    /// animation footer block
    gsap.from('.text-nature-ukraine', {
      scrollTrigger: {
        trigger: '.learn-more-btn',
        scrub: true,
        start: '-30% bottom',
        end: '+=350',
      },
      scale: 2,
      transformOrigin: 'left center',
    }, 1)
    const items = gsap.utils.toArray('.img-block')
    gsap.to(items, {
      scrollTrigger: {
        trigger: '.text-nature-ukraine',
        scrub: true,
        start: '-30% center',
      },
      xPercent:  100 * (items.length -1)
    }, 1)

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
%gradient {
  background: -webkit-linear-gradient(#4545d2, #f7f749);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.container {
  //background-color: #141415;
  width: 100%;
  height: 100%;
  color: white;

  .img-sky {
    width: 69.44%;
    height: 600px;
    position: absolute;
  }

  .img-flex {
    display: flex;
    justify-content: space-around;
    position: relative;
    z-index: 999;
  }

  .img-star-1 {
    width: 20px;
    height: 20px;
    position: relative;
    top: 260px;
    left: 40px;
  }

  .img-star-2 {
    width: 30px;
    height: 30px;
    position: relative;
    top: 80px;
    left: 150px;
  }

  .img-star-3 {
    width: 20px;
    height: 20px;
    position: relative;
    top: 370px;
    left: 180px;
  }

  .img-star-4 {
    width: 30px;
    height: 30px;
    position: relative;
    top: 400px;
    left: 180px;
  }

  .img-star-5 {
    width: 40px;
    height: 40px;
    position: relative;
    top: 140px;
    left: 160px;
  }

  .img-star-6 {
    width: 35px;
    height: 35px;
    position: relative;
    top: 350px;
    left: 130px;
  }

  .img-star-7 {
    width: 30px;
    height: 30px;
    position: relative;
    top: 20px;
    left: 45px;
  }

  .header-block {
    padding-top: 20px;
    font-weight: bold;
    display: flex;
    position: relative;
    z-index: 999;
    justify-content: space-around;

    .logo {
      font-size: 22px;
      //@extend %gradient;
    }

    .information {
      display: flex;

      .left {
        margin-left: 20px;
      }
    }
  }

  .two-section {
    height: 500px;
    display: flex;
    flex-direction: column;
    margin-left: 85px;
    position: relative;
    z-index: 999;

    .top-margin-p {
      margin-top: 80px;
    }

    .top-margin-h1 {
      margin-top: 15px;
      font-size: 50px;
      @extend %gradient;
    }

    .top-margin {
      margin-top: 40px;
    }

    .block-btn {
      display: flex;
      margin-top: 50px;
      //margin-bottom: 50px;

      .btn {
        width: 200px;
        height: 40px;
        border: 1px solid #ebeb98;
        background-color: black;
        color: #ebeb98;
        font-weight: bold;

        &:hover {
          background-color: cornflowerblue;
          border: 1px solid cornflowerblue;
          color: white;
        }
      }

      .btn-left {
        margin-left: 10px;

      }
    }

  }

  .empty {
    height: 200px;
  }

  .tree-section {
    height: 400px;
    background-color: #4c505b;
    //margin-bottom: 50px;

    .block-regions {
      display: flex;
      justify-content: center;
      //justify-content: space-around;
      .region {
        margin: 25px;
        margin-top: 100px;
        background-color: #7c8895;
        padding: 5px;

        .country {
          text-align: center;
          color: #d2b145;
        }
      }
    }
  }

  .for-section {
    background-color: #4c505b;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    padding: 60px;

    .nature-img {
      img {
        width: 350px;
        border: 1px solid #ebeb98;
      }
    }

    .block-text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 300px;
      color: #ebeb98;
      font-family: "Gill Sans", sans-serif;

      p {
        font-size: 14px;
      }

      .learn-more-btn {
        width: 200px;
        height: 40px;
        border: 1px solid #ebeb98;
        background-color: black;
        color: #ebeb98;
        font-weight: bold;
      }
    }
  }

  .five-section {

    margin-bottom: 100px;

    .text-nature-ukraine {
      @extend %gradient;
      font-size: 24px;
    }

    .img-block {
      display: flex;
      justify-content: flex-end;
      margin-top: 120px;

      img {
        width: 250px;
        margin: 10px;

      }
    }

    .block-img {
      display: flex;
      justify-content: flex-end;
    }
  }

}

</style>
