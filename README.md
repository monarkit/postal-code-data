# postal-code-data

Barebones JS dataset of country postal code types, regular expressions and placeholders for use in address form postal code validation for shipping with major shipping companies. Includes a few utility functions for common usage with inputs.

Country list source: [postal-country-region-data](https://github.com/tobias7an/postal-country-region-data). These two repos are used together and countries should not be added/removed from one without the same on the other.

Data is cross-referenced between the [Universal Postal Union Postal Addressing Systems Database](http://www.upu.int/en/activities/addressing/postal-addressing-systems-in-member-countries.html), postal service websites, shipping company APIs, and propietary commercial shipping address databases. 

This dataset may not be 100% accurate, complete or up to date, but aims to be sufficiently complete for production use and preferable to available alternatives.

This dataset is targeted at supporting shipping API connections with DHL Express, UPS, FedEx, USPS and CanadaPost.

### Usage
`const {data} = require('postal-code-data')`
or
`import {data} from 'postal-code-data'`

### Types
- 0 - No postal code.
- 1 - Postal code required, follows pattern.
- 2 - Postal code optional.
- 3 - Postal code is fixed to specifically defined string.

### Changelog
- `1.0.0` - Jul 21, 2020. Initial compilation & commit.
- `1.0.4` - Jul 27, 2020. Bugfixes in validation.
- `1.0.6` - Aug 10, 2020. GB postal code now requires space for shipping carrier API.
- `1.0.7` - Aug 11, 2020. Japan postal code now requires dash for shipping carrier API. GB dependency postal codes now require space.
- `1.0.8` - Sep 02, 2020. Slovakia postal code now requires space for DHL API.
- `1.0.9` - Sep 09, 2020. Swedish postal code now requires space for DHL API.
- `1.0.10` - Sep 24, 2020. CZ postal code now requires space for DHL API.
- `1.0.15` - Aug 18, 2022. Vietnam postal code now requires 6 digits instead of 5.
- `1.0.16` - Sep 14, 2022. GE postal code now requires 5 digits instead of 4. 
- `1.0.17` - Sep 14, 2022. Updated GE postal code to 4 digits as previous update was a mistake due to incorrect intel. 
- `1.0.18` - Nov 1, 2022. Updated KH postal code to 6 digits. 

### License
MIT.
