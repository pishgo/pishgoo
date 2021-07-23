const { nanoid } = require('nanoid');
const getEnv = require('../utils/getEnv');

exports.getConfigs = () => ({
	botToken: getEnv('BOT_TOKEN'),
	port: getEnv('PORT', 3000),
	isProduction: getEnv('NODE_ENV') === 'production',
	dbUrl: getEnv('DB_URL'),
	token: getEnv('TOKEN'),
	setWebhookToken: getEnv('SET_WEBHOOK_TOKEN'),
	baseUrl: getEnv('BASE_URL'),
	useTorProxy: getEnv('USE_TOR_PROXY', false),
	webhookRouteToken: nanoid(),
	statisticsRouteToken: nanoid(),
});
