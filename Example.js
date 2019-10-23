
// UK POSTCODE REGEX ONLY
let RegexUKPostcode = '^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$';

// FUNCTION RETURNS TRUE IF MATCH
function ValidatePostcode(Query, Regex)
{ 
	let Regex = new RegExp(Regex);
	return Regex.test(Query); 
}

// POSTCODE QUERY
let Query = 'SD3 DWZ';

// RUN POSTCODE VALIDATION FUNCTION
if (!ValidatePostcode(Query, Regex)){ alert('Oh no! That doesn\'t seem right...'); }

alert('Woo! Looks like we have ourselves a UK Postcode right here.');
