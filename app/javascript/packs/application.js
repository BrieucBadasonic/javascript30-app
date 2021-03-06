// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import { challenge01 } from '../plugins/challenge01';
import { challenge02 } from '../plugins/challenge02';
import { challenge03 } from '../plugins/challenge03';
import { challenge05 } from '../plugins/challenge05';
import { challenge06 } from '../plugins/challenge06';

document.addEventListener('turbolinks:load', () => {
  challenge01();
  challenge02();
  document.addEventListener('DOMcontentLoaded', challenge03());
  document.addEventListener('DOMcontentLoaded', challenge05());
  document.addEventListener('DOMcontentLoaded', challenge06());
});
