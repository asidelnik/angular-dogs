
// Model - Dog model

export class Dog {
   public name: string;
   public weight: number;
   public birthDate: Date;
   public owner: string;

   constructor(name, weight, birthDate, owner) {
      this.name = name;
      this.weight = weight;
      this.birthDate = birthDate;
      this.owner = owner; 
   }
}