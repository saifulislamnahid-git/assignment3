

//kilometer to meter calculator
function kilometerToMeter(km) {
    if (km >= 0) {
        var meter = km * 1000;
        return meter;
    } else {
        return "Input a valid value";
    }
}
var result = kilometerToMeter(10);

//budget calculator
function budgetCalculator(clock, phone, laptop) {
    if (clock >= 0 && phone >= 0 && laptop >= 0) {
        var clockPrice = clock * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;

        var totalPrice = clockPrice + phonePrice + laptopPrice;
        return totalPrice;
    } else {
        return "Please input a valid value"
    }
}
var result = budgetCalculator(0, 2, 3);

//hotel cost calculator
function hotelCost(day) {
    if (day >= 0) {
        var cost = 0;
        if (day <= 10) {
            cost = day * 100;
        } else if (day <= 20) {
            var firstPackage = 10 * 100;
            var remaining = day - 10;
            var secondPackage = remaining * 80;
            cost = firstPackage + secondPackage
        } else {
            var firstPackage = 10 * 100;
            var secondPackage = 10 * 80;
            var remaining = day - 20;
            var thirdPackage = remaining * 50;
            cost = firstPackage + secondPackage + thirdPackage;
        }

        return cost;
    }else{
        return "Please enter a valid value"
    }
}
var result = hotelCost(45);

//mega friend largest name
function megaFriend(friendsList){
    var nameLength = friendsList[0].length;
    var longestName = friendsList[0]

    for(var i=1; i<friendsList.length; i++){
        var nameElement = friendsList[i].length;
        if(nameElement>nameLength){
            longestName = friendsList[i];
            nameLength = nameElement;
        }
    }
    return longestName;
}
var friends = ["Anas","Emon","Nayeem","Shakil","Rayhan","Sani","Rifat"];
var result = megaFriend(friends)
