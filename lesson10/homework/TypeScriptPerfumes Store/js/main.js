import Employee from "./Employee.js";
import { Perfume, Gender } from "./Perfume.js";
let gucciPerfume = new Perfume("Gucci Guilty", "Guccig", Gender.Male, 150, 333);
let creedPerfume = new Perfume("Creed Aventus by Creed", "Creed", Gender.Male, 100, 1044);
let ronEmployee = new Employee("Ron", "Harper", "Ohio", 220000000);
let danEmployee = new Employee("Dan", "Majerle", "Arizona", 27885000);
gucciPerfume.displayDetails(document.getElementById("perfume1"));
creedPerfume.displayDetails(document.getElementById("perfume2"));
document.getElementById("perfume1tax").innerHTML = gucciPerfume.getTaxPrice() + '';
document.getElementById("perfume2tax").innerHTML = creedPerfume.getTaxPrice() + '';
ronEmployee.displayDetails(document.getElementById("employee1"));
danEmployee.displayDetails(document.getElementById("employee2"));
document.getElementById("employee1tax").innerHTML = ronEmployee.getTaxPrice() + '';
document.getElementById("employee2tax").innerHTML = danEmployee.getTaxPrice() + '';
