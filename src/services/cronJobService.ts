import * as cron from 'node-cron'

export class CronJobService {
    constructor() {
     
    }
    static instance: CronJobService
    static getInstance(): CronJobService {
        if (!this.instance) {
            this.instance = new CronJobService()
        }
        return this.instance
    }
    async test() {
        cron.schedule('* * * * *', () => {
            console.log('running a task every minute');
        });
    }
}

