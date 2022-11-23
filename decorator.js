const Decorator = function () {
    this.stock = [];
}

Decorator.prototype.addPaint = function (paint) {
    this.stock.push(paint);
}

Decorator.prototype.totalLitres = function () {
    let totalLitres = 0
    for (paint of this.stock) {
        totalLitres += paint.litres;
    }
    return totalLitres;
}

Decorator.prototype.removeEmptyPaint = function () {
    for (paint of this.stock) {
        if (paint.litres == 0) {
            this.stock.slice(this.stock.indexOf(paint), 1);
        }
    }
}

Decorator.prototype.decreasedStock = function (area) {
    let i = 0; 
    while (this.stock[i] && area>0) {
        if (area>this.stock[i].litres) {
            area -= this.stock[i].litres;
            this.stock[i].litres = 0;
            this.stock[i].isEmpty();
        } else {
            this.stock[i].litres -= area;
            area = 0;
        }
        i++
    }
}

Decorator.prototype.paintRoom = function (room) {
    let totalLitres = this.totalLitres()
    if (totalLitres>=room.area) {
        room.isPainted();
        this.decreasedStock(room.area);
        this.removeEmptyPaint();
        return true;
    } else {
        return false;
    }
}



module.exports = Decorator;