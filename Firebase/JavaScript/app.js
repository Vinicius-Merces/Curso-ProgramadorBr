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
let auth = firebase.auth();

// botoes para logar e sair
let loginBtn = document.getElementById("login");
let logoutBtn = document.getElementById("logout");
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
const areaDeLogin = document.getElementsByClassName("area-de-login")[0];
if (areaDeLogin) {
  areaDeLogin.style.display = "block";
} else {
  console.log("Elemento area-de-login não encontrado na página");
}

//botão de cadastro
const btnCad = document.getElementById("register");
btnCad.addEventListener("click", criarUsuario);


//função para criar os usuários

function criarUsuario() {

let newUserEmail = document.getElementById("new-login-email");
let newUserPassword = document.getElementById("new-password");

// Criar usuarios
auth.createUserWithEmailAndPassword(newUserEmail.value, newUserPassword.value)
  .then((newuserCredential) => {
    var newUser = newuserCredential.user;
    console.log("Usuário craido com sucesso:", newUser.email)

    const userCreated = document.getElementsByClassName("created-user");
    userCreated[0].innerHTML = "Usuário criado:" + " " + newUser.email;
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error: " + errorCode + " - " + errorMessage);
  })

}

//função para login

function login(){
    let userEmail = document.getElementById("login-email");
    let userPassword = document.getElementById("password");
    const areaDeLogin = document.getElementsByClassName("area-de-login")[0];
    if (areaDeLogin) {
      areaDeLogin.style.display = "none";
    } else {
      console.log("Elemento area-de-login não encontrado na página");
    }
    

    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() =>{
        auth.signInWithEmailAndPassword(userEmail.value, userPassword.value)
        .then((userCredential) => {
        // Signed in
        var logUser = userCredential.user;
        console.log("Usuário logado com sucesso:", logUser.email)
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error: " + errorCode + " - " + errorMessage);})
      }).catch((error) => {
        console.log(error);
    })

}

// Listener com callback para ver o estado do usuario atual
auth.onAuthStateChanged(user=> {
    if (user) {
        //mostrar o usuario logado na tela
        
        const userLogged = document.getElementsByClassName("logged-user");
        userLogged[0].innerHTML = "Usuário logado:" + " " + auth.currentUser.email;
        const areaDeLogin = document.getElementsByClassName("area-de-login")[0];
        if (areaDeLogin) {
          areaDeLogin.style.display = "none";
        }
        // mostrar o botão login se  não houver usuário logado
        const btnEntrar = document.getElementById("login");
        if (btnEntrar) {
          btnEntrar.style.display = "none";
        }
        const btnSair = document.getElementById("logout");
        if (btnSair) {
            btnSair.style.display = "block";            
        }
        const buttons = document.getElementsByClassName("buttons");
        if (buttons) {
            buttons[0].style.display = "flex";
            buttons[0].style.justifyContent = "flex-end";
        }
    } else {
        // mostrar a area de login se não houver usuário logado
        const areaDeLogin = document.getElementsByClassName("area-de-login")[0];
        if (areaDeLogin) {
          areaDeLogin.style.display = "block";
        }
        // mostrar o botão login se  não houver usuário logado
        const btnEntrar = document.getElementById("login");
        if (btnEntrar) {
          btnEntrar.style.display = "block";
        }
        const btnSair = document.getElementById("logout");
        if (btnSair) {
          btnSair.style.display = "none";
        }
        const buttons = document.getElementsByClassName("buttons");
        if (buttons) {
            buttons[0].style.display = "flex";
            buttons[0].style.justifyContent = "flex-start";
        }
        console.log("Usuário não logado");
    }
})


//função para logout

function logout() {
    const areaDeLogin = document.getElementsByClassName("area-de-login")[0];
    if (areaDeLogin) {
      areaDeLogin.style.display = "block";
    } else {
      console.log("Elemento area-de-login não encontrado na página");
    }


    auth.signOut().then(()=> {

        const userLogged = document.getElementsByClassName("logged-user");
        userLogged[0].innerHTML = "Usuário foi deslogado";
    }).catch(error => {
        console.log(error);
    })
}



























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
// db.collection("turmaA").onSnapshot((snapshot)=>{

//     snapshot.forEach((doc)=>{
//         let aluno = doc.data();
//         console.log(aluno);
// })
// })
    

// let docRef = db.collection("turmaA").doc("c8eqhrCwDM5frKHx3Mao");

// docRef.onSnapshot((doc) => {
//     let aluno = doc.data();
//     console.log(doc.data());
// });



// db.collection("turmaA").where("nome", "!=", "José").get().then((snapshot => {
//     snapshot.forEach((doc) => {
//         let aluno = doc.data();
//         console.log(aluno.nome, aluno.sobrenome);
//     })
// }));
