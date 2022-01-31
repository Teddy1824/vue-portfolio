<template>
<h1 class="display-2">About</h1>
  <div class="w3-content w3-container w3-padding-64" id="about">
<div class="row align-items-center">
    <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
      <p>By the help of FreeCodeCamp I will be a Full Stack Web Developer soon!</p>
    </div>
    <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
      <img src="https://cdn.discordapp.com/attachments/895311040068325407/897122083203612692/IMG-20211011-WA0013.jpg" id="profile" class="w3-circle" alt="Photo of Me" height="600px">
    </div>
  </div>
  </div>
<hr class="line w-50% text-center">
  <div class="container">
    <div class="page-header">
        <h1 id="timeline">Timeline</h1>
    </div>
    <ul class="timeline">
        <li>
          <div class="timeline-badge"><i class="fas fa-book"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Hyacinth Primary School (Lenteguer)</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>(2014)</small></p>
            </div>
            <div class="timeline-body">
              <p>Graduated from Hyacinth Primary School</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge warning"><i class="fas fa-book"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Athlone High School (grade 12)</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>(early Feb 2019)</small></p>
            </div>
            <div class="timeline-body">
              <p>Changed schools due to the school deciding to remove one the main subjects I did which was Physical Sciences.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge danger"><i class="fas fa-book"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Bridgetown High School (grade 12)</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>(Nov 2019)</small></p>
            </div>
            <div class="timeline-body">
              <p>Graduated the a Diploma Certificate.</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge muted"><i class="fas fa-store"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Haagen Dazs (Waterfront)</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>(Dec 2019 - Jan 2020)</small></p>
            </div>
            <div class="timeline-body">
              <p>Worked at Haagen Dazs as an Ice Cream Scooper for a duration of a month.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge info"><i class="fas fa-laptop"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">iCollege</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>(March 2020)</small></p>
            </div>
            <div class="timeline-body">
              <p>Enroled at iCollege doing IT User Support for a duration of a year.</p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge success"><i class="fas fa-laptop"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Life Choices</h4>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> Sept-2021 - Currently</small></p>
            </div>
            <div class="timeline-body">
              <p>Currently at Life Choices Academy for Coding for a duration of a year learning the following:</p>
        <ul class="content-skills">
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
.line {
    display: -webkit-inline-box;
    border-color: rgba(255,255,255,.6);
    width: 700px;
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
  clear: both;
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
</style>