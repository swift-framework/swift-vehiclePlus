function isDriver() {
    if(mp.players.local.vehicle) return mp.players.local.vehicle.getPedInSeat(-1) === mp.players.local.handle;
}

mp.events.add('render', () => {
    if(mp.players.local.vehicle && isDriver()){
        mp.game.graphics.drawText(`Speed: ~w~${(mp.players.local.vehicle.getSpeed() * 3.6).toFixed(0)} KM/H`, [0.9, 0.8], { 
            font: 4, 
            color: [231, 76, 60, 255], 
            scale: [0.9, 0.9], 
            outline: true
        });
    }
});