import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kaminskiksawery:Loyt7Vb2YCWS0Z6u@cluster0.ekpdook.mongodb.net/2el"
    );

    console.log("połączono z bazą danych");
  } catch (error) {
    console.log("błąd z łączeniem z bazą danych", error);
  }
};

export default connect;
