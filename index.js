module.exports = class MyWrap {
	constructor(config) {
		this.myConfig = {
			host     : 'localhost',
			waitForConnections: true,
			connectionLimit: 10,
			queueLimit: 0,
			user     : 'root',
			password: '',
			database: '',
			...config,
		};
		this.mysql = require('mysql2/promise');
	}
	setDb = (db) => this.db = db;
	getDb = () => this.db;
	start = async (config) => {
		this.setDb(await require('mysql2/promise').createPool({
			...this.myConfig,
			...config
		}));
	}
	finish = async () => {
		const db = this.db;
		await db && db.end();
	}
}
