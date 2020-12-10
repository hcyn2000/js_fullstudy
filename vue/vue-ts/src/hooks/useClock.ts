import { ref } from 'vue'
const clock = ref("00: 00: 00");
const updateClock = () => {
  const nowTioe = new Date();
  const hour = String(nowTioe.getHours()).padStart(2, "0");
  const min = String(nowTioe.getMinutes()).padStart(2, "0");
  const sec = String(nowTioe.getSeconds()).padStart(2, "0");
  clock.value = hour + ":" + min + ":" + sec;
  setTimeout(updateClock, 1000);
};

export { clock, updateClock }