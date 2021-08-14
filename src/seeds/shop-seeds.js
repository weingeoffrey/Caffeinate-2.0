const { Shop } = require('../models');

const shopData = [
	{
		name: 'Epoch - North Loop',
		address: '221 W N Loop Blvd, Austin, TX 78751',
		website: 'http://www.epochcoffee.com/',
		latitude: 30.318604,
		longitude: -97.72454,
	},
	{
		name: 'Epoch - the Village',
		address: '2700 W Anderson Ln #409, Austin, TX 78757',
		website: 'http://epochcoffee.com/',
		latitude: 30.359107,
		longitude: -97.734541,
	},
	{
		name: 'Epoch - Far West',
		address: '3900 Far West Blvd, Austin, TX 78731',
		website: 'http://epochcoffee.com/',
		latitude: 30.357313,
		longitude: -97.760621,
	},
	{
		name: 'Pacha Organic Cafe',
		address: '4618 Burnet Rd, Austin, TX 78756',
		website: 'http://pachacafe.com/',
		latitude: 30.317362,
		longitude: -97.74063,
	},
	{
		name: 'Summer Moon Coffee',
		address: '2301 W Anderson Ln #100, Austin, TX 78757',
		website: 'https://summermooncoffee.com/pages/anderson-lane-north-austin',
		latitude: 30.355512,
		longitude: -97.73019,
	},
	{
		name: 'Lazydaze Coffeeshop',
		address: '1738 W Anderson Ln, Austin, TX 78757',
		website: 'https://www.lazydazeshop.com/',
		latitude: 30.353472,
		longitude: -97.724432,
	},
	{
		name: "Mozart's Coffee Roasters",
		address: '3825 Lake Austin Blvd, Austin, TX 78703',
		website: 'http://mozartscoffee.com/',
		latitude: 30.29547,
		longitude: -97.783951,
	},
	{
		name: 'Cuvee Coffee Bar',
		address: '2000 E 6th St, Austin, TX 78702',
		website: 'http://cuveecoffee.com/',
		latitude: 30.261491,
		longitude: -97.721048,
	},
	{
		name: 'Revival Coffee',
		address: '1405 E 7th St, Austin, TX 78702',
		website: 'http://revivaltexas.com/',
		latitude: 30.264254,
		longitude: -97.727731,
	},
	{
		name: 'Cherrywood Coffeehouse',
		address: '1400 E 38th 1/2 St, Austin, TX 78722',
		website: 'http://www.cherrywoodcoffeehouse.com/',
		latitude: 30.293563,
		longitude: -97.716021,
	},
	{
		name: '85C Bakery Cafe - Austin Airport',
		address: '6929 Airport Blvd #197, Austin, TX 78752',
		website: 'http://85cbakerycafe.com/',
		latitude: 30.336612,
		longitude: -97.717673,
	},
	{
		name: 'Wright Bros. Brew and Brew',
		address: '500 San Marcos St #105, Austin, TX 78702',
		website: 'http://www.thebrewandbrew.com/',
		latitude: 30.264374,
		longitude: -97.733037,
	},
	{
		name: 'Merit Coffee',
		address: '222 West Ave #120, Austin, TX 78701',
		website: 'http://www.meritcoffee.com/',
		latitude: 30.267593,
		longitude: -97.752088,
	},
	{
		name: 'Houndstooth Coffee',
		address: '11501 Rock Rose Ave Ste 118, Austin, TX 78758',
		website: 'http://houndstoothcoffee.com/',
		latitude: 30.400647,
		longitude: -97.722773,
	},
	{
		name: 'Medici Roasting',
		address: '1101 W Lynn St, Austin, TX 78703',
		website: 'https://mediciroasting.com/pages/west-lynn',
		latitude: 30.27952,
		longitude: -97.759422,
	},
	{
		name: 'Coffee + Crisp',
		address: '3220 Amy Donovan Plaza #100, Austin, TX 78758',
		website: 'http://www.coffeeandcrisp.com/',
		latitude: 30.396675,
		longitude: -97.727373,
	},
	{
		name: "Barrett's Coffee",
		address: '713 W St Johns Ave, Austin, TX 78752',
		website: 'http://barrettscoffee.com/',
		latitude: 30.33897,
		longitude: -97.717421,
	},
	{
		name: 'Monkey Nest Coffee',
		address: '5353 Burnet Rd, Austin, TX 78756',
		website: 'https://monkeynestcoffee.com/',
		latitude: 30.327724,
		longitude: -97.739527,
	},
	{
		name: 'Fat Cats Organic Coffee & Desserts',
		address: '7020 Easy Wind Dr Suite 140, Austin, TX 78752',
		website: 'http://www.fatcatsaustin.com/',
		latitude: 30.338495,
		longitude: -97.718775,
	},
	{
		name: 'Cafe Java',
		address: '11900 Metric Blvd Suite K, Austin, TX 78758',
		website: 'https://www.facebook.com/Cafe-Java-Austin-350473130184/',
		latitude: 30.400125,
		longitude: -97.703826,
	},
	{
		name: 'Halcyon',
		address: '218 W 4th St, Austin, TX 78701',
		website: 'http://www.halcyoncoffeebar.com/',
		latitude: 30.267036,
		longitude: -97.745635,
	},
	{
		name: 'Bandit Coffee, Matcha, & Ice Cream',
		address: '706 N Lamar Blvd, Austin, TX 78703',
		website: 'http://thebandit.com/',
		latitude: 30.273422,
		longitude: -97.753501,
	},
	{
		name: 'Turnstile Coffee Beer and Spirits',
		address: '10025 Burnet Rd, Austin, TX 78758',
		website: 'http://www.turnstilebrews.com/',
		latitude: 30.384047,
		longitude: -97.723361,
	},
	{
		name: 'Cosmic Coffee + Beer Garden',
		address: '121 Pickle Rd, Austin, TX 78704',
		website: 'https://www.cosmiccoffeebeer.com/',
		latitude: 30.227475,
		longitude: -97.762977,
	},
	{
		name: "Sorrento's Coffee Drive-Thru",
		address: '3021 W Anderson Ln, Austin, TX 78757',
		website: 'http://sorrentoscoffeedrivethru.com/',
		latitude: 30.360217,
		longitude: -97.740351,
	},
	{
		name: 'Lucky Lab Coffee Co.',
		address: '2421 San Antonio St, Austin, TX 78705',
		website: 'http://www.luckylabcoffee.com/',
		latitude: 30.288573,
		longitude: -97.742116,
	},
	{
		name: 'Codependent Cocktails + Coffee',
		address: '301 West Ave STE 110, Austin, TX 78701',
		website: 'https://www.codependentatx.com/',
		latitude: 30.267488,
		longitude: -97.751019,
	},
	{
		name: 'Idlewild Coffee',
		address: '812 W 12th St, Austin, TX 78701',
		website: 'https://www.idlewildcoffee.com/',
		latitude: 30.276377,
		longitude: -97.748981,
	},
	{
		name: 'Flightpath Coffeehouse',
		address: '5011 Duval St, Austin, TX 78751',
		website: 'http://flightpathcoffeehouse.com/',
		latitude: 30.313769,
		longitude: -97.719875,
	},
];

const seedShops = () => Shop.bulkCreate(shopData);

module.exports = seedShops;