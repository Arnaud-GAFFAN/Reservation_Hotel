const today = new Date();
start_date.min = today;
start_date.value = today.toISOString().split("T")[0];

today.setDate(today.getDate() + 1);
// end_date.value = today.setDate(today.getDate() + 1);
const tomorrowDate = today.toISOString().split('T')[0];
end_date.min = today;
end_date.value = tomorrowDate;

start_date.addEventListener('change', () =>{
 
});