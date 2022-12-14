const winston = require('winston');

export class MyLogger {

  logger: any;
  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'user-service' },
      transports: [

        new winston.transports.File({ filename: 'error.log', level: 'info' }),
        new winston.transports.Console(),
      ],
    });
  }


  log(textToLog: string) {
    this.logger.log('info', textToLog);
  }
}
