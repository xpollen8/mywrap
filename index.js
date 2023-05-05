module.exports = class MyWrap {
	constructor(config) {
		this.myConfig = {
			host     : '127.0.0.1',
			waitForConnections: true,
			connectionLimit: 10,
			queueLimit: 0,
			user     : 'root',
			password: '',
			database: '',
			...config,
		};
		//this.mysql = require('mysql');
		this.mysql = require('serverless-mysql');
	}
	setDb = (db) => this.db = db;
	getDb = () => this.db;
	start = async (config) => {
		/* non-serverless
		this.setDb(await require('mysql').createPool({
			...this.myConfig,
			...config
		}));
		*/
		this.setDb(await require('serverless-mysql')({
			/* non-serverless
			config: this.myConfig,
			...config	// mysql-serverless options
			*/
			config: {
			...this.myConfig,
			...config	// mysql-serverless options
			}
			}));
		return this.getDb();
	}
	finish = async () => {
		const db = this.db;
		await db && db.end();
	}
}
