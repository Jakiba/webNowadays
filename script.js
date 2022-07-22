"use strict";

const cookiesOverlay = document.querySelector(".cookies");
const cookieButtonAccept = document.querySelector(".cookie-accept");
const cookieButtonEdit = document.querySelector(".cookie-edit");
const editOverlay = document.querySelector(".edit-container");
const editAcceptAllSettings = document.querySelector(".settings-accept-all");
const editAcceptSettings = document.querySelector(".settings-accept");
const blurOverlay = document.querySelector(".overlay");
const circleInButton = document.querySelectorAll(".button-push-circle");
const settingButton = document.querySelector(".setting-button");
const notificationNews = document.querySelector(".notification-news");
const notificationNo = document.querySelector(".notification-No");
const notificationAllow = document.querySelector(".notification-Allow");
const notificationShow = document.querySelector(".notification-show");
const notificationShowAllow = document.querySelector(
  ".notification-show-Allow"
);
const notificationShowBlock = document.querySelector(".notification-Block");
const newsletter = document.querySelector(".newsletter");
const newsletterSubmit = document.querySelector(".newsletter-submit");
const newsletterNoThanks = document.querySelector(".newsletter-NoThanks");
const newsletterInput = document.getElementById("email");
const adBlock = document.querySelector(".adblock");
const adBlockButtons = document.querySelector(".adBlock-buttons");
const options = document.querySelector(".options");
const optionsbuttons = document.querySelectorAll(".options-button");
const specialPrice = document.querySelector(".special-price");
const staticAd = document.querySelectorAll(".ad");
const relatedArticles = document.querySelector(".related-articles");
const askphoneNumber = document.querySelector(".ask-number");
const askphoneNumberButtons = document.querySelectorAll(".scroll-button");
const askphoneNumberText = document.querySelector(".pls-give");
const askphoneNumberInput = document.querySelector(".scroll-input");

window.addEventListener("load", function () {
  cookiesOverlay.classList.remove("hidden");
  cookieButtonAccept.focus();
});

cookieButtonAccept.addEventListener("click", function () {
  cookiesOverlay.classList.add("hidden");

  notificationNews.classList.add("move-notifications");

  notificationAllow.focus();
});

cookieButtonEdit.addEventListener("click", function () {
  editOverlay.classList.remove("hidden");
  editAcceptAllSettings.focus();
});

[editAcceptAllSettings, editAcceptSettings].forEach((button) =>
  button.addEventListener("click", function () {
    editOverlay.classList.add("hidden");
    cookiesOverlay.classList.add("hidden");
    notificationNews.classList.add("move-notifications");
    notificationAllow.focus();
  })
);

circleInButton.forEach((circle) =>
  circle.addEventListener("click", function () {
    circle.classList.toggle("move");
    if (circle.classList.contains("move")) {
      circle.style.backgroundColor = "green";
      circle.style.border = "green";
      circle.closest(".setting-button").style.backgroundColor = "#113d03";
      circle.closest(".setting-button").style.border = "#113d03";
    }

    if (!circle.classList.contains("move")) {
      circle.style.backgroundColor = "#033485";
      circle.style.border = "#033485";
      circle.closest(".setting-button").style.backgroundColor = "#0e4eb5";
      circle.closest(".setting-button").style.border = "#0e4eb5";
    }
  })
);

[notificationAllow, notificationNo].forEach((button) =>
  button.addEventListener("click", function () {
    notificationNews.classList.remove("move-notifications");
    // blurOverlay.classList.add("hidden");
    notificationShow.classList.add("move-notifications");
  })
);

[notificationShowAllow, notificationShowBlock].forEach((button) =>
  button.addEventListener("click", function () {
    notificationShow.classList.remove("move-notifications");
    newsletter.classList.remove("hidden");
    // newsletterInput.focus();
  })
);

newsletterNoThanks.addEventListener("click", function () {
  newsletter.classList.add("hidden");
  adBlock.classList.remove("hidden-none");
});

newsletterSubmit.addEventListener("click", function () {
  newsletter.classList.add("hidden");
  adBlock.classList.remove("hidden-none");
});

adBlockButtons.addEventListener("click", function () {
  adBlock.classList.add("hidden");
  options.classList.remove("hidden-none");
  options.classList.add("move-options");
  optionsbuttons[2].focus();
});

optionsbuttons.forEach((button) =>
  button.addEventListener("click", function () {
    options.classList.add("hidden-none");
    options.classList.remove("move-options");
    blurOverlay.classList.remove("overlay");
    window.scrollTo({ top: 0, behavior: "smooth" });
    specialPrice.classList.add("special-price-move");
    staticAd.forEach((ad) => (ad.style.height = "30rem"));
    relatedArticles.classList.remove("hidden-none");
    relatedArticles.classList.add("move-article");
  })
);

window.addEventListener("scroll", function () {
  let wait = false;
  if (!wait) {
    if (!blurOverlay.classList.contains("overlay")) {
      askphoneNumber.classList.remove("hidden-none");
      askphoneNumberButtons[0].focus();
      // blurOverlay.classList.add("overlay");
    }
    wait = true;
    setTimeout(function () {
      wait = false;
    }, 10000);
  }
});

askphoneNumberButtons.forEach((button) =>
  button.addEventListener("click", function () {
    if (button === askphoneNumberButtons[1]) {
      askphoneNumberText.textContent = "Are you really sure?";
      return;
    }
    askphoneNumber.classList.add("hidden-none");
    blurOverlay.classList.remove("overlay");
    askphoneNumberInput.value = "";
  })
);

console.log(askphoneNumberButtons);
