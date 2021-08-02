"use strict";

$(document).ready(init);

$(".submit-btn").click(contactSubmit);

function init() {
  createProjs();
  renderModals();
  renderModal();
}

function renderModals() {
  var strHtmls = "";

  for (var i = 0; i < gProjs.length; i++) {
    strHtmls += `
        <div data-id="${gProjs[i].id}" class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal-${gProjs[i].id}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${gProjs[i].img}" alt="${gProjs[i].title}">
        </a>
        <div class="portfolio-caption">
          <h4>${gProjs[i].name}</h4>
          <p class="text-muted">${gProjs[i].desc}</p>
        </div>
      </div>`;
  }

  $(".projs-container").html(strHtmls);
}

function renderModal() {
  var strHtmls = "";

  for (var i = 0; i < gProjs.length; i++) {
    strHtmls += `
<div class="portfolio-modal modal fade" id="portfolioModal-${
      gProjs[i].id
    }" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                
                <h2>${gProjs[i].name}</h2>
                <p class="item-intro text-muted">${gProjs[i].title}</p>
                <a href="${
                  gProjs[i].url
                }" target="_blank"><img class="img-fluid d-block mx-auto" src="${
      gProjs[i].img
    }" alt="${gProjs[i].title}"></a>
                <p>${gProjs[i].desc}</p>
                <ul class="list-inline">
                  <li>Date: ${gProjs[i].publishedAt}</li>
                  <li>Category: ${gProjs[i].labels.join(" ")}</li>
                  <li><a href="${
                    gProjs[i].url
                  }" target="_blank">Click here to open</a></li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  }

  $(".modal-cont").html(strHtmls);
}

function contactSubmit() {
  var subject = $(".submit-subject").val();
  var msg = $(".submit-msg").val();
  
  // Validate empty subject and empty msg
  if(!subject || !msg) return;

  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=RazAb98754@Gmail.com&su=${subject}&body=${msg}`, "_blank");
}
