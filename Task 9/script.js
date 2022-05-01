/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
        this.wasExpensive = function () {
           console.log((this.budget > 100000000)?true:false);
           return ((this.budget > 100000000)?true:false);
        };
    }
}

const JS9_movie = new Movie("Bronson","Nicolas Winding Refn", 100000001);

JS9_movie.wasExpensive();