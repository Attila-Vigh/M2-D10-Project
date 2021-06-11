let deadline;

// if there's a cookie with the name myClock, use that value as the deadline
if(document.cookie && document.cookie.match('myClock')){
  // get deadline value from cookie
  deadline = document.cookie.match(/(^|;)myClock=([^;]+)/)[2];
} else {
  // otherwise, set a deadline 10 minutes from now and 
  // save it in a cookie with that name

  // create deadline 10 minutes from now
  const timeInMinutes = 10;
  const currentTime = Date.parse(new Date());
  deadline = new Date(currentTime + timeInMinutes*60*1000);

  // store deadline in cookie for future reference
  document.cookie = 'myClock=' + deadline + '; path=/; domain=.yourdomain.com';
}