// For Active Nav-Links

$(document).ready(function () {
  $('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
});

// for date picker
flatpickr("#dateRange", {
  mode: "range",
  altInput: true,
  locale: { rangeSeparator: " - " },
  onValueUpdate: (selectedDates, dateStr, instance) => {
    if (selectedDates.length === 2) {
      const [fromDate, toDate] = selectedDates;
      const formatOptions = (date, withYear = false) =>
        date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', ...(withYear && { year: 'numeric' }) });

      instance.altInput.value = `${formatOptions(fromDate)} - ${formatOptions(toDate, true)}`;
    }
  }
});


const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');
const icon = togglePassword.querySelector('img'); // Get the icon

togglePassword.addEventListener('click', function () {
  // Toggle the type attribute
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Toggle the eye icon (assuming 'eye.svg' for password and 'eye-slash.svg' for visible password)
  icon.src = type === 'password' ? 'assets/icons/visibility_slash.svg' : 'assets/icons/eye.svg';
});

// For Empty email box
const emailInput = document.getElementById('email');
const clearEmailBtn = document.getElementById('clear-email');

clearEmailBtn.addEventListener('click', function () {
  // Clear the email input field
  emailInput.value = '';
});


$(document).ready(function() {
  // Swiper Initialization
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true,
    slidesPerView: "2",
    coverflowEffect: {
      rotate: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false
    }
  });

  // Carousel Initialization
  $(document).ready(function() {
    console.log('Debugging Swiper initialization'); // Debugging line
  
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      slidesPerView: "2",
      coverflowEffect: {
        rotate: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
      },
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: false
      }
    });
  
    console.log('Debugging carousel initialization'); // Debugging line
  
    $('.top-ordered-products .carousel .carousel-item').each(function () {
      var minPerSlide = 4;
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      if (!next.hasClass('carousel-control-prev') && !next.hasClass('carousel-control-next')) {
        next.children(':first-child').clone().appendTo($(this));
      }
  
      for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        if (!next.hasClass('carousel-control-prev') && !next.hasClass('carousel-control-next')) {
          next.children(':first-child').clone().appendTo($(this));
        }
      }
    });
  });
  