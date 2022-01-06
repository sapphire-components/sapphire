series: [
	{
		type: 'columnrange',
		pointWidth: 3,
		data: [
			{
				low: 92,
				high: 176,
				color: '#EC62CE',
				x: new Date('2021-08-23T18:00:00.000Z').getTime(),
			},
			{
				low: 99,
				high: 143,
				color: '#EC62CE',
				x: new Date('2021-08-24T02:00:00.000Z').getTime(),
			},
			{
				low: 78,
				high: 98,
				color: '#EC62CE',
				x: new Date('2021-08-24T10:30:00.000Z').getTime(),
			},
			{
				low: 15,
				high: 45,
				color: '#EC62CE',
				x: new Date('2021-08-24T18:00:00.000Z').getTime(),
			},
		],
	},
	{
		data: [
			{ x: new Date('2021-08-23T18:00:00.000Z').getTime(), y: 176 },
			{ x: new Date('2021-08-24T02:00:00.000Z').getTime(), y: 143 },
			{ x: new Date('2021-08-24T10:30:00.000Z').getTime(), y: 98 },
			{ x: new Date('2021-08-24T18:00:00.000Z').getTime(), y: 45 },
		],
		zoneAxis: 'x',
		zones: [{ color: 'transparent' }],
		marker: {
			fillColor: '#EC62CE',
			lineWidth: 2,
			lineColor: '#EC62CE',
		},
	},
	{
		data: [
			{ x: new Date('2021-08-23T18:00:00.000Z').getTime(), y: 92 },
			{ x: new Date('2021-08-24T02:00:00.000Z').getTime(), y: 99 },
			{ x: new Date('2021-08-24T10:30:00.000Z').getTime(), y: 78 },
			{ x: new Date('2021-08-24T18:00:00.000Z').getTime(), y: 15 },
		],
		zoneAxis: 'x',
		zones: [{ color: 'transparent' }],
		marker: {
			fillColor: '#980263',
			lineWidth: 2,
			lineColor: '#980263',
		},
	},
];
