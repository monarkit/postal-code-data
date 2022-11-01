module.exports = [
	{	countryCode: 'AF',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'AX',		postalCodeType: 1,		pattern: /^(AX-)?[0-9]{5}$/, placeholder: 'AX-00000'}, // Verified
	{	countryCode: 'AL',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'DZ',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'AD',		postalCodeType: 1,		pattern: /^AD[0-9]{3}$/, placeholder: 'AD000'}, // Verified
	{	countryCode: 'AO',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'AI',		postalCodeType: 3,		pattern: 'AI-2640'}, // Verified C
	{	countryCode: 'AG',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'AR',		postalCodeType: 1,		pattern: /^[A-Z]?[0-9]{4}([A-Z]{3})?$/, placeholder: '0000 or X0000XXX'}, // Verified
	{	countryCode: 'AM',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'AW',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'AU',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'AT',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'AZ',		postalCodeType: 1,		pattern: /^(AZ\s?)?[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'BS',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'BH',		postalCodeType: 1,		pattern: /^[0-9]{3,4}$/, placeholder: '000'}, // Verified
	{	countryCode: 'BD',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'BB',		postalCodeType: 1,		pattern: /^(BB)?[0-9]{5}$/, placeholder: 'BB00000'}, // Verified
	{	countryCode: 'BY',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'BE',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'BZ',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'BJ',		postalCodeType: 0,		pattern: 0}, // Verified. PO Boxes have a code format 00 BP 0000 however this should be the address line. C
	{	countryCode: 'BM',		postalCodeType: 1,		pattern: /^[A-Z]{2}\s?[0-9A-Z]{2}$/, placeholder: 'XX 00'}, // Verified
	{	countryCode: 'BT',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'BO',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'BA',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'BW',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'BR',		postalCodeType: 1,		pattern: /^[0-9]{5}-?[0-9]{3}$/, placeholder: '00000-000'}, // Verified
	{	countryCode: 'IO',		postalCodeType: 3,		pattern: 'BBND 1ZZ'}, // Verified C
	{	countryCode: 'VG',		postalCodeType: 1,		pattern: /^VG[0-9]{4}$/, placeholder: 'VG0000'}, // Verified
	{	countryCode: 'BN',		postalCodeType: 1,		pattern: /^[A-Z]{2}[0-9]{4}$/, placeholder: 'XX000'}, // Verified
	{	countryCode: 'BG',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'BF',		postalCodeType: 1,		pattern: /^[0-9]{2}$/, placeholder: '00'}, // PO Box based system 00 XX 0000 should be address line, but first 00 should be used as a postal code also.
	{	countryCode: 'BI',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'KH',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'CM',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'CA',		postalCodeType: 1,		pattern: /^[A-Z][0-9][A-Z]\s?[0-9][A-Z][0-9]$/, placeholder: 'X0X 0X0'}, // Verified
	{	countryCode: 'CV',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'KY',		postalCodeType: 1,		pattern: /^KY[0-9]-?[0-9]{4}$/, placeholder: 'KY0-0000'}, // Verified
	{	countryCode: 'CF',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'TD',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'JE',		postalCodeType: 1,		pattern: /^JE[0-9][0-9]?\s?[0-9][A-Z]{2}$/, placeholder: 'JE_ ___'}, // Verified
	{	countryCode: 'CL',		postalCodeType: 1,		pattern: /^[0-9]{7}$/, placeholder: '0000000'}, // Verified
	{	countryCode: 'CN',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'CX',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'CC',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'CO',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'KM',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'CG',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'CD',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'CK',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'CR',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'HR',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'CU',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'CW',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'CY',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'CZ',		postalCodeType: 1,		pattern: /^[0-9]{3}\s[0-9]{2}$/, placeholder: '000 00'}, // Verified
	{	countryCode: 'DK',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'DJ',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'DM',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'DO',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'EC',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'EG',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'SV',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'GQ',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'ER',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'EE',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'SZ',		postalCodeType: 1,		pattern: /^[A-Z]?[0-9]{3}$/, placeholder: 'X000'}, // Verified
	{	countryCode: 'ET',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'FK',		postalCodeType: 3,		pattern: 'FIQQ 1ZZ'}, // Verified C
	{	countryCode: 'FO',		postalCodeType: 1,		pattern: /^FO(-|\s)?[0-9]{3}$/, placeholder: 'FO-000'}, // Verified
	{	countryCode: 'FJ',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'FI',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'FR',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'PF',		postalCodeType: 1,		pattern: /^987[0-9]{2}$/, placeholder: '987__'}, // Verified
	{	countryCode: 'GA',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'GM',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'GE',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'DE',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'GH',		postalCodeType: 1,		pattern: /^[A-Z][0-9A-Z]-?[0-9]{3,4}(-?[0-9]{4})?$/, placeholder: 'XX0000 or XX-0000-0000'}, // Verified
	{	countryCode: 'GI',		postalCodeType: 3,		pattern: 'GX11 1AA'}, // Verified C
	{	countryCode: 'GR',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'GL',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'GD',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'GP',		postalCodeType: 1,		pattern: /^971[0-9]{2}$/, placeholder: '971__'}, // Verified
	{	countryCode: 'GT',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'GG',		postalCodeType: 1,		pattern: /^GY[0-9][0-9]?\s[0-9][A-Z]{2}$/, placeholder: 'GY0 0XX'}, // Verified
	{	countryCode: 'GN',		postalCodeType: 1,		pattern: /^[0-9]{3}$/, placeholder: '000'}, // Verified
	{	countryCode: 'GW',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'GY',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'HT',		postalCodeType: 1,		pattern: /^(HT\s?)?[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'HN',		postalCodeType: 1,		pattern: /^([0-9]{5})|([A-Z]{2}[0-9]{4})$/, placeholder: 'XX0000 or 00000'}, // Verified
	{	countryCode: 'HK',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'HU',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'IS',		postalCodeType: 1,		pattern: /^[0-9]{3}$/, placeholder: '000'}, // Verified
	{	countryCode: 'IN',		postalCodeType: 1,		pattern: /^[0-9]{3}\s?[0-9]{3}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'ID',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'},  // Verified
	{	countryCode: 'IR',		postalCodeType: 1,		pattern: /^[0-9]{10}$/, placeholder: '0000000000'}, // Verified
	{	countryCode: 'IQ',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'IE',		postalCodeType: 1,		pattern: /^[A-Z][0-9][0-9A-Z]?\s[0-9A-Z]{4}$/, placeholder: 'X00 XXXX'}, // Verified
	{	countryCode: 'IM',		postalCodeType: 1,		pattern: /^IM[0-9][0-9]?\s[0-9][A-Z]{2}$/, placeholder: 'IM0 0XX'}, // Verified
	{	countryCode: 'IL',		postalCodeType: 1,		pattern: /^[0-9]{5}([0-9]{2})?$/, placeholder: '0000000'}, // Verified
	{	countryCode: 'IT',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'CI',		postalCodeType: 1,		pattern: /^1?[0-9]{2}$/, placeholder: '00'}, // Verified. 2-digit is mandatory, 3-digit is 2-digit prefixed by 1 for delivery.
	{	countryCode: 'JM',		postalCodeType: 0,		pattern: 0}, // Verified. Postal code is not in effect. C
	{	countryCode: 'JP',		postalCodeType: 1,		pattern: /^[0-9]{3}-[0-9]{4}$/, placeholder: '000-0000'}, // Verified
	{	countryCode: 'JO',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'KZ',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'KE',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'KI',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'KR',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified. Old 6-digit dash optional code not valid.
	{	countryCode: 'KW',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'KG',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'LA',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'LV',		postalCodeType: 1,		pattern: /^LV-?[0-9]{4}$/, placeholder: 'LV-0000'}, // Verified
	{	countryCode: 'LB',		postalCodeType: 1,		pattern: /^[0-9]{4}\s?([0-9]{4})?$/, placeholder: '0000 0000'}, // Verified
	{	countryCode: 'LS',		postalCodeType: 1,		pattern: /^[0-9]{3}$/, placeholder: '000'}, // Verified
	{	countryCode: 'LR',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'LY',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'LI',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'LT',		postalCodeType: 1,		pattern: /^(LT-?)?[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'LU',		postalCodeType: 1,		pattern: /^(L-?)?[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'MO',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'MG',		postalCodeType: 1,		pattern: /^[0-9]{3}$/, placeholder: '000'}, // Verified
	{	countryCode: 'MW',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'MY',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'MV',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'ML',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'MT',		postalCodeType: 1,		pattern: /^[A-Z]{3}\s?[0-9]{4}$/, placeholder: 'XXX 0000'}, // Verified
	{	countryCode: 'MR',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'MU',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'MX',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'MD',		postalCodeType: 1,		pattern: /^(MD-?)?[0-9]{4}$/, placeholder: 'MD-0000'}, // Verified
	{	countryCode: 'MC',		postalCodeType: 1,		pattern: /^980[0-9]{2}$/, placeholder: '980__'}, // Verified
	{	countryCode: 'MN',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'ME',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'MS',		postalCodeType: 1,		pattern: /^MSR[0-9]{4}$/, placeholder: 'MSR0000'}, // Verified
	{	countryCode: 'MA',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'MZ',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'},  // Verified
	{	countryCode: 'MM',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'NA',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'NR',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'NP',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'NL',		postalCodeType: 1,		pattern: /^[0-9]{4}\s?[A-Z]{2}$/, placeholder: '0000XX'},  // Verified
	{	countryCode: 'NZ',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'NI',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'NE',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'NG',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'NU',		postalCodeType: 0,		pattern: 0},  // Verified C
	{	countryCode: 'MK',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'NO',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'OM',		postalCodeType: 1,		pattern: /^[0-9]{3}$/, placeholder: '000'}, // Verified
	{	countryCode: 'PK',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'PS',		postalCodeType: 1,		pattern: /^[0-9]{3}$/, placeholder: '000'}, // Verified
	{	countryCode: 'PA',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'PG',		postalCodeType: 1,		pattern: /^[0-9]{3}$/, placeholder: '000'}, // Verified
	{	countryCode: 'PY',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'PE',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'PH',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'PL',		postalCodeType: 1,		pattern: /^[0-9]{2}-?[0-9]{3}$/, placeholder: '00-000'}, // Verified
	{	countryCode: 'PT',		postalCodeType: 1,		pattern: /^[0-9]{4}-?[0-9]{3}$/, placeholder: '0000-000'}, // Verified
	{	countryCode: 'QA',		postalCodeType: 0,		pattern: 0},  // Verified. PO Boxes are addresses. They should all be on the first line. C
	{	countryCode: 'RO',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'RU',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'RW',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'SH',		postalCodeType: 1,		pattern: /^((STHL)|(ASCN)|(TDCU)) 1ZZ$/, placeholder: 'STHL/ASCN/TDCU 1ZZ'}, // Verified
	{	countryCode: 'KN',		postalCodeType: 1,		pattern: /^KN[0-9]{4}$/, placeholder: 'KN0000'}, // Verified
	{	countryCode: 'LC',		postalCodeType: 1,		pattern: /^LC[0-9]{2} [0-9]{3}$/, placeholder: 'LC00 000'}, // Verified
	{	countryCode: 'VC',		postalCodeType: 1,		pattern: /^VC[0-9]{4}$/, placeholder: 'VC0000'}, // Verified
	{	countryCode: 'WS',		postalCodeType: 1,		pattern: /^WS[0-9]{4}$/, placeholder: 'WS0000'}, // Verified
	{	countryCode: 'SM',		postalCodeType: 1,		pattern: /^4789[0-9]$/, placeholder: '4789_'}, // Verified
	{	countryCode: 'ST',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'SA',		postalCodeType: 1,		pattern: /^[0-9]{5}(-[0-9]{4})?$/, placeholder: '00000 or 00000-0000'}, // Verified
	{	countryCode: 'SN',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, //Verified
	{	countryCode: 'RS',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, //Verified
	{	countryCode: 'SC',		postalCodeType: 0,		pattern: 0}, //Verified C
	{	countryCode: 'SL',		postalCodeType: 0,		pattern: 0}, //Verified C
	{	countryCode: 'SG',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'SX',		postalCodeType: 0,		pattern: 0}, //Verified C
	{	countryCode: 'SK',		postalCodeType: 1,		pattern: /^[0-9]{3}\s[0-9]{2}$/, placeholder: '00000'}, //Verified
	{	countryCode: 'SI',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, //Verified
	{	countryCode: 'SB',		postalCodeType: 0,		pattern: 0}, //Verified C
	{	countryCode: 'SO',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, //Verified
	{	countryCode: 'ZA',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, //Verified
	{	countryCode: 'GS',		postalCodeType: 3,		pattern: 'SIQQ 1ZZ'},  //Verified C
	{	countryCode: 'SS',		postalCodeType: 0,		pattern: 0}, //Verified C
	{	countryCode: 'ES',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, //Verified
	{	countryCode: 'LK',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, //Verified
	{	countryCode: 'SD',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, //Verified
	{	countryCode: 'SR',		postalCodeType: 0,		pattern: 0}, //Verified C
	{	countryCode: 'SE',		postalCodeType: 1,		pattern: /^[0-9]{3}\s[0-9]{2}$/, placeholder: '000 00'}, // Verified. Space is required for DHL API
	{	countryCode: 'CH',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, //Verified
	{	countryCode: 'SY',		postalCodeType: 0,		pattern: 0}, //Verified C
	{	countryCode: 'TW',		postalCodeType: 1,		pattern: /^[0-9]{3}(-?[0-9]{2})$/, placeholder: '000 or 00000'}, // Verified
	{	countryCode: 'TJ',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, //Verified
	{	countryCode: 'TZ',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, //Verified
	{	countryCode: 'TH',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, //Verified
	{	countryCode: 'TL',		postalCodeType: 0,		pattern: 0}, //Verified C
	{	countryCode: 'TG',		postalCodeType: 1,		pattern: /^[0-9]{2}$/, placeholder: '00'}, //Verified
	{	countryCode: 'TK',		postalCodeType: 0,		pattern: 0}, //Verified C
	{	countryCode: 'TO',		postalCodeType: 0,		pattern: 0}, //Verified C
	{	countryCode: 'TT',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'TN',		postalCodeType: 1,		pattern: /^[0-9]{4}$/, placeholder: '0000'}, // Verified
	{	countryCode: 'TR',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'TM',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'TC',		postalCodeType: 3,		pattern: 'TKCA 1ZZ'}, // Verified C
	{	countryCode: 'TV',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'UG',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'UA',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'AE',		postalCodeType: 0,		pattern: 0}, // Verified. PO Boxes are addresses. They should all be on the first line. C
	{	countryCode: 'GB',		postalCodeType: 1,		pattern: /^[A-Z]{1,2}[0-9][0-9A-Z]?\s[0-9][A-Z]{2}$/, placeholder: 'XX00 0XX (space required)'}, // Verified. Space is required for DHL API
	{	countryCode: 'US',		postalCodeType: 1,		pattern: /^[0-9]{5}(-[0-9]{4})?$/, placeholder: '00000 or 00000-0000'}, // Verified
	{	countryCode: 'UM',		postalCodeType: 3,		pattern: '96898'}, // Verified C
	{	countryCode: 'UY',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'UZ',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'VU',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'VA',		postalCodeType: 3,		pattern: '00120'}, // Verified C
	{	countryCode: 'VE',		postalCodeType: 1,		pattern: /^[0-9]{4}(-?[A-Z])?$/, placeholder: '0000'}, // Verified
	{	countryCode: 'VN',		postalCodeType: 1,		pattern: /^[0-9]{6}$/, placeholder: '000000'}, // Verified
	{	countryCode: 'YE',		postalCodeType: 0,		pattern: 0}, // Verified C
	{	countryCode: 'ZM',		postalCodeType: 1,		pattern: /^[0-9]{5}$/, placeholder: '00000'}, // Verified
	{	countryCode: 'ZW',		postalCodeType: 0,		pattern: 0} // Verified C
]