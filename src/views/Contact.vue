<template>
  <h1 class="display-2">Contact Me</h1>

      <hr class="line">
  <div class="container">
      <br/>

  <div id="contact">
  
  <div class="contact-wrapper">
    
    <form id="contact-form" class="form-horizontal" role="form" action="https://formspree.io/f/xnqwpppp"
  method="POST">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required>
        </div>
      </div>
<br/>
      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
        </div>
      </div>
<br/>
      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      <br/>
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    

     <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fas fa-map-marker-alt fa-2x"><span class="contact-text place">Cape Town, Western Cape</span></i></li>
          
          <li class="list-item"><i class="fas fa-phone-alt fa-2x"><span class="contact-text phone"><a href="" title="Give me a call">(081) 724-5057</a></span></i></li>
          
          <li class="list-item"><i class="fas fa-envelope fa-2x"><span class="contact-text gmail"><a href="" title="Send me an email">bearnomangola7@gmail.com</a></span></i></li>
          
        </ul>

        <hr>
        <div class="social-icons">
  <a class="social-icon social-icon--codepen" href="https://codepen.io/teddy1824" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--akar-icons" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="akar-icons:codepen-fill"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.372.19c.38-.253.875-.253 1.256 0L23.492 7.4c.317.21.508.565.508.946v7.308c0 .38-.19.736-.508.947l-10.864 7.21c-.38.252-.875.252-1.256 0L.508 16.6A1.136 1.136 0 0 1 0 15.654V8.346c0-.38.19-.736.508-.947L11.372.19zm-9.1 10.273v3.058l2.288-1.54l-2.288-1.518zm4.337 2.878L3.18 15.648l7.684 5.1v-4.583L6.61 13.341zm6.527 2.824v4.582l7.684-5.1l-3.43-2.306l-4.254 2.824zm6.303-4.183l2.29 1.54v-3.06l-2.29 1.52zm1.371-3.636l-3.41 2.263l-4.264-2.868V3.253l7.674 5.093zm-9.946-5.093V7.74l-4.263 2.868L3.19 8.346l7.674-5.093zM12 9.715l-3.35 2.254L12 14.192l3.35-2.223L12 9.715z" fill="currentColor"></path></g></svg>
  </a>
  <a class="social-icon social-icon--github" href="https://github.com/Teddy1824" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--line-md" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="line-md:github"><g fill="none"><path d="M12 4c1.668 0 2.612.4 3 .5c.525-.425 1.938-1.5 3.5-1.5c.344 1 .286 2.22 0 3c.75 1 1 2 1 3.5c0 2.188-.483 3.582-1.5 4.5c-1.017.918-2.111 1.375-3.5 1.5c.65.538.5 1.874.5 2.5v3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="il-md-length-40 il-md-duration-3 il-md-delay-0"></path><path d="M12 4c-1.668 0-2.612.4-3 .5C8.475 4.075 7.062 3 5.5 3c-.344 1-.286 2.22 0 3c-.75 1-1 2-1 3.5c0 2.188.483 3.582 1.5 4.5c1.017.918 2.111 1.375 3.5 1.5c-.65.538-.5 1.874-.5 2.5v3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="il-md-length-40 il-md-duration-3 il-md-delay-0"></path><path d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-3"></path></g></svg>
  </a>
  <a class="social-icon social-icon--linkedin" href="https://www.linkedin.com/in/bongani-nomangola-78b92a223/" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--line-md" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="line-md:linkedin"><g fill="none"><path d="M4 10v10" stroke="currentColor" stroke-width="4" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-3"></path><circle cx="4" cy="4" r="2" fill="currentColor" class="il-md-fill il-md-delay-0"></circle><path d="M10 20V10" stroke="currentColor" stroke-width="4" stroke-linecap="round" class="il-md-length-15 il-md-duration-2 il-md-delay-5"></path><path d="M10 15a5 5 0 0 1 10 0v5" stroke="currentColor" stroke-width="4" stroke-linecap="round" class="il-md-length-25 il-md-duration-2 il-md-delay-7"></path></g></svg>
  </a>
</div>
         <hr>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
  </div>
     </div>
     </div>
</template>

<script>
export default {

}
</script>

<style>
.line {
    display: -webkit-inline-box;
    width: 500px;
}

 #contact {
  width: 100%;
  height: 100%;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
  flex-wrap: wrap;
}

/* Left contact page */
.form-horizontal {
  /*float: left;*/
  max-width: 400px;
  font-family: 'Lato';
  font-weight: 400;
}

.form-control, 
textarea {
  max-width: 400px;
  background-color: #b3b3cc;
  color: #101010;
  letter-spacing: 1px;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all .2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px 'Lato', sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
  color: lightgray;
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
  display: inline;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 300 18px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: black;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: black;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
  background-color: lightgray;
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 60px;
    height: 60px;
    margin: 0 0.5rem;
    margin-left: 7px;
    border-radius: 50%;
    cursor: pointer;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 2.5rem;
    text-decoration: none;
    transition: all 0.15s ease;
}

.social-icon--codepen {
    background: grey;
    color: #fff;
}

.social-icon--github {
    background: grey;
    color: #fff;
}

.social-icon--linkedin {
    background: grey;
    color: #fff;
}

.social-icons {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
}

.social-icon :hover {
  color: white;
}

.social-icon a :hover {
  color: white;
}
/* Social Media Icons */
/* .social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative; 
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: #b3b3cc;
  cursor: pointer; 
  transition: all .2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all .2s ease-in-out;
}

.social-media-list li:hover {
  background-color: lightgray; 
}

.social-media-list li:hover:after {
  opacity: 1;  
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: #000;
} */

.copyright {
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255,255,255,.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container, .form-horizontal {
    margin: 0 auto;
  }  
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }    
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {

  .direct-contact-container, .form-wrapper {
    float: none;
    margin: 0 auto;
  }  
  .form-control, textarea {
    
    margin: 0 auto;
  }
 
  
  .name, .email, textarea {
    width: 280px;
  } 
  
  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }  
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
  
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
</style>