var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
let Logo = class Logo {
};
Logo = __decorate([
    Component({
        selector: "logo",
        template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2872 1014">
      <g fill-rule="evenodd" transform="matrix(1 0 0 -1 0 1014)">
        <path
          fill-rule="nonzero"
          d="M3.96291015 1013c-.8-235.666667-.8-358.233333 0-367.7 4.3-53.2 18.39999995-91.9 45.09999995-123.8 11.7-14 25.7-28.4 36.3-37.3C119.06291 455.8 165.96291 436.1 209.36291 432c30-2.8 58.9.1 86.5 8.6 28.1 8.7 52.2 20.9 77.2 39.1l4.6 3.4-8 14.2c-4.4 7.8-13.1 23.2-19.3 34.2-16.4 29.3-17.7 31.5-18 31.5-.2 0-3-2.2-6.2-4.8-22.5-18.6-46-30-71.8-34.8-11.5-2.1-41.2-1.5-52 1-54.7 13-95.3 54.5-106.0999999 108.1-1.6666666 5.945716-2.3666666 30.779049-2.1 74.5-.2666666 47.48046-.2666666 73.82069 0 79.02069V802.2H205.26291l110.1.3.3 43 .2 43-110.2.3c-60.7.2-111.2999999-.2-111.4999999 0-.1333333.066667-.1333333 20.638622 0 61.715865V1013h-45.3c-24.6 0-44.59999995.4-44.89999995 0ZM1738.36291 979.6c-17-5.4-29.1-18.3-33.1-35.2-3.7-15.8 2.9-34.2 15.8-44.5 16.8-13.3 38.3-14.4 55.7-2.8 29 19.3 27.3 59.6-3.2 77.7-3 1.8-7.9 4-10.9 4.8-6.5 1.7-18.9 1.7-24.3 0ZM1892.36291 887.3c-46-1.7-92-18.1-122.7-43.6-5.5-4.6-5.9-2.8 4.4-20 12.5-20.7 25.8-49.7 32.3-70.2l3.1-10 2.9 5c5.2 8.9 15.4 22.2 21.2 27.5 12.6 11.5 24.6 17.8 40 20.9 38.3 7.8 70.6 2.7 94.5-15 19.8-14.8 33.5-40.2 39.5-73.4 1.4-7.9 1.6-25.3 2-143.5l.4-134.5 45.7.2 45.7.3.3 119.2c.2 74.5-.1 127.3-.8 140.5-2 41.7-9.3 71.5-25.3 103.1-6.8 13.6-21.3 33.9-30.8 43.3-29.2 28.8-74.6 47.1-122.7 49.4-19.6 1-22.6 1-29.7.8ZM2166.78822 886.7h-14.62531v-136c.3-120.9.5-137.4 2-147.2 8.7-57.6 26.7-95.7 59.7-126.8 16.4-15.4 33-24.8 61.1-34.5 23.7-8.2 43.5-11.2 72.9-11.2 28.4 0 47.9 3 72 10.9 44.2 14.6 69 34.7 95.2 77.1 10.7 17.2 21.2 51.6 26.5 86 1.5 10.4 1.7 24.6 2 146.8v134.9H2451.86291V761.2c0-132-.2-137.9-4.5-159.9-4.3-21.1-10.8-36-22-50-8.8-11-13.8-15.1-28.5-23-22-12-57.7-14.1-85.9-5.2-32.8 10.4-54.5 37.7-63.2 79.4-1.9 9.1-2.2 15-2.9 65.5-.5 30.5-.9 92.2-.9 137.1l-.1 81.6h-77.07469ZM556.36291 885.4c-18-2.5-31.3-6-49.5-13.1-24-9.4-46.7-22.6-63.2-36.7-15.1-12.9-38.7-40.7-49.9-58.6-6.2-10-16-29.5-19.4-38.6-12.6-33.5-16.1-84.1-8.4-123.9 4.8-25.3 15.6-52.6 30-76.2 11.8-19.2 35-45.7 50.4-57.4 37-28.1 73.7-43.4 116.5-48.4 31.1-3.7 62.7-.7 93.2 8.6 24.3 7.4 39 14.4 59 27.8 16.3 10.9 26.8 19.4 37.2 30l7.9 8-4.3 5.8c-2.4 3.2-13 16.8-23.4 30.2-10.5 13.4-21 26.9-23.4 30l-4.3 5.7-13.7-13.5c-19.7-19.5-34.8-29-59.2-37.2-15.3-5.1-28.5-7-49-7.1-19.7 0-31.2 2-46.4 8.2-10.4 4.2-24.3 11.6-29.2 15.5l-2.8 2.2 4.1 2.6c8.7 5.5 23.7 13.4 61.5 32.3 36.5 18.4 144.1 73 214.5 109l30.2 15.5-1.6 5.1c-10.8 36.4-31.2 70.5-61.2 102-14.2 15-24.7 24-38.8 33.4-32.3 21.5-66.5 34.6-101.3 39-14 1.7-42 1.6-55.5-.2Zm53.5-91.3c11.4-2.6 21.2-6.2 34.5-12.6 14.1-6.8 21.2-11.5 34.9-22.9 13.2-11 16.3-14.3 15-15.5-.5-.5-7.4-3.7-15.3-7.1-7.9-3.5-36.2-17.3-63-30.8-136-68.5-157.5-78.9-158.8-76.8-.4.6-.9 8.5-1.1 17.6-.8 33.5 5.3 59.5 19.6 84 8.2 14.1 12.3 19.3 25.1 32 18.6 18.5 39.3 29.5 64 34.1 7.8 1.4 35.6.2 45.1-2ZM1012.86291 885.5c-58.3-7.3-101-31.6-128.4-73.2-17.5-26.6-27.1-52.8-33.8-91.9-2.2-12.8-2.2-13.8-2.5-151.1-.2-76.1 0-138.3.4-138.3s20.8 0 45.3-.1h44.5l.5 136.3.6 136.3 2.6 10.5c6.4 25.9 18.7 50.2 31.4 62 20.2 18.8 45.8 26.4 80.9 23.9 23.6-1.7 34.4-5.3 52.6-17.5l10.9-7.4-.2 51.3.2 50.223442-8.8 3.176558c-24 6.3-69.9 9-96.2 5.8ZM1292.86291 885.5c-19-1.5-37.9-3.9-53-6.6-16.9-2.9-76.3-15.8-77.1-16.6-.3-.5-.4-97.8-.1-216.3l.5-215.5 45.8.3 45.9.2v352.8l9.8 5c20.8 10.6 36.6 13.3 66.7 11.3 20.2-1.3 31.4-3.3 42.5-7.5 13-4.8 19.4-9 30-19.6 8-8 10.4-11.1 14.7-19.5 6.1-11.8 10.5-24.4 12.9-37.5 1.6-8.7 1.8-20.7 2.3-146.7.4-75.4.9-137.4 1.2-137.7.3-.3 20.7-.6 45.5-.6l44.9-.1.3 176.3.2 176.4 6.3 3.5c16.8 9.7 33 13.4 58.2 13.3 43.6 0 63.3-6.8 85-29.5 4.4-4.6 10.5-12.1 13.5-16.5l5.6-8.2 1.9 6.7c5.5 19.8 17.6 46.7 33.2 74.2l7.5 13.3-2.4 1.8c-20.8 16.5-38.5 26-64.8 34.8-23.4 7.9-35.68129 10.404508-68.58129 10.404508-31-.1-40.71871-2.304508-64.41871-9.004508-17.9-5.1-68.3-24.3-81.2-31-2.9-1.5-3-1.4-14.8 6.4-25.6 17.1-46.4 25.8-72.5 30.4-14.7 2.5-52.5 3.204508-75.5 1.3ZM2702.97782 886.7c-29.7-3.9-52.21491-12.9-72.21491-26.2-31.4-20.9-49.4-58.8-47.6-100.4.8-18 3.9-29.7 12.6-46.8 8.4-16.6 18-28 37.5-44.5 17.4-14.8 36-27.2 64.1-42.8 37.1-20.6 61.9-41.7 68.6-58.6 3.4-8.6 3.4-23.3 0-32.3-5-13.2-17.8-22.9-36.6-27.6-32.3-8.2-65.6-1.4-124.8 25.4-9.8 4.5-18.3 8.1-18.8 8.1-.33333 0-.33333-14.19885 0-42.596549v-42.80659l1.4-1.296861c5.8-2.7 40.5-12.6 58.2-16.7 18.8-4.3 40.2-6.6 61.7-6.6 58.6 0 117 26.1 141.2 63.3 12 18.3 19.4 37.8 21.7 56.7 3.4 28.4-7.3 60.9-28.2 85.5-19.5 23.1-39.4 37.4-109.9 78.8-37.7 22.2-50.4 34.4-54 52.1-3.2 15.6 5.6 32.5 20.6 39.6 28.4 13.6 73.5 7.3 134.9-19 9-3.8 16.6-7 16.9-7 .3 0 .6 18.2.6 40.5V862l-2.2 1.4c-3.4 2.2-33.5 12-47.3 15.4-13.3 3.4-27.55549 6.4-41.85549 7.9-13.2 1.3-44.2296 1.5-56.5296 0ZM1743.66291 815.8c-13.3-20.3-20.5-34.8-26.6-53.9-6.8-21.2-10.6-43.3-12.2-70.4-.9-15.1-1.1-170.9-.2-237.7l.3-22.8h92l-.4 138.3c-.3 126.6-.4 139.1-2.1 148.7-1.5 9.5-5 23.7-9.3 39-2.5 8.9-9.1 24.8-14.4 35-5.3 10.1-19.6 32-20.9 32-.4 0-3.2-3.7-6.2-8.2ZM2134.86291 275c-.9-.6 0-7.2-.2-26l.2-26.5h-34.1V197h15.8c8.7 0 16.4-.4 17.1-.9 1.1-.7 1.3-6.6 1-31.1l-.3-30.2-2.5-2c-4.2-3.5-11.9-6.5-23.5-9.4-6-1.5-11.4-3.1-11.9-3.5-.9-.8 3.8-23.4 5.4-25.9.4-.7 5.9.5 15.3 3.5 8.1 2.5 16.3 5.276368 17.2 5.276368 1.3 0 .5-3.776368.5-23.176368 0-22.6-1.5-47.5-2.9-48.9-.4-.4-6.9-.8-14.4-.8s-13.9-.5-14.2-1c-.4-.5.6-6.3 2.1-12.9l2.8-12h10c12.7 0 27 1.6 30.4 3.4 3.9 2 6.8 5.5 9.4 11.1 2.3 5 2.3 5.4 2.6 50.7.2 26.2666667.26667 41.866607.2 46.79982.9.7 9.1 4.40018 16.3 8.00018l13.2 6.5.3 13.3c.2 9.3-.1 13.2-.9 13.2-.6 0-6.6-2.9-13.4-6.5-6.7-3.6-14.6-7.783939-15.5-7.783939V196.1c.8.8 6.7.9 15.6.9 9.6 0 13.3.3 13.6 1.3.3.6.5 6.4.4 12.7l-.1 11.5h-29.5V275c-16.93333.333333-25.6.333333-26 0ZM681.66291 247.8l-.3-27.2-15.5.3c-8.5.1-15.7.4-15.9.6-.7.7-1 7.4-1 24.8l-.1 17.7h-4.7c-2.7 0-8.5-.3-13-.7l-8.3-.6V196l72.8.2 72.7.3.3 33.1.2 33.2-12.285759-.1H741.66291c.066667-6.466667.066667-13.533333 0-21.2l-.3-21-15.4-.3c-10.4-.2-15.8.1-16.7.9-1.1.9-1.4 6.3-1.4 27.5V275h-26l-.2-27.2ZM1788.86291 274.3c-2.5-.3-6.4-1.150863-7-1.650863-.6-.6.3-29.949137 0-82.449137v-82.036017l-15.5-2.363983c-8.2-1.5-17.7-3.2-21-3.8-3.3-.6-15.4-2.6-27-4.5-11.5-1.8-22.9-3.7-25.2-4.1-2.4-.3-4.3-1.1-4.3-1.6 0-1.6 4.1-24.2 4.4-24.5.5-.5 22.3 2.3 44.1 5.7 11 1.7 22.7 3.5 26 4 3.3.6 8.5 1.4 11.5 1.9s6.5 1.1396944 7 .8396944c.4-.2 0-17.9638041 0-39.0638041V1.5l16.1-.3 11.28342-.0375v82.5087763L1823.26291 86.7c7.1 1.2 13.1 2.5 13.4 2.8.7.6-2.9 26.5-3.7 26.5-.3 0-5.3-.7-11.1-1.5-5.7-.7-11.6-1.693377-12-1.493377-.26667.2-.26667 27.322292 0 81.366874V275l-8.2-.2c-4.6-.1-10.3-.3-12.8-.5ZM2268.06291 274.46232c-.4-.7-.1-10.394161-.2-20.694161l.2-18.568159-34.8-.2h-34.4v-27h69v-43l-31.2-.2-31.3-.3-.3-12.7-.3-12.8h6.3c3.5 0 6.96835.062606 7.56835-.337394.5-.4 1.93165-4.062606 3.13165-7.662606 6.8-19.1 21.5-43.9 36-61 4.4-5.2 8.1-9.8 8.1-10.3 0-1.3-18-12.6-28.9-18-5.8-2.9-18.1-8.4-27.3-12.2-9.3-3.8-16.8-7.4-16.8-7.9 0-1.4 11.4-21.6 12.3-21.6 1.5 0 19.6 7.4 30.7 12.7 15.2 7.2 31.5 16.3 42.3 23.6l8.8 6 2.2-2c9.3-8.2 63.3-39.4 68-39.3.9.1 13.2 17.8 14.5 21 .2.4-9.7 5.7-22 11.8-24.3 12-44.4 24.4-43.1 26.5.4.6 4.5 5.9 9.1 11.6 10.5 12.9 23.3 32.2 27.6 41.5 6.8 14.5 9.7 26.6 9.9 41.4l.2 9.7-29 .5-29 .5v42l34.3.3 34.2.2v27l-34.2.2h-34.6v20.1l-.2 19.7h-12.5c-8.8 0-13.7.26232-14.3-.53768Zm57.8-136.46232c0-1.9-7.4-17.4-11.9-25-6.8-11.4-25.4-35.8-28.1-36.8-1.7-.6-21.4 23.6-27.9 34.3-3.4 5.6-10.6 21.5-11.7 25.9l-.6 2.6h40.1c27.1 0 40.1-.3 40.1-1ZM1150.66291 231.8l-.3-42.3-39.7-.3-39.8-.2V89l100.8.2 100.7.3.3 49.8.2 49.7h-94v33h112v2.8c.13333 7.8.13333 15.5 0 23.1-4.93333-.133333-24.83333-.133333-59.7 0h-52.5v25.9h-28v-42Zm93.7-92.8v-24.5l-72.7-.3-72.8-.2v24.3c0 13.4.3 24.7.7 25 .3.4 33.1.6 72.7.5l72.1-.3V139ZM1659.36291 270.4c-12.5-3-39.7-7.4-66.5-10.9-11.3-1.5-20.7-2.9-20.9-3.1-.5-.5 3-23.8 3.8-24.6.3-.4 8.7-.1 18.6.7 9.9.8 19.3 1.799589 20.6 1.799589 2.2 0 1.9-.299589 1.9-18.199589l-.1-18.3h-22.3c-12.3-.3-22.9-.8-23.5-1.2-.7-.5-1.1-4.9-1.1-12.6 0-10.4.2-11.9 1.8-12.4.9-.2 10.6-.8 21.5-1.1 18-.7 21.5.610718 21.5-.989282 0-2.3-12.7-25.210718-20.2-37.510718-5.2-8.7-13.8-20.6-18.3-25.5-1-1.1-4.6-5.4-8.1-9.6l-6.2-7.6 4.5-12.4c2.5-6.8 5.1-13.7 5.9-15.4l1.3-2.9 7.3 9.9c12.8 17.3 17.9 25.6 25.7 41.3 4.1 8.3 7.9 16.3 8.4 16.3 1.1 0 1 .8 1.8-68.6l.6-56 11.5-.3c6.3-.1 12.5 0 13.8.3l2.2.5v64c0 38.7-.5 66 0 66s2.9-3.3 4.2-4.8c9-11.1 27.3-31.7 28.1-31.7.5 0 4.1 4.9 8 10.9 5.6 8.6 6.8 11.1 6 12.5-1.2 1.9-13.4 12.7-25 22.1-13 10.6-23.8 27-21.3 29.5.5.5 7.2-.3 16.5 0 9.4.4 18 .8 19.3 1.1 2.1.4 2.2.8 2.2 12.5 0 8.7-.3 12.1-1.2 12.4-.7.2-9.2.6-18.8.8l-18 .5.2 21v21.198725c.7.2 9.9 2.401275 19.1 4.301275 9.3 1.9 17.1 3.8 17.4 4.1.3.3-1.3 6-3.7 12.6-4.9 13.8-3.2 13-18.5 9.4ZM548.16291 269.6c-6.1-1.1-11.4-2.4-11.7-2.7-.4-.3.3-3.7 1.5-7.5 6.7-21.5 8.8-29.9 7.6-30.6-.7-.4-8.5-.8-17.3-.8-12.1 0-16.3-.3-16.5-1.2-.2-.7-.3-6.6-.1-13l.3-11.8h93.6l.7 7.7c.3 4.2.6 10 .6 13v5.3h-32.7l-1.1 5.3c-.7 2.8-3.3 12.7-5.9 22-3.6 12.9-5 16.7-6.2 16.6-.9-.1-6.6-1.1-12.8-2.3Z"
        ></path>

        <path
          fill-rule="nonzero"
          d="M1711.96291 250.1c-5.2-4.8-9.2-9.2-8.8-9.8.3-.5 3.2-3 6.4-5.4 12.7-9.7 25.5-20.3 34.1-28.4 4.9-4.7 9.4-8.5 9.9-8.5.4 0 4.9 4 9.8 9l8.9 9-5.4 5.6c-11 11.3-35.8 31.7-44.5 36.7-.6.3-5.3-3.4-10.4-8.2ZM573.86291 187.9c0-14.3-9.6-112.3-12.6-128.4l-.5-3.1-24.7-5.4c-13.6-2.9-24.8-5.4-25-5.5-.7-.5 6.2-26.5 7.1-26.5 5.6 0 54.3 13.1 74.5 20l12.2 4.2v13.4c0 7.4-.1 13.4-.2 13.4-.2 0-4.3-1.4-9.2-3-4.9-1.7-9.1-2.8-9.4-2.5-.4.4 2.2 23.5 7.3 63 4 31.4 6.1 58.5 4.6 59.5-.7.4-4.7 1-9 1.4-4.2.4-9.3 1-11.3 1.3-3.5.5-3.8.4-3.8-1.8ZM1702.26291 180.5l-8.9-8.5 3.4-2.8c12.5-9.9 25.3-21 36.2-31.2l12.6-11.9 9.1 9.2c5.1 5.1 9.2 9.7 9.2 10.3 0 1.4-18.2 19.1-29 28.1-9 7.5-20.5 15.3-22.5 15.3-.7 0-5.2-3.8-10.1-8.5Z"
        ></path>

        <path
          fill-rule="nonzero"
          d="M528.36291 184.1c-4.4-1.5-8.6-2.9-9.2-3.1-1.3-.5-.6-6.5 6.2-57 3.8-28 6.5-51.4 6.5-56 0-.8 20.5 3.1 21.5 4.1 1.7 1.8-10.4 106.4-13.1 113.4-.8 2-2.4 1.8-11.9-1.4ZM613.56291 176.4c-.4-.4-.7-6.5-.7-13.6V150h32.5c17.9 0 32.5-.3 32.5-.6 0-2-6.6-21-7.4-21.6-.6-.4-12.5-.8-26.3-.8h-25.3V2h25v101h20V7h23l.2 47.8.3 47.7h18l.3-47.7.2-47.8H729.16291l-.5 37.3c-.3 20.4-.3 41.9.1 47.7l.6 10.5 9.1.3 9.1.3.7-3.8c.8-5 .8-55.9 0-65.6l-.7-7.7h-6.8c-3.8 0-6.9-.3-6.9-.7 0-.5 1.4-6.1 3.2-12.7l3.2-11.8 7.1.7c14.8 1.4 20 3.8 23.8 10.8 2.2 4.2 2.2 4.5 2.5 59.5l.3 55.2-32.8.1c-18 .1-34.1.2-35.8.4-1.6.1-3.6.3-4.4.4-1.5.1-1.3 2.1 2 14.4l2.1 7.7h74.6l.7 12.5c.4 6.9.4 12.9 0 13.3-.9.9-165.9 1.5-166.8.6Z"
        ></path>

        <rect width="377" height="19" x="2495" y="128" rx="8.5"></rect>

        <rect width="377" height="19" y="128" rx="8.5"></rect>

        <path
          fill-rule="nonzero"
          d="M1251.36291 72.8c-4.9-3.3-9.7-6.4-10.5-6.8-1.1-.7-1.2-1.3-.5-2.4.6-.8 6-8.8 12.1-17.8s15-22.9 19.9-31l8.8-14.7 10.3 7c5.6 3.8 10.7 7.5 11.2 8.2.7.8-.5 3.7-4.1 9.7-10.8 17.9-36 54.1-37.6 53.9-.3 0-4.6-2.8-9.6-6.1ZM1068.96291 74.3c-2.7-6.1-15.9-28.2-25.1-42.1l-9.7-14.7 10.1-7.7c5.6-4.3 10.6-7.8 11.3-7.8 1.2 0 9.2 11 16.5 23 6.7 10.9 21.9 41.3 21 42.2-.9.9-20.9 9.8-22.1 9.8-.4 0-1.3-1.2-2-2.7ZM1188.36291 69.8c-6-1.1-11.1-2.1-11.3-2.3-.2-.2 1.9-6.5 4.6-14.1 4.3-11.9 10.2-31.9 14.2-48.2.7-2.8 1.6-4.2 2.4-3.9.6.3 6.7 1.7 13.4 3.3 9.2 2.1 12.2 3.2 12.2 4.3 0 3.3-12.3 40-20.5 61.4-.8 2-1.1 2-15-.5ZM1127.36291 66.1c-8.8-2-12-3.1-11.9-4.1.1-.8 1.8-8.7 3.8-17.5 4.6-20 6.2-27.4 7.7-35.1.6-3.4 1.5-6.7 1.9-7.4.6-1 3.4-.6 12.8 1.5 6.7 1.6 12.6 3.1 13.3 3.5.9.6.7 2.7-.6 8.6-4.9 22.6-12.8 51.9-14.3 52.7-.4.2-6.1-.8-12.7-2.2Z"
        ></path>
      </g>
    </svg>
  `,
    })
], Logo);
export default Logo;
