mp.events.addCommand({
    'engine': (player) => {
        if(!player.vehicle) return player.outputChatBox('You need to be in a vehicle');
        player.vehicle.engine ? player.vehicle.engine = false : player.vehicle.engine = true;
    }
});