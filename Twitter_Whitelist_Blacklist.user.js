// ==UserScript==
// @name        Twitter Whitelist/Blacklist
// @namespace   http://fluidapp.com
// @description Highlight or hide tweets containing specific words
// @include     http://twitter.com/*
// @include     https://twitter.com/*
// @include     http://*.twitter.com/*
// @include     https://*.twitter.com/*
// @include     http://twitter.com*
// @include     http://twitter.com/home
// @author      Mike Robinson
// @homepage    http://twitter.com/akamike
// ==/UserScript==

(function () {
  var whitelist = new RegExp([
        'akamike', 
        'html5', 
        'bunnies'
      ].join('|'), 'i'),
      blacklist = new RegExp([
        'monkey'
      ].join('|'), 'i'),
      run = setInterval(processTweets, 2000),
      css = document.createElement('style');
  
  /*
   * Custom styles
   */
  css.textContent = [
    '.whitelisted { background-color:rgba(220,220,0,0.2); }',
    '.blacklisted { min-height:20px; height:20px; overflow:hidden; }',
    '.blacklisted_notice { background-color:#EEE; color:#333; text-align:center; display:block; height:20px; line-height:20px; font-style:italic; font-size:11px; } ',
  ].join("\n");
  
  document.getElementsByTagName('head')[0].appendChild(css);
  
  /*
   * Check each unfiltered tweet for white/black 
   * listed terms and attach appropriate class
   */
  function processTweets() {    
    var i,
        classPush,
        tweet,
        tweets = document.querySelectorAll('.stream-item:not(.word_filtered)');
  
    if (tweets) {
      for (i = 0; i < tweets.length; i++) {
        classPush = ' word_filtered';
        tweet = tweets[i];
        
        if (whitelist.test(tweet.innerHTML)) {
          classPush += ' whitelisted';
        } else if (blacklist.test(tweet.innerHTML)) {
          var notice = document.createElement('div');
              notice.className = 'blacklisted_notice',
              notice.textContent = 'Blacklisted tweet removed. Click to view.';
              
          tweet.insertBefore(notice, tweet.childNodes[0])
          
          classPush += ' blacklisted';
        }
        
        tweet.className += classPush;
      }
    }
  }
})();