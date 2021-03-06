var lifeExpectancies = {
	male: {
    "Afghanistan": 62.412, 
    "Albania": 76.389, 
    "Algeria": 74.873, 
    "Angola": 58.717, 
    "Antigua and Barbuda": 73.838, 
    "Argentina": 72.777, 
    "Armenia": 71.265, 
    "Aruba": 73.348, 
    "Australia": 80.5, 
    "Austria": 78.5, 
    "Azerbaijan": 69.002, 
    "Bahamas, The": 72.58, 
    "Bahrain": 76.061, 
    "Bangladesh": 70.891, 
    "Barbados": 73.448, 
    "Belarus": 68.9, 
    "Belgium": 78.7, 
    "Belize": 67.736, 
    "Benin": 59.382, 
    "Bermuda": 77.51, 
    "Bhutan": 69.933, 
    "Bolivia": 66.672, 
    "Bosnia and Herzegovina": 74.361, 
    "Botswana": 64.001, 
    "Brazil": 71.883, 
    "Brunei Darussalam": 75.612, 
    "Bulgaria": 71.2, 
    "Burkina Faso": 59.598, 
    "Burundi": 55.517, 
    "Cabo Verde": 70.676, 
    "Cambodia": 66.809, 
    "Cameroon": 56.922, 
    "Canada": 80.441, 
    "Central African Republic": 50.323, 
    "Chad": 51.685, 
    "Channel Islands": 79.332, 
    "Chile": 76.941, 
    "China": 74.795, 
    "Colombia": 70.851, 
    "Comoros": 62.018, 
    "Congo, Dem. Rep.": 58.141, 
    "Congo, Rep.": 63.016, 
    "Costa Rica": 77.451, 
    "Cote d'Ivoire": 52.144, 
    "Croatia": 74.9, 
    "Cuba": 77.748, 
    "Curacao": 74.8, 
    "Cyprus": 78.345, 
    "Czech Republic": 75.6, 
    "Denmark": 78.9, 
    "Djibouti": 60.831, 
    "Dominican Republic": 70.815, 
    "Ecuador": 73.636, 
    "Egypt, Arab Rep.": 69.301, 
    "El Salvador": 68.801, 
    "Equatorial Guinea": 56.409, 
    "Eritrea": 62.974, 
    "Estonia": 73.2, 
    "Eswatini": 54.354, 
    "Ethiopia": 63.617, 
    "Faroe Islands": 79.9, 
    "Fiji": 67.407, 
    "Finland": 79, 
    "France": 79.2, 
    "French Polynesia": 74.662, 
    "Gabon": 64.535, 
    "Gambia, The": 59.872, 
    "Georgia": 68.984, 
    "Germany": 78.3, 
    "Ghana": 61.708, 
    "Greece": 78.5, 
    "Grenada": 71.239, 
    "Guam": 77.181, 
    "Guatemala": 70.177, 
    "Guinea": 59.489, 
    "Guinea-Bissau": 55.657, 
    "Guyana": 64.393, 
    "Haiti": 61.162, 
    "Honduras": 71.035, 
    "Hong Kong SAR, China": 81.3, 
    "Hungary": 72.3, 
    "Iceland": 81.2, 
    "India": 67.094, 
    "Indonesia": 67.15, 
    "Iran, Islamic Rep.": 74.882, 
    "Iraq": 67.648, 
    "Ireland": 79.9, 
    "Israel": 80.7, 
    "Italy": 80.3, 
    "Jamaica": 73.611, 
    "Japan": 80.98, 
    "Jordan": 72.66, 
    "Kazakhstan": 68.1, 
    "Kenya": 64.638, 
    "Kiribati": 63.017, 
    "Korea, Dem. People’s Rep.": 68.055, 
    "Korea, Rep.": 79, 
    "Kosovo": 69.5, 
    "Kuwait": 73.799, 
    "Kyrgyz Republic": 67, 
    "Lao PDR": 65.131, 
    "Latvia": 69.7, 
    "Lebanon": 77.978, 
    "Lesotho": 51.74, 
    "Liberia": 61.524, 
    "Libya": 69.165, 
    "Liechtenstein": 80.9, 
    "Lithuania": 69.2, 
    "Luxembourg": 80, 
    "Macao SAR, China": 80.866, 
    "Macedonia, FYR": 73.706, 
    "Madagascar": 64.371, 
    "Malawi": 60.575, 
    "Malaysia": 73.161, 
    "Maldives": 76.405, 
    "Mali": 57.249, 
    "Malta": 79.7, 
    "Mauritania": 61.737, 
    "Mauritius": 71.19, 
    "Mexico": 74.715, 
    "Micronesia, Fed. Sts.": 68.023, 
    "Moldova": 67.334, 
    "Mongolia": 65.277, 
    "Montenegro": 74.723, 
    "Morocco": 74.642, 
    "Mozambique": 56.12, 
    "Myanmar": 64.242, 
    "Namibia": 61.381, 
    "Nepal": 68.66, 
    "Netherlands": 79.9, 
    "New Caledonia": 74.22461206753, 
    "New Zealand": 79.91, 
    "Nicaragua": 72.343, 
    "Niger": 59.088, 
    "Nigeria": 52.66, 
    "Norway": 80.9, 
    "Oman": 75.314, 
    "Pakistan": 65.514, 
    "Panama": 75.071, 
    "Papua New Guinea": 63.139, 
    "Paraguay": 71.02, 
    "Peru": 72.366, 
    "Philippines": 65.812, 
    "Poland": 73.5, 
    "Portugal": 78.2, 
    "Puerto Rico": 76.041, 
    "Qatar": 77.411, 
    "Romania": 71.5, 
    "Russian Federation": 66.51, 
    "Rwanda": 64.966, 
    "Samoa": 72.029, 
    "Sao Tome and Principe": 64.458, 
    "Saudi Arabia": 73.271, 
    "Senegal": 65.078, 
    "Serbia": 72.8, 
    "Seychelles": 68.7, 
    "Sierra Leone": 51.258, 
    "Singapore": 80.6, 
    "Slovak Republic": 73.1, 
    "Slovenia": 77.8, 
    "Solomon Islands": 69.289, 
    "Somalia": 54.669, 
    "South Africa": 59.231, 
    "South Sudan": 55.796, 
    "Spain": 80.1, 
    "Sri Lanka": 71.906, 
    "St. Lucia": 72.84, 
    "St. Martin (French part)": 76.5, 
    "St. Vincent and the Grenadines": 71.061, 
    "Sudan": 62.912, 
    "Suriname": 68.261, 
    "Sweden": 80.4, 
    "Switzerland": 80.8, 
    "Syrian Arab Republic": 64.512, 
    "Tajikistan": 68.296, 
    "Tanzania": 63.856, 
    "Thailand": 71.581, 
    "Timor-Leste": 67.113, 
    "Togo": 59.41, 
    "Tonga": 70.021, 
    "Trinidad and Tobago": 67.264, 
    "Tunisia": 73.718, 
    "Turkey": 72.498, 
    "Turkmenistan": 64.401, 
    "Uganda": 57.658, 
    "Ukraine": 66.73, 
    "United Arab Emirates": 76.565, 
    "United Kingdom": 79.2, 
    "United States": 76.3, 
    "Uruguay": 73.854, 
    "Uzbekistan": 68.572, 
    "Vanuatu": 70.043, 
    "Venezuela, RB": 70.561, 
    "Vietnam": 71.532, 
    "Virgin Islands (U.S.)": 76, 
    "West Bank and Gaza": 71.603, 
    "Yemen, Rep.": 63.521, 
    "Zambia": 59.281, 
    "Zimbabwe": 59.274
	},
	female: {
    "Afghanistan": 65.024, 
    "Albania": 80.451, 
    "Algeria": 77.333, 
    "Angola": 64.411, 
    "Antigua and Barbuda": 78.738, 
    "Argentina": 80.31, 
    "Armenia": 77.64, 
    "Aruba": 78.236, 
    "Australia": 84.6, 
    "Austria": 83.4, 
    "Azerbaijan": 75.046, 
    "Bahamas, The": 78.609, 
    "Bahrain": 77.995, 
    "Bangladesh": 74.294, 
    "Barbados": 78.251, 
    "Belarus": 79, 
    "Belgium": 83.4, 
    "Belize": 73.396, 
    "Benin": 62.398, 
    "Bermuda": 85.13, 
    "Bhutan": 70.459, 
    "Bolivia": 71.689, 
    "Bosnia and Herzegovina": 79.398, 
    "Botswana": 69.517, 
    "Brazil": 79.139, 
    "Brunei Darussalam": 78.909, 
    "Bulgaria": 78.2, 
    "Burkina Faso": 60.992, 
    "Burundi": 59.492, 
    "Cabo Verde": 74.687, 
    "Cambodia": 70.949, 
    "Cameroon": 59.232, 
    "Canada": 84.253, 
    "Central African Republic": 54.042, 
    "Chad": 54.138, 
    "Channel Islands": 82.822, 
    "Chile": 81.913, 
    "China": 77.833, 
    "Colombia": 77.996, 
    "Comoros": 65.444, 
    "Congo, Dem. Rep.": 61.112, 
    "Congo, Rep.": 66.271, 
    "Costa Rica": 82.277, 
    "Cote d'Ivoire": 55.141, 
    "Croatia": 81.3, 
    "Cuba": 81.782, 
    "Curacao": 81.1, 
    "Cyprus": 82.669, 
    "Czech Republic": 81.2, 
    "Denmark": 82.6, 
    "Djibouti": 64.162, 
    "Dominican Republic": 77.117, 
    "Ecuador": 79.109, 
    "Egypt, Arab Rep.": 73.763, 
    "El Salvador": 77.907, 
    "Equatorial Guinea": 59.161, 
    "Eritrea": 67.286, 
    "Estonia": 82.5, 
    "Eswatini": 60.908, 
    "Ethiopia": 67.366, 
    "Faroe Islands": 84.7, 
    "Fiji": 73.485, 
    "Finland": 84.7, 
    "France": 85.5, 
    "French Polynesia": 79.199, 
    "Gabon": 67.765, 
    "Gambia, The": 62.581, 
    "Georgia": 77.482, 
    "Germany": 83.1, 
    "Ghana": 63.743, 
    "Greece": 83.7, 
    "Grenada": 76.142, 
    "Guam": 82.072, 
    "Guatemala": 76.582, 
    "Guinea": 60.526, 
    "Guinea-Bissau": 59.134, 
    "Guyana": 69.035, 
    "Haiti": 65.515, 
    "Honduras": 76.133, 
    "Hong Kong SAR, China": 87.3, 
    "Hungary": 79, 
    "Iceland": 83.8, 
    "India": 70.166, 
    "Indonesia": 71.364, 
    "Iran, Islamic Rep.": 77.107, 
    "Iraq": 72.104, 
    "Ireland": 83.4, 
    "Israel": 84.2, 
    "Italy": 84.9, 
    "Jamaica": 78.389, 
    "Japan": 87.14, 
    "Jordan": 76.095, 
    "Kazakhstan": 76.6, 
    "Kenya": 69.44, 
    "Kiribati": 69.627, 
    "Korea, Dem. People’s Rep.": 75.071, 
    "Korea, Rep.": 85.2, 
    "Kosovo": 73.9, 
    "Kuwait": 75.993, 
    "Kyrgyz Republic": 75.1, 
    "Lao PDR": 68.208, 
    "Latvia": 79.6, 
    "Lebanon": 81.444, 
    "Lesotho": 56.37, 
    "Liberia": 63.481, 
    "Libya": 74.941, 
    "Liechtenstein": 84.5, 
    "Lithuania": 79.7, 
    "Luxembourg": 84.7, 
    "Macao SAR, China": 86.776, 
    "Macedonia, FYR": 77.751, 
    "Madagascar": 67.506, 
    "Malawi": 65.761, 
    "Malaysia": 77.7, 
    "Maldives": 78.484, 
    "Mali": 58.674, 
    "Malta": 84, 
    "Mauritania": 64.745, 
    "Mauritius": 77.76, 
    "Mexico": 79.538, 
    "Micronesia, Fed. Sts.": 70.363, 
    "Moldova": 75.895, 
    "Mongolia": 73.546, 
    "Montenegro": 79.48, 
    "Morocco": 76.956, 
    "Mozambique": 60.395, 
    "Myanmar": 68.94, 
    "Namibia": 67.241, 
    "Nepal": 71.877, 
    "Netherlands": 83.2, 
    "New Caledonia": 79.8352338401928, 
    "New Zealand": 83.4, 
    "Nicaragua": 78.391, 
    "Niger": 61.111, 
    "Nigeria": 54.222, 
    "Norway": 84.2, 
    "Oman": 79.489, 
    "Pakistan": 67.52, 
    "Panama": 81.092, 
    "Papua New Guinea": 68.076, 
    "Paraguay": 75.368, 
    "Peru": 77.659, 
    "Philippines": 72.658, 
    "Poland": 81.6, 
    "Portugal": 84.2, 
    "Puerto Rico": 83.723, 
    "Qatar": 79.885, 
    "Romania": 78.7, 
    "Russian Federation": 76.93, 
    "Rwanda": 69.248, 
    "Samoa": 78.27, 
    "Sao Tome and Principe": 68.749, 
    "Saudi Arabia": 76.3, 
    "Senegal": 69.059, 
    "Serbia": 77.8, 
    "Seychelles": 80.2, 
    "Sierra Leone": 52.417, 
    "Singapore": 85.1, 
    "Slovak Republic": 80.2, 
    "Slovenia": 83.9, 
    "Solomon Islands": 72.322, 
    "Somalia": 57.991, 
    "South Africa": 66.376, 
    "South Sudan": 57.839, 
    "Spain": 85.7, 
    "Sri Lanka": 78.614, 
    "St. Lucia": 78.239, 
    "St. Martin (French part)": 82.9, 
    "St. Vincent and the Grenadines": 75.414, 
    "Sudan": 66.079, 
    "Suriname": 74.718, 
    "Sweden": 84.1, 
    "Switzerland": 85.1, 
    "Syrian Arab Republic": 77.084, 
    "Tajikistan": 74.187, 
    "Tanzania": 67.483, 
    "Thailand": 79.133, 
    "Timor-Leste": 70.763, 
    "Togo": 61.042, 
    "Tonga": 76.088, 
    "Trinidad and Tobago": 74.319, 
    "Tunisia": 77.777, 
    "Turkey": 78.982, 
    "Turkmenistan": 71.311, 
    "Uganda": 62.097, 
    "Ukraine": 76.46, 
    "United Arab Emirates": 78.767, 
    "United Kingdom": 82.8, 
    "United States": 81.2, 
    "Uruguay": 80.882, 
    "Uzbekistan": 74.096, 
    "Vanuatu": 74.441, 
    "Venezuela, RB": 78.767, 
    "Vietnam": 80.875, 
    "Virgin Islands (U.S.)": 82.7, 
    "West Bank and Gaza": 75.442, 
    "Yemen, Rep.": 66.421, 
    "Zambia": 64.482, 
    "Zimbabwe": 62.898
	}
}

export default lifeExpectancies;

