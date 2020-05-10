import mongoose from 'mongoose';


export class Database {

    private static options = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }

    static connect(uri: string) {
        mongoose.connect(uri, this.options)
        mongoose.set('debug', true)

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected');
        })

        mongoose.connection.on('error', err => {
            console.log('Mongoose connection error: ' + err);
        });
    }
}
