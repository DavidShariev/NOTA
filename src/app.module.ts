import { AppController } from './app.controller';
import { Module } from "@nestjs/common"
import { AppService } from './app.service';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot
            ('mongodb+srv://admin:admin@cluster0.8p0yivi.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}