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

    static nearestPoint(startringPoint, ...points){
        let nearest = points[0];

        for (let i = 1; i < points.length; i++) {
            const point = points[i];
            if (this.calculateDistance(startingPoint, point) < this.calculateDistance(startingPoint, nearest)) {
             nearest = point;   
            }
            
        }
        return nearest;
    }
}