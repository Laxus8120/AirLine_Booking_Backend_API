function Compare(TimeString1,TimeString2){

    let dateTime1 = new Date(TimeString1);
    let dateTime2 = new Date(TimeString2);

    return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
    Compare
}