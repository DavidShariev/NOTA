import { AppController } from './app.controller';
import { Module } from "@nestjs/common"
import { AppService } from './app.service';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import * as path from "path";
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, "client")}),
        MongooseModule.forRoot
            ('mongodb+srv://admin:admin@cluster0.8p0yivi.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}