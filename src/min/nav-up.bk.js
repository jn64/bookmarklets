javascript:(function(){let e=location;if(e.hash)e.hash="";else if(e.search)e.search="";else{let a=e.pathname.split("/");a.pop()||a.pop(),e.pathname=a.join("/")}})();
