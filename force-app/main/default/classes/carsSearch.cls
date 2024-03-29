public with sharing class carsSearch {
@auraenabled(cacheable=true)
    public static List<Car__c> getCars(String carTypeId){
        
        if(String.isEmpty(cartypeId)){
            System.debug('Car Type Id...'+cartypeId);
            return [SELECT Id, Name, Picture__c, Contact__r.Name,
                    Geolocation__latitude__s, Geolocation__longitude__s
                    FROM Car__c 
                    WHERE Available_For_Rent__c = true];
        } else{
            return [SELECT Id, Name, Picture__c, Contact__r.Name,
                    Geolocation__latitude__s, Geolocation__longitude__s
                    FROM Car__c 
                    WHERE Available_For_Rent__c = true 
                    AND Car_type__c =: carTypeId];
        }

    }
}