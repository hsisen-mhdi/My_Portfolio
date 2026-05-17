/*--------------email js-------------*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_zb16kd8','template_jucs05z','#contact-form','605D0oXbcmBIoCWu7')

    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(()=>{
        contactMessage.textContent = ''
        }, 5000)

        //Clear input fields
        contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)

/*---------------show scroll up---------------*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*--------------scroll sections active link---------------*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*--------------scroll reveal animation---------------*/
const sr = ScrollReveal ({
    origin: 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    //reset : true, //animations repeat

}
)

sr.reveal('.perfil , .contact__form')
sr.reveal('.info' , {origin : 'left' ,deplay :800})
sr.reveal('.skills' , {origin : 'left' ,deplay :1000})
sr.reveal('.about' , {origin : 'right' ,deplay :1200})
sr.reveal('.projects__card, .services__card, .experience__card' , {interval :100})

