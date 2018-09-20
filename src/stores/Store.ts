import { observable, action, computed } from 'mobx';
import { setupMaster } from 'cluster';
import db from '../config/firebaseConfig';

class Store {
    @observable name : string = "";
    @observable lastName : string = "";
    @observable email : string = "";
    @observable password : string = "";
    
    @action handleInput(data:string, input:string) {
        if (input === "name") {
            this.name = data;
        }
        if (input === "lastname") {
            this.lastName = data;
        }
        if (input === "mail") {
            this.email = data;
        }
        if (input === "pass") {
            this.password = data;
        }
    }

    @action createNewUser(name: string, lastName: string, email: string, password: string) {
        db.collection("users").add({
            name: name,
            lastName: lastName,
            email: email,
            pass: password
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }
    @action addUser(){
        this.createNewUser(this.name, this.lastName, this.email, this.password);
    }
}

export const store = new Store();