let zoneNamesShort = ["AIRP","ALAMO","ALTA","ARMYB","BANHAMC","BANNING","BEACH","BHAMCA","BRADP","BRADT","BURTON","CALAFB","CANNY","CCREAK","CHAMH","CHIL","CHU","CMSW","CYPRE","DAVIS","DELBE","DELPE","DELSOL","DESRT","DOWNT","DTVINE", "EAST_V","EBURO","ELGORL","ELYSIAN","GALFISH","GOLF","GRAPES","GREATC","HARMO","HAWICK","HORS","HUMLAB","JAIL","KOREAT","LACT","LAGO","LDAM","LEGSQU","LMESA","LOSPUER","MIRR","MORN","MOVIE","MTCHIL","MTGORDO", "MTJOSE","MURRI","NCHU","NOOSE","OCEANA","PALCOV","PALETO","PALFOR","PALHIGH","PALMPOW","PBLUFF","PBOX","PROCOB","RANCHO","RGLEN","RICHM","ROCKF","RTRAK","SANAND","SANCHIA","SANDY","SKID","SLAB","STAD","STRAW", "TATAMO","TERMINA","TEXTI","TONGVAH","TONGVAV","VCANA","VESP","VINE","WINDF","WVINE","ZANCUDO","ZP_ORT","ZQ_UAR"];
let zoneNames = ["Los Santos International Airport","Alamo Sea","Alta","Fort Zancudo","Banham Canyon Dr","Banning","Vespucci Beach","Banham Canyon","Braddock Pass","Braddock Tunnel","Burton","Calafia Bridge","Raton Canyon","Cassidy Creek","Chamberlain Hills","Vinewood Hills","Chumash","Chiliad Mountain State Wilderness","Cypress Flats","Davis","Del Perro Beach","Del Perro","La Puerta","Grand Senora Desert","Downtown","Downtown Vinewood","East Vinewood","El Burro Heights","El Gordo Lighthouse","Elysian Island","Galilee","GWC and Golfing Society","Grapeseed","Great Chaparral","Harmony","Hawick","Vinewood Racetrack","Humane Labs and Research","Bolingbroke Penitentiary","Little Seoul","Land Act Reservoir","Lago Zancudo","Land Act Dam","Legion Square","La Mesa","La Puerta","Mirror Park","Morningwood","Richards Majestic","Mount Chiliad","Mount Gordo","Mount Josiah","Murrieta Heights","North Chumash","N.O.O.S.E","Pacific Ocean","Paleto Cove","Paleto Bay","Paleto Forest","Palomino Highlands","Palmer-Taylor Power Station","Pacific Bluffs","Pillbox Hill","Procopio Beach","Rancho","Richman Glen","Richman","Rockford Hills","Redwood Lights Track","San Andreas","San Chianski Mountain Range","Sandy Shores","Mission Row","Stab City","Maze Bank Arena","Strawberry","Tataviam Mountains","Terminal","Textile City","Tongva Hills","Tongva Valley","Vespucci Canals","Vespucci","Vinewood","Ron Alternates Wind Farm","West Vinewood","Zancudo River","Port of South Los Santos","Davis Quartz"];

mp.events.add('render', () => {
    if(mp.players.local.vehicle && mp.players.local.vehicle.getPedInSeat(-1) === mp.players.local.handle){
        let getStreet = mp.game.pathfind.getStreetNameAtCoord(mp.players.local.vehicle.position.x, mp.players.local.vehicle.position.y, mp.players.local.vehicle.position.z, 0, 0);
        let streetName = mp.game.ui.getStreetNameFromHashKey(getStreet.streetName);
        let zoneName = mp.game.zone.getNameOfZone(mp.players.local.vehicle.position.x, mp.players.local.vehicle.position.y, mp.players.local.vehicle.position.z);
        let realZoneName;
        if(zoneNamesShort.includes(zoneName)) {
            let zoneID = zoneNamesShort.indexOf(zoneName);
            realZoneName = zoneNames[zoneID];
      }
        mp.game.graphics.drawText(`${streetName} /~w~/ ${realZoneName}`, [0.5, 0.92], { font: 4, color: [231, 76, 60, 255], scale: [0.8, 0.8] });
    }
});