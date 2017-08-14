// ########################################################################
//Don't edit this section. Instead make these tests pass by writing
// constructors in the constructor section above ;D
// #######################################################################

it("should make Sadie happy when javi pets her", function(){
  expect(sadie.status).toBe('normal');
  javi.pet(sadie);
  expect(sadie.status).toBe('happy');
});

it("should make Sadie black", function(){
  expect(sadie.color).toBe('black');
});

it("should be make Moonshine hungry and Sadie not hungry", function(){
  expect(moonshine.hungry).toBe(true);
  expect(sadie.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function(){
  julia.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});

it("should not affect Atticus and Moonshine's owner properties when setting javi as Sadie's owner ", function(){
  sadie.owner = javi;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and javi not cool", function(){
  sadie.owner = javi;
  expect(julia.cool).toBe(true);
  expect(javi.cool).toBe(false);
});

// ########### DO NOT EDIT THESE FUNCTIONS ##########################

// a simple "it" function for naming groups of expectations
function it(description, contents){
  console.log('\n\n"It '+ description + '"');
  contents();
}

// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true
function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
        return false;
      }
    }
  }
}
