'use strict' 

function fullName(){
    var firstName = prompt('What is your first name?');
    var lastName = prompt('What is your last name?');
    
    var full = (firstName + ' ' + lastName);
    alert ('Pleasure to have you! ' + full);
    return full;
  }
  fullName();
  
  function favoriteInst()
  {
    var favoriteInstrument = prompt ('Which instrument do you like?');
    if (favoriteInstrument === 'guitar'){
      alert ('Congratulations  next Bob Marley');
    }
    else 
    {
      alert ('Not a bad choice!, Guitars are still better :P');
    }
  }
  favoriteInst();
