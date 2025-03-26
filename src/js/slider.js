let swiperBrands = new Swiper('.swiper-brands', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-brands__swiper-pagination'
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  slidesPerView: 'auto',
  spaceBetween: 35
})

let swiperRepair = new Swiper('.swiper-repair', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-repair__swiper-pagination'
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  slidesPerView: 'auto',
  spaceBetween: 35
})
let swiperPrice = new Swiper('.swiper-price', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-price__swiper-pagination'
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  slidesPerView: 'auto',
  spaceBetween: 35
})

if (window.innerWidth > 767) {
  swiperBrands.destroy()
  swiperBrands = 0
  swiperRepair.destroy()
  swiperRepair = 0
  swiperPrice.destroy()
  swiperPrice = 0
}
window.addEventListener(
  'resize',
  function (event) {
    if (event.target.innerWidth > 767 && swiperBrands) {
      swiperBrands.destroy()
      swiperBrands = 0
      swiperRepair.destroy()
      swiperRepair = 0
      swiperPrice.destroy()
      swiperPrice = 0
    } else if (event.target.innerWidth < 767 && !swiperBrands) {
      swiperBrands = new Swiper('.swiper-brands', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-brands__swiper-pagination'
        },

        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },

        slidesPerView: 'auto', 
        spaceBetween: 35
      })

      swiperRepair = new Swiper('.swiper-repair', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-repair__swiper-pagination'
        },

        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },

        slidesPerView: 'auto', 
        spaceBetween: 35
      })
      swiperPrice = new Swiper('.swiper-price', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        pagination: {
          el: '.swiper-price__swiper-pagination'
        },

        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
        slidesPerView: 'auto',
        spaceBetween: 35
      })
    }
  },
  true
)