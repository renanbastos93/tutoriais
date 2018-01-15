function notifique(){
	var op = {body: 'seila man', icon:''};
	var title = "bora clan";
	if(!('Notification' in window)){
		alert("nao suporta notificação");
	}
	else if(Notification.permission === 'granted'){
		var notif = new Notification(title, op);
	}
	else if(Notification.permission !== 'denied'){
		Notification.requestPermission(function(permission){
			if(permission === 'granted'){
				var notif = new Notification(title, op);
			}
		});
	}
};
