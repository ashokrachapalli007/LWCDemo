public with sharing class CarSearchFormController {
@auraenabled(cacheable=true)
  
   public static list<Car_Type__c> getCarTypes(){
   
   return [select id,name from Car_Type__c];
   }
}
