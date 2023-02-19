export default class PatientInfo{
    constructor(id,name,age,gender,disease,description,patientPhoto) {
        this.patientId = id;
        this.patientName = name;
        this.patientAge = age;
        this.patientGender = gender;
        this.patientDisease = disease;
        this.patientDescription = description;
        this.patientPhoto = patientPhoto;
    }
    patientId;
    patientName;
    patientAge;
    patientGender;
    patientDisease;
    patientDescription;
    patientPhoto;
    getPatientId(){
        return this.patientId;
    }
    getPatientName(){
        return this.patientName;
    }
    getPatientAge(){
        return this.patientAge;
    }
    getPatientGender(){
        return this.patientGender;
    }
    getPatientDisease(){
        return this.patientDisease;
    }
    getPatientDescription(){
        return this.patientDescription;
    }
    setPatientId(id){
        this.patientId = id;
    }
    setPatientName(name){
        this.patientName = name;
    }
    setPatientAge(age){
        this.patientAge = age;
    }
    setPatientGender(gender){
        this.patientGender = gender;
    }
    setPatientDisease(disease){
        this.patientDisease = disease;
    }
    setPatientDescription(description){
        this.patientDescription = description;
    }
}