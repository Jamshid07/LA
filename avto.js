class Avtomobil {
    constructor(ishlabChiqaruvchi, model, rang, narx) {
        this.ishlabChiqaruvchi = ishlabChiqaruvchi;
        this.model = model;
        this.rang = rang;
        this.narx = narx;
    }
}

const avtomovillar = [
  new Avtomobil("Chevrolet", "Cobalt", "oq", 10000),
  new Avtomobil("Chevrolet", "Spart", "qizil", 6000),
  new Avtomobil("Chevrolet", "Captiva", "qora", 13000),
  new Avtomobil("Chevrolet", "Matiz", "yashil", 1000),
  new Avtomobil("Chevrolet", "Lacetti", "oq", 10000),
  new Avtomobil("Chevrolet", "Equinox", "oq", 4000),
  new Avtomobil("Chevrolet", "Trablazer", "qora", 11000),
  new Avtomobil("Chevrolet", "Damas", "qora", 5000),
  new Avtomobil("Chevrolet", "Nexia", "kok", 10000),
  new Avtomobil("Chevrolet", "Gentra", "sariq", 9000),
];

const faqatOqQora = avtomovillar.filter(
    (avto) => avto.rang === "oq" || avto.rang === "qora"
);
console.table("Faqat OQ yoki QORA avtomobillar");
console.table(faqatOqQora);

const startPrice = 6000;
const endPrice = 12000;

const narx_6_12k_orasidagi_avto = avtomovillar.filter(
    (avto) => avto.narx > 6000 && avto.narx < 12000
);
console.table("Narxi 6000-12000 orasida bo'lgan avtomobillar");
console.table(narx_6_12k_orasidagi_avto);
