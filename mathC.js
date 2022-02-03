class PuntoMedio{

    static medianPoint(c, d){
        const xMed = (c.x + d.x) / 2;
        const yMed = (c.y + d.y) / 2;

        const puntoMedio = new Point(xMed, yMed)
        return puntoMedio;
    }
    static distanceFromOrigin(p){
        const origin = new Point(0, 0);
        const distance = this.calculateDistance(origin, p);
        return distance;
    }
}