const Paint = function(litres) {
    this.litres = litres;
    this.empty = false;
}
Paint.prototype.isEmpty = function() {
    this.empty = true;
}

module.exports = Paint