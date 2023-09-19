import $getCurrentStatus from "../utils/getCurrentStatus";
import { Statuses } from "../assets/status";


document.addEventListener('astro:page-load', () => {
  let status_emoji_block = document.querySelector("#status-emoji")
  let status_desc_block = document.querySelector("#status-desc")
  let current_status = $getCurrentStatus(Statuses);
  if (status_emoji_block !== null && status_desc_block !== null) {
    if (!current_status) {
        status_emoji_block.innerHTML = "👨‍💻"
        status_desc_block.innerHTML = "I'm currently coding"
    } else {
        status_emoji_block.innerHTML = current_status.emoji
        status_desc_block.innerHTML = current_status.description
    }
  } 


  setInterval(() => { 
    current_status = $getCurrentStatus(Statuses);
    if (status_emoji_block !== null && status_desc_block !== null) {
        if (!current_status) {
            status_emoji_block.innerHTML = "👨‍💻"
            status_desc_block.innerHTML = "I'm currently coding"
        } else {
            status_emoji_block.innerHTML = current_status.emoji
            status_desc_block.innerHTML = current_status.description
        }
    } 
  }, 300000)
});




