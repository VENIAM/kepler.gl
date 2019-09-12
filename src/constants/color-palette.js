// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* eslintdisable quoteprops */
const COLORS = {
	vBlue_1: '#D9E9F4',
	vBlue_2: '#B3D4E9',
	vBlue_3: '#76B2D8',
	vBlue_4: '#4194C9',
	vBlue_5: '#3079A7',
	vBlue_6: '#215476',
	vBlue_7: '#1A3B50',
	dorange_1: '#FFE8CC',
	dorange_2: '#FFD199',
	dorange_3: '#FFAC47',
	dorange_4: '#FF8C00',
	dorange_5: '#CC7000',
	dorange_6: '#8F4E00',
	dorange_7: '#663800',
	// SHEEN GREEN
	sgreen_1: '#E8F5D0',
	sgreen_2: '#D1EBA2',
	sgreen_3: '#B1EB47',
	sgreen_4: '#8ECF17',
	sgreen_5: '#6FA112',
	sgreen_6: '#4C6E0C',
	sgreen_7: '#385209',
	// MIKADO YELLOW
	myellow_1: '#FFF4CE',
	myellow_2: '#FFE99D',
	myellow_3: '#FFD74F',
	myellow_4: '#FFC80A',
	myellow_5: '#D6A600',
	myellow_6: '#977400',
	myellow_7: '#665004',
	// IRIS
	iris_1: '#D9DCF4',
	iris_2: '#B3B9E9',
	iris_3: '#7681D8',
	iris_4: '#4150C9',
	iris_5: '#303DA7',
	iris_6: '#212B76',
	iris_7: '#1A2050',
	// ORANGE PANTONE
	orangep_1: '#FFDDCE',
	orangep_2: '#FFBB9D',
	orangep_3: '#FF864F',
	orangep_4: '#FF570A',
	orangep_5: '#D64300',
	orangep_6: '#972F00',
	orangep_7: '#662204',
	// KEPPEL
	keppel_1: '#D6EFEC',
	keppel_2: '#AEE0DA',
	keppel_3: '#62D0C3',
	keppel_4: '#35B2A3',
	keppel_5: '#298B7F',
	keppel_6: '#1C5F57',
	keppel_7: '#154741',
	// HOLLYWOOD CERISE
	hcerise_1: '#FACDEA',
	hcerise_2: '#F69BD6',
	hcerise_3: '#FB3EB8',
	hcerise_4: '#EA0599',
	hcerise_5: '#B80478',
	hcerise_6: '#7F0253',
	hcerise_7: '#5D023D',
	// VIOLET
	violet_1: '#E8CCFF',
	violet_2: '#D199FF',
	violet_3: '#AC47FF',
	violet_4: '#8C00FF',
	violet_5: '#7000CC',
	violet_6: '#4E008F',
	violet_7: '#380066'
};
/* eslint-enable quote-props */

export default COLORS;

export const ColorsByTheme = Object.keys(COLORS).reduce((accu, key) => {
  if (!key.includes('_')) {
    return accu;
  }
  const [theme, idx] = key.split('_');

  return {
    ...accu,
    [theme]: {
      ...accu[theme],
      [idx]: COLORS[key]
    }
  };
}, {});

// theme name in order wheel order
export const Themes = [
	'vBlue',
	'dorange',
	'sgreen',
	'myellow',
	'iris',
	'orangep',
	'keppel',
	'hcerise',
	'violet'
];
