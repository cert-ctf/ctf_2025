/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');


let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(async () => {
    console.log('Scripting API ready');
	WA.controls.disableRoomList();

    WA.mapEditor.area.onEnter("quiet").subscribe(() => {
        WA.controls.disablePlayerProximityMeeting();
    });


    const pos = await WA.player.getPosition();


    if (pos.x === 1520 && pos.y === 880) {
        WA.room.hideLayer("Top_House/Windows");    
        WA.room.hideLayer("Top_House/Walls"); 
        WA.room.hideLayer("Top_House/Furniture_3"); 
        WA.room.hideLayer("Top_House/Furniture_2"); 
        WA.room.hideLayer("Top_House/Furniture_1"); 
        WA.room.hideLayer("Top_House/Floor");  
    }
	
    // gematik Gebäude
    WA.room.area.onEnter('Room_gematik').subscribe(() => {        
        WA.room.hideLayer("Top_House/Windows");    
        WA.room.hideLayer("Top_House/Walls"); 
        WA.room.hideLayer("Top_House/Furniture_3"); 
        WA.room.hideLayer("Top_House/Furniture_2"); 
        WA.room.hideLayer("Top_House/Furniture_1"); 
        WA.room.hideLayer("Top_House/Floor");  
    })
    
    WA.room.area.onLeave('Room_gematik').subscribe(() => { 
        WA.room.showLayer("Top_House/Windows");    
        WA.room.showLayer("Top_House/Walls"); 
        WA.room.showLayer("Top_House/Furniture_3"); 
        WA.room.showLayer("Top_House/Furniture_2"); 
        WA.room.showLayer("Top_House/Furniture_1"); 
        WA.room.showLayer("Top_House/Floor");           
    }) 

    // fahrstuhl Gebäude
    WA.room.area.onEnter('fahrstuhl_eg').subscribe(() => {          
        WA.player.teleport(1524, 884); 
    })

    WA.room.area.onEnter('fahrstuhl_1').subscribe(() => {          
        WA.player.teleport(1524, 1015);
    })

    // gematik Gebäude
    WA.room.area.onEnter('house_epa').subscribe(() => {        
        WA.room.hideLayer("House_Roof");     
    })

    WA.room.area.onLeave('house_epa').subscribe(() => { 
        WA.room.showLayer("House_Roof");              
    }) 


    
    
    //Roofs------------------------------------------------------------------------
  
   
        
    //POPUPS---------------------------------------------------------------------------

    //Popup sea 
    WA.room.area.onEnter('popup_sea').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_sea","Bitte nicht stören :-)",[]);          
    })
    WA.room.area.onLeave('popup_sea').subscribe(closePopup)

    WA.room.area.onEnter('popup_sgm').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_sgm","Bitte nicht stören :-)",[]);          
    })
    WA.room.area.onLeave('popup_sgm').subscribe(closePopup)

    WA.room.area.onEnter('popup_bender').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_bender","Hilfe gibt es beim Support",[]);          
    })
    WA.room.area.onLeave('popup_bender').subscribe(closePopup)
    
    function closePopup(){
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    }
	

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));



export {};
