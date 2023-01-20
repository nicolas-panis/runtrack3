function jourtravaille(date1){

    options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    an = new Date('January 01, 2020 00:00:00');
    paques = new Date('April 13, 2020 00:00:00');
    travail = new Date('May 01, 2020 00:00:00');
    allie = new Date('May 08, 2020 00:00:00');
    ascension = new Date('May 21, 2020 00:00:00');
    pentecote = new Date('June 01, 2020 00:00:00');
    bastille = new Date('July 14, 2020 00:00:00');
    assomption = new Date('August 15, 2020 00:00:00');
    toussaint = new Date('November 01, 2020 00:00:00');
    armistice = new Date('November 11, 2020 00:00:00');
    noel = new Date('December 25, 2020 00:00:00');

    tabferie = [an, paques, travail, allie, ascension, pentecote, bastille, assomption, toussaint, armistice, noel]
    
    for(i = 0; i < tabferie.length; i++){
        if (date1.getDay() == tabferie[i].getDay() && date1.getMonth() == tabferie[i].getMonth()){
             return console.log('Le ' + date1.toLocaleDateString("fr", options) + " est un jour férié");
        }
    }

    if (date1.getDay() == 0 || date1.getDay() == 6){
        console.log('Non le ' + date1.toLocaleDateString("fr", options) + ' est un week-end');
    }
    else{
        console.log('Oui le ' + date1.toLocaleDateString("fr", options) + ' est un jour travaillé');
    }
        
}

date1 = new Date('January 01, 2020 20:00:00');
jourtravaille(date1);