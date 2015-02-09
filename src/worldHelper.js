worldHelper = function(){
	var helper = {};

	helper.setAlertListForCreatures = function(allCreatures){
		for(var x=0; x<allCreatures.length; x++){
			var creature = allCreatures[x];	
			var alertList = [];
			for(var idx=0; idx<allCreatures.length; idx++){
				if (creature.getId() != allCreatures[idx].getId()){
					var cPos = creature.getPosition();
					var c1Pos = allCreatures[idx].getPosition();
					if (cPos.x)	
					alertList.push(allCreatures[idx]);
				}			
			}
			creature.setAlerts(alertList);
		}
	};

	return helper;
}
