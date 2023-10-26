var container2 = document.getElementById('container2')
var slider1 = document.getElementById('slider1');
var slides1 = document.getElementsByClassName('slide1').length;
var button2 = document.getElementsByClassName('btn2');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides1 - slidesPerPage;
var containerWidth = container2.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
	containerWidth = container2.offsetWidth;
	setParams(containerWidth);
}

function setParams(w) {
	if (w < 551) {
		slidesPerPage = 1;
	} else {
		if (w < 901) {
			slidesPerPage = 2;
		} else {
			if (w < 1101) {
				slidesPerPage = 3;
			} else {
				slidesPerPage = 4;
			}
		}
	}
	slidesCount = slides1 - slidesPerPage;
	if (currentPosition > slidesCount) {
		currentPosition -= slidesPerPage;
	};
	currentMargin = - currentPosition * (100 / slidesPerPage);
	slider1.style.marginLeft = currentMargin + '%';
	if (currentPosition > 0) {
		button2[0].classList.remove('inactive');
	}
	if (currentPosition < slidesCount) {
		button2[1].classList.remove('inactive');
	}
	if (currentPosition >= slidesCount) {
		button2[1].classList.add('inactive');
	}
}

setParams();

function Right() {
	if (currentPosition != 0) {
		slider1.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
		currentMargin += (100 / slidesPerPage);
		currentPosition--;
	};
	if (currentPosition === 0) {
		button2[0].classList.add('inactive');
	}
	if (currentPosition < slidesCount) {
		button2[1].classList.remove('inactive');
	}
};

function Left() {
	if (currentPosition != slidesCount) {
		slider1.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
		currentMargin -= (100 / slidesPerPage);
		currentPosition++;
	};
	if (currentPosition == slidesCount) {
		button2[1].classList.add('inactive');
	}
	if (currentPosition > 0) {
		button2[0].classList.remove('inactive');
	}
};
// FEEL THE FESTIVE CONTAINER slider

const initSlider1 = () => {
    const imageList1 = document.querySelector(".slider-wrapper_1 .image-list0");
    const slideButton1 = document.querySelectorAll(".slider-wrapper_1 .slide-button1");
    const sliderScrollbar1 = document.querySelector(".container_1 .slider-scrollbar1");
    const scrollbarThumb1 = sliderScrollbar1.querySelector(".scrollbar-thumb1");
    const maxScrollLeft1 = imageList1.scrollWidth - imageList1.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb1.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb1.offsetLeft;
        const maxThumbPosition = sliderScrollbar1.getBoundingClientRect().width - scrollbarThumb1.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft1;
            
            scrollbarThumb1.style.left = `${boundedPosition}px`;
            imageList1.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButton1.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide1" ? -1 : 1;
            const scrollAmount = imageList1.clientWidth * direction;
            imageList1.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButton1[0].style.display = imageList1.scrollLeft <= 0 ? "none" : "flex";
        slideButton1[1].style.display = imageList1.scrollLeft >= maxScrollLeft1 ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList1.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft1) * (sliderScrollbar1.clientWidth - scrollbarThumb1.offsetWidth);
        scrollbarThumb1.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList1.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider1);
window.addEventListener("load", initSlider1);

const initSlider2 = () => {
    const imageList2 = document.querySelector(".slider-wrapper_2 .image-list1");
    const sliderScrollbar2 = document.querySelector(".container_2 .slider-scrollbar2");
    const scrollbarThumb2 = sliderScrollbar2.querySelector(".scrollbar-thumb2");
    const maxScrollLeft2 = imageList2.scrollWidth - imageList2.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb2.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb2.offsetLeft;
        const maxThumbPosition = sliderScrollbar2.getBoundingClientRect().width - scrollbarThumb2.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft2;
            
            scrollbarThumb2.style.left = `${boundedPosition}px`;
            imageList2.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList2.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft2) * (sliderScrollbar2.clientWidth - scrollbarThumb2.offsetWidth);
        scrollbarThumb2.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList2.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider2);
window.addEventListener("load", initSlider2);