import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseAuthen.js";// Adjust path if needed

const addElectricCars = async () => {
  try {
    await setDoc(doc(db, "cars/car_type/electric", "porsche_taycan_turbo_s"), {
      name: "Porsche Taycan Turbo S",
      autonomy: "600 KM",
      transmission: "Automatic 2-Speed",
      engine: "Dual Electric Motors",
      seats: 4,
      power: "761 HP",
      torque: "1050 Nm",
      acceleration: "0-100 in 2.8 seconds",
    });

    await setDoc(doc(db, "cars/car_type/electric", "bmw_ix"), {
      name: "BMW iX",
      autonomy: "600 KM",
      transmission: "Automatic 2-Speed",
      engine: "Dual Electric Motors",
      seats: 5,
      power: "523 HP",
      price: 6500000,
      torque: "765 Nm",
      acceleration: "0-100 in 4.6 seconds",
    });

    await setDoc(doc(db, "cars/car_type/electric", "tesla_model_3_performance"), {
      name: "Tesla Model 3 Performance",
      autonomy: "500 KM",
      transmission: "Reduction gear 1-Speed",
      engine: "Dual Electric Motors",
      seats: 5,
      power: "510 HP",
      torque: "741 Nm",
      acceleration: "0-100 in 3.1 seconds",
    });
  } catch (error) {
    console.error("Error adding cars: ", error);
  }
};

// Call it immediately
addElectricCars();
