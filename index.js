module.exports = class MyWrap {
	constructor(config) {
		this.myConfig = {
			host     : 'localhost',
			user     : 'root',
			password: '',
			database: '',
			...config,
		};
		this.mysql = require('serverless-mysql');
	}
	setDb = (db) => this.db = db;
	getDb = () => this.db;
	start = async (config) => {
		this.setDb(await require('serverless-mysql')({
			config: this.myConfig,
			...config	// mysql-serverless options
		}));
		return this.getDb();
	}
	finish = async () => {
		const db = this.db;
		await db && db.end();
	}
}
