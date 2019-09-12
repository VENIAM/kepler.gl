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

/**
 *
 * Great tool to create color palette
 * http://www.perbang.dk/rgbgradient/
 */

export const SEQ = 'sequential';
export const QUA = 'qualitative';
export const DIV = 'diverging';

export const DataVizColors = {
  veniam: '#4194C9'
};

const quaColors = Object.values(DataVizColors);

const qualitativeColors = [
  {
    name: 'Uber Viz Qualitative 0',
    type: QUA,
    category: 'Uber',
    colors: quaColors.slice(0, 3)
  },
  {
    name: 'Uber Viz Qualitative 0.5',
    type: QUA,
    category: 'Uber',
    colors: quaColors.slice(0, 4)
  },
  {
    name: 'Uber Viz Qualitative 1',
    type: QUA,
    category: 'Uber',
    colors: quaColors.slice(0, 5)
  },
  {
    name: 'Uber Viz Qualitative 1.2',
    type: QUA,
    category: 'Uber',
    colors: quaColors.slice(0, 6)
  },
  {
    name: 'Uber Viz Qualitative 1.4',
    type: QUA,
    category: 'Uber',
    colors: quaColors.slice(0, 7)
  },
  {
    name: 'Uber Viz Qualitative 1.6',
    type: QUA,
    category: 'Uber',
    colors: quaColors.slice(0, 8)
  },
  {
    name: 'Uber Viz Qualitative 1.8',
    type: QUA,
    category: 'Uber',
    colors: quaColors.slice(0, 9)
  },
  {
    name: 'Uber Viz Qualitative 2',
    type: QUA,
    category: 'Uber',
    colors: quaColors.slice(0, 10)
  },
  {
    name: 'Uber Viz Qualitative 3',
    type: QUA,
    category: 'Uber',
    colors: quaColors.slice(0, 15)
  },
  {
    name: 'Uber Viz Qualitative 4',
    type: QUA,
    category: 'Uber',
    colors: quaColors.slice(0, 20)
  }
];

const sequantialColors = [
  {
    name: 'Uber Viz Sequential 1',
    type: SEQ,
    category: 'Uber',
    colors: ['#E6FAFA', '#89C6CA', '#00939C']
  },
  {
    name: 'Uber Viz Sequential 2',
    type: SEQ,
    category: 'Uber',
    colors: ['#E6FAFA', '#AAD7DA', '#68B4BB', '#00939C']
  },
  {
    name: 'Uber Viz Sequential 3',
    type: SEQ,
    category: 'Uber',
    colors: ['#E6FAFA', '#B8E0E1', '#89C6CA', '#56ACB3', '#00939C']
  },
  {
    name: 'Uber Viz Sequential 4',
    type: SEQ,
    category: 'Uber',
    colors: ['#E6FAFA', '#C1E5E6', '#9DD0D4', '#75BBC1', '#4BA7AF', '#00939C']
  },
  {
    name: 'Uber Viz Sequential 5',
    type: SEQ,
    category: 'Uber',
    colors: [
      '#E6FAFA',
      '#C1E5E6',
      '#9DD0D4',
      '#75BBC1',
      '#4BA7AF',
      '#00939C',
      '#108188'
    ]
  },
  {
    name: 'Uber Viz Sequential 6',
    type: SEQ,
    category: 'Uber',
    colors: [
      '#E6FAFA',
      '#C1E5E6',
      '#9DD0D4',
      '#75BBC1',
      '#4BA7AF',
      '#00939C',
      '#108188',
      '#0E7077'
    ]
  }
];

const divergingColors = [
  {
    name: 'Uber Viz Diverging 0',
    type: DIV,
    category: 'Uber',
    colors: ['#C22E00', '#FEEEE8', '#00939C'].reverse()
  },
  {
    name: 'Uber Viz Diverging 0.5',
    type: DIV,
    category: 'Uber',
    colors: ['#C22E00', '#EFBEAE', '#A2D4D7', '#00939C'].reverse()
  },
  {
    name: 'Uber Viz Diverging 1',
    type: DIV,
    category: 'Uber',
    colors: ['#C22E00', '#EC9370', '#FEEEE8', '#85C4C8', '#00939C'].reverse()
  },
  {
    name: 'Uber Viz Diverging 1.5',
    type: DIV,
    category: 'Uber',
    colors: [
      '#C22E00',
      '#DD7755',
      '#F8C0AA',
      '#BAE1E2',
      '#5DBABF',
      '#00939C'
    ].reverse()
  },
  {
    name: 'Uber Viz Diverging 2',
    type: DIV,
    category: 'Uber',
    colors: [
      '#C22E00',
      '#E17449',
      '#F5B097',
      '#FEEEE8',
      '#A2D4D7',
      '#65B3BA',
      '#00939C'
    ].reverse()
  },
  {
    name: 'Uber Viz Diverging 2.5',
    type: DIV,
    category: 'Uber',
    colors: [
      '#C22E00',
      '#D45F39',
      '#E68F71',
      '#F8C0AA',
      '#BAE1E2',
      '#7CC7CB',
      '#3EADB3',
      '#00939C'
    ].reverse()
  },
  {
    name: 'Uber Viz Diverging 3',
    type: DIV,
    category: 'Uber',
    colors: [
      '#C22E00',
      '#DA6436',
      '#EC9370',
      '#F8C0AA',
      '#FEEEE8',
      '#B2DCDF',
      '#65B3BA',
      '#49A6AE',
      '#00939C'
    ].reverse()
  },
  {
    name: 'Uber Viz Diverging 3.5',
    type: DIV,
    category: 'Uber',
    colors: [
      '#C22E00',
      '#D0532B',
      '#DD7755',
      '#EB9C80',
      '#F8C0AA',
      '#BAE1E2',
      '#8CCED1',
      '#5DBABF',
      '#2FA7AE',
      '#00939C'
    ].reverse()
  },
  {
    name: 'Uber Viz Diverging 4',
    type: DIV,
    category: 'Uber',
    colors: [
      '#C22E00',
      '#D55A2B',
      '#E68059',
      '#F2A587',
      '#F8C0AA',
      '#FEEEE8',
      '#BAE1E2',
      '#97CED1',
      '#71BABF',
      '#49A6AE',
      '#00939C'
    ].reverse()
  }
];

const customPalette = [
	{
		name: 'Veniam Blue',
		type: DIV,
		category: 'Veniam',
		colors: [
			'#D9E9F4',
			'#B3D4E9',
			'#76B2D8',
			'#4194C9',
			'#3079A7',
			'#215476',
			'#1A3B50'
		]
	},
	{
		name: 'Dark Orange',
		type: DIV,
		category: 'Veniam',
		colors: [
			'#FFE8CC',
			'#FFD199',
			'#FFAC47',
			'#FF8C00',
			'#CC7000',
			'#8F4E00',
			'#663800'
		]
	},
	{
		name: 'Sheen Green',
		type: DIV,
		category: 'Veniam',
		colors: [
			'#E8F5D0',
			'#D1EBA2',
			'#B1EB47',
			'#8ECF17',
			'#6FA112',
			'#4C6E0C',
			'#385209'
		]
	},
	{
		name: 'Mikado Yellow',
		type: DIV,
		category: 'Veniam',
		colors: [
			'#FFF4CE',
			'#FFE99D',
			'#FFD74F',
			'#FFC80A',
			'#D6A600',
			'#977400',
			'#665004'
		]
	},
	{
		name: 'Iris',
		type: DIV,
		category: 'Veniam',
		colors: [
			'#D9DCF4',
			'#B3B9E9',
			'#7681D8',
			'#4150C9',
			'#303DA7',
			'#212B76',
			'#1A2050'
		]
	},
	{
		name: 'Orange Pantone',
		type: DIV,
		category: 'Veniam',
		colors: [
			'#FFDDCE',
			'#FFBB9D',
			'#FF864F',
			'#FF570A',
			'#D64300',
			'#972F00',
			'#662204'
		]
	},
	{
		name: 'Keppel',
		type: DIV,
		category: 'Veniam',
		colors: [
			'#D6EFEC',
			'#AEE0DA',
			'#62D0C3',
			'#35B2A3',
			'#298B7F',
			'#1C5F57',
			'#154741'
		]
	},
	{
		name: 'Hollywood Cerise',
		type: DIV,
		category: 'Veniam',
		colors: [
			'#FACDEA',
			'#F69BD6',
			'#FB3EB8',
			'#EA0599',
			'#B80478',
			'#7F0253',
			'#5D023D'
		]
	},
	{
		name: 'Violet',
		type: DIV,
		category: 'Veniam',
		colors: [
			'#E8CCFF',
			'#D199FF',
			'#AC47FF',
			'#8C00FF',
			'#7000CC',
			'#4E008F',
			'#380066'
		]
	}
];

export const VizColorPalette = [
  ...customPalette
];
