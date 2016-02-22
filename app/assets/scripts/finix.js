function Fx(){
	website: Object.create(Website()),
	email: Object.create(Email()),
};

function Website(config, contents){
	this.config = config;
	this.contents = contents;
};

Fx.website({...},[...]);
