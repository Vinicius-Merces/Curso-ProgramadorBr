// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDefLOo6FHGcSj3nZl1g_M9bmHvxHaKi_g",
    authDomain: "colegio-919f5.firebaseapp.com",
    projectId: "colegio-919f5",
    storageBucket: "colegio-919f5.appspot.com",
    messagingSenderId: "31216268246",
    appId: "1:31216268246:web:6312e947029fec27be2a77",
    measurementId: "G-GRE8PGYWN1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const TURMA = "turmaA";

let db = firebase.firestore();


// db.collection(TURMA).add({
//     nome:"Marcos",
//     sobrenome:"Santos",
//     notas: {nota1:9.6, nota2: 7.5},
// }).then((doc)=> {
//     console.log("Documento inserido com sucesso:", doc);
// }).catch(err=> {
//     console.log(err);
// })

// db.collection(TURMA).doc("AlunoNovo").set({
//     nome:"Mariana",
//     sobrenome:"Santos",
//     notas: {nota1:9.6, nota2: 7.5},
// }).then((doc)=> {
//     console.log("Documento inserido com sucesso:");
//     }).catch(err=> {
//         console.log(err);
//     })


    // db.collection(TURMA).doc("AlunoNovo").update(
    //     {
    //         cidades: firebase.firestore.FieldValue.arrayRemove("Paraná")
    //     }
    // ).then((doc)=> {
    //         console.log("Documento inserido com sucesso:");
    //         }).catch(err=> {
    //             console.log(err);
    //         })


//Ler todos os dados de uma coleção
db.collection("turmaA").onSnapshot((snapshot)=>{

    snapshot.forEach((doc)=>{
        let aluno = doc.data();
        console.log(aluno);
})
})
    

let docRef = db.collection("turmaA").doc("c8eqhrCwDM5frKHx3Mao");

docRef.onSnapshot((doc) => {
    let aluno = doc.data();
    console.log(doc.data());
});



// db.collection("turmaA").where("nome", "!=", "José").get().then((snapshot => {
//     snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome, aluno.sobrenome);
//     })
// }));
