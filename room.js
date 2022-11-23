const Room = function(area) {
    this.area = area;
    this.painted = false;
}

Room.prototype.isPainted = function() {
    this.painted = true;
}

module.exports = Room;