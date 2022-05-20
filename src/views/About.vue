<template>
<h1 class="display-2">About</h1>
<hr class="line">
  <div class="w3-content w3-container w3-padding-64" id="about">
<div class="row2 align-items-center">
    <div class="col-xl-6 col-bg-12 col-md-12 col-sm-12 text-center">
      <p class="animate__animated animate__slideInUp">A dedicated and focused individual who can also display a fun-loving and sociable character.Willing to learn new things and able to communicate with my peers when I'm in need of help,as I do the same for my peers.</p>
<p class="animate__animated animate__slideInUp">A friend of mine that was exposed to computers at a young age.We met in high school and introduced me to IT and the vast branches that are in IT, Coding caught my eye and I started to become interested in Coding.</p>
    </div>

    <div>
      <div class="row about-list">
                  <div class="straight">
                      <div class="media">
                          <label>Birthday</label>
                          <p>24th February 2001</p>
                      </div>
                      
                      <div class="media">
                          <label>Residence</label>
                          <p>South Africa</p>
                      </div>
                      
                      <div class="media">
                          <label>Address</label>
                          <p>Cape Town, RSA</p>
                      </div>
                      
                      <div class="media">
                          <label>Freelance</label>
                          <p>Available</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
<hr class="line w-50% text-center">
  <div class="container2">
    <div class="page-header">
        <h1 class="display-3">Resume</h1>
    </div>
    <ul class="timeline">
        <li>
          <div class="timeline-badge success"><i class="fas fa-laptop"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Life Choices</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> Sept-2021 - Currently</small></p>
            </div>
            <div class="timeline-body">
              <p class="animate__animated animate__slideInUp">Currently at Life Choices Academy for Coding for a duration of a year learning the following:</p>
        <ul class="animate__animated animate__slideInUp content-skills">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>MySQL</li>
        <li>Vue.js</li>
        <li>Node.js</li>
        </ul>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge info"><i class="fas fa-laptop"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">iCollege</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>(March 2020)</small></p>
            </div>
            <div class="timeline-body">
              <p class="animate__animated animate__slideInUp">Enroled at iCollege doing IT User Support for a duration of a year.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge muted"><i class="fas fa-store"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Haagen Dazs (Waterfront)</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>(Dec 2019 - Jan 2020)</small></p>
            </div>
            <div class="timeline-body">
              <p class="animate__animated animate__slideInUp">Worked at Haagen Dazs as an Ice Cream Scooper for a duration of a month.</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge danger"><i class="fas fa-book"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Bridgetown High School (grade 12)</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>(Nov 2019)</small></p>
            </div>
            <div class="timeline-body">
              <p class="animate__animated animate__slideInUp">Graduated the a Diploma Certificate.</p>
            </div>
          </div>
        </li>
        <li>
    <div class="timeline-badge warning"><i class="fas fa-book"></i></div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h4 class="timeline-title">Athlone High School (grade 12)</h4>
        <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>(early Feb 2019)</small></p>
      </div>
      <div class="timeline-body">
        <p class="animate__animated animate__slideInUp">Changed schools due to the school deciding to remove one the main subjects I did which was Physical Sciences.</p>
      </div>
    </div>
        </li>
        <li class="timeline-inverted">
    <div class="timeline-badge"><i class="fas fa-book"></i></div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <h4 class="timeline-title">Hyacinth Primary School (Lenteguer)</h4>
        <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>(2014)</small></p>
      </div>
      <div class="timeline-body">
        <p class="animate__animated animate__slideInUp">Graduated from Hyacinth Primary School</p>
      </div>
    </div>
        </li>
    </ul>
</div>
</template>
<script>
  export default {
    data() {
      return {
        about: []
      }
  },
  mounted() {
      fetch('http://localhost:3000/about')
      .then(res => res.json())
      .then(data => this.about = data)
      .catch(err => console.log(err.message))
  }
}

</script>

<style>
.display-2 {
  font-family: 'Baloo 2', cursive;
}

.display-3 {
  font-family: 'Baloo 2', cursive;
}

.container2 {
  text-align: center;
  justify-content: center;
}

.line {
    display: -webkit-inline-box;
    border-color: rgba(255,255,255,.6);
    width: 45%;
}

.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}
.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #eeeeee;
  left: 50%;
  margin-left: -1.5px;
}
.timeline > li {
  margin-bottom: 20px;
  position: relative;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  padding-top: 10px;
}
.about-list .media {
  padding: 5px 0;
}
.about-list label {
  color: #20247b;
  font-weight: 600;
  width: 88px;
  margin: 0;
  position: relative;
}
.about-list label:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 11px;
    width: 1px;
    height: 12px;
    /* background: #20247b; */
    transform: rotate(15deg);
    margin: auto;
    opacity: 0.5;
}
.about-list p {
  margin: 0;
  font-size: 15px;
}

.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li > .timeline-panel {
  width: 46%;
  float: left;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  background-color: #fff;
  margin: 20px;
}
.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 26px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #ccc;
  border-right: 0 solid #ccc;
  border-bottom: 15px solid transparent;
  content: " ";
}
.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 27px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #fff;
  border-right: 0 solid #fff;
  border-bottom: 14px solid transparent;
  content: " ";
}
.timeline > li > .timeline-badge {
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -25px;
  background-color: #999999;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}
.timeline-badge.primary {
  background-color: #2e6da4 !important;
}
.timeline-badge.success {
  background-color: #3f903f !important;
}
.timeline-badge.warning {
  background-color: #f0ad4e !important;
}
.timeline-badge.danger {
  background-color: #d9534f !important;
}
.timeline-badge.info {
  background-color: #5bc0de !important;
}
.timeline-title {
  margin-top: 0;
  color: inherit;
}
.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 0;
}
.timeline-body > p + p {
  margin-top: 5px;
}

.about-list {
  padding-top: 10px;
}
.about-list .media {
  padding: 5px 0;
}
.about-list label {
  color: #20247b;
  font-weight: 600;
  width: 88px;
  margin: 0;
  position: relative;
}
.about-list label:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 11px;
  width: 1px;
  height: 12px;
  background: #20247b;
  -moz-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -webkit-transform: rotate(15deg);
  transform: rotate(15deg);
  margin: auto;
  opacity: 0.5;
}
.about-list p {
  margin: 0;
  font-size: 15px;
}

@media (max-width: 991px) {
  .about-avatar {
    margin-top: 30px;
  }
}

hr.hrabout {
    display: -webkit-inline-box;
    width: 130px;
}

.straight {
    display: flex;
    text-align: center;
    margin-right: 35rem;
    justify-content: center;
    justify-content: space-between;
}

.row2 {
  justify-content: center;  
  flex-wrap: nowrap;
  /* display: flex; */
  margin-left: 32.5rem;
  text-align: center;
}
.col-xl-6 {
  width: 45%;
}

.about-list {
  justify-content: center;
}
</style>