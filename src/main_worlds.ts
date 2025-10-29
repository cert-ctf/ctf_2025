/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');



// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
	WA.controls.disableRoomList();

    // epa
    WA.room.area.onEnter('house_epa').subscribe(() => {        
        WA.room.hideLayer("House_Roof");     
    })

    WA.room.area.onLeave('house_epa').subscribe(() => { 
        WA.room.showLayer("House_Roof");              
    }) 

    // kim
    WA.room.area.onEnter('house_kim').subscribe(() => {        
        WA.room.hideLayer("House_Roof");     
    })

    WA.room.area.onLeave('house_kim').subscribe(() => { 
        WA.room.showLayer("House_Roof");              
    }) 

    // erx
    WA.room.area.onEnter('house_erx').subscribe(() => {        
        WA.room.hideLayer("House_Roof");     
    })

    WA.room.area.onLeave('house_erx').subscribe(() => { 
        WA.room.showLayer("House_Roof");              
    }) 

    // tim
    WA.room.area.onEnter('house_tim').subscribe(() => {        
        WA.room.hideLayer("House_Roof");     
    })

    WA.room.area.onLeave('house_tim').subscribe(() => { 
        WA.room.showLayer("House_Roof");              
    }) 

    

	

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));



export {};
