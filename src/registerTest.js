useEffect(() => {
  db.collection("users")
  .get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(doc.data())
          //console.log(doc.id, " => ", doc.data());
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });}, []);

  const addStmth = () => {
      db.collection("users").add({
          userName: "Nastya",
          password: "12345"
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  }