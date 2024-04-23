import { Global, Module } from '@nestjs/common';
import { DatabaseSerice } from './database.service';

@Global()
@Module({
    providers : [DatabaseSerice],
    exports : [DatabaseSerice]
})
export class DatabaseModule {}
