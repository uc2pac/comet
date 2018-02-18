import { NtcLogger } from 'js-ntc-logger';
import { ILogWriter } from 'js-ntc-logger/src/core/i/ILogWriter';

const LOG_URL = 'http://localhost:3000';

export class WriterToServer implements ILogWriter {
    constructor() {}

    static get entityName (): string {
        return 'WriterToServer';
    }

    static create (): ILogWriter {
        return new WriterToServer();
    }

    save (item: string): void {

        // have to use 'fetch api' for making requests
        // can't inject angular's http service because of specific implementation of writer
        fetch(`${LOG_URL}/log`, {
            method: 'POST',
            body: JSON.stringify(item)
        })
        .then(res => {})
        .catch(error => console.log(error));
    }
}

NtcLogger.registerWriter(WriterToServer);

export const ServerLogger = NtcLogger.createLogger([
    {
        name: 'any_to_server',
        filter: 'FilterAny',
        formatter: 'FormatterSingleLine',
        writer: 'WriterToServer'
    }
]);