/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');


let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
	WA.controls.disableRoomList();    
        
    //POPUPS---------------------------------------------------------------------------
    // Popup Radar Station 1
    WA.room.area.onEnter('area_radar_inside_1').subscribe(() => {
        console.log("!")
        currentPopup = WA.ui.openPopup("popup_radar_inside_1", "Was war das für ein Knall?!", [{
            label: "Next",
            className: "primary",
            callback: () => {
                // Close the popup when the "Close" button is pressed.
                closePopup();
                currentPopup = WA.ui.openPopup("popup_radar_inside_1", "Die Tür hat sich auch automatisch geschlossen, was geht hier vor?", [{
                    label: "Next",
                    className: "primary",
                    callback: () => {
                        // Close the popup when the "Close" button is pressed.
                        closePopup();
                        currentPopup = WA.ui.openPopup("popup_radar_inside_1", "Wir sollten prüfen, was hier los ist...", [{
                            label: "Next",
                            className: "primary",
                            callback: () => {
                                // Close the popup when the "Close" button is pressed.
                                closePopup();
                                currentPopup = WA.ui.openPopup("popup_radar_inside_1", "Eventuell hat die Außenkamera eine Aufzeichnung erstellt...", [{
                                    label: "Close",
                                    className: "primary",
                                    callback: () => {
                                        // Close the popup when the "Close" button is pressed.
                                        closePopup();
                                    }
                                }]);
                            }
                        }]);
                    }
                }]);
            }
        }]);
    });
    WA.room.area.onLeave('area_radar_inside_1').subscribe(closePopup)

    // Popup Arztpraxis
    WA.room.area.onEnter('area_praxis').subscribe(() => {
        console.log("!")
        currentPopup = WA.ui.openPopup("popup_praxis", "Gut, dass du da bist, wir haben für dich das Fax stehenlassen.", [{
            label: "Next",
            className: "primary",
            callback: () => {
                // Close the popup when the "Close" button is pressed.
                closePopup();
                currentPopup = WA.ui.openPopup("popup_praxis", "Vielleicht findest du Hinweise auf den Übeltäter", [{
                    label: "Next",
                    className: "primary",
                    callback: () => {
                        // Close the popup when the "Close" button is pressed.
                        closePopup();
                        currentPopup = WA.ui.openPopup("popup_praxis", "Wir verwenden jetzt KIM und den TI-Messenger für sichere Kommunikation im Medizinwesen", [{
                            label: "Close",
                            className: "primary",
                            callback: () => {
                                // Close the popup when the "Close" button is pressed.
                                closePopup();                               
                            }
                        }]);
                    }
                }]);
            }
        }]);
    });
    WA.room.area.onLeave('area_praxis').subscribe(closePopup)

    // Popup Spaceship
    WA.room.area.onEnter('area_spaceship_1').subscribe(() => {
        console.log("!")
        currentPopup = WA.ui.openPopup("popup_spaceship_1", "Willkommen auf unserem Schiff.", [{
            label: "Next",
            className: "primary",
            callback: () => {
                // Close the popup when the "Close" button is pressed.
                closePopup();
                currentPopup = WA.ui.openPopup("popup_spaceship_1", "Du willst zum Mond? Hmm, das wird schwierig...", [{
                    label: "Next",
                    className: "primary",
                    callback: () => {
                        // Close the popup when the "Close" button is pressed.
                        closePopup();
                        currentPopup = WA.ui.openPopup("popup_spaceship_1", "Unsere KI steuert sämtliche Systeme...", [{
                            label: "Close",
                            className: "primary",
                            callback: () => {
                                // Close the popup when the "Close" button is pressed.
                                closePopup();                               
                            }
                        }]);
                    }
                }]);
            }
        }]);
    });
    WA.room.area.onLeave('area_spaceship_1').subscribe(closePopup)

    //Popup VirtualCare
    WA.room.area.onEnter('area_virtualcare').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_virtualcare_1","Praxis geschlossen: Urlaub",[]);          
    })
    WA.room.area.onLeave('area_virtualcare').subscribe(closePopup)

    //Wohnung
    WA.room.area.onEnter('area_flat_1').subscribe(() => {
        console.log("!")
        currentPopup = WA.ui.openPopup("popup_flat_1", "Hier hat alles begonnen. Zum Glück konnten wir die Übertragung der Patientendaten stoppen.", [{
            label: "Next",
            className: "primary",
            callback: () => {
                // Close the popup when the "Next" button is pressed.
                closePopup();
                // Open the second popup
                currentPopup = WA.ui.openPopup("popup_flat_1", "Das Paket ist angekommen, jetzt müssen wir nur noch den Teleporter finden.", [{
                    label: "Close",
                    className: "primary",
                    callback: () => {
                        // Close the popup when the "Close" button is pressed.
                        closePopup();
                    }
                }]);
            }
        }]);
    });
    WA.room.area.onLeave('area_flat_1').subscribe(closePopup);

    //Popup PS1 
    WA.room.area.onEnter('area_ps1').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_ps1","Live in Your World, Play in Ours",[]);          
    })
    WA.room.area.onLeave('area_ps1').subscribe(closePopup)

	//Popup Cat
    WA.room.area.onEnter('area_flat_2').subscribe(() => {
        console.log("!")
        currentPopup = WA.ui.openPopup("popup_flat_2", "Mau...", [{
            label: "Next",
            className: "primary",
            callback: () => {
                // Close the popup when the "Next" button is pressed.
                closePopup();
                // Open the second popup
                currentPopup = WA.ui.openPopup("popup_flat_2", "...lass mich schlafen", [{
                    label: "Close",
                    className: "primary",
                    callback: () => {
                        // Close the popup when the "Close" button is pressed.
                        closePopup();
                    }
                }]);
            }
        }]);
    });
    WA.room.area.onLeave('area_flat_2').subscribe(closePopup);

    //Popup Kitchen
    WA.room.area.onEnter('area_flat_3').subscribe(() => {
        console.log("!")
        currentPopup = WA.ui.openPopup("popup_flat_3", "How do you drive this thing?!", [{
            label: "Next",
            className: "primary",
            callback: () => {
                // Close the popup when the "Next" button is pressed.
                closePopup();
                // Open the second popup
                currentPopup = WA.ui.openPopup("popup_flat_3", "...come on, let's get this ship started!", [{
                    label: "Close",
                    className: "primary",
                    callback: () => {
                        // Close the popup when the "Close" button is pressed.
                        closePopup();
                    }
                }]);
            }
        }]);
    });
    WA.room.area.onLeave('area_flat_3').subscribe(closePopup);

    //Popup Moon 1 
    WA.room.area.onEnter('area_moon_1').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_moon_1","Lustig, soll uns das abschrecken?",[]);          
    })
    WA.room.area.onLeave('area_moon_1').subscribe(closePopup)

    //Popup Moon 2
    WA.room.area.onEnter('area_moon_2').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_moon_2","The enemy of my enemy is my friend.",[]);            
    })
    WA.room.area.onLeave('area_moon_2').subscribe(closePopup)

    //Popup Moon 3
    WA.room.area.onEnter('area_moon_3').subscribe(() => {
        currentPopup = WA.ui.openPopup("popup_moon_3","Die Bilder vom Rover werden sicher für Aufregung sorgen.",[]);           
    })
    WA.room.area.onLeave('area_moon_3').subscribe(closePopup)

    
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
