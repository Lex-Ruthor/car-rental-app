import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../firebase/firebaseAuthen"; 

const db = getFirestore(app);

export async function seedElectricCars() {
  const cars = [
    {
      id: "porsche_taycan_turbo_s",
      data: {
        name: "Porsche Taycan Turbo S",
        autonomy: "600 KM",
        transmission: "Automatic 2-Speed",
        engine: "Dual Electric Motors",
        seats: 4,
        power: "761 HP",
        torque: "1050 Nm",
        acceleration: "2.8 seconds",
        type: "electric",
        imageUrl: "https://.../porsche.jpg"
      }
    },
    {
      id: "bmw_ix",
      data: {
        name: "BMW iX",
        autonomy: "600 KM",
        transmission: "Automatic 2-Speed",
        engine: "Dual Electric Motors",
        seats: 5,
        power: "523 HP",
        torque: "765 Nm",
        acceleration: "4.6 seconds",
        type: "electric",
        imageUrl: "https://.../bmw.jpg"
      }
    },
    {
      id: "tesla_model_3_performance",
      data: {
        name: "Tesla Model 3 Performance",
        autonomy: "500 KM",
        transmission: "Reduction gear 1-Speed",
        engine: "Dual Electric Motors",
        seats: 5,
        power: "510 HP",
        torque: "741 Nm",
        acceleration: "3.1 seconds",
        type: "electric",
        imageUrl: "https://.../tesla.jpg"
      }
    }
  ];

  for (let car of cars) {
    // path: /cars/carstype/electric/{id}
    await setDoc(
      doc(db, "cars", "carstype", "electric", car.id),
      car.data
    );
  }

  console.log("Electric cars seeded!");
}
