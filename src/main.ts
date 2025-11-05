/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');


let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(async () => {
    console.log('Scripting API ready');
	WA.controls.disableRoomList();

    WA.room.onEnterLayer('quiet').subscribe(() => {
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
    
    // Moon Room
    WA.room.area.onEnter('moon_inside').subscribe(() => {
        WA.room.showLayer("above_inside/above_inside_1");       
        WA.room.showLayer("stuff_inside/stuff_inside_1");       
        WA.room.showLayer("stuff_inside/stuff_inside_2");       
        WA.room.showLayer("world/station_inside");      
                
        WA.room.hideLayer("above_outside/above_roof_1");    
        WA.room.hideLayer("above_outside/above_roof_2");            
        WA.room.hideLayer("stuff_outside/stuff_outside_1");     
        WA.room.hideLayer("world/station"); 
    })
    
    WA.room.area.onEnter('moon_outside').subscribe(() => {
        WA.room.hideLayer("above_inside/above_inside_1");       
        WA.room.hideLayer("stuff_inside/stuff_inside_1");       
        WA.room.hideLayer("stuff_inside/stuff_inside_2");       
        WA.room.hideLayer("world/station_inside");  
        
        WA.room.showLayer("above_outside/above_roof_1");    
        WA.room.showLayer("above_outside/above_roof_2");            
        WA.room.showLayer("stuff_outside/stuff_outside_1"); 
        WA.room.showLayer("world/station"); 
    })
    

    // HiFi Room
    WA.room.area.onEnter('HiFi_Room').subscribe(() => {
        WA.room.hideLayer("HiFi_roof");     
    })
    
    WA.room.area.onLeave('HiFi_Room').subscribe(() => {
        WA.room.showLayer("HiFi_roof");
    }) 
    
    // Praxis_1 Room
    WA.room.area.onEnter('Praxis_1_Room').subscribe(() => {
        WA.room.hideLayer("Praxis_1_roof");     
    })
    
    WA.room.area.onLeave('Praxis_1_Room').subscribe(() => {
        WA.room.showLayer("Praxis_1_roof");     
    }) 
    
    // Praxis_2 Room
    WA.room.area.onEnter('Praxis_2_Room').subscribe(() => {
        WA.room.hideLayer("Praxis_2_roof");     
    })
    
    WA.room.area.onLeave('Praxis_2_Room').subscribe(() => {
        WA.room.showLayer("Praxis_2_roof");     
    }) 
    
    // Fax Room
    WA.room.area.onEnter('Fax_Room').subscribe(() => {
        WA.room.hideLayer("Fax_roof");      
    })
    
    WA.room.area.onLeave('Fax_Room').subscribe(() => {
        WA.room.showLayer("Fax_roof");      
    }) 
    
    // Bus Room
    WA.room.area.onEnter('Bus_Room').subscribe(() => {
        WA.room.hideLayer("Bus_Station_Roof");      
    })
    
    WA.room.area.onLeave('Bus_Room').subscribe(() => {
        WA.room.showLayer("Bus_Station_Roof");      
    }) 
    
        
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
