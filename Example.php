<?PHP

	# POSTCODE QUERY
	$Query = 'SD3 DWZ';

	# UK POSTCODE REGEX ONLY
	$REGEX_POSTCODE = '^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$^';
	
	# DOESN'T MATCH POSTCODE
	if (!preg_match($REGEX_POSTCODE, $Query)){ exit(); }
	
	echo 'Woo! Looks like we have ourselves a UK Postcode right here.';
	
?>
