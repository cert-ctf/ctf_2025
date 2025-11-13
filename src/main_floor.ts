/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');


let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
	WA.controls.disableRoomList();    
        
    //POPUPS---------------------------------------------------------------------------
     WA.room.area.onEnter('popup_ops').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_ops","Bitte nicht stören :-)",[]);          
    })
    WA.room.area.onLeave('popup_ops').subscribe(closePopup)

    WA.room.area.onEnter('popup_gf').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_gf","Bitte nicht stören :-)",[]);          
    })
    WA.room.area.onLeave('popup_gf').subscribe(closePopup)

    WA.room.area.onEnter('popup_it').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_it","Bitte nicht stören :-)",[]);          
    })
    WA.room.area.onLeave('popup_it').subscribe(closePopup)
    
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
